module.exports = {
  extends: [
    'plugin:vue/recommended',
    'standard-jsx',

    './index.js',
  ],
  // https://www.npmjs.com/package/vue-eslint-parser#parseroptionsparser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 允许一个元素单行有三个属性；多行情况下可以有两个属性；允许第一个属性和标签名在同一行，且属性纵向对齐
    // 本规则相对宽松，实际上应该由单行字符数来决定是否开启新行，但是由于没办法设定，因此设定相对宽松规则（下限），由开发自己可读性保证
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md#multiline-1-allowfirstline-true
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }],

    // todo: 暂时不太确定用哪种，先不处理
    // PascalCase 的好处在于和文件名统一；kebab-case 的好处在于和 class 名统一
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md
    'vue/name-property-casing': [0],

    // 对于 双向绑定属性 和 其他属性、其他指令 的顺序不作区分。
    // todo: 暂时不确定优劣，先不作区分，有确定了再改。有时候需要手动调整顺序，比如: <MyHeader title="title1" :action="state.action" to="/href">
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attributes-order.md
    'vue/attributes-order': [1, {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        ['TWO_WAY_BINDING', 'OTHER_ATTR', 'OTHER_DIRECTIVES'],
        'EVENTS',
        'CONTENT'
      ]
    }],

    // 不关心闭合标签是否另起一行。todo: 暂时不确定有什么优劣，不作处理
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md
    'vue/html-closing-bracket-newline': [0, {
      singleline: 'never',
      multiline: 'always'
    }],

    // 单行元素不需要在把内容另起一行。todo: 只要够短就 OK 了，但是不确定，先不作处理
    'vue/singleline-html-element-content-newline': [0, {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
    }],

    // 最最基本的要求，不需要 eslint 来保证。反之，启用之后无法区分根组件是 v-if v-else 的形式。 todo: 可以给 eslint-plugin-vue 提一个 PR，允许根组件是 v-if v-else
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md
    'vue/valid-template-root': [0],

    // 'vue/mustache-interpolation-spacing': [0], // vue template 的注入不需要空格
    // 'vue/require-default-prop': [0], // 不需要默认prop
    // 'vue/attribute-hyphenation': [0], // 参数不需要中划线分隔
  }
}
