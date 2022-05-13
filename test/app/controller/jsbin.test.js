'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jsbin test', () => {

  it('jsbin index', () => {
    return app.httpRequest()
      .get('/my')
      .expect('<h1>I am  JsBin</h1>')
      .expect(200);
  });
  it('jsbin getGirls', async () => {
    await app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});
