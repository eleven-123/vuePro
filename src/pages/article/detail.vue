<template>
  <div class="detail">
    <h4 class="title">{{item.title}}</h4>
    <p class="subtilte">
      <span>{{item.add_time | dateFormat}}</span>
      <span>点击：{{item.click}}次</span>
    </p>
    <div class="content" v-html="item.content"></div>
    
    <Comment :list="comments" :total="total" @add="add" @more="more"></Comment>
  </div>
</template>
<script>
import Comment from '../../components/comment.vue';

export default {
  data(){
    return{
      item:{},
      comments:[],
      total: 13,
      page:1
    }
  },
  components:{
    Comment
  },
  created(){
    this.getData()
    this.getComment()
  },
  methods:{
    getData(){
      let data = {
        title:'这是标题',
        add_time: new Date().getTime(),
        click: 10,
        content:'<p>这是内容</P><p>这是内容</P><p>这是内容</P><p><img src="http://mint-ui.github.io/static/qrcode.f245129.svg" /></p>'
      };
      this.item = data;
    },
    getComment(){
      let data = [];
      for(let i = 0; i<5; i++){
        if((i+1)+((this.page-1)*5) <= this.total){
          data.push({id:(i+1)+((this.page-1)*5), add_time:new Date().getTime(), content:'这是评论'+((i+1)+((this.page-1)*5))})
        }
      }
      let list = this.comments;
      this.comments = list.concat(data)
    },
    add(item){
      let list = this.comments;
      list.unshift(item)
      this.comments = list;
      this.total++
    },
    more(){
      let list = this.comments;
      if(list.length < this.total){
        this.page++
        this.getComment()
      }
    }
  }
}
</script>
<style lang="less">
  .detail{
    padding: 0 8px;
    .title{
      margin: 10px 0;
      font-size: 15px;
      color: #333;
      text-align: center;
    }
    .subtilte{
      display: flex;
      justify-content: space-between;
      color: #2ae;
      font-size: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e5e5e5;
    }
    .content{
      padding: 8px 0;
      img{
        max-width: 100%;
      }
    }
  }
</style>