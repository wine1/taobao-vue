<template>
 <div class="cpContaioner">
     <div class="wrap-input">
         <input type="password" v-model="oldpass" placeholder="请输入现在的密码">
         <input type="password" v-model="newpass" placeholder="请输入新密码">
         <input type="password" v-model="reNewpass" placeholder="再次确认新密码">
         <input type="button" @click="changePass" value="提交">
     </div>
      <transition name="fade">
        <p v-show="show" class="wran">{{wranMsg}}</p>
      </transition>
        
 </div>
 
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      oldpass: "",
      newpass: "",
      reNewpass: "",
      wranMsg: "",
      show: false
    };
  },

  //  components: {},

  computed: {
    ...mapGetters(["username"])
  },

  //  mounted: {},

  methods: {
    changePass() {
      let username = this.username;
      let oldpass = this.oldpass;
      let newpass = this.newpass;
      let reNewpass = this.reNewpass;
      if (newpass == reNewpass) {
        this.$http
          .post(this.resource + "/api/user/repass", {
            username: this.username,
            oldpass: this.oldpass,
            newpass: this.newpass
          })
          .then(res => {
            if (res.status == 200) {
              this.show = true;
              this.wranMsg = "修改密码成功";
              setTimeout(() => {
                this.show = false;
                this.newpass = "";
                this.reNewpass = "";
                this.oldpass = "";
                this.$router.push("/");
              }, 3000);
            }
          })
          .catch(err => {
            this.show = true;
              this.wranMsg = "修改密码失败，请重新输入";
              setTimeout(() => {
                this.show = false;
                this.newpass = "";
                this.reNewpass = "";
                this.oldpass = "";
              }, 3000);
          });
      } else {
        this.show = true;
        this.wranMsg = "两次新密码不一致";
        setTimeout(() => {
          this.show = false;
          this.newpass = "";
          this.reNewpass = "";
        }, 3000);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.cpContaioner {
  .wrap-input {
    width: 70%;
    margin: 3rem 15%;
    input {
      width: 100%;
      margin: 1rem 0;
      border: 0;
      border-bottom: 1px solid orangered;
      color: #666;
    }

    input[type="button"] {
      margin-top: 2rem;
      padding: 0.8rem 0;
      color: #fff;
      background-color: orangered;
    }
  }
  .wran {
    position: absolute;
    top: 38%;
    left: 50%;
    padding: 1rem;
    text-align: left;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    border-radius: 5px;
  }
}
</style>