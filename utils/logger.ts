/**
 * @file Logger utils
 */

export interface CreateLoggerOptions {
  /**
   * 范围
   */
  scope?: string

  /**
   * 显示时间
   */
  time?: boolean
}

export interface LoggerOptions extends CreateLoggerOptions {
  /**
   * 标签
   */
  label: string
}

export const renderMessage = (messages: any[]) => {
  return messages.map(m => m)
}

export const renderLogger =
  (options: LoggerOptions) =>
  (...message: any[]) => {
    const logs: string[] = []

    logs.push(options.label)

    if (options.scope) {
      logs.push(`[${options.scope}]`)
    }

    return console.log(...logs, ...renderMessage(message))
  }

export const createLogger = (options: CreateLoggerOptions = {}) => ({
  /**
   * Log level
   */
  log: renderLogger({ label: '⚪', ...options }),

  info: renderLogger({ label: '🔵', ...options }),

  warn: renderLogger({ label: '🟡', ...options }),

  error: renderLogger({ label: '🔴', ...options }),

  debug: renderLogger({ label: '🟢', ...options }),

  /**
   * Aliases
   */
  success: renderLogger({ label: '🟢', ...options }),
  failure: renderLogger({ label: '🔴', ...options }),
})

export const logger = createLogger()
