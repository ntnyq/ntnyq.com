import { writeFile } from 'node:fs/promises'
import prompts from 'prompts'
import consola from 'consola'
import { colors } from 'consola/utils'
import { resolve } from '~/scripts/utils'
import type { Answers } from 'prompts'

interface Options {
  title: string
  description: string
  draft: boolean
}

export function generateMarkdown(options: Options) {
  const { title, description } = options
  const content = `---
title: ${title}
description: ${description}
date: ${new Date().toISOString()}
---

# ${title}
  `
  return content
}

export async function generatePost() {
  let result: Answers<keyof Options>

  try {
    result = await prompts(
      [
        {
          type: 'text',
          name: 'title',
          message: 'Post Title:',
          // TODO: check title pattern and if it already exists
          validate(_val: string) {
            return true
          },
        },
        {
          type: 'text',
          name: 'description',
          message: 'Post Description:',
        },
        {
          type: 'confirm',
          name: 'draft',
          message: 'Save as draft?',
        },
      ],
      {
        onCancel: () => {
          throw new Error(`${colors.red('✖')} Operation cancelled`)
        },
      },
    )

    await writeFile(
      resolve('content/posts', `${result.draft ? '.' : ''}3.${result.title}.md`),
      generateMarkdown(result),
    )

    consola.success(`Post ${colors.green(result.title)} created successfully`)
  } catch (err: unknown) {
    console.log((err as Error).message)
  }
}

generatePost()
