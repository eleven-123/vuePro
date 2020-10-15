<template>
  <div class="input-number">
    <i data-type="reduce" @click="change">-</i>
    <input type="number" v-model="num" @blur="input">
    <i data-type="increase" @click="change">+</i>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  props:['max', 'min'],
  data(){
    return {
      num: 1
    }
  },
  // computed:{
  //   num:{
  //     get(){
  //       return this.value
  //     },
  //     set(){
  //       return this.value
  //     }
  //   }
  // },
  methods: {
    change(e){
      let type = e.target.dataset.type,
          num = this.num,
          min = this.min,
          max = this.max;
      if(type === 'reduce'){
        num <= min ? (Toast('至少添加1件商品'),num = min) : num--;
      }else{
        num < max ? num++ : (Toast('库存不足'),num = max);
      }
      this.num = num
      this.$emit('getNum', this.num)
    },
    input(){
      let num = Number(this.num),
          min = this.min,
          max = this.max;
      num < min ? (Toast('至少添加1件商品'),num = min) : num >= max ? (Toast('库存不足'),num = max) : num =num;
      this.num = num;
      this.$emit('getNum', this.num)
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