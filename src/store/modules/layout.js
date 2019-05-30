/**
 * @description 레이아웃을 관리하는 store이다.
 */

export default {
  namespaced: true,
  state: {
    gnbStatus: false,
    navigation: sessionStorage.getItem('navigation') || null,
  },
  /* eslint-disable */
  mutations: {
    updateGnbStatus(state, payload) {
      state.gnbStatus = payload;
    },
    updateNavigtion(state, payload) {
      state.navigation = payload;
      sessionStorage.setItem("navigation", state.navigation);
    }
  },
  actions: {
    updateGnbStatus(store, payload) {
      store.commit("updateGnbStatus", payload);
    },
    updateNavigtion(store, payload) {
      store.commit("updateNavigtion", payload)
    }
  }
  /* eslint-disable */
};