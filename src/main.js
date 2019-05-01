/**
 * @name main.js
 * @author yejin kim
 * @description entry point
 */
import Vue from 'vue';
import axios from 'axios';
import ES6Promise from 'es6-promise';
import router from './router';
import store from './store';
import './plugins/vuetify';
import 'babel-polyfill';
import App from './App.vue';

ES6Promise.polyfill();

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
