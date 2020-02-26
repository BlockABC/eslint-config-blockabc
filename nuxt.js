module.exports = {
  extends: [
    'plugin:nuxt/recommended',

    './vue.js'
  ],
  rules: {
    // we use nuxt.config.js instead of nuxt.config.ts, thus we can only use cjs for now
    'nuxt/no-cjs-in-config': [0]
  }
}
