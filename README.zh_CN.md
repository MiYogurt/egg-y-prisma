# egg-prisma

自己阅读下源码即可，也就 5、6 行，配置项都是来自于 prisma-binding

## 开启插件

```js
// config/plugin.js
exports.prisma = {
  enable: true,
  package: 'egg-y-prisma'
}
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
  尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
