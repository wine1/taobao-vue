import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: window.sessionStorage.getItem('username'),
    token: window.sessionStorage.getItem('token'),
    islogin: false,//是否登录,可以通过判断用户名是否为空
    imgPath: null, //头像地址
    username: window.sessionStorage.getItem('username'), //用户名
    cartId: null, //购物车id
    cartList: {}, //加入购物车的商品列表
  },
  getters: {
    username: state => state.username
  },
  mutations: {
    getUser(state, username) {
      state.username = username;
      // state.user = data;
      window.sessionStorage.setItem('username',username);
    },
    SET_TOKEN(state,data) {
      state.token = data;
      window.sessionStorage.setItem('token',data);
    },
    GET_USER(state,data) {
      state.user = data;
      window.sessionStorage.setItem('user',data);
    },
  },
  actions: {
    getUser(store, username) {
      store.commit('getUser', username)
    },
    SET_TOKEN(store,id){
      store.commit('SET_TOKEN',id)
    }
  }

})

export default store
