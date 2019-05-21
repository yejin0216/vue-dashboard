/**
 * @description 레이아웃을 관리하는 store이다.
 */

export default {
  namespaced: true,
  state: {
    isExpanded: false,
  },
  /* eslint-disable */
  mutations: {
    updateIsOpened(state, payload) {
      state.isExpanded = payload;
    },
  },
  actions: {
    updateIsOpened(store, payload) {
      store.commit("updateIsOpened", payload);
    }
  }
  /* eslint-disable */
};