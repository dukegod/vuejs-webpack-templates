/**
 * mock数据库
 */
const Mock = require('mockjs');

const mockDate = {
  news: Mock.mock({
    'categorys|1-3': [{
      'id|10': 1,
      url: '@url',
      domain: '@domain',
      email: '@email',
      paragraph: '@paragraph',
      sentence: '@sentence',
    }],
  }),
  lists: Mock.mock({
    wareinfo: [{

    }],
  }),
};

// export default mockDate;

module.exports = mockDate;

