<template>
  <div>
    <GNBComponent></GNBComponent>
  </div>
</template>

<script>
import GNBComponent from './views/Gnb.vue';

export default {
  name: 'App',
  components: {
    GNBComponent,
  },
  data: () => ({
    // empty
  }),
};
</script>

<style lang="scss">
.subcontents {
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  .container {
    padding: initial;
    color: $font-color !important;
  }
}
</style>
