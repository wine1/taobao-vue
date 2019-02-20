// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件引入vuexstore,此处的index.js可以省略
import store from './store/index.js'
import 'babel-polyfill'

import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

//这里可以修改成localhost 或者自己电脑的ip
Vue.prototype.resource = 'http://172.30.66.29:3000'
//引入公共样式
import "./style/_common.scss";

//引入mock.js
require('./mock.js');

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //在实例中添加vuexstore
  components: { App },
  template: '<App/>'
})
