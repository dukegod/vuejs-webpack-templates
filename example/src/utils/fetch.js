/**
 * Created by hui on 2017/6/14.
 *  数据处理
 */

import axios from 'axios';
import qs from 'qs';
import baseConfig from './config';


// axios 配置
axios.defaults.timeout = 1000;
axios.defaults.baseURL = baseConfig;

/**
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns {}
 */

export default {
  // fetchPost  请求方式
  fetchPost(url, params) {
    return new Promise((resolve, reject) => {
      axios
      .create({
        withCredentials: true,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      })
      .post(url, qs.stringify(params))
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  // GET 请求方式
  fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      axios.create({
        withCredentials: true,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        method: 'get',
      }).get(url, {
        params,
      })
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
};
