import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import IndexView from './pages/index.vue'

const routes = [
  { path: '/', component: IndexView }
]

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

new Vue({
  el: '#app',
  router: router
});

