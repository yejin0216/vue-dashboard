/**
 * @description 회원정보를 관리하는 store이다.
 */

import axios from 'axios';

export default {
  namespaced: true,
  state: {
    accessToken: sessionStorage.getItem('accessToken') || null,
    expTime: 0,
    svcTgtSeq: [],
    mbrSeq: null,
    mbrId: null,
    mbrClas: null,
  },
  /* eslint-disable */
  mutations: {
    addMemberInfo(state, payload) {
      state.accessToken = payload.access_token;
      state.expTime = payload.pub_time + payload.expires_in;
    },
    removeMemberInfo(state, payload) {
      state.accessToken = null;
      state.expTime = null;
    }
  },
  actions: {
    login(store, payload) {
      store.commit("addMemberInfo", payload);
      // sessionStorage에 Token 을 추가한다. 
      sessionStorage.setItem("accessToken", payload.access_token);
      // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.access_token}`;
    },
    logout(store, payload) {
      store.commit("removeMemberInfo", payload);
      sessionStorage.removeItem("accessToken");
      axios.defaults.headers.common['Authorization'] = null;
    }
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
    getExpYn(state) {
      if (Date.now() > state.expTime) {
        return false;
      }
      return true;
    }
  }
  /* eslint-disable */
};
