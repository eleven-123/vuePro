<template>
  <div class="detail">
    <h4 class="title">{{item.title}}</h4>
    <p class="subtilte">
      <span>{{item.add_time | dateFormat}}</span>
      <span>点击：{{item.click}}次</span>
    </p>
    <div>
      <vue-preview :slides="list" class="img-list"></vue-preview>
    </div>
    <div class="content" >
      <div>{{item.content}}</div>
    </div>
    
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
      page:1,
      list:[]
    }
  },
  components:{
    Comment
  },
  created(){
    this.getData()
    this.getComment()
    this.getThumb()
  },
  methods:{
    getData(){
      let data = {
        title:'这是标题',
        add_time: new Date().getTime(),
        click: 10,
        content:'这是内容这是内容这是内容'
      };
      this.item = data;
    },
    getThumb(){
      let data = [{
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            // alt: 'picture1',
            // title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            w: 600,
            h: 400
          }]
      this.list = data;
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
<style lang="less" >
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
    .img-list .my-gallery{
      display: flex;
      flex-wrap: wrap;
      figure{
        width: 33.33%;
        padding: 2px;
      }
      img{
        vertical-align: middle;
        padding: 2px;
        width: 100%;
      }
    }
    .content{
      padding: 8px 0;
      img{
        max-width: 100%;
      }
    }
  }
</style>