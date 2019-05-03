<template>
  <div>
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <article class="subcontents">
      <div class="condition"></div>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="i in 5" :key="`4${i}`" sm4 xs12>
            <v-card flat>
              <div class="image">
                <v-img :src="require('../assets/images/environment_bookmark.png')"></v-img>
              </div>
              <v-card-text class="text-xs-center">
                <div>
                  <div class="summary">실시간 환경 감시</div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <div>
                  <div class="detail"><p>구분</p><p><span>|</span>환경</p></div>
                  <div class="detail"><p>작업자</p><p><span>|</span>wis201*</p></div>
                  <div class="detail"><p>업데이트</p><p><span>|</span>2019-04-01</p></div>
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
  name: 'Bookmark',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      title: '즐겨찾기',
    };
  },
  methods: {
    navigate() {
      /* 선택한 대시보드로 이동한다. */
    },
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
  }
  .image {
    max-height: 80px;
    max-width: 80px;
    margin: 30px auto 0px;
  }
  .detail {
    color: #666;
    font-size: 13px;
    p {
      display: inline-block;
      margin-bottom: initial;
      width: 50%;
      span {
        color: #ccc;
        margin-right: 10px;
      }
    }
  }
</style>
