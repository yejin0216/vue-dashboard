/**
 * @description 회원정보를 관리하는 store이다.
 */

import axios from 'axios';
// import router from '../../router';

export default {
  namespaced: true,
  state: {
    accessToken: sessionStorage.getItem('accessToken') || null,
    expTime: sessionStorage.getItem('expTime') || 0,
    svcTgtSeq: [],
    mbrSeq: null,
    mbrId: null,
  },
  /* eslint-disable */
  mutations: {
    addMemberInfo(state, payload) {
      state.accessToken = payload.access_token;
      state.expTime = payload.expTime;
    },
    removeMemberInfo(state) {
      state.accessToken = null;
      state.expTime = null;
    }
  },
  actions: {
    login(store, payload) {
      store.commit("addMemberInfo", payload);
      // sessionStorage에 Token 을 추가한다. 
      let expTime = (payload.pub_time + payload.expires_in) * 1000;
      sessionStorage.setItem("accessToken", payload.access_token);
      sessionStorage.setItem("expTime", expTime);
      // 모든 HTTP 요청 헤더에 Authorization 을 추가한다.
      axios.defaults.headers.common["Authorization"] = `Bearer ${payload.access_token}`;
    },
    logout(store) {
      store.commit("removeMemberInfo");
      sessionStorage.clear();
      axios.defaults.headers.common["Authorization"] = null;
      router.push({ name: "Login" });
    }
  },
  getters: {
    getExpYn: state => {
      console.log(state.expTime)
      console.log(Date.now())
      if (Date.now() > state.expTime) {
        return true;
      }
      return false;
    }
  }
  /* eslint-disable */
};
