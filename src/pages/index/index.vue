<template>
  <div>
    <swiper :data="banner" :height="height"></swiper>
    <ul class="nav">
      <li class="item" v-for="item in nav" :key="item.id">
        <router-link :to="item.url" tag="div">
          <img :src="item.icon" />
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
    <!-- <mt-cell title="推荐" is-link>
      <span style="font-size:13px;">more</span>
    </mt-cell> -->
  </div>
</template>
<script>
import Swiper from '../../components/swiper.vue';
import axios from 'axios';
export default {
  data(){
    return{
      height: '160px',
      banner:[],
      nav:[]
    }
  },
  components: {
    Swiper,
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      // axios.get('http://fumanqiankun.weiyuekj.com/api?method=appplus.version').then(function(res) {
      //   console.log(res);
      // }, function(err) {
      //   console.log(err);
      // }) 
      this.banner = ['../../static/images/banner_1.jpg','../../static/images/banner_2.jpg','../../static/images/banner_3.jpg'];
      this.nav = [
        {id:1,icon:'/static/images/menu1.png',url:'/article',title:'article'},
        {id:2,icon:'/static/images/menu2.png',url:'/photo',title:'photo'},
        {id:3,icon:'/static/images/menu3.png',url:'/goods',title:'goods'},
        {id:4,icon:'/static/images/menu4.png',url:'/login',title:'item4'},
        {id:5,icon:'/static/images/menu5.png',url:'/login',title:'item5'},
        {id:6,icon:'/static/images/menu6.png',url:'/login',title:'item6'}
      ];
    }
  }
}
</script>
<style lang="less">
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