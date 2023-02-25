/**
 * @file Prettier config
 */

module.exports = {
  // Maximum line length
  printWidth: 100,

  // Specify the number of spaces per indentation-level
  tabWidth: 2,

  // Indent lines with tabs instead of spaces
  useTabs: false,

  // Use semicolons or not
  semi: false,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Change when properties in objects are quoted
  quoteProps: `as-needed`,

  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: true,

  // Print trailing commas wherever possible when multi-line
  trailingComma: `all`,

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: `avoid`,

  // By default, Prettier will wrap markdown text as-is since some services use a line-break-sensitive renderer, e.g. GitHub comment and Bitbucket.
  proseWrap: `preserve`,

  // Specify the global whitespace sensitivity for HTML files
  htmlWhitespaceSensitivity: `css`,

  // End of line
  endOfLine: `lf`,

  // Enforce single attribute per line in HTML, Vue and JSX
  singleAttributePerLine: true,

  plugins: [require.resolve(`prettier-plugin-astro`)],

  overrides: [
    {
      files: `*.astro`,
      options: {
        parser: `astro`,
      },
    },
  ],
}