<template>
  <div>
    <h3>{{msg}}</h3>
    <index></index>
  </div>
  
</template>
<script>
  import index from './index.vue'
  export default{
    data(){
      return{
        msg: 'app组件的 msg'
      }
    },
    components:{
      index
    }
  }
</script>
<style>

</style>