<template>
 <div class="cartContainer">
   <transition name='fade'>
    <header v-show="headerShow">
      <p>购物车{{allCount}}</p>
      <p class="manage">管理</p>
    </header>
   </transition>

    <div class="main">
      <div class="top">
        <p><span class="le">购物车</span>
        <span class="ri">管理</span></p>
        <p class="total">共有{{allCount}}件宝贝</p>
      </div>
      <ul class="list">
        <li v-for="item in cart" :key="item.id">
          <p class="checkbox" :class="{check:item.isCheck}"  @click="checked(item)"></p>
          <img :src="item.pic" alt="">
          <div class="right">
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
            <p class="amount">{{item.goodamount}}</p>
          </div>
        </li>
      
      </ul>
    </div>

    <footer>
      <p class="footer-left">
        <i :class="{check:isCheckAll}" class="checkbox" @click="checkall()"></i><span>全选</span>
      </p>
      <div class="footer-right">
        <p>合计：<span>￥{{allprice}}</span></p>
        <p class="btn" @click="settlement">结算({{allprice}})</p>
      </div>
    </footer>

  <div class="pop-count" v-show="popShow">
    balabala
  </div>
 </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      allCount: "0",
      headerShow: false,
      shops: [],
      isCheck: false,
      popShow: false,
      isCheckAll: false,
      cart: [],
      allprice: 0
    };
  },
  components: {},
  computed: {
    ...mapGetters(["username"])
  },
  mounted() {
    this.getCart();
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getCart() {
      this.$http
        .get(this.resource + "/api/carts/getcart", {
          params: { username: this.username }
        })
        .then(res => {
          res.data.forEach(item => {
            item.isCheck = false;
          });
          this.cart = res.data;
          console.log(this.cart);
          this.allCount = this.cart.length;
        });
    },
    //选择
    checked(item) {
      item.isCheck = !item.isCheck;
      this.price();
    },
    //全选
    checkall() {
      this.isCheckAll = !this.isCheckAll;
      this.cart.forEach(item => {
        item.isCheck = !item.isCheck;
      });
      this.price();
    },
    // 计算价格
    price() {
      var price = 0;
      this.cart.forEach(item => {
        if (item.isCheck) {
          price += parseInt(item.price);
        }
      });
      this.allprice = price;
    },
    // 滚动事件
    // handleScroll() {
    //   var scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   if (scrollTop > 100) {
    //     this.headerShow = true;
    //   } else {
    //     this.headerShow = false;
    //   }
    // },
    settlement() {
      let time = Date.parse(new Date());
      console.log(time)
      this.cart.forEach(item => {
        if (item.isCheck) {
          this.$http
            .post(this.resource + "/api/order/savelist", {
              username: this.username,
              goodid: item.id,
              goodamount: item.goodamount,
              orderid: time
            })
            .then(res => {
              console.log(res.data);
            });
        }
      });
    }
  },
  watch: {}
};
</script>
<style lang='scss' scoped>
@import "../style/_normalize.scss";
.cartContainer {
  height: 100%;
  background-color: #efefef;
  .checkbox {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    vertical-align: middle;
    &.check {
      background: url("/static/image/round_check_fill.png") no-repeat;
      background-size: cover;
      // border: 0;
    }
  }
  header {
    position: fixed;
    top: 0;
    height: 4.5rem;
    width: 100%;
    line-height: 4.5rem;
    z-index: 999;
    background: linear-gradient(left, #ff7d08, orangered);
    p {
      display: inline-block;
      color: #fff;
      font-size: 1.8rem;
      &.manage {
        position: absolute;
        right: 1rem;
      }
    }
  }

  .main {
    text-align: left;
    margin-bottom: 9rem;
    padding-bottom: 1rem;
    .top {
      position: relative;
      top: 0;
      left: 0;
      padding: 1rem 1rem 5rem 1rem;
      background: linear-gradient(left, #ff7d08, orangered);
      overflow: hidden;
      text-align: left;
      p {
        position: relative;
        .le {
          display: inline-block;
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          vertical-align: text-bottom;
        }
        .ri {
          display: inline-block;
          position: absolute;
          right: 1rem;
          bottom: 0.3rem;
          color: #fff;
          vertical-align: text-bottom;
        }
      }

      .total {
        color: #fff;
      }
    }
    .list {
      position: relative;
      margin: -3.5rem 1rem;
      border-radius: 8px;
      background-color: #fff;
      li {
        position: relative;
        padding: 1rem;
        overflow: hidden;
        img {
          width: 5rem;
          vertical-align: middle;
        }
        .right {
          position: absolute;
          margin: 0 1rem 0 8rem;
          top: 1rem;
          .price {
            color: #ff7d08;
          }
          .amount {
            float: right;
            margin: -1rem 1rem 0 0;
          }
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 5rem;
    height: 4.5rem;
    width: 100%;
    left: 0;
    padding: 0.5rem 0;
    box-sizing: border-box;
    line-height: 3.5rem;
    border-top: 1px solid #eee;
    background: #fff;
    overflow: hidden;
    .footer-left {
      float: left;
      margin-left: 0.5rem;
      span {
        margin-left: 0.3rem;
        vertical-align: middle;
      }
    }
    .footer-right {
      float: right;
      margin-right: 0.5rem;
      p {
        display: inline-block;
        span {
          color: orangered;
        }
        &.btn {
          padding: 0 0.5rem;
          background-color: orangered;
          border-radius: 3rem;
          color: #fff;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .pop-count {
    position: absolute;
    background-color: #000;
    padding: 2rem;

    top: 50%;
    left: 50%;
    animation: pop 0.5s linear;
  }
  @keyframes pop {
    0% {
      transform: scale(0.5);
    }
    20% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>