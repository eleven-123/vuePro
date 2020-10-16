
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* Mint-ui
// 全局导入 
import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 按需导入
//1.在.babelrc中配置
//2.导入需要的组件,如下：
*/
import { Header, Button, Tabbar, TabItem, Swipe, SwipeItem, Cell, Search, Navbar, Lazyload, Spinner, Badge, Checklist } from 'mint-ui';
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
Vue.component(Badge.name, Badge)
Vue.component(Checklist.name, Checklist)

Vue.use(Lazyload);

// 图片预览-vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview)

//路由
import router from './router/index';

// 时间格式插件
import moment from 'moment';
// 全局过滤器 - 时间格式化
Vue.filter('dateFormat',function(data, type='YYYY-MM-DD hh:mm:ss'){
  return moment(data).format(type)
})

// Vuex
import store from './store/index';

import app from './App.vue';
new Vue({
  el: '#app',
  router, // router: router
  render: c => c(app),
  store
})