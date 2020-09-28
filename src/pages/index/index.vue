<template>
  <div class="container">
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="nav">
      <li class="item" v-for="item in nav" :key="item.id">
        <router-link :to="item.url" tag="div">
          <img :src="item.icon" />
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data(){
    return{
      banner:['/static/images/banner_1.jpg','/static/images/banner_2.jpg','/static/images/banner_3.jpg'],
      nav:[
        {id:1,icon:'/static/images/menu1.png',url:'/login',title:'item1'},
        {id:2,icon:'/static/images/menu2.png',url:'/login',title:'item2'},
        {id:3,icon:'/static/images/menu3.png',url:'/login',title:'item3'},
        {id:4,icon:'/static/images/menu4.png',url:'/login',title:'item4'},
        {id:5,icon:'/static/images/menu5.png',url:'/login',title:'item5'},
        {id:6,icon:'/static/images/menu6.png',url:'/login',title:'item6'}
      ]
    }
  }
}
</script>
<style lang="less">
  .swiper{
    height: 160px;
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
  .nav{
    padding: 12px 5px 0;
    overflow: hidden;
    background: #fff;
    .item{
      float: left;
      width: 25%;
      text-align: center;
      margin-bottom:10px;
      img{
        margin: 4px 0;
        vertical-align: middle;
        width: 44px;
        height: 44px;
      }
      p{
        font-size: 12px;
      }
    }
  }
</style>