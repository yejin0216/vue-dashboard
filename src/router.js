import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('./views/DashbdList.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: () => import('./views/Bookmark.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/list',
      name: 'DashbdList',
      component: () => import('./views/DashbdList.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/devices',
      name: 'MyDevice',
      component: () => import('./views/MyDevice.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/event',
      name: 'EventLog',
      component: () => import('./views/EventLog.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('./views/Guide.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/:sequence',
      name: 'Dashbd',
      props: true,
      component: () => import('./views/Dashbd.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'Login',
      component: () => import('./views/Login.vue'),
      meta: { requiresAuth: false },
    },
  ],
});

// Meta 정보 확인
router.beforeEach((to, from, next) => {
  const status = to.matched.some(data => data.meta.requiresAuth);
  if (status) {
    // 로그인 상태
    next();
  } else {
    next();
    // 상태가 만료된 경우
  }
});

export default router;
