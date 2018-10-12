<template>
 <div class="loginContainer">
     <header><router-link to="/"><img src="/static/image/new_logistic_back_arrow.png"></router-link>
        <p class="help">帮助</p>
    </header>
    <div class="main">
        <img src="/static/image/qrcode_icon.png" alt="">
        <form v-show="account" class="account">
            <div class="wrap">
                <input @change="disabled" type="text" v-model="username" placeholder="请输入淘宝账户">
            </div>
            <div class="wrap">
              <p @click="changeEye" :class="{see:canSee}"></p>
                <input @change="disabled" :type="type" v-model="password" placeholder="请输入密码">
                <button>忘记密码</button>
            </div>
        </form>
        <form v-show="tel" class="tel">
            <div class="wrap">
               <p>+86</p><input type="tel" v-model="number" maxlength="11"  placeholder="请输入电话号码">
            </div>
            <div class="wrap">
                <input @change="disabled" type="tel" maxlength="6" v-model="validate" placeholder="请输入验证码">
                <button>获取验证码</button>
            </div>
        </form>
            <button class="login" :class="{disable:disable}" @click="login()">登录</button>
        <div class="change">
            <p class="loginWay" @click="loginWay">{{loginMsg}}</p>
            <router-link to="/register" class="register">注册</router-link>
        </div>
    </div>
    <p class="notice" v-show="show">{{noticeMsg}}</p>
 </div>
</template>

<script>
export default {
  data() {
    return {
      account: true,
      tel: false,
      loginMsg: "账号密码登录",
      username: "",
      password: "",
      number: "",
      validate: "",
      canSee: false,
      type: "password",
      noticeMsg: "",
      show: false,
      disable: true
    };
  },

  components: {},

  mounted() {
    this.changeEye();
  },

  methods: {
    // 切换登录条的点击状态
    disabled() {
      if ((this.username && this.password) || (this.number && this.validate)) {
        this.disable = false;
      } else {
        this.disable = true;
      }
    },
    //切换密码可见状态
    changeEye() {
      this.canSee = !this.canSee;
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    //切换登录方式
    loginWay() {
      if (this.account === true) {
        this.account = false;
        this.tel = true;
        this.loginMsg = "短线验证码登录";
      } else {
        this.account = true;
        this.tel = false;
        this.loginMsg = "账号密码登录";
      }
    },
    //登录验证
    login() {
      let username = this.username;
      let password = this.password;
      let number = this.number;
      let validate = this.validate;
      // 前端验证
      if (this.tel && !number.match(/[1][0-9]{10}/)) {
        this.noticeMsg = "请输入正确的电话号码";
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 2000);
      } else if (this.tel && !validate.match(/[0-9]{6}/)) {
        this.noticeMsg = "请输入正确的验证码";
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 2000);
      } else if (
        (username != "" && password != "") ||
        (number.length == 11 && validate.length == 6)
      ) {
        //获取user信息
        this.$http
          .post("/api/users")
          .then(res => {
            let data = res.data.users;
            res.login = true;

            if (res.login == true) {
              this.noticeMsg = "登录成功";
              this.show = true;
              setTimeout(() => {
                this.show = false;
                this.$router.push("/");
              }, 2000);
            } else {
              this.noticeMsg = "请输入正确的账号和密码";
              this.show = true;
              setTimeout(() => {
                this.show = false;
                this.$router.push("/");
              }, 2000);
            }
          })
          .catch(() => {
            console.log("error");
            this.noticeMsg = "服务器错误";
            this.show = true;
            setTimeout(() => {
              this.show = false;
            }, 2000);
          });
      } else {
      }
    }
  },
  watch: {}
};
</script>
<style lang='scss' scoped>
@import "../style/_normalize.scss";
.loginContainer {
  text-align: left;
  height: 100vh;
  background-color: #fff;
  header {
    padding: 1rem;
    img {
      width: 1rem;
    }
    p {
      float: right;
    }
  }
  .main {
    width: 70%;
    margin: 2rem 15%;
    img {
      position: relative;
      width: 6rem;
      border-radius: 50%;
      left: 50%;
      margin-left: -3rem;
    }
    form {
      margin-top: 2rem;
      .wrap {
        border-bottom: 1px solid orangered;
        margin: 1.5rem 0;
        padding: 0.5rem 0 0.5rem 3rem;
        input {
          width: 60%;
          border: 0;
          background-color: #fff;
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
        button {
          float: right;
          border: 0;
          background: #fff;
          color: #666;
        }
      }
      &.account {
        .wrap:last-of-type {
          p {
            background: url(/static/image/aliuser_ic_visibility_off.png)
              no-repeat;
            background-size: 1.5rem 1rem;
            background-position: 0.5rem center;
            width: 2rem;
            height: 1rem;
            margin-left: -2.5rem;
            vertical-align: middle;
            float: left;
            &.see {
              background: url(/static/image/recommend2_eye.png) no-repeat;
              background-size: 1.5rem 1.5rem;
              background-position: 0.5rem center;
            }
          }
        }
      }
      &.tel {
        .wrap:first-of-type {
          p {
            float: left;
            margin-left: -3rem;
            padding-right: 0.6rem;
            background: url("/static/image/new_logistic_detail_map_infowindow_arrow.png")
              no-repeat;
            background-position: right center;
            background-size: 0.5rem 1rem;
            color: #666;
          }
        }
      }
    }
    .change {
      margin: 1rem 0;
      .loginWay {
        float: left;
      }
      .register {
        float: right;
        color: #333;
      }
    }
  }
  .notice {
    position: absolute;
    padding: 0.5rem 1rem;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(-50%);
    transform: translateX(-50%);
    opacity: 1;
  }
  .login {
    width: 100%;
    border: 0;
    color: #fff;
    border-radius: 2rem;
    line-height: 3.5rem;
    background: -webkit-linear-gradient(left, orange, orangered);
    &.disable {
      opacity: 0.5;
    }
  }
}
</style>