<template>
  <div>
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <article class="subcontents">
      <div class="condition"></div>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="i in 5" :key="`4${i}`" xs12>
            <v-card flat>
              <v-card-text>
                <div>
                  <div class="summary">실시간 환경 감시</div>
                </div>
                <div>
                  <div class="detail"><span>구분 : 환경</span><span class="divider">|</span></div>
                  <div class="detail"><span>작업자 : wis201*</span><span class="divider">|</span></div>
                  <div class="detail"><span>업데이트 : 2019-04-01</span></div>
                </div>
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
  name: 'DashbdList',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      title: '대시보드 목록',
    };
  },
};
</script>

<style lang="scss" scoped>
  .condition {
    border-bottom: 1px solid #333;
    padding: 10px 5px;
    margin-bottom: 20px;
  }
  .summary {
    color: #454545;
    font-weight: 600;
    font-size: initial;
  }
  .detail {
    color: #666;
    font-size: 13px;
    display: inline-block;
    span.divider {
      color: #ccc;
      margin: 0 10px;
    }
  }
</style>
