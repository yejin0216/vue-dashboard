<template>
  <header>
    <div class="header">
      <div v-show="!gnbStatus" class="expendable" @click="toggle">
        <i class="material-icons">menu</i>
      </div>
      <div class="navigation">
        <slot></slot>
        <span>{{navigation}}</span>
      </div>
      <div class="userInfo">
        <div class="userName" @click="showUserDetail">
          <span>Michell Tadrrr</span>
          <i></i>
        </div>
      </div>
      <div class="dropdown settingList" v-show="isDropped">
        <div>
          <ul>
            <li @click="logout">언어</li>
            <li @click="logout">사용자 가이드</li>
            <li @click="logout">로그아웃</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    navigation: String,
    sup: String,
  },
  data: () => ({
    closed: false,
    isDropped: false,
  }),
  computed: mapState('layout', ['gnbStatus']),
  methods: {
    toggle() {
      this.$store.dispatch('layout/updateGnbStatus', !this.gnbStatus);
    },
    showUserDetail() {
      this.isDropped = !this.isDropped;
    },
    logout() {
      this.$store.dispatch('member/logout');
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  background-color: $white-color;
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.26);
    .navigation {
      width: 50%;
      padding-left: 20px;
      height: inherit;
    }
    .userInfo {
      width: 50%;
      text-align: right;
      height: inherit;
      .userName {
        margin: 0 20px 0 auto;
        height: inherit;
        font-size: 13px;
        span {
          padding: 0 5px;
          @extend %cursor-pointer;
        }
        i {
          &:after {
            border-style: solid;
            border-width: 1px 1px 0 0;
            content: "";
            display: inline-block;
            height: 0.45em;
            position: relative;
            transform: rotate(-45deg);
            vertical-align: super;
            width: 0.45em;
            top: 2px;
            left: 5px;
            transform: rotate(135deg);
          }
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .settingList {
      @extend %dropdown;
      right: 0;
      top: 50px;
      li {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }
}
.closed {
  padding-left: 70px;
}
</style>
