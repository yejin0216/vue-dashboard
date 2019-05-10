import Vue from 'vue';
import Vuex from 'vuex';
import member from './modules/member';
import devices from './modules/devices';

Vue.use(Vuex);
window.EventBus = new Vue();

export default new Vuex.Store({
  modules: {
    member,
    devices,
  },
});
