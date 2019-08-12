# eslint-config-blockabc 
![npm](https://img.shields.io/npm/v/eslint-config-blockabc?color=%23ff00) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)


An All-in-One ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) project, based on [Standard Style](https://standardjs.com/).

This project including ESLint Config for JavaScript, TypeScript, Vue, Nuxt.

## Usage
### JavaScript
1. install
```bash
npm install eslint-config-blockabc eslint babel-eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard -D
```

2. Add this to your .eslintrc file
```json
{
  "extends": ["blockabc"]
}
```

### Typescript
Build on **[JavaScript](#javascript)**:
```bash
npm install typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```
```json
{
  "extends": ["blockabc/typescript"]
}
```

### Vue
Build on **[JavaScript](#javascript)**:

```bash
npm install vue-eslint-parser eslint-plugin-vue eslint-config-standard-jsx eslint-plugin-react -D
```
```json
{
  "extends": ["blockabc/vue"]
}
```

### Nuxt
Build on **[Vue](#vue)**:
```bash
npm install eslint-plugin-nuxt -D
```
```json
{
  "extends": ["blockabc/nuxt"]
}
```

### Vue-TypeScript
Build on **[Vue](#vue)** & **[TypeScript](#typescript)**
```json
{
  "extends": ["blockabc/vue-ts"]
}
```
### Nuxt-TypeScript
Build on **[Nuxt](#nuxt)** & **[TypeScript](typescript)**
```json
{
  "extends": ["blockabc/nuxt-ts"]
}
```

## FAQ
1. Sequence in eslintrc's `extends` field is important. Your config should always be the last one in `extends` array. [https://github.com/eslint/eslint/issues/9191](https://github.com/eslint/eslint/issues/9191)

## Notable
### Vue
1. props 要有默认值

### JavaScript 
1. 函数定义的括号之前要有空格。

  除了社区规范和风格倾向，该规则可以方便代码搜索：搜 `func(` 可以搜到所有函数调用，搜 `func (` 可以搜到函数定义。


## Todo
1. [vue/require-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md)

按理说 String 类型的 props 应该也可以没有默认值。可以给 eslint-plugin-vue 提一个 PR。

2. [vue/mustache-interpolation-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md)

该规则要求插值的花括号两边有空格，但是是否是必须的呢？这样风格上的好处和坏处分别是什么？

3. vue slots/event

可以增加一个规则，使得所有的 slots 和 events 都必须显式地在 vue 配置上写出，方便后续维护者知道该组件的 "API"。
```js
export default {
    events: ['input', 'change'],
    slots: ['default', 'title'],
    mounted() {
        this.$emit('input', 0)
    }
}
``` 
