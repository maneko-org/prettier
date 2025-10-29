/**
 * @param {number} printWidth
 * @param {boolean} tailwindcss
 * @returns {import('prettier').Config}
 */
export const prettier = (printWidth = 80, tailwindcss = false) => {
  const baseOptions = {
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

  if (!tailwindcss) return baseOptions;

  return {
    ...baseOptions,
    plugins: ['prettier-plugin-tailwindcss']
  };
};
