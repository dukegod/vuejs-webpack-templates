import Vue from 'vue';
import Router from 'vue-router';
// import mainList from '@/components/mainList';
import Hello from '@/components/Hello';
import index from '@/pages/index';
import about from '@/pages/about';
import setting from '@/pages/setting';
import vueApi from '@/pages/vueApi';
import leftMain from '@/pages/leftMain';
import error from '@/pages/404';
import article from '@/pages/article';
import articleTest from '@/pages/articleTest';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/',
      name: 'leftMain',
      component: leftMain,
    },
    // {
    //   path: '/home',
    //   name: 'leftMain',
    //   component: leftMain,
    // },
    {
      path: '/article',
      name: 'article',
      component: article,
    },
    {
      path: '/articleTest',
      name: 'articleTest',
      component: articleTest,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting,
    },
    {
      path: '/api',
      name: 'vueApi',
      component: vueApi,
    },
    {
      path: '/*',
      name: '404',
      component: error,
    },
  ],
});
