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

    // 提高"组件属性的顺序"的等级。
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md
    'vue/order-in-components': [2],

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

    // 允许一个元素单行最多有 4 个属性；多行情况下可以有两个属性；允许第一个属性和标签名在同一行，且属性纵向对齐
    // 本规则相对宽松，实际上应该由单行字符数来决定是否开启新行，但是由于没办法设定，因此设定相对宽松规则（下限），由开发自己可读性保证
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md#multiline-1-allowfirstline-true
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }],

    // 参数不需要强制中划线分隔
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md
    'vue/attribute-hyphenation': [0],

    // jsx 的属性缩进和第一个属性保持一致。该规则和 vue/max-attributes-per-line 类似
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [2, 'first'],

    // 默认规则本身挺好的，但是可能不太适合 vue 环境。
    // 由于 vue 是有专门的事件属性的（而不是像 react 一样传函数），因此 eventHandlerPrefix 可以是 on，更为简洁
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'on',
      eventHandlerPropPrefix: 'on',
    }],

    // 不强制 jsx 的元素的首个属性的缩进
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': [0],

    // 忽略 jsx 里面的属性的缩进，以允许其可以和首个不换行的属性对齐
    // https://github.com/typescript-eslint/typescript-eslint/issues/415
    // https://eslint.org/docs/rules/indent
    'indent': [2, 2, {
      ignoredNodes: ['JSXAttribute']
    }],
  }
}
