
import VueRouter from 'vue-router';

import index from '../pages/index/index.vue';
import member from '../pages/member/index.vue';
import cart from '../pages/cart/index.vue';
import list from '../pages/article/list.vue';
import detail from '../pages/article/detail.vue';
import photoList from '../pages/photo/index.vue';
import photoDetail from '../pages/photo/detail.vue';
import goodsList from '../pages/goods/index.vue';
import goodsDetail from '../pages/goods/detail.vue';
import login from '../pages/login/index.vue';

var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/index'},
    {path:'/index', component: index, name: 'index'},
    {path:'/member', component: member, name: 'member'},
    {path:'/cart', component: cart, name: 'cart'},
    {path:'/article', component: list, name:'articleList'},
    {path:'/article/:id', component: detail, name:'articleDetail'},
    {path:'/photo', component: photoList, name:'photoList'},
    {path:'/photo/:id', component:photoDetail, name:'photoDetail'},
    {path:'/goods', component: goodsList, name:'goodsList'},
    {path:'/goods/:id', component:goodsDetail, name:'goodsDetail'},
    {path:'/login', component: login},
  ]
})

export default router;