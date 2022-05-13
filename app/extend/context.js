'use strict';

module.exports = {
    // 统一处理get post 提交的参数 针对ctx
    params(key) {
        const method = this.request.method
        if (method === 'GET') {
            return key ? this.query[key] : this.query
        } else {
            return key ? this.request.body[key] : this.request.body
        }
    }
}