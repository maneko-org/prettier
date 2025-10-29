/**
 * @param {number} printWidth
 * @returns {import('prettier').Config}
 */
export const prettier = (printWidth = 80) => {
  return {
    printWidth,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    quoteProps: 'consistent'
  };
};
