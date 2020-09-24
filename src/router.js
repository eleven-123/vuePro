
import VueRouter from 'vue-router';

import index from './index.vue';
import login from '../components/login.vue';
import register from '../components/register.vue';

var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/index'},
    {
      path:'/index', 
      component: index,
      children: [
        { path:'login', component: login},
        {path:'register', component: register}
      ]
    },
    {path:'/login', component: login},
    {path:'/register', component: register}
  ]
})
// const routes = [
//   {path:'/', redirect:'/index'},
//   {path:'/index', component: '../index.vue'},
//   {path:'/login', component: '../../components/login.vue'},
//   {path:'/register', component: '../../components/register.vue'}
// ];

export default router;