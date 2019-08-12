module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 global 的 return
      globalReturn: false,
      // 默认开启 strict 模式
      impliedStrict: true,
      jsx: true
    },
    // 即使没有 babelrc，也使用 babel-eslint 解析
    requireConfigFile: false,
    // 仅允许 import export 出现在顶层
    allowImportExportEverywhere: false
  },
  extends: [
    'standard'
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  rules: {
    // https://eslint.org/docs/rules/comma-dangle#only-multiline
    // 只有在多行的时候才允许末尾的逗号
    'comma-dangle': [2, {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never',
    }],
    // Class 的成员之间要有空行，除了单行成员之后（比如属性、单行方法）
    // https://eslint.org/docs/rules/lines-between-class-members#require-or-disallow-an-empty-line-between-class-members-lines-between-class-members
    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: true
    }],

    // 'arrow-parens': [0], // 单个参数的情况下不需要圆括号
    // "no-console": [0],
    'brace-style': [2, 'stroustrup'],
  }
}
