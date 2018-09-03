# egg-y-prisma

<!--
Description here.
-->

## Install

```bash
$ npm i egg-y-prisma --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.prisma = {
  enable: true,
  package: 'egg-y-prisma'
}
```

## Configuration

config from prisma-binding

```js
// {app_root}/config/config.default.js
exports.prisma = {
  typeDefs: 'config/prisma.graphql',
  endpoint: 'http://localhost:4466'
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## License

[MIT](LICENSE)
