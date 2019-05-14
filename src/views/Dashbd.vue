<template>
  <HeaderComponent :navigation="title" :name="name">
    <!-- Navigation(현재 위치) -->
  </HeaderComponent>
</template>


<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'Dashbd',
  components: {
    HeaderComponent,
  },
  data: () => ({
    title: '대시보드',
    name: '',
  }),
  methods: {
    /* empty */
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
</style>
