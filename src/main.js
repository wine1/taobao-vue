// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件引入vuexstore,此处的index.js可以省略
import vuexStore from './store/index.js'
import 'babel-polyfill'

import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$http = axios
//引入公共样式
import "./style/_common.scss";


require('./mock.js');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: vuexStore, //在实例中添加vuexstore
  components: { App },
  template: '<App/>'
})
