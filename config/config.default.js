/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1652420732289_4857';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    }
  }
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };

  config.ejs = {

  }
  config.mysql = {
    app: true,     //是否挂载到app下面
    agent: false,  //是否挂载到代理下面
    client: {
      host: 'localhost',      // 数据库地址
      port: '3306',           // 端口
      user: 'root',           // 用户名
      password: '123456',    // 密码
      database: 'test'    // 连接的数据库名称
    }
  }
  // 全局引入中间件
  // config.middleware = ['counter'];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
