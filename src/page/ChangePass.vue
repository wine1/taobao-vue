<template>
 <div class="cpContaioner">
     <div class="wrap-input">
         <input type="password" v-model="oldpass" placeholder="请输入现在的密码">
         <input type="password" v-model="newpass" placeholder="请输入新密码">
         <input type="password" v-model="reNewpass" placeholder="再次确认新密码">
         <input type="button" @click="changePass" value="提交">
     </div>
        <p v-show="show" class="wran">{{wranMsg}}</p>
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
      wranMsg: ""
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
              this.wranMsg = "修改密码成功";
              this.newpass = "";
              this.reNewpass = "";
            }
          });
      } else {
        this.wranMsg = "两次新密码不一致";
        this.newpass = "";
        this.reNewpass = "";
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
    .wran {
      position: absolute;
      margin-top: -0.5rem;
      text-align: left;
      color: red;
    }
    input[type="button"] {
      margin-top: 2rem;
      padding: 0.8rem 0;
      color: #fff;
      background-color: orangered;
    }
  }
}
</style>