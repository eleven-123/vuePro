<template>
  <div class="goods-detail">
    <div class="card">
      <div class="card-bd">
        <swiper :data="goods.imgs" :height="height"></swiper>
      </div>
    </div>
    <div class="card">
      <div class="card-hd">{{goods.title}}</div>
      <div class="card-bd">
        <div class="g-price">
          <span>市场价：<i>￥{{goods.price}}</i></span>
          <span>销售价：<i>￥{{goods.price}}</i></span>
        </div>
        <div class="g-number">
          购买数量：
          <number-box :num="num" :min="1" :max="goods.params.stock" @getNum="getNum"></number-box>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div ref="ball" class="g-ball" v-show="isFly">
              <img :src="goods.imgs[0]" alt="img">
            </div>
          </transition>
        </div>
        <div class="g-btns">
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-hd">商品参数</div>
      <div class="card-bd">
        <ul class="g-params">
          <li>商品编号：{{goods.params.no}}</li>
          <li>库存情况：{{goods.params.stock}}</li>
          <li>上架时间：{{goods.params.add_time | dateFormat}}</li>
        </ul>
      </div>
      <div class="card-ft">
        <div class="g-btns">
          <mt-button type="primary" size="large" plain @click="goDetail(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goDetail(id)">商品评论</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from '../../components/swiper.vue'
import NumberBox from '../../components/numberBox.vue'

export default {
  components: {
    Swiper,NumberBox
  },
  data() {
    return {
      id:1,
      height: '260px',
      goods: [],
      isFly:false,
      num:1
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData() {
      let data = {
        imgs:["https://img13.360buyimg.com/evalpic/s240x240_jfs/t1/54085/1/13732/194509/5da6d50fE32d0191a/68d0ac29ce4a326d.jpg","https://img13.360buyimg.com/evalpic/s240x240_jfs/t1/112626/33/19809/59143/5f815db2Edc947736/dcf50b2d36cd798a.jpg"],
        title: 'vivo Y73s 5G手机 8GB+128GB 银月 AMOLED高清护眼屏 4800万影像系统 5G全网通智能手机',
        price:1929,
        marketPrice: 2999,
        params:{no:5020201014,stock:10,add_time:new Date().getTime()}
      };

      this.goods = data
    },
    goDetail(id){console.log(this)
      // this.$router.push('/photo/'+id)
      // this.$router.push({path:'/photo/'+id})
      this.$router.push({name:'photoDetail', params:{id}})
    },
    getNum(value){
      this.num = value
    },
    addCart(){
      this.isFly = true
    },
    // 加入购物车-小球半程动画
    beforeEnter(e){
      e.style.transform = 'translate(0, 0)';
    },
    enter(e, done){
      e.offsetWidth;

      let ballPosition = this.$refs.ball.getBoundingClientRect();
      let badgePosition = document.getElementById('badge').getBoundingClientRect(); //vue不推荐操作DOM
      let x = badgePosition.left - ballPosition.left;
      let y = badgePosition.top - ballPosition.top;
      e.style.transform = 'translate('+x+'px, '+y+'px)';
      e.style.transition = 'all .6s ease';
      done()
    },
    afterEnter(e){
       this.isFly = false
    }
  },
  
}
</script>
<style lang="less">
  .goods-detail{
    padding:8px;
    .card{
      margin-bottom: 8px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
      .card-hd{
        padding: 6px 8px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #eee;
      }
      .card-bd{
        padding: 6px 8px;
        .g-number{
          display: flex;
          align-items: center;
          margin-bottom: 6px;
          position: relative;
        }
        .g-price{
          margin-bottom: 6px;
          line-height: 22px;
          font-size: 13px;
          color: #333;
          span{
            margin-right:10px;
            i{
              color: rgb(230, 55, 55);
              font-style: normal;
            }
            &:first-child{
              i{
                color: #666;
                text-decoration: line-through;
              }
            }
          }
        }
        .g-params{
          font-size: 13px;
          color: #999;
          line-height: 24px;
        }
        
      }
      .card-ft{
        padding: 6px 8px;
        border-top: 1px solid #eee;
        
        .g-btns button{
          margin-bottom: 8px;
        }
      }
    }
  }
  
  .g-ball{
    position: absolute;
    top: 4px;
    left: 104px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #eee;
    z-index: 999;
    img{
      width: 100%;
      height: 100%;
    }
  }
  
</style>