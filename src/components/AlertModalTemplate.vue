<template>
  <v-dialog v-model="dialog" width="450">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>
      <v-card-text>
        <template v-for="(c, index) in contents">
          {{ c }}
          <br :key="index">
        </template>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog = false">확인</v-btn>
        <!-- confirm일 경우에만 출력 -->
        <v-btn v-show="type=='confirm'" color="primary" flat @click="dialog = false">취소</v-btn>
        <!--// confirm일 경우에만 출력 -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AlertTemplate',
  data: () => ({
    dialog: false,
    type: '',
    title: '',
    message: '',
  }),
  computed: {
    contents() {
      return this.message.split('\n');
    },
  },
};
</script>

<style lang="scss" scoped>
.application {
  font-family: $font-stack;
  background: transparent !important;
  .v-card {
    border: initial !important;
    .v-card__title {
      font-size: 17px !important;
      color: #fff;
      background-color: #e43133 !important;
      padding: 15px;
      line-height: 1.2 !important;
      border: 0;
    }
    .v-card__text {
      padding: 30px !important;
      color: $font-color !important;
    }
  }
}
</style>
