<template>
  <div class="page">
    <HeaderComponent :navigation="navigation">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <div class="subcontents">
      <article>
        <div class="condition text-xs-right">
          <select class="selectBox">
            <option value="name">이름(오름차순)</option>
            <option value="date">등록일(오름차순)</option>
          </select>
        </div>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 5" :key="`4${i}`" xs12>
              <v-card flat>
                <v-card-text>
                  <!--대시보드명-->
                  <div class="row">
                    <div class="summary">
                      <span title="이동">실시간 환경 감시</span>
                      <!-- <span class="del" title="삭제">×</span> -->
                    </div>
                  </div>
                  <!--//대시보드명-->
                  <!--대시보드 상세정보-->
                  <div class="row">
                    <div class="detail column">
                      <span>구분 : 환경</span>
                      <span class="dash">|</span>
                    </div>
                    <div class="detail column">
                      <span>작업자 : wis201*</span>
                      <span class="dash">|</span>
                    </div>
                    <div class="detail column">
                      <span>등록일자 : 2019-04-01</span>
                    </div>
                  </div>
                  <!--//대시보드 상세정보-->
                  <!--대시보드 수정-->
                  <div class="row text-xs-right">
                    <button class="btn-gray-30" title="수정">수정</button>
                    <button class="btn-gray-30" title="삭제">삭제</button>
                  </div>
                  <!--//대시보드 수정-->
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
  name: 'DashboardList',
  components: {
    HeaderComponent,
  },
  data: () => ({
    navigation: '대시보드 목록',
  }),
  methods: {
    navigate() {
      /* 선택한 대시보드로 이동한다. */
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_contents.scss";
</style>
