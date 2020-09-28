
import VueRouter from 'vue-router';

import index from '../pages/index/index.vue';
import cart from '../pages/cart/index.vue';
import login from '../pages/login/index.vue';

var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/index'},
    {path:'/index', component: index,},
    {path:'/cart', component: cart},
    {path:'/login', component: login},
  ]
})

export default router;