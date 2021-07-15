module.exports = {
  extends: [
    './nuxt.js',
    './vue-ts.js'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
}
