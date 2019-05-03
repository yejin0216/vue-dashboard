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
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss">
  html {
    font-family: $font-stack;
    font-size: 14px;
    color: $font-color;
  }
  ul {
    padding: initial;
    li {
      list-style: none;
      cursor: pointer;
    }
  }
  a {
    color: inherit;
    text-decoration-line: none;
  }
  .material-icons {
    cursor: pointer;
  }
  .subcontents {
    max-width: 900px;
    margin: 0 auto;
    .container {
      padding: initial;
      color: $font-color !important;
    }
  }
  .v-card {
    border: 1px solid #ddd !important;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
