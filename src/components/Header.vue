<template>
  <header>
    <div class="header">
      <div v-show="!isExpanded" class="expendable" @click="toggle">
        <span class="material-icons">menu</span>
      </div>
      <div class="navigation">
        <span>{{navigation}}</span>
      </div>
      <slot></slot>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    navigation: String,
  },
  data: () => ({
    closed: false,
  }),
  computed: mapState('layout', ['isExpanded']),
  methods: {
    toggle() {
      this.$store.dispatch('layout/updateIsOpened', !this.isExpanded);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: inherit;
  height: 50px;
  z-index: 999;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: $white-color;
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: bold;
    .navigation {
      width: 50%;
      padding-left: 20px;
      &:before {
        position: relative;
        content: "";
        margin-right: 9px;
        vertical-align: middle;
        display: inline-block;
        width: 5px;
        height: 15px;
        border-radius: 3px;
        background-color: #2d2d2d;
      }
    }
  }
}
.closed {
  padding-left: 70px;
}
</style>
