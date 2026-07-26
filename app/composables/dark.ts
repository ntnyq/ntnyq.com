/**
 * @file useDark
 */

export const isDark = useDark()

const supportViewTransition =
  typeof document !== 'undefined' &&
  !!document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 *
 * The new theme always expands as a circle from the click point,
 * in both directions.
 */
export function toggleDark(event?: MouseEvent) {
  if (!supportViewTransition || !event) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition?.(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition?.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        fill: 'forwards',
        easing: 'ease-in',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
}
