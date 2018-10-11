<template>
 <div class="registerContainer">
     <header><router-link to="/login"><img src="/static/image/new_logistic_back_arrow.png"></router-link>
        <p class="nav">快速注册</p>
        <p class="help">帮助</p>
     </header>
     <div class="main">
         <p class="region">国家地区<span>+86</span></p>
         <form>
             <div class="wrap">
                <p>+86</p><input type="text" placeholder="请输入手机号码">
             </div>
             <div class="wrap">
                 <input type="text" placeholder="请输入验证码">
                 <a>获取验证码</a>
             </div>
             <a class="register">同意协议并注册</a>
         </form>
         <p>已阅读并同意以下协议<span>《淘宝服务协议》</span><span>《隐私权政策》</span><span>《支付宝服务协议》</span></p>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "../style/_normalize.scss";
.registerContainer {
  height: 100vh;
  background-color: #fff;
  text-align: left;
  header {
    padding: 1rem;
    img {
      width: 1rem;
      vertical-align: middle;
    }
    .help {
      float: right;
    }
    .nav {
      display: inline-block;
      margin: 0 1rem;
      vertical-align: middle;
    }
  }
  .main {
    width: 70%;
    margin: 2rem 15%;
    .region {
      span {
        float: right;
        padding-right: 1rem;
        background: url("/static/image/new_logistic_detail_map_infowindow_arrow.png")
          no-repeat;
        background-position: right center;
      }
    }
    img {
      position: relative;
      width: 0.4rem;
    }
    form {
      margin-top: 2rem;
      .wrap {
        border-bottom: 1px solid orangered;
        margin: 1.5rem 0;
        padding: 0.5rem 0 0.5rem 3rem;
        p {
          float: left;
          margin: 0 0 0 -3rem;
          padding-right: .6rem;
          background: url("/static/image/new_logistic_detail_map_infowindow_arrow.png")
            no-repeat;
          background-position: right center;
          background-size: .5rem 1rem;
          color: #666;
        }
        input {
          width: 60%;
          border: 0;
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
        a {
          float: right;
          border: 0;
          background: #fff;
          color: #666;
        }
      }
      .register {
        display: inline-block;
        width: 100%;
        border: 0;
        color: #fff;
        border-radius: 2rem;
        line-height: 3.5rem;
        text-align: center;
        background: -webkit-linear-gradient(left, orange, orangered);
      }
    }

    p {
      margin-top: 1rem;
      font-size:1rem;
      color: #999;
      span {
        color: #333;
      }
    }
  }
}
</style>