<template>
  <div class="cart">
    <div class="c-list">
      <div class="card" v-for="item in list" :key="item.id">
        <div class="card-bd g-item">
          <input type="checkbox" v-model="item.selected" @change="onSelected(item.id, item.selected)"/>
          <img class="g-img" :src="item.imgs[0]" alt="img" />
          <div class="g-info">
            <h4>{{item.title}}</h4>
            <div class="g-price-num">
              <span>￥{{item.price}}</span>
              <number-box :count="item.count" :min="1" :max="item.stock" :isChangeItem="true" :changeItem="item.id" @getNum="getNum"></number-box>
              <a href="#" @click.prevent="del(item.id)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-footer">
      <div class="df-left">
        <p>总计(不含运费)</p>
        <p>已选择<span>{{$store.getters.getSelectedCountAndSum.typeCount}}</span>种商品,共<span>{{$store.getters.getSelectedCountAndSum.count}}</span>件 总价:<span>￥{{$store.getters.getSelectedCountAndSum.sum}}</span></p>
      </div>
      <mt-button type="danger" size="small">去结算</mt-button>
    </div>
  </div>
</template>
<script>
import NumberBox from '../../components/numberBox.vue';
export default {
  components:{
    NumberBox
  },
  computed: {
    list() {
      return this.$store.state.cartList; 
    }
  },
  methods: {
    getNum(value){
      this.$store.commit('updateCart', value)
    },
    del(id){
      this.$store.commit('delCart', id)
    },
    onSelected(id, val){
      this.$store.commit('selectedChange', {id, value: val})
    }

  },
}
</script>
<style lang="less">
  .cart{
    .c-list{
      padding:8px;
      background: #eee;
      .card{
        margin-bottom: 8px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
        .card-bd{
          padding: 6px 8px;
          &.g-item{
            display: flex;
            align-items: center;
          }
          .g-img{
            width: 70px;
            height: 70px;
          }
          .g-info{
            h4{
              font-size: 13px;
              font-weight: normal;
              margin-bottom: 6px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
            .g-price-num{
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
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
      }
    }

    .c-footer{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: 50px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 8px;
      font-size: 13px;
      p{
        line-height: 20px;
        span{
          color: #f22;
          margin:0 2px;
          font-weight: bold;
        }
      }
    }
  }
</style>