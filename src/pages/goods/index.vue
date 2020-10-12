<template>
  <div class="goods-list">
    <div class="goods" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <div class="g-inner">
        <img :src="item.img" alt="img" class="g-img">
        <div class="g-title">{{item.title}}</div>
        <div class="g-bottom">
          <div class="subtitle">
            {{item.subtitle}}
          </div>
          <p class="price"><span>￥{{item.price}}</span><span>￥{{item.marketPrice}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created () {
    this.getList();
  },
  methods: {
    getList() {
      let data = [{id:1,title:'商品名称',subtitle:'描述信息',img:'https://img.yzcdn.cn/vant/ipad.jpeg',price:99,marketPrice:199},{id:2,title:'商品名称商品名称商品名称商品名称商品名称商品名称商品名称',subtitle:'描述信息',img:'https://img.yzcdn.cn/vant/ipad.jpeg',price:99,marketPrice:199},{id:3,title:'商品名称',subtitle:'描述信息',img:'https://img.yzcdn.cn/vant/ipad.jpeg',price:99,marketPrice:199}];
      this.list = data;
    },
    goDetail(id){
      console.log(this)
      // 1. 最简单的
      // this.$router.push('/goods/'+id)
      // 2. 传递对象
      // this.$router.push({path:'/goods/'+id})
      // 3. 传递命名的路由
      this.$router.push({ name: "goodsDetail", params: { id } });
    }
  },
}
</script>
<style lang="less">
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding-left: 8px;
    padding-top: 8px;
    .goods{
      width: 50%;
      padding-right:8px;
      margin-bottom: 8px;
      .g-inner{
        min-height: 150px;
        background: #fff;
        .g-img{
          width: 100%;
        }
        .g-title{
          padding: 0 6px;
          line-height: 20px;
          height: 42px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 14px;
        }
        .g-bottom{
          background: #eee;
          padding: 0 6px 4px;
          .subtitle{
            line-height: 24px;
            font-size: 12px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .price{
            span{
              font-size: 12px;
              color: #999;
              text-decoration: line-through;
              &:first-child{
              color: rgb(255, 47, 68);
              font-size: 14px;
              text-decoration: none;
              margin-right: 8px;
            }
            }
          }
        }
      }
    }
  }
</style>