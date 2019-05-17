<template>
  <div class="dashbd">
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
      <!--// Navigation(현재 위치) -->
      <!-- 대시보드 제어버튼 그룹 -->
      <div class="controlGroup">
        <ul class="controlItem">
          <li @click="changeStyle('addWdgt')" :class="{active:isClicked == 'addWdgt'}">
            <font-awesome-icon :icon="['fa', 'plus']"/>
          </li>
          <li @click="addBookmark" :class="{active:isBookmark}">
            <font-awesome-icon :icon="['fa', 'bookmark']"/>
          </li>
          <li @click="modifyDashbd('delete')" :class="{active:isClicked == 'delete'}">
            <font-awesome-icon :icon="['far', 'trash-alt']"/>
          </li>
          <li @click="modifyDashbd('copy')" :class="{active:isClicked == 'copy'}">
            <font-awesome-icon :icon="['far', 'copy']"/>
          </li>
          <li @click="changeStyle('alarm')" :class="{active:isClicked == 'alarm'}">
            <font-awesome-icon :icon="['fa', 'envelope-open-text']"/>
          </li>
        </ul>
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
    isBookmark: false, // 북마크 여부
    isClicked: '', // 클릭 여부
  }),
  methods: {
    changeStyle(value) {
      this.isClicked = value;
    },
    addBookmark() {
      this.isBookmark = !this.isBookmark;
    },
    modifyDashbd(value) {
      this.changeStyle(value); // style 변경
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
}
</style>
