
import Vue from 'vue';
import app from './app.vue';

import VueRouter from 'vue-router';
import index from './index.vue';
import login from '../components/login.vue';
import register from '../components/register.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes:[
    {path:'/', redirect:'/index'},
    {path:'/index', component: index},
    {path:'/login', component: login},
    {path:'/register', component: register}
  ]
})
new Vue({
  el: '#app',
  router,
  render: c => c(app)
})