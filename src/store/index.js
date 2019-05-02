import Vue from 'vue';
import Vuex from 'vuex';
import member from './modules/member';
import devices from './modules/devices';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    member,
    devices,
  },
});
