<template>
  <div>
    <h3>首页1</h3>
    <router-link to="/index/login">登录</router-link>
    <router-link to="/index/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
  }
</script>
<style lang="less">
  
</style>