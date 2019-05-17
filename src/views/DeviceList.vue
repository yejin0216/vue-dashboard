<template>
  <div class="page">
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <article class="subcontents">
      <div class="condition text-xs-right">
        <select class="selectBox">
          <option value>최근 등록일순</option>
          <option value>디바이스 이름순</option>
        </select>
      </div>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="i in 5" :key="`4${i}`" xs12>
            <v-card flat>
              <v-card-text>
                <!--디바이스명-->
                <div class="row">
                  <div class="summary">
                    <span class="link">협동로봇</span>
                    <!-- <span class="del" title="삭제">×</span> -->
                  </div>
                </div>
                <!--//디바이스명-->
                <!--디바이스 상세정보-->
                <div class="row">
                  <div class="detail column">
                    <span>모델명 : 협동로봇</span>
                    <span class="dash">|</span>
                  </div>
                  <div class="detail column">
                    <span>디바이스ID : wis201D1553244698210</span>
                    <span class="dash">|</span>
                  </div>
                  <div class="detail column">
                    <span>등록일자 : 2019-04-01</span>
                  </div>
                </div>
                <!--//디바이스 상세정보-->
                <!--디바이스 수정-->
                <div class="row text-xs-right">
                  <button class="btn-white-30" title="센서보기">센서보기</button>
                  <button class="btn-gray-30" title="Capability 설정">Capability 설정</button>
                </div>
                <!--//디바이스 수정-->
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </article>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'DeviceList',
  components: {
    HeaderComponent,
  },
  data: () => ({
    title: '나의 디바이스',
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_contents.scss";
</style>
