<template>
  <div class="comment">
    <h4>发表评论</h4>
    <hr/>
    <textarea class="cm-textarea" v-model="content" placeholder="请输入要发表的内容..." maxlength="120"></textarea>
    <mt-button type="primary" size="large" @click="addFn">提交</mt-button>
    <div class="cm-list">
      <div class="cm-item" v-for="item in list" :key="item.id">
        <div class="cm-time">{{item.add_time | dateFormat}}</div>
        <div class="cm-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="moreFn" v-if="list.length<total">加载更多</mt-button>
    <mt-button size="large" plain disabled v-else>已全部加载</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  props:['list','total'],
  data(){
    return{
      content:''
    }
  },
  methods:{
    addFn(){
      if(this.content){
        this.$emit('add', {id:this.list.length+1,content:this.content, add_time: new Date().getTime()})
      }else{
        Toast('内容不能为空')
      }
    },
    moreFn(){
      this.$emit('more')
    }
  }
}
</script>
<style lang="less" scoped>
  .comment{
    .cm-textarea{
      display: block;
      width: 100%;
      height: 100px;
    }
    .cm-list{
      padding: 10px 0;
      .cm-item{
        padding: 8px;
        border-bottom:1px solid #e5e5e5;
      }
    }
    
  }
</style>