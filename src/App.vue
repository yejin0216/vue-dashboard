<template>
  <div>
    <v-app>
      <!-- GNB -->
      <div class="wrapper">
        <nav v-show="gnbStatus">
          <div class="expendable" @click="toggle">
            <i class="material-icons">menu</i>
          </div>
          <div class="memberInfo">
            <img
              id="profile"
              src="https://images.kbench.com/kbench/article/2018_06/k188920p1n1.jpg"
              alt="profile"
            >
            <p>wis201*</p>
          </div>
          <ul class="menuItem">
            <li @click="navigate('Bookmarks')" :class="{active:isSelected == 'Bookmarks'}">
              <span class="menuIcon">
                <font-awesome-icon :icon="['far', 'bookmark']"/>
              </span>
              <span>즐겨찾기</span>
            </li>
            <li @click="navigate('DeviceList')" :class="{active:isSelected == 'DeviceList'}">
              <span class="menuIcon">
                <font-awesome-icon :icon="['fas', 'tablet-alt']"/>
              </span>
              <span>나의 디바이스</span>
            </li>
            <li
              @click="navigate('DashboardList')"
              :class="{active:isSelected == 'DashboardList' || isSelected == 'Dashboard'}"
            >
              <span class="menuIcon">
                <font-awesome-icon :icon="['fas', 'chart-bar']"/>
              </span>
              <span>대시보드</span>
            </li>
          </ul>
          <ul class="list-children">
            <li
              v-for="item in list"
              :key="item.sequence"
              @click="navigate('Dashboard', item)"
              :class="{active:sequence == `${item.sequence}`}"
            >{{item.name}}</li>
          </ul>
          <ul class="menuItem">
            <li @click="navigate('EventLog')" :class="{active:isSelected == 'EventLog'}">
              <span class="menuIcon">
                <font-awesome-icon :icon="['fas', 'list-ol']"/>
              </span>
              <span>이벤트 타임라인</span>
            </li>
            <li @click="navigate('Guide')" :class="{active:isSelected == 'Guide'}">
              <span class="menuIcon">
                <font-awesome-icon :icon="['fas', 'info-circle']"/>
              </span>
              <span>이용 가이드</span>
            </li>
            <li @click="navigate('Settings')" :class="{active:isSelected == 'Settings'}">
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
        </nav>
        <div class="content">
          <!-- Dynamic Content View -->
          <router-view></router-view>
          <!--// Dynamic Content View -->
        </div>
      </div>
      <!--// GNB -->
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    isSelected: '',
    sequence: '',
    list: [
      { name: '환경 모니터링', sequence: 1 },
      { name: '디바이스 모니터링', sequence: 2 },
    ],
  }),
  computed: mapState('layout', ['gnbStatus']), // navigation style은 veux store에서 관리한다.
  methods: {
    navigate(path, item) {
      if (item) {
        this.$store.dispatch('layout/updateNavigtion', item.name);
        this.$router.push({
          name: path,
          params: { sequence: item.sequence },
        });
        this.sequence = item.sequence;
      } else {
        this.$router.push({ name: path });
        this.sequence = '';
      }
    },
    toggle() {
      this.$store.dispatch('layout/updateGnbStatus', !this.gnbStatus);
    },
  },
  updated() {
    const path = this.$route.name;
    if (path !== 'Login') {
      // Menu Class 변경
      this.isSelected = path;
      this.sequence = this.$route.params.sequence || '';
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
nav {
  //position: fixed;
  //z-index: 1000;
  width: 220px;
  justify-content: space-between;
  height: 100%;
  background-color: $secondary-color;
  .memberInfo {
    background-color: $secondary-sub-color;
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
    background-color: $secondary-sub-color;
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
    li.active {
      border-left: 0.2em solid $primary-color;
      background-color: rgba(159, 159, 159, 0.05);
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
.content {
  //position: absolute;
  height: 100%;
  //width: 100%;
  min-height: 100%;
  flex: 3 0px;
  // margin-left: 220px;
  background-color: #f1f1f1;
  color: $font-color;
}
#profile {
  width: 85px;
  height: 85px;
  border-radius: 100%;
  max-width: 100%;
  max-height: 100%;
  margin-top: 25px;
}
.closed {
  width: 50px;
  height: auto;
}
.expanded {
  width: 100%;
  margin-left: initial;
}
</style>
