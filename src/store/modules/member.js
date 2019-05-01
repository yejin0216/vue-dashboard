export default {
  state: {
    svcTgtSeq: [],
    mbrSeq: null,
    mbrId: null,
    mbrClas: null,
    accessToken: null,
  },
  mutations: {
    addMemberInfo(state, payload) {
      state.accessToken = payload;
    },
    removeMemberInfo(state, payload) {
      state.accessToken = payload;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit(this.addMemberInfo, payload);
    },
    logout({ commit }, payload) {
      commit(this.removeMemberInfo, payload);
    },
  },
  getters: {
    /* empty */
  },
};
