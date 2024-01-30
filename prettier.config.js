/** @type {import("prettier").Config} */
const config = {
  plugins: [],
  printWidth: 120,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  useTabs: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['classProperties', 'decorators-legacy', 'typescript', 'jsx'],
  // importOrderMergeDuplicateImports: true,
  importOrderCaseInsensitive: true,
};

export default config;
