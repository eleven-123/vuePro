<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/article/'+item.id" class="item">
          <img :src="item.img_url" class="img">
          <div class="info">
            <h4>{{item.title}}</h4>
            <p>
              <span>{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list: []
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      let data = [
        {id:1, title:'列表1', add_time: new Date().getTime(), click: 10, img_url:'/static/images/menu1.png'},
        {id:2, title:'列表2', add_time: new Date().getTime(), click: 15, img_url:'/static/images/menu1.png'},
        {id:3, title:'列表3', add_time: new Date().getTime(), click: 1, img_url:'/static/images/menu1.png'},
        {id:4, title:'列表4', add_time: new Date().getTime(), click: 2, img_url:'/static/images/menu1.png'}
      ];
      this.list = data;
    }
  }
}
</script>
<style lang="less">
  .list{
    .item{
      display: flex;
      align-items: center;
      padding: 10px 15px;
      position: relative;
      &::after{
        content:'';
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 0;
        height: 1px;
        background: #e5e5e5;
      }
      .img{
        flex: 0 0 auto;
        width: 30px;
        height: 30px;
      }
      .info{
        flex: 1;
        padding-left: 10px;
        h4{
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
        }
        p{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #2ae;
        }
      }
    }
  }
</style>