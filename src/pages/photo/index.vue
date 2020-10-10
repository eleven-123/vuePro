<template>
  <div class="photo-list">
    <div class="mint-navbar pl-navbar">
      <a href="javascript:;" :class="'mint-tab-item '+(item.id === currNav?'is-selected':'')" v-for="item in nav" :key="item.id" :id="item.id" @click="changeFn(item.id)">
        <div class="mint-tab-item-label">{{item.text}}</div>
      </a>
    </div>
    <div class="pl-list">
      <router-link :to="'/photo/'+item.id" class="pl-item" v-for="item in list" :key="item.id">
        <img class="pl-img" v-lazy="item.img_url" />
        <div class="pl-content">{{item.content}}</div>
      </router-link>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      currNav: '1',
      nav:[{id:'1', text:'选项1'},{id:'2', text:'选项2'},{id:'3', text:'选项3'},{id:'4', text:'选项4'},{id:'5', text:'选项5'},{id:'6', text:'选项6'}],
      list:[]
    }
  },
  created () {
    this.getList();
  },
  methods: {
    getList(){
      let data = [{id:1,img_url:'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',content:'图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 '},{id:2,img_url:'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',content:'图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 '},{id:3,img_url:'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg',content:'图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 图片介绍说明内容 '}]
      setTimeout(() => {
        this.list = data
      }, 500);
      
    },
    changeFn(id) {
      if(this.currNav !== id){
        this.currNav = id;
        this.list = []
        this.getList()
      }
    }
  },
}
</script>
<style lang="less" scoped>
  .photo-list{
    .pl-navbar{
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      .mint-tab-item{
        width: 18%;
        display: inline-block;
        &.is-selected{
          margin-bottom: 0;
        }
      }
    }
    .pl-list{
      padding: 8px 8px 0;
      .pl-item{
        display: block;
        margin-bottom: 6px;
        position: relative;
        .pl-img{
          display: block;
          width: 100%;
          &[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
          }
        }
        .pl-content{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 72px;
          line-height: 20px;
          padding: 8px;
          background: rgba(0,0,0,.3);
          color: #fff;
          font-size: 13px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }
</style>