
import VueRouter from 'vue-router';

import index from '../pages/index.vue';
import home from '../components/tabbar/home.vue';
import cart from '../components/tabbar/cart.vue';

import login from '../components/login.vue';

var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/home'},
    {
      path:'/index', 
      component: index,
      children: [
        {path:'/home', component: home},
        {path:'/cart', component: cart},
      ]
    },
    {path:'/login', component: login},
  ]
})

export default router;