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
import { faBookmark as farBookmark, faTrashAlt as farTrashAlt, faCopy as farCopy } from '@fortawesome/free-regular-svg-icons';
import {
  faTabletAlt,
  faChartBar,
  faListOl,
  faInfoCircle,
  faCog,
  faBell,
  faPowerOff,
  faPlus,
  faBookmark,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import store from './store';
import router from './router';

import App from './App.vue';

/* font awesome */
library.add(faTabletAlt, faChartBar, faListOl, faInfoCircle, faCog, faBell, faPowerOff, faPlus, farBookmark, faBookmark, farTrashAlt, farCopy, faEnvelopeOpenText);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* promise polyfill for IE */
ES6Promise.polyfill();

Vue.config.productionTip = false;

/* axios */
window.$axios = axios;

/* event bus */
const eventBus = new Vue();
window.$bus = eventBus;

/* mount */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
