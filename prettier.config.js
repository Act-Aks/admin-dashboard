/** @type {import("prettier").Config} */
const config = {
  plugins: [],
  printWidth: 120,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  useTabs: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^@/(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // importOrderParserPlugins: ['classProperties', 'decorators-legacy', 'typescript', 'jsx'],
  // importOrderMergeDuplicateImports: true,
  importOrderCaseInsensitive: true,
}

export default config
