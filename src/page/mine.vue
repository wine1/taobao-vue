<template>
 <div class="mineContainer">
    <header>
      <div class="top">
        <img src="/static/image/ict_uik_avatar_normal.png" alt="">
        <p class="userName">wine</p>
      </div>
      <p class="setUp" @click="toSetup"></p>
    </header>
    <div class="main">
      <p class="tit">我的订单<span>查看全部订单</span></p>
      <ul class="list">
        <li>待付款</li>
        <li>待发货</li>
        <li>待收货</li>
        <li>待评价</li>
        <li>退款/售后</li>
      </ul>
    </div>

 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    toSetup() {
      this.$router.push("/setup");
    }
  }
};
</script>
<style lang='scss' scoped>
.mineContainer {
  header {
    position: fixed;
    top: 0;
    height: 10rem;
    width: 100%;
    padding-top: 1.2rem;
    line-height: 3rem;
    z-index: 999;
    background: linear-gradient(left, #ff7d08, orangered);
    p {
      display: inline-block;
      color: #fff;
    }
    .top {
      float: left;
      margin-left: 1rem;
      img {
        width: 4.2rem;
        height: 4.2rem;
        margin-top: 0.3rem;
        border-radius: 50%;
        border: 2px solid #fff;
      }
      p {
        vertical-align: top;
        font-size: 3rem;
        line-height: 3rem;
        margin-left: 1rem;
      }
    }
    .setUp {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      right: 1rem;
      background: url("/static/image/setup.png") no-repeat;
      background-size: 2.4rem 2.4rem;
    }
  }
  .main {
    position: relative;
    margin: 9rem 1rem 0 1rem;
    padding: .5rem 1rem;
    text-align: left;
    background: #fff;
    border-radius: 5px;
    z-index: 1000;
    .tit {
      font-size: 1.6rem;
      color: #333;
      span {
        float: right;
        color: #666;
        font-size: 1.3rem;
      }
    }
    .list {
      display: flex;
      li {
        flex: 1;
        padding-top: 5rem;
        color: #363636;
        text-align: center;
        &:first-of-type {
          background: url("/static/image/mytaobao_icon_pay.png") no-repeat;
          background-size: 2.8rem 2.8rem;
          background-position: center center;
        }
        &:nth-of-type(2) {
          background: url("/static/image/mytaobao_icon_send.png") no-repeat;
          background-size: 2.8rem 2.8rem;
          background-position: center center;
        }
        &:nth-of-type(3) {
          background: url("/static/image/mytaobao_icon_receive.png") no-repeat;
          background-size: 2.8rem 2.8rem;
          background-position: center center;
        }
        &:nth-of-type(4) {
          background: url("/static/image/mytaobao_icon_rate.png") no-repeat;
          background-size: 2.8rem 2.8rem;
          background-position: center center;
        }
        &:last-of-type {
          background: url("/static/image/mytaobao_icon_refund.png") no-repeat;
          background-size: 2.8rem 2.8rem;
          background-position: center center;
        }
      }
    }
  }
}
</style>