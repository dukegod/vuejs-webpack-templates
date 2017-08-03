const express = require('express');
const db = require('./db');

// 添加路由选择
// 定义状态码 这个随意定义
const aipRouter = express.Router();

// 获取news数据
aipRouter.get('/news', (req, resp) => {
  resp.json({
    code: 0,
    data: db.news,
  });
});

// 获取dailies数据


// 获取zalent数据

module.exports = aipRouter;
