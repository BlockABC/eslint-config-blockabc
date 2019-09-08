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
    es6: true,
    jest: true,
  },
  rules: {
    // https://eslint.org/docs/rules/comma-dangle#only-multiline
    // 只有在多行的时候才允许末尾的逗号
    'comma-dangle': [2, {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'only-multiline',
    }],
    // Class 的成员之间要有空行，除了单行成员之后（比如属性、单行方法）
    // https://eslint.org/docs/rules/lines-between-class-members#require-or-disallow-an-empty-line-between-class-members-lines-between-class-members
    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: true
    }],

    // 用 camelCase, 除了属性、析构（和后台请求有关）
    // https://eslint.org/docs/rules/camelcase
    'camelcase': [2, {
      properties: 'never',
      ignoreDestructuring: true
    }],

    // 遵循 standard 的规则就好
    // https://eslint.org/docs/rules/one-var
    // 'one-var': [2, {
    //   'initialized': 'never',
    // }],

    // 降低"返回一个赋值语句"的错误等级。有些情况下（比如事件回调），return 一个赋值语句还挺常见的
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [1],

    // 倾向于用双引号，方便 template 和 jsx 的迁移。（and-design 也是双引号
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],

    // 一个对象里面，保持一致性就好。有些情况下（比如 className)，对象的 key 写成字符串，比用字面量要清晰。
    // https://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'consistent'],

    // 允许 callback 传入字面量。规则本身是多余的，standard 官方也在考虑取消掉了
    // https://github.com/standard/standard/issues/1352
    // https://github.com/standard/eslint-plugin-standard/issues/12
    'standard/no-callback-literal': [0],

    // 'arrow-parens': [0], // 单个参数的情况下不需要圆括号
    // "no-console": [0],
    'brace-style': [2, 'stroustrup'],

    // 允许声明的等号前面的多个空格（等号对齐）。todo: 怎么让对象、等号、注释都对齐？
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [2, { exceptions: { 'VariableDeclarator': true } }],

    // 禁止使用 var
    // https://eslint.org/docs/rules/no-var
    'no-var': [2],

    // "no-trailing-spaces": ["error", {
    //   "skipBlankLines": true,
    //   "ignoreComments": true
    // }],
  }
}
