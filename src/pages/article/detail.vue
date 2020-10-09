<template>
  <div class="detail">
    <h4 class="title">{{item.title}}</h4>
    <p class="subtilte">
      <span>{{item.add_time | dateFormat}}</span>
      <span>点击：{{item.click}}次</span>
    </p>
    <div class="content" v-html="item.content"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      item:{}
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      let data = {
        title:'这是标题',
        add_time: new Date().getTime(),
        click: 10,
        content:'<p>这是内容</P><p>这是内容</P><p>这是内容</P><p><img src="http://mint-ui.github.io/static/qrcode.f245129.svg" /></p>'
      }
      this.item = data;
    }
  }
}
</script>
<style lang="less">
  .detail{
    padding: 0 10px;
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