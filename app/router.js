'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter()
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/my', counter, controller.jsbin.index);
  router.get('/testGetGirl', controller.home.testGetGirl);
  router.get('/jsbin', controller.home.jsBin);
  router.get('/getGirls', controller.jsbin.getGirls);
  router.get('/newContext', controller.jsbin.newContext);
  router.post('/newContext', controller.jsbin.newContext);
  router.post("/newRequest", controller.jsbin.newRequest);
  router.get('/getGirls/:name', controller.jsbin.getOtherGirls);
  router.get('/newResponse',controller.jsbin.newResponse);
  router.post('/add', controller.jsbin.add);
  router.post('/del', controller.jsbin.del);
  router.post('/editor', controller.jsbin.editor);
  router.post('/show', controller.jsbin.show);

};
