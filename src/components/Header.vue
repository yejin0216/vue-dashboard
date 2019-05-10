<template>
  <header>
    <div :class="{closed:!isOpened}">
      <span>{{navigation}}</span>
    </div>
    <slot></slot>
  </header>
</template>

<script>
import EventBus from '../events';

export default {
  props: {
    navigation: String,
  },
  created() {
    EventBus.$on('toggleHeader', this.onReceive);
  },
  data: () => ({
    isOpened: true,
  }),
  methods: {
    onReceive(data) {
      this.isOpened = data;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 999;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: $white-color;
  div {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-size: 15px;
    font-weight: bold;
    &:before {
      position: relative;
      top: 4px;
      left: 1px;
      margin-right: 9px;
      content: "";
      vertical-align: text-top;
      display: inline-block;
      width: 5px;
      height: 15px;
      border-radius: 3px;
      background-color: #2d2d2d;
    }
  }
}
.closed {
  padding-left: 70px;
}
</style>
