<template>
  <div class="dashbd">
    <HeaderComponent :navigation="navigation">
      <span class="path">대시보드</span>
    </HeaderComponent>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
      :responsive="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <div class="vue-grid-header">
          <p class="vue-grid-header-title">디바이스 목록 위젯</p>
          <p class="vue-grid-header-subtitle">작은제목</p>
        </div>
        <div class="vue-grid-contents"></div>
      </grid-item>
    </grid-layout>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import VueGridLayout from 'vue-grid-layout';
import HeaderComponent from '../components/Header.vue';

const testLayout = [
  {
    x: 0,
    y: 0,
    w: 4,
    h: 9,
    i: '0',
    static: false,
  },
  {
    x: 4,
    y: 0,
    w: 4,
    h: 9,
    i: '1',
    static: false,
  },
  {
    x: 8,
    y: 0,
    w: 4,
    h: 9,
    i: '2',
    static: false,
  },
];

export default {
  name: 'Dashboard',
  components: {
    HeaderComponent,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data: () => ({
    isDropped: false,
    layout: testLayout,
    draggable: true,
    resizable: true,
    index: 0,
  }),
  computed: mapState('layout', ['navigation']),
  methods: {
    updateDashbd(flag) {
      this.attrs[flag] = !this.attrs[flag];
      // 대시보드 설정을 클릭했을 경우 drop down 출력
      if (flag === 'setting') {
        this.isDropped = !this.isDropped;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashbd {
  width: inherit;
  .path {
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
      top: 4px;
      margin: 0 10px 0 8px;
      transform: rotate(45deg);
    }
  }
}
</style>
