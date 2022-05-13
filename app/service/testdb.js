"use strict";

const Service = require("egg").Service;

class testdbService extends Service {
  // 添加数据库
  async addGirl() {}
  // 删除数据库
  async delGirl() {}
  // 修改数据库
  async updateGirl() {}

  // 查询数据库
  async getGirls(id) {}
}

module.exports = testdbService;