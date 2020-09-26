<template>
  <div>
    <router-view />
  </div>
  
</template>
<script>
  export default{
    data(){
      return{
        
      }
    },
  }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    font-size: 14px;
    color: #333;
    background: #f8f8f8;
  }
  ul, ol{
    list-style: none;
  }
  .header.is-fixed ~ .container{
    margin-top: 40px;
  }
  .tabbar.is-fixed + .container{
    margin-bottom: 40px;
  }
</style>