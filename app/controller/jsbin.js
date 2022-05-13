'use strict';

const Controller = require('egg').Controller;

class JsBinController extends Controller {
    async index() {
        const { ctx } = this;
        const username = ctx.session.username
        await ctx.render('jsbin.html', {
            id: 2021,
            name: '小红',
            age: 18,
            skills: [
                '泰式按摩',
                '精油搓背',
                '水疗SPA'
            ],
            username,
            nowTime: this.app.timeProp
        })
        console.log('this.app', this.app.timeProp)
        console.log(ctx.session.counter)
    }
    async getGirls() {
        const { ctx } = this;
        // 按照目录结构来的
        const res = await ctx.service.jsbin.getGirl(18)
        ctx.body = res
    }
    async getOtherGirls() {
        const { ctx } = this;
        ctx.body = ctx.params.name
    }
    async add() {
        const ctx = this.ctx
        ctx.cookies.set("user", "jsbin.com", {
            maxAge: 1000 * 60,
            httpOnly: false
        })
        ctx.session.username = 'jsbin 大爷'
        ctx.body = {
            status: 200,
            data: 'Cookie添加成功'
        }
    }
    async del() {
        const ctx = this.ctx
        ctx.cookies.set("user", "")
        ctx.session.username = null
        ctx.body = {
            status: 200,
            data: 'Cookie删除成功'
        }
    }
    async editor() {
        const ctx = this.ctx
        ctx.cookies.set("user", "bilibili")
        ctx.body = {
            status: 200,
            data: 'Cookie删除成功'
        }
    }
    async show() {
        const ctx = this.ctx
        const user = ctx.cookies.get("user")
        console.log(user)
        ctx.body = {
            status: 200,
            data: 'Cookie删除成功'
        }
    }
    async newContext() {
        const { ctx } = this;
        const params = ctx.params()
        console.log('params', params)
        ctx.body = params;
    }
    async newRequest() {
        const { ctx } = this;
        const token = ctx.request.token
        ctx.body = {
            status: 200,
            body: token
        }

    }
    async newResponse() {
        const { ctx } = this;
        ctx.response.token = 'jsbin.com'
        const testBase64 = ctx.helper.base64Encode('jspang.com')
        console.log('ctx', ctx)
        ctx.body = testBase64
    }
}

module.exports = JsBinController;
