import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import todelist from '@/components/todelist';
import add from '@/components/add';
import del from '@/components/del';
import list from '@/components/list';

import counter from '@/counter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter,
    },
    {
      path: '/',
      name: 'todelist',
      component: todelist,
      children: [{
        path: 'add',
        component: add,
      }, {
        path: 'del',
        component: del,
      },
      {
        path: 'list',
        component: list,
      }],
    },
  ],
});
