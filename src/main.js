
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';

import app from './app.vue';

new Vue({
  el: '#app',
  router, // router: router
  render: c => c(app)
})