<template>
 <div class="setupContainer">
  <header>
    <p @click="toMine">设置</p>
  </header>
  <div class="main">
    <ul>
      <li class="wrap-top"  @click="toMymsg">
        <div class="top">
          <img src="/static/image/ict_uik_avatar_normal.png" alt="">
          <p class="userName">{{username}}</p>
        </div>
        <p class="myMsg"></p>
      </li>
      <li @click="toAddress">我的收货地址</li>
      <li @click="toChangepass">账户与安全</li>
    </ul>
  </div>
  <footer>退出当前账户</footer>
  <router-view />
 </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },

  //  components: {},

   computed: {
     ...mapGetters(["username"])
   },

  //  mounted: {},

  methods: {
    toMine() {
      this.$router.push("/mine");
    },
    toMymsg() {
      //这里是路由跳转的两种写法
      // this.$router.push("/mymsg");
      this.$router.push({name: 'Mymsg'});
    },
    toAddress() {
      this.$router.push("/address");
    },
    toChangepass(){
      this.$router.push("/changepass");
    }
  }
};
</script>
<style lang='scss' scoped>
.setupContainer {
  text-align: left;
  header {
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100%;
    z-index: 999;
    p {
      display: inline-block;
      font-size: 1.8rem;
      color: #000;
      padding-left: 3rem;
      line-height: 4.5rem;
      background: url("/static/image/icon_system_arrow_back.png") no-repeat;
      background-size: 2rem 2rem;
      background-position: 1rem 1.1rem;
    }
  }
  .main {
    margin-top: 4rem;
    ul {
      li {
        padding: 1rem;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
    }
    .wrap-top {
      background-color: #fff;
      overflow: hidden;
      .top {
        float: left;
        margin-left: 1rem;
        img {
          width: 4.2rem;
          height: 4.2rem;
          border-radius: 50%;
        }
        p {
          display: inline-block;
          vertical-align: top;
          font-size: 2rem;
          line-height: 3rem;
          margin-left: 1rem;
        }
      }
      .myMsg {
        float: right;
        width: 3rem;
        height: 3rem;
        background: url("/static/image/code.png") no-repeat;
        background-size: 3rem 3rem;
        background-position: right center;
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    font-size: 1.8rem;
    color: #fff;
    background: linear-gradient(left, #ff7d08, orangered);
  }
}
</style>