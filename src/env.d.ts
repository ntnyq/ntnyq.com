/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GITHUB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'virtual:pwa-info' {
  export interface WebManifest {
    linkTag: string
  }

  export interface PWAInfo {
    webManifest: WebManifest
  }

  export const pwaInfo: PWAInfo
}

declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate: boolean
    onRegisteredSW: (swScriptUrl: string) => void
    onOfflineReady: () => void
  }
  export function registerSW(options: RegisterSWOptions): void
}
