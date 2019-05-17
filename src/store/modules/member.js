export default {
  namespaced: true,
  state: {
    svcTgtSeq: [],
    mbrSeq: '',
    mbrId: '',
    mbrClas: '',
    accessToken: '',
  },
  mutations: {
    addMemberInfo(state, payload) {
      state.accessToken = payload;
    },
    removeMemberInfo(state, payload) {
      state.accessToken = payload;
    },
  },
  /* eslint-disable */
  actions: {
    login(store, payload) {
      store.commit("addMemberInfo", payload);
    },
    logout(store, payload) {
      store.commit("removeMemberInfo", payload);
    }
  },
  /* eslint-disable */
  getters: {
    /* empty */
  }
};
