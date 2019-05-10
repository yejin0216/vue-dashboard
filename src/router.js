import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DashbdList',
      component: () => import('./views/DashbdList.vue'),
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: () => import('./views/Bookmark.vue'),
    },
    {
      path: '/list',
      name: 'DashbdList',
      component: () => import('./views/DashbdList.vue'),
    },
    {
      path: '/devices',
      name: 'MyDevice',
      component: () => import('./views/MyDevice.vue'),
    },
  ],
});
