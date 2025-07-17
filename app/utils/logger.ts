/**
 * @file Logger utils
 */

import { consola } from 'consola/browser'
import { name } from '../../package.json'

export const logger = consola.withTag(name)

export function createLogger(scope: string) {
  return consola.withTag(`${name}:${scope}`)
}
