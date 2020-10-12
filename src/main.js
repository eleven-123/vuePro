
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
import { Header, Button, Tabbar, TabItem, Swipe, SwipeItem, Cell, Search, Navbar, Lazyload, Spinner  } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search)
Vue.component(Navbar.name, Navbar)
Vue.component(Spinner.name, Spinner)
Vue.use(Lazyload);

import VuePreview from 'vue-preview';
Vue.use(VuePreview)

import router from './router/index';
import app from './App.vue';

import moment from 'moment';
// 全局过滤器 - 时间格式化
Vue.filter('dateFormat',function(data, type='YYYY-MM-DD hh:mm:ss'){
  return moment(data).format(type)
})

new Vue({
  el: '#app',
  router, // router: router
  render: c => c(app)
})