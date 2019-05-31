/**
 * @name main.js
 * @author 김예진
 * @description entry point
 */
import Vue from 'vue';
import axios from 'axios';
import ES6Promise from 'es6-promise';
import './plugins/vuetify';
import 'babel-polyfill';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faChartBar,
  faTabletAlt,
  faListOl,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import store from './store';
import router from './router';

import AlertModal from './plugins/alertModal';

import App from './App.vue';

/* font awesome */
library.add(farBookmark, faChartBar, faTabletAlt, faListOl, faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* Alert Modal */
Vue.use(AlertModal);

/* promise polyfill for IE */
ES6Promise.polyfill();

/* axios */
window.$axios = axios;

/* event bus */
const eventBus = new Vue();
window.$bus = eventBus;

Vue.config.productionTip = false;

/* mount */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
