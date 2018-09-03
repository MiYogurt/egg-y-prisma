'use strict';

const mock = require('egg-mock');

describe('test/prisma.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/prisma-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, prisma')
      .expect(200);
  });
});
