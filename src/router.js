import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'Login' }, // 로그인
    },
    {
      path: '/auth',
      name: 'Login',
      component: () => import('./views/Login.vue'), // 로그인
      meta: { requiresAuth: true },
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: () => import('./views/Bookmarks.vue'), // 즐겨찾기
      meta: { requiresAuth: true },
    },
    {
      path: '/list',
      name: 'DashboardList',
      component: () => import('./views/DashboardList.vue'), // 대시보드목록
      meta: { requiresAuth: true },
    },
    {
      path: '/devices',
      name: 'DeviceList',
      component: () => import('./views/DeviceList.vue'), // 나의 디바이스
      meta: { requiresAuth: true },
    },
    {
      path: '/event',
      name: 'EventLog',
      component: () => import('./views/EventLog.vue'), // 이벤트 타임라인
      meta: { requiresAuth: true },
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('./views/Guide.vue'), // 이용 가이드
      meta: { requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue'), // 관리
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/:sequence',
      name: 'Dashboard',
      props: true,
      component: () => import('./views/Dashboard.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

// Meta 정보 확인
router.beforeEach((to, from, next) => {
  // 접근오류
  if (to.name == null) {
    next({ path: '/' });// redirection 404 페이지 개발 필요!!!
  }

  // 화면 이동시 토큰 체크
  const status = to.matched.some(data => data.meta.requiresAuth);
  if (to.name === 'Login') {
    store.dispatch('layout/updateGnbStatus', false);
    next();
  } else if (status && sessionStorage.getItem('accessToken') && !store.getters['member/getExpYn']) {
    store.dispatch('layout/updateGnbStatus', true);
    next();
  } else {
    store.dispatch('layout/updateGnbStatus', false);
    next({ path: '/auth' });
    store.dispatch('member/logout');
  }
});

export default router;
