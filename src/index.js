import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

//windowにcreatejsとomikujiを読み込ませる
import window_load_createjs from 'window_load_createjs';
import window_load_omikuji from 'window_load_omikuji';

Vue.use(VueRouter);

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

new Vue({
  el: '#app',
  router: router
});
