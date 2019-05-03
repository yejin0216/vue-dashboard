<template>
  <div>
    <HeaderComponent :navigation="title">
      <!-- Navigation(현재 위치) -->
    </HeaderComponent>
    <article>
      <div class="condition"></div>
      <div></div>
    </article>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';

export default {
  name: 'MyDevices',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      title: '나의 디바이스',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
