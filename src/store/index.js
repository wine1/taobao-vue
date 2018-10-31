import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user:window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem('token'),
    UserImage: window.sessionStorage.getItem('UserImage'),
    //login: false,是否登录,可以通过判断用户名是否为空
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
    SET_TOKEN(state, data) {
      state.token = data;
      window.sessionStorage.setItem('token', data);
    },
    GET_USER(state, data) {
      state.user = data;
      window.sessionStorage.setItem('user', data);
    },
    SET_UserImage(state, value) {
      state.user = value;
      window.sessionStorage.setItem('UserImage', value);
    }
  },
  actions: {
    getUser(store, username) {
      store.commit('getUser', username)
    }
  }

})

export default store
