<template>
  <header>
    <div>
      <span>{{navigation}}</span>
    </div>
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    navigation: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 1000;
  height: 50px;
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
</style>
