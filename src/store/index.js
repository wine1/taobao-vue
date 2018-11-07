import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // currentUser:'',
    // token:'',
    islogin: false,//是否登录,可以通过判断用户名是否为空
    imgPath: null, //头像地址
    username: null, //用户名
    cartId: null, //购物车id
    cartList: {}, //加入购物车的商品列表
  },
  getters: {
    username: state => state.username
  },
  mutations: {
    getUser(state, username) {
      state.username = username;
    },
  },
  actions: {
    getUser(store, username) {
      store.commit('getUser', username)
    }
  }

})

export default store
