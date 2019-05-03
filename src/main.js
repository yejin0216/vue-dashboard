/**
 * @name main.js
 * @author yejin kim
 * @description entry point
 */
import Vue from 'vue';
import axios from 'axios';
import ES6Promise from 'es6-promise';
import './plugins/vuetify';
import 'babel-polyfill';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faTabletAlt,
  faChartBar,
  faListOl,
  faInfoCircle,
  faCog,
  faBell,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';

import App from './App.vue';

/* font awesome */
library.add(faBookmark, faTabletAlt, faChartBar, faListOl, faInfoCircle, faCog, faBell, faPowerOff);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* promise polyfill for IE */
ES6Promise.polyfill();

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
