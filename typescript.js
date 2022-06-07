const eslintConfigJs = require('./index')

module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    './index.js',
    'standard-with-typescript',
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
    // override comma-dangle rule in standard-with-typescript
    'comma-dangle': require('./index').rules['comma-dangle'],

    // use '@typescript-eslint/brace-style' instead
    'brace-style': [0],
    // 由于 eslint 和 typescript 配合上有一定问题，因此需要禁止掉某些配置
    'no-unused-vars': [0], // 不使用 js 的，使用 ts 的
    // eslint 会检测到 interface 未定义，因此需要禁用掉 javascript 的规则，使用 typescript 的规则。
    // https://cn.eslint.org/docs/rules/no-undef
    'no-undef': [0],
    // eslint 配置是否允许 foo.hasOwnProperty("bar") 的写法，eslint 建议用 Object.prototype.hasOwnProperty.call(foo, "bar") 这种写法，但是太啰嗦不做强制。
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': [1],

    // We do not need the JS version of this rule for TypeScript
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': [0],

    // typescript 配置

    // allow object literal type assertion, which is disallowed by StandardJS. eg. a[key] = {name: 'name' ,age: 18} as Person
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [2, {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow'
    }],

    // we can tolerate some unused vars in development
    '@typescript-eslint/no-unused-vars': [1],
    // 接口名不做强制。todo: typescript 推荐不用 I 作为开头，为什么？
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    '@typescript-eslint/interface-name-prefix': [0],
    // Use comma(,) instead of semi-colon(;) as delimiter in interface
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'comma',
      },
      singleline: {
        delimiter: 'comma',
      }
    }],
    // used for compatible with @typescript-eslint/no-floating-promises, which ask to use void to indicate a standalone promise
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid
    'no-void': [2, {
      allowAsStatement: true,
    }],
    // 由于 js 的 camelcase 规则无法识别 ts 的 interface，因此 ts 下弃用 js 的 camelcase 规则，使用 @typescript-eslint/naming-convention 规则 (from standard-with-typescript)
    'camelcase': [0],
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
    // as per brace-style
    '@typescript-eslint/brace-style': eslintConfigJs.rules['brace-style'],
    // 两个空格缩进
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': [2, 2],
    // 允许使用 require，因为启用必有原因
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': [0],
    // 一般来说不推荐重命名 this，但是如果遇到重命名的，一定是有需求的（比如指明上下文类型）
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [0],
    // 存在改变泛型的 extend，不应该被 warning: `export interface AxiosResponse<T = any> extends Promise<T> {}`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': [0],
    // we should, but we sometimes we don't have the ability to add return type, therefore a warning is our bottom line
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [1],

    // do not check boolean expressions, as it is the nature of js pattern, and it's everywhere
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': [0],
    // maybe we don't need to mark it as async
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': [0],
    // "no-useless-constructor": 0, // typescript 中 constructor 存在只是明确参数类型的情况
    // "no-dupe-class-members": 0, // typescript 中存在方法重载的情况，eslint 还无法区分
  }
}
