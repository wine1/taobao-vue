import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/page/Cart'
import Home from '@/page/Home'
import Weitao from '@/page/Weitao'
import Message from '@/page/Message'
import Mine from '@/page/Mine'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Setup from '@/page/Setup'
import Mymsg from '@/page/Mymsg'
import Changepass from '@/page/Changepass'
import Address from '@/page/Address'
import GoodDetails from '@/page/GoodDetails'
import ChangeName from '@/page/ChangeName'
import ChangePhoto from '@/page/ChangePhoto'
import Shop from '@/page/Shop'
import Search from '@/page/Search'
import OrderList from '@/page/OrderList'
import Order from '@/page/Order'
Vue.use(Router)

export default new Router({
  //规定被激活的路由的类名
  linkActiveClass: 'active',
  routes: [{
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/',
    name: 'Home',
    component: Home,

  }, {
    path: '/mine',
    name: 'Mine',
    component: Mine,

  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/message',
    name: 'Message',
    component: Message
  }, {
    path: '/weitao',
    name: 'Weitao',
    component: Weitao
  }, {
    path: '/setup',
    name: 'Setup',
    component: Setup
  }, {
    path: '/mymsg',
    name: 'Mymsg',
    component: Mymsg,
  }, {
    path: '/changepass',
    name: 'Changepass',
    component: Changepass,
  }, {
    path: '/address',
    name: 'Address',
    component: Address,
  }, {
    path: '/gooddetails',
    name: 'GoodDetails',
    component: GoodDetails,
  }, {
    path: '/changename',
    name: 'ChangeName',
    component: ChangeName,
  }, {
    path: '/changephoto',
    name: 'ChangePhoto',
    component: ChangePhoto,
  }, {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
  }, {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList,
  },{
    path:'/order',
    name:'Order',
    component:Order
  }]
})
