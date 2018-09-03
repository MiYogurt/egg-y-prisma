# egg-prisma

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-prisma.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-prisma
[travis-image]: https://img.shields.io/travis/eggjs/egg-prisma.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-prisma
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-prisma.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-prisma?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-prisma.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-prisma
[snyk-image]: https://snyk.io/test/npm/egg-prisma/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-prisma
[download-image]: https://img.shields.io/npm/dm/egg-prisma.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-prisma

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

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
