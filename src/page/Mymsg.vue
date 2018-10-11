<template>
 <div class="mymsg-container">
      <header>
    <p @click="toSetup">个人资料</p>
  </header>
  <div class="main">
      <ul>
          <li @click="toChangephoto">
              <p>淘宝头像</p>
              <img src="/static/image/ict_uik_avatar_normal.png" alt="">
          </li>
          <li>会员名<span>wine</span></li>
          <li>淘宝昵称<span @click="toChangename">wine</span></li>
      </ul>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  //  components: {},

  //  computed: {},

  //  mounted: {},

  methods: {
    toSetup() {
      this.$router.push("/setup");
    },
     toChangephoto() {
      this.$router.push("/changephoto");
    },
     toChangename() {
      this.$router.push("/changename");
    }
  }
};
</script>
<style lang='scss' scoped>
.mymsg-container {
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
        background: url(/static/image/aliuser_ic_right_arrow.png) no-repeat;
        background-size: .8rem 1.5rem;
        background-position: 95% center;
        font-size: 1.6rem;
        &:nth-of-type(2) {
            background: #fff;
            span {
                float: right;
                margin-right: 4%;
            }
        }
         &:nth-of-type(3) {
            span {
                float: right;
                margin-right: 7%;
            }
        }
        p {
          display: inline-block;
          line-height: 4rem;
          font-size: 1.6rem;
        }
        img {
          float: right;
          margin-right: 2rem;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>