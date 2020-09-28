<template>
  <div class="page">
    <mt-header title="首页" fixed class="header">
      <router-link to="/login" slot="right">
        <mt-button >登录</mt-button>
      </router-link>
    </mt-header>
    <!-- 底部导航 -->
    <mt-tabbar fixed v-model="selected" class="tabbar">    
      <mt-tab-item id="index" ><router-link to="/" tag="div">Home</router-link></mt-tab-item>    
      <mt-tab-item id="cart" ><router-link to="/cart" tag="div">Cart</router-link></mt-tab-item>    
    </mt-tabbar>
    
    <router-view />
  </div>
  
</template>
<script>
  export default{
    data(){
      return{
        selected:'index'
      }
    },
    
    mounted(){
      let path = this.$route.path;
      this.selected = path.substr(1,path.length-1)
    },
    updated() {
      let path = this.$route.path;
      this.selected = path.substr(1,path.length-1)
    },
  }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    font-size: 14px;
    color: #333;
    background: #f8f8f8;
  }
  ul, ol{
    list-style: none;
  }
  .page{
    padding: 40px 0 50px;
  }
</style>