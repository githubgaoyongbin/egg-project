'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello World';
    console.log(ctx.session.counter)
  }
  async jsBin() {
    const { ctx } = this;
    ctx.body = '<h1>Hello jsBin 欢迎来到红浪漫</h1>';
  }
  async testGetGirl() {
    const { ctx } = this
    let id = ctx.query.id
    const res = await ctx.service.jsbin.getGirl(id)
    ctx.body = res
  }
}

module.exports = HomeController;
