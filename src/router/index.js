
import VueRouter from 'vue-router';

import index from '../pages/index/index.vue';
import member from '../pages/member/index.vue';
import cart from '../pages/cart/index.vue';
import list from '../pages/article/list.vue';
import detail from '../pages/article/detail.vue';
import login from '../pages/login/index.vue';

var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/index'},
    {path:'/index', component: index, name: 'index'},
    {path:'/member', component: member, name: 'member'},
    {path:'/cart', component: cart, name: 'cart'},
    {path:'/article', component: list},
    {path:'/article/:id', component: detail},
    {path:'/login', component: login},
  ]
})

export default router;