import { resolve } from 'path'
import fs from 'fs-extra'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import matter from 'gray-matter'
import UnoCSS from 'unocss/vite'
import prism from 'markdown-it-prism'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'
import generateSiteMap from 'vite-ssg-sitemap'
import { presetIcons, presetUno } from 'unocss'
import iconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(`./src`, import.meta.url)),
    },
  },

  optimizeDeps: {
    include: [`vue`, `vue-router`, `@vueuse/core`],
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Pages({
      extensions: [`vue`, `md`],
      dirs: `pages`,
      extendRoute: route => {
        const path = resolve(__dirname, route.component.slice(1))
        if (!path.includes(`projects.md`)) {
          const md = fs.readFileSync(path, `utf-8`)
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }
        return route
      },
    }),

    Markdown({
      wrapperComponent: `post`,
      wrapperClasses: `prose m-auto`,
      headEnabled: true,
      markdownItOptions: {
        quotes: `""\'\'`,
      },
      markdownItSetup(md) {
        md.use(prism)
      },
    }),

    Components({
      extensions: [`vue`, `md`],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [iconsResolver({})],
    }),

    AutoImport({
      imports: [`vue`, `vue-router`, `@vueuse/core`, `@vueuse/head`],
    }),

    UnoCSS({
      theme: {},
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            dispaly: `inline-block`,
            height: `1.2em`,
            width: `1.2em`,
            'vertical-align': `text-bottom`,
          },
        }),
      ],
    }),

    Icons({
      defaultClass: `inline`,
      defaultStyle: `vertical-align: sub;`,
    }),

    VitePWA({
      registerType: `autoUpdate`,
      includeAssets: [],
      manifest: {
        name: `ntnyq`,
        short_name: `ntnyq`,
        theme_color: `#ffffff`,
        icons: [
          {
            src: `/static/icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/static/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
      },
    }),
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSiteMap()
    },
  },
})
