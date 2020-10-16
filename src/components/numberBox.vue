<template>
  <div class="input-number">
    <i data-type="reduce" @click="change">-</i>
    <input type="number" :value="count" @change="input" ref="numberRef">
    <i data-type="increase" @click="change">+</i>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  // props:['count', 'max', 'min'],
  props:{
    count:{
      type: Number,
      default: 0
    },
    max:{
      type: Number,
      default: 0
    },
    min:{
      type: Number,
      default: 0
    },
    isChangeItem:{
      type: Boolean,
      default: false
    },
    changeItem:{
      type: String,
      default: ''
    }
  },

  methods: {
    change(e){
      let type = e.target.dataset.type,
          num = Number(this.$refs.numberRef.value),
          min = this.min,
          max = this.max;
      if(type === 'reduce'){
        num <= min ? (Toast('至少添加1件商品'),num = min) : num--;
      }else{
        num < max ? num++ : (Toast('库存不足'),num = max);
      }
      if(this.isChangeItem){
        this.$emit('getNum', {id: this.changeItem,num:num})
      }else{
        this.$emit('getNum', num)
      }
    },
    input(){
      let num = Number(this.$refs.numberRef.value),
          min = this.min,
          max = this.max;
      num < min ? (Toast('至少添加1件商品'),num = min) : num >= max ? (Toast('库存不足'),num = max) : num =num;
      // this.$emit('getNum', num)
      if(this.isChangeItem){
        this.$emit('getNum', {id: this.changeItem,num:num})
      }else{
        this.$emit('getNum', num)
      }
    },
    
  },
}
</script>
<style lang="less">
  .input-number{
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 4px;
    line-height: 24px;
    font-size: 13px;
    i{
      flex: 0 0 auto;
      width: 24px;
      text-align: center;
      font-style: normal;
      background: #ddd;
    }
    input{
      width: 36px;
      height: 24px;
      line-height: 24px;
      border: 0;
      text-align: center;
      font-size: 13px;
    }
  }
</style>