<template>
  <div>
    <mt-header title="首页" fixed class="header">
      <router-link to="/login" slot="right">
        <mt-button >登录</mt-button>
      </router-link>
    </mt-header>
    <!-- 底部导航 -->
    <mt-tabbar fixed v-model="selected" class="tabbar">    
      <mt-tab-item id="home" ><router-link to="/home" tag="div">Home</router-link></mt-tab-item>    
      <mt-tab-item id="cart" ><router-link to="/cart" tag="div">Cart</router-link></mt-tab-item>    
    </mt-tabbar>
    
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected: 'home'
      }
    },
    watch: {
      selected(){
        let path = this.$route.path;
        this.selected = path.substr(1,path.length-1)
      }
    },
    methods:{

    }
  }
</script>
<style lang="less">
  
</style>