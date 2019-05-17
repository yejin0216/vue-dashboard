<template>
  <header>
    <div class="header" :class="{closed:!isOpened}">
      <div class="navigation">
        <span>{{navigation}}</span>
      </div>
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    navigation: String,
  },
  created() {
    this.$bus.$on('toggleHeader', this.onReceive);
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
  width: inherit;
  height: 50px;
  z-index: 999;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  background-color: $white-color;
  padding-left: 20px;
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: bold;
    .navigation {
      width: 50%;
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
  padding-left: 50px;
}
</style>
