<template>
  <div>
    <v-app>
      <!-- GNB -->
      <div class="wrapper">
        <nav :class="{closed:!isOpened}" v-show="isNotExpired">
          <div class="expendable" @click="toggle()">
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
          </span>
        </nav>
        <div class="content" :class="{expanded:!isOpened}">
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
export default {
  name: 'App',
  data: () => ({
    isSelected: '',
    isNotExpired: false,
    isOpened: true,
    closed: '',
    hide: '',
    expanded: '',
    sequence: '',
    list: [
      { name: 'Dashboard1', sequence: 1 },
      { name: 'Dashboard2', sequence: 2 },
    ],
  }),
  methods: {
    navigate(path, item) {
      if (item) {
        this.$router.push({
          name: path,
          params: { sequence: item.sequence, name: item.name },
        });
        this.sequence = item.sequence;
      } else {
        this.$router.push({ name: path });
        this.sequence = '';
      }
    },
    toggle() {
      this.isOpened = !this.isOpened;
      this.$bus.$emit('toggleHeader', this.isOpened); // 이벤트 발행
    },
  },
  updated() {
    const path = this.$route.name;
    if (path === 'Login') {
      // 로그인 페이지
      this.isNotExpired = false;
      this.isOpened = false;
      // this.toggle();
    } else {
      // Menu Class 변경
      this.isNotExpired = true;
      this.isSelected = path;
      this.sequence = this.$route.params.sequence || '';
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
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
  position: absolute;
  height: 100%;
  width: calc(100% - 220px);
  min-height: 100%;
  margin-left: 220px;
  background-color: #f1f1f1;
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
.hide {
  display: none;
}
.expanded {
  width: 100%;
  margin-left: initial;
}
</style>
