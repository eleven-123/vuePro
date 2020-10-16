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
      <mt-tab-item id="cart" >
        <router-link to="/cart" tag="div">Cart
          <transition name="badge">
            <mt-badge id="badge" size="small" type="error" v-show="$store.state.badge">{{$store.getters.cartCount}}</mt-badge>
          </transition>
        </router-link>
      </mt-tab-item>    
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
        // title:'首页',
        // hasBack:false,
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
      },
      title(){
        let title = this.getTitle(this.$route.name)
        return title
      },
      hasBack(){
        let tabbarPage = ['index','member','cart'];
        let name = this.$route.name;
        if(tabbarPage.indexOf(name)>-1){
          return false
        }else{
          return true
        }
      }
      
    },
    /*watch:{
      "$route.name": function(newVal){
        console.log(newVal)
        this.title = this.getTitle(newVal)
        let tabbarPage = ['index','member','cart'];
        if(tabbarPage.indexOf(newVal)>-1){
          this.hasBack = false
        }else{
          this.hasBack = true
        }
      }
    },  
    created(){
      if(this.$route.name !== 'index'){
        this.title = this.getTitle(this.$route.name)
      }
    }, */
    methods:{
      back(){
        this.transition = 'slide-left'
        this.$router.go(-1)
        setTimeout(()=>{
          this.transition = 'slide-right'
        },300)
      },
      getTitle(name){
        let title = '';
        switch (name) {
          case 'index':
            title = '首页'
            break;
          case 'member':
            title = '个人中心'
            break;
          case 'cart':
            title = '购物车'
            break;
          case 'articleList':
          case 'articleDetail':
            title = '文章'
            break;
          case 'photoList':
          case 'photoDetail':
            title = '图片'
            break;
          case 'goodsList':
          case 'goodsDetail':
            title = '商品'
            break;
          default:
            title = '首页'
            break;
        }
        return title
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

  .badge-enter, .badge-leave-to{
    transform: scale(0.5);
  }
  .badge-enter-active, .badge-leave-active{
    transition: all .1s ease-in;
  }
  
</style>