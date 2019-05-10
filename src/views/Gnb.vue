<template>
  <div>
    <nav :class="{closed:!isOpened}">
      <div class="expendable" @click="toggleNav()">
        <span class="material-icons">menu</span>
      </div>
      <span :class="{hide:!isOpened}">
        <div class="memberInfo">
          <img
            id="profile"
            src="https://images.kbench.com/kbench/article/2018_06/k188920p1n1.jpg"
            alt="profile"
          >
          <p>wis201* 님</p>
        </div>
        <ul class="menuItem">
          <li
            class="bookmark"
            @click="navigate('Bookmark')"
            :class="{active:isSelected=='Bookmark'}"
          >
            <span class="menuIcon">
              <font-awesome-icon :icon="['far', 'bookmark']"/>
            </span>
            <span>즐겨찾기</span>
          </li>
          <li
            class="devices"
            @click="navigate('MyDevice')"
            :class="{active:isSelected=='MyDevice'}"
          >
            <span class="menuIcon">
              <font-awesome-icon :icon="['fas', 'tablet-alt']"/>
            </span>
            <span>나의 디바이스</span>
          </li>
          <li
            class="list"
            @click="navigate('DashbdList')"
            :class="{active:isSelected=='DashbdList'}"
          >
            <span class="menuIcon">
              <font-awesome-icon :icon="['fas', 'chart-bar']"/>
            </span>
            <span>대시보드</span>
          </li>
        </ul>
        <ul class="list-children">
          <li>대시보드 테스트</li>
          <li>대시보드 테스트</li>
          <li>대시보드 테스트</li>
        </ul>
        <ul class="menuItem">
          <li>
            <span class="menuIcon">
              <font-awesome-icon :icon="['fas', 'list-ol']"/>
            </span>
            <span>이벤트 타임라인</span>
          </li>
          <li>
            <span class="menuIcon">
              <font-awesome-icon :icon="['fas', 'info-circle']"/>
            </span>
            <span>이용 가이드</span>
          </li>
          <li>
            <span class="menuIcon">
              <font-awesome-icon :icon="['fas', 'cog']"/>
            </span>
            <span>관리</span>
          </li>
        </ul>
        <footer>
          <ul>
            <li class="footerItem">
              <font-awesome-icon :icon="['fas', 'bell']"/>
            </li>
            <li class="seperator">|</li>
            <li class="footerItem">
              <font-awesome-icon :icon="['fas', 'power-off']"/>
            </li>
          </ul>
        </footer>
      </span>
    </nav>
    <div class="content" :class="{expanded:!isOpened}">
      <router-view></router-view>
      <!-- Dynamic Content View -->
    </div>
  </div>
</template>

<script>
import EventBus from '../events';

export default {
  name: 'Gnb',
  data: () => ({
    isSelected: 'DashbdList', // 초기진입화면(대시보드 목록)
    isOpened: true,
    closed: '',
    hide: '',
    expanded: '',
  }),
  methods: {
    navigate(path) {
      this.$router.push({ name: path });
      this.isSelected = path;
    },
    toggleNav() {
      this.isOpened = !this.isOpened;
      EventBus.$emit('toggleHeader', this.isOpened); // 이벤트 발행
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 1000;
  width: 220px;
  height: 100%;
  background-color: $secondary-color;
  .expendable {
    background-color: $primary-color;
    height: 50px;
    cursor: pointer;
    .material-icons {
      color: $white-color;
      font-size: 30px;
      padding: 10px;
    }
  }
  .memberInfo {
    background-color: $secondary-variant-color;
    height: 160px;
    text-align: center;
    p {
      color: $white-color;
    }
  }
  .menuItem {
    li {
      height: 48px;
      padding: 14px 0 0 15px;
      color: $white-color;
      border-bottom: 1px solid #5c5c5c;
      border-left: 0.2em solid transparent;
      .menuIcon {
        display: inline-block;
        width: 20px;
      }
    }
    li.bookmark {
      border-top: 1px solid #5c5c5c;
    }
    li.active {
      border-left: 0.2em solid $primary-color;
    }
  }
  .list-children {
    background-color: $secondary-variant-color;
    max-height: 160px;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      border-bottom: 1px dotted #4e4f51;
      border-left: 0.2em solid transparent;
      height: 42px;
      line-height: 42px;
      padding-left: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 13px;
      color: $white-color;
    }
  }
}
footer {
  position: absolute;
  bottom: 0;
  height: 25px;
  width: inherit;
  background-color: $secondary-color;
  ul li {
    display: table-cell;
    text-align: center;
    color: $white-color;
  }
  ul li.footerItem {
    width: 105px;
  }
  ul li.seperator {
    width: 10px;
  }
}
#profile {
  width: 85px;
  height: 85px;
  border-radius: 100%;
  max-width: 100%;
  max-height: 100%;
  margin-top: 25px;
}
.content {
  position: absolute;
  height: 100%;
  width: calc(100% - 220px);
  margin-left: 220px;
  background-color: #f1f1f1;
}
.closed {
  width: 50px;
  height: auto;
}
.hide {
  display: none;
}
.expanded {
  width: 100%;
  margin-left: initial;
}
</style>
