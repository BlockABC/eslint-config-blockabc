module.exports = {
  extends: [
    './vue.js',
    'plugin:nuxt/recommended',
  ],
  rules: {
    // we use nuxt.config.js instead of nuxt.config.ts, thus we can only use cjs for now
    'nuxt/no-cjs-in-config': [0]
  }
}
