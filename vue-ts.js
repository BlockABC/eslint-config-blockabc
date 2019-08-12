module.exports = {
  extends: [
    './vue.js',
    './typescript.js',
  ],
  // https://www.npmjs.com/package/vue-eslint-parser#parseroptionsparser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
