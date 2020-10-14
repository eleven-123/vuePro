<template>
  <div class="page">
    <mt-header :title="title" fixed class="header">
      <mt-button icon="back" slot="left" @click="back" v-show="hasBack">返回</mt-button>
      <!-- <router-link to="/login" slot="right">
        <mt-button >登录</mt-button>
      </router-link> -->
    </mt-header>
    <!-- 底部导航 -->
    <mt-tabbar fixed v-model="selected" class="tabbar">    
      <mt-tab-item id="index" ><router-link to="/" tag="div">Home</router-link></mt-tab-item>    
      <mt-tab-item id="member" ><router-link to="/member" tag="div">Mine</router-link></mt-tab-item>    
      <mt-tab-item id="cart" ><router-link to="/cart" tag="div">Cart<mt-badge id="badge" size="small" type="error">0</mt-badge></router-link></mt-tab-item>    
    </mt-tabbar>
    <!-- 内容区 -->
    <div class="container">
      <transition :name="transition" >
        <router-view />
      </transition>
    </div>
  </div>
  
</template>
<script>
  export default{
    data(){
      return{
        title:'首页',
        hasBack:true,
        transition:'slide-right'
      }
    },
    computed:{
      selected:{
        get(){
          return this.$route.name
        },
        set(){
          return this.$route.name
        }      
      }
    },
    methods:{
      back(){
        this.transition = 'slide-left'
        this.$router.go(-1)
        setTimeout(()=>{
          this.transition = 'slide-right'
        },300)
      }
    }
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
    height: 100%;
  }
  ul, ol{
    list-style: none;
  }
  a, a:hover, a:visited{
    color: inherit;
    text-decoration: none;
  }
  input, textarea{
    border: 1px solid #e5e5e5;
    outline: none;
  }
  .page{
    width: 100%;
    height: 100%;
    padding: 40px 0 50px;
    overflow-x: hidden;
  }
  .container{
    position: relative;
    min-height: 100%;
  }

  .slide-right-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .slide-right-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .slide-right-enter-active, .slide-right-leave-active{
    transition: all .3s ease;
  }

  .slide-left-enter{
    opacity: 0;
    transform: translateX(-100%);
  }
  .slide-left-leave-to{
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }
  .slide-left-enter-active, .slide-left-leave-active{
    transition: all .3s ease;
  }
  
</style>