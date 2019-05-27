<template>
  <div class="dashbd">
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
      <!--// Navigation(현재 위치) -->
      <!-- 대시보드 제어버튼 그룹 -->
      <div class="controlGroup">
        <ul class="controlItem">
          <li @click="updateDashbd('bookmark')" :class="{active:attrs.bookmark}" title="위젯 추가">
            <font-awesome-icon :icon="['fa', 'plus']"/>
          </li>
          <li @click="updateDashbd('alarm')" :class="{active:attrs.alarm}" title="이벤트 수신함">
            <font-awesome-icon :icon="['far', 'comment-alt']"/>
          </li>
          <li @click="updateDashbd('observer')" :class="{active:attrs.observer}" title="지켜보는">
            <font-awesome-icon :icon="['fa', 'user-friends']"/>
          </li>
          <li @click="updateDashbd('setting')" :class="{active:attrs.setting}" title="설정">
            <font-awesome-icon :icon="['fas', 'cog']"/>
          </li>
          <!--<li @click="updateDashbd('share')" :class="{active:attrs.share}" title="대시보드 공유">
            <font-awesome-icon :icon="['fa', 'share-square']"/>
          </li>
          <li @click="addBookmark" :class="{active:isBookmark}" title="즐겨찾기 추가">
            <font-awesome-icon :icon="['fa', 'bookmark']"/>
          </li>
          <li @click="modifyDashbd('delete')" :class="{active:isSelected == 'delete'}" title="대시보드 삭제">
            <font-awesome-icon :icon="['far', 'trash-alt']"/>
          </li>
          <li @click="modifyDashbd('copy')" :class="{active:isSelected == 'copy'}" title="대시보드 복제">
            <font-awesome-icon :icon="['far', 'copy']"/>
          </li>-->
        </ul>
      </div>
      <div class="dropdown settingList">
        <div>
          <ul>
            <li>즐겨찾기</li>
            <li>대시보드 공유</li>
            <li>대시보드 복제</li>
            <li>대시보드 삭제</li>
          </ul>
        </div>
      </div>
      <!--// 대시보드 제어버튼 그룹 -->
    </HeaderComponent>
  </div>
</template>


<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'Dashboard',
  components: {
    HeaderComponent,
  },
  data: () => ({
    title: '대시보드',
    attrs: {
      bookmark: false,
      alarm: false,
      observer: false,
      share: false,
      setting: false,
    },
    settingList: [
      { title: '즐겨찾기' },
      { title: '대시보드 복제' },
      { title: '대시보드 삭제' },
    ],
  }),
  methods: {
    updateDashbd(flag) {
      this.attrs[flag] = !this.attrs[flag];
      // 대시보드 설정을 클릭했을 경우 drop down 출력
      // if (flag === 'setting') {
      // }
    },
  },
  mounted() {
    const params = this.$route.params.sequence;
    if (!params.name) {
      // url로 직접 들어온 경우 서버에서 대시보드명을 가져온다.
    }
  },
};
</script>

<style lang="scss" scoped>
.dashbd {
  width: inherit;
  .controlGroup {
    width: 50%;
    .controlItem {
      display: flex;
      float: right;
      li {
        width: 50px;
        text-align: center;
        border-left: 1px solid #eaeaea;
        cursor: pointer;
      }
      .active {
        color: $yellow-color;
      }
    }
  }
  .settingList {
    @extend %dropdown;
    display: none;
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
</style>
