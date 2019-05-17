<template>
  <div class="loginWrapper">
    <div class="box">
      <div class="loginInfo">
        <div class="welcomeMessage">
          <p>Dashboard Pro2</p>
          <span>에 오신 것을 환영합니다.</span>
        </div>
        <div class="accountInfo">
          <input
            type="text"
            name="loginId"
            id="loginId"
            class="form"
            v-model="loginId"
            autocomplete="off"
            placeholder="아이디"
          >
          <input
            type="password"
            name="loginPwd"
            id="loginPwd"
            class="form"
            v-model="loginPwd"
            autocomplete="off"
            placeholder="비밀번호"
          >
        </div>
        <div clsss="loginBtnGroup">
          <button class="btn-login" title="로그인" @click="login">로그인</button>
          <label for="saveId">
            <input type="checkbox" name="saveId" id="saveId">
            <span>아이디 기억하기</span>
          </label>
        </div>
        <div class="findAccount">
          <div>
            아이디 찾기
            <span class="dash">|</span>
          </div>
          <div>비밀번호 찾기</div>
        </div>
      </div>
      <div class="licenseInfo">
        <a href>교육 또는 비즈니스 계정 이용안내</a>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyright © 2016-2019
        <b>KT IoTMakers</b> All Rights reserved.
      </p>
      <p>이 사이트는 Chrome 브라우저에 최적화 되어 있습니다.</p>
    </div>
    <message-box :toggle="toggle" :headline="headline" :contents="contents"></message-box>
  </div>
</template>

<script>
import * as loginAPI from '../api/auth.api';

export default {
  name: 'Login',
  data: () => ({
    loginId: '',
    loginPwd: '',
    toggle: false,
    headline: '',
    contents: '',
  }),
  methods: {
    login() {
      const self = this;
      const param = {
        grant_type: 'password',
        username: self.loginId,
        password: self.loginPwd,
      };
      loginAPI
        .getAccessToken(param)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error) {
            self.headline = '로그인 실패';
            self.contents = '1회 로그인에 실패했습니다.\n비밀번호 5회 오류시 로그인이 차단됩니다.';
            self.toggle = true;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.loginWrapper {
  background-image: url("../assets/images/home_con3.jpg");
  background-size: cover;
  min-height: 100%;
  .box {
    width: 404px;
    min-height: 500px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -60%);
    -webkit-transform: translate(-50%, -60%);
    -ms-transform: translate(-50%, -60%);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    border: 1px solid #e1e1e1;
    .loginInfo {
      padding: 50px;
      .welcomeMessage {
        text-align: center;
        margin-bottom: 20px;
        p {
          font-size: 30px;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: initial;
        }
      }
      input[type="text"],
      input[type="password"] {
        height: 40px;
        width: 100%;
        margin-bottom: 5px;
        &:focus {
          outline: 3px solid #f2717370 !important;
        }
      }
      .btn-login {
        height: 40px;
        width: 100%;
        padding: 5px 15px;
        border-radius: 1px;
        border: 1px solid $primary-variant-color;
        background-color: $primary-variant-color;
        font-size: initial;
        color: #fff;
        line-height: 28px;
        margin: 0 0 10px 0;
      }
      input[type="checkbox"] {
        width: $font-normal-size;
        height: $font-normal-size;
      }
      span {
        margin-left: 5px;
      }
      .findAccount {
        margin-top: 20px;
        div {
          display: inline-block;
          width: 50%;
          padding: 10px 0;
          text-align: center;
          border-top: 1px solid #e1e1e1;
          span {
            margin: initial;
            float: right;
          }
        }
      }
    }
    .licenseInfo {
      text-align: center;
      border-top: 1px solid #ddd;
      height: 80px;
      line-height: 80px;
      font-weight: bold;
      color: #585858;
    }
  }
  .copyright {
    position: fixed;
    width: 100%;
    right: 5px;
    bottom: 5px;
    text-align: right;
    p {
      margin-bottom: 0px;
      color: #aaa;
      font-size: $font-small-size;
      b {
        color: $primary-variant-color;
      }
    }
  }
}
</style>
