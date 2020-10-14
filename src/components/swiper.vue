<template>
  <mt-swipe :auto="4000" class="swiper" :style="{height:height}">
    <mt-swipe-item v-for="(item, index) in data" :key="index">
      <img :src="item" />
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  props:['data','height']
}
</script>
<style lang="less">
  .swiper{
    // height: 160px;
    img{
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    .mint-swipe-indicator{
        background: #26a2ff;
      &.is-active{
        opacity: 1;
      }
    }
  }
</style>