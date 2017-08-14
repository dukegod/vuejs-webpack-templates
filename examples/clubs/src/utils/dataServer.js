/**
 * Created by hui on 2017/6/14.
 *  数据处理
 */
// import axios from 'axios'
import config from './config';

// console.log(config);

export  default {
  fetchDate(url) {
     return (async () => {
       return await (
        new Promise((resolve, reject)=> {
          fetch(config + url).then( (res)=> {
            if (res.ok) {
              res.json().then((data) => {
                resolve(data);
              });
            } else {
              reject(res.status);
              console.log("Looks like the response wasn't perfect, got status", res.status);
            }
          }, (e) => {
            console.log("Fetch failed!", e);
          });
        })
      );
    })()
  },
  fe(){
    return 1;
  },
};
