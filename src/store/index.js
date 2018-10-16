import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex)

const state={
    //login: false,是否登录,可以通过判断用户名是否为空
    imgPath:null,//头像地址
    username:null,//用户名
    cartId:null,//购物车id
    cartList:{},//加入购物车的商品列表

}

export default new Vuex.Store({
    state,
	getters,
	actions,
	mutations,
})