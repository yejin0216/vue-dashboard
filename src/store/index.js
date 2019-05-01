import Vue from 'vue';
import Vuex from 'vuex';
import member from './modules/member';
import devices from './modules/devices';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    member,
    devices,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : [],
});
