<template>
  <div>
    <h3>首页</h3>
    <router-view></router-view>
    <!-- <login></login>
    <register></register> -->
  </div>
</template>
<script>
  import login from '../components/login.vue';
  import register from '../components/register.vue';
  export default {
    data(){
      return{

      }
    },
    components:{
      login, register
    }
  }
</script>
<style lang="less">
  
</style>