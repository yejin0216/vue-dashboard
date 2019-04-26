<template>
  <div>
    <HomeComponent></HomeComponent>
    <StatusComponent></StatusComponent>
  </div>
</template>

<script>
import HomeComponent from './Home.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
  },
  data() {
    return {
      //
    };
  },
};
</script>
