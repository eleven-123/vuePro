
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* 
// 全局导入 Mint-ui
import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//1.按需导入，在.babelrc中配置
//2.导入需要的组件
*/
import { Header, Button, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import router from './router/index';
import app from './App.vue';

new Vue({
  el: '#app',
  router, // router: router
  render: c => c(app)
})