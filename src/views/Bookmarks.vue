<template>
  <div class="page">
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <div class="subcontents">
      <article>
        <div class="condition text-xs-right">
          <select class="selectBox">
            <option value="date">이름(오름차순)</option>
            <option value="name">구분(오름차순)</option>
          </select>
        </div>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 5" :key="`4${i}`" sm4 xs12>
              <v-card flat @mouseover="mouseon(`${i}`)" @mouseleave="mouseoff()">
                <div :class="[{ expanded:`${i}`==isSelected }, typeIcon ]">
                  <v-img :src="require('../assets/images/environment_bookmark.png')"></v-img>
                </div>
                <v-card-text class="text-xs-center">
                  <div>
                    <div :class="[{ active:`${i}`==isSelected }, summary ]">실시간 환경 감시</div>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                  <div>
                    <div class="detail">
                      <p>구분</p>
                      <p>
                        <span class="dash">|</span>
                        <span>환경</span>
                      </p>
                    </div>
                    <div class="detail">
                      <p>작업자</p>
                      <p>
                        <span class="dash">|</span>
                        <span>wis201*</span>
                      </p>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </article>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'Bookmarks',
  components: {
    HeaderComponent,
  },
  data: () => ({
    title: '즐겨찾기',
    active: '',
    isSelected: 0,
    expanded: '',
    summary: 'summary',
    typeIcon: 'typeIcon',
  }),
  methods: {
    navigate() {
      /* 선택한 대시보드로 이동한다. */
    },
    mouseon(index) {
      this.isSelected = index;
    },
    mouseoff() {
      this.isSelected = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_contents.scss";

.v-card {
  cursor: pointer;
}
.typeIcon {
  max-height: 80px;
  max-width: 80px;
  margin: 30px auto 5px;
}
p {
  display: inline-block;
  margin-bottom: initial;
  width: 50%;
  .dash {
    margin: 0 10px 0 0 !important;
  }
}
.active {
  text-decoration: underline;
}
.expanded {
  max-height: 85px;
  max-width: 85px;
  margin: 30px auto 0px;
  transition-duration: 0.1s;
}
</style>
