module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    './index.js',
  ],
  // 解决 js 和 ts 混用遇到的问题。
  // todo: 对于 vue 文件应该也区分一下 js/ts script，暂时没有好办法。
  // https://github.com/typescript-eslint/typescript-eslint/issues/109#issuecomment-462179033
  overrides: [{
    files: ['*.js', '*.jsx', '*.vue'],
    rules: {
      'no-undef': [2],
    }
  }],
  rules: {
    // 由于 eslint 和 typescript 配合上有一定问题，因此需要禁止掉某些配置
    'no-unused-vars': [0], // 不使用 js 的，使用 ts 的
    // eslint 会检测到 interface 未定义，因此需要禁用掉 javascript 的规则，使用 typescript 的规则。
    // https://cn.eslint.org/docs/rules/no-undef
    'no-undef': [0],
    // eslint 配置是否允许 foo.hasOwnProperty("bar") 的写法，eslint 建议用 Object.prototype.hasOwnProperty.call(foo, "bar") 这种写法，但是太啰嗦不做强制。
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': [1],

    // typescript 配置

    // 接口名不做强制。todo: typescript 推荐不用 I 作为开头，为什么？
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    '@typescript-eslint/interface-name-prefix': [0],
    // interface 里面用逗号，而不是分号
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'comma',
      },
      singleline: {
        delimiter: 'comma',
      }
    }],
    // 由于 js 的 camelcase 规则无法识别 ts 的 interface，因此 ts 下启用 js 的 camelcase 规则，使用 ts 的 camelcase 规则
    'camelcase': [0],
    // 用 camelCase, 除了属性、析构（和后台请求有关）
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    '@typescript-eslint/camelcase': [2, {
      properties: 'never',
      ignoreDestructuring: true
    }],
    // todo: 暂时对其 accessibility 没有过多要求，该条规则待定
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': [2, {
      accessibility: 'off',
      overrides: {
        accessors: 'off',
        constructors: 'no-public',
        methods: 'off',
        properties: 'off',
        parameterProperties: 'off'
      }
    }],
    // 两个空格缩进
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': [2, 2],
    // 允许使用 require，因为启用必有原因
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': [0],
    // 一般来说不推荐重命名 this，但是如果遇到重命名的，一定是有需求的（比如指明上下文类型）
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [0],
    // "no-useless-constructor": 0, // typescript 中 constructor 存在只是明确参数类型的情况
    // "no-dupe-class-members": 0, // typescript 中存在方法重载的情况，eslint 还无法区分
  }
}
