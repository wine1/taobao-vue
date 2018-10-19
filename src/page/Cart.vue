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
      <div class="list">
        <div class="shop" v-for="shop in shops">
          <div class="shopTit">
            <i :class="{check:isCheck}" class="checkbox"></i>
            <p>{{shop.shopname}}</p>
          </div>
          <div class="goods" v-for="good in shop.good" :key="good.id">
            <i class="checkbox" :class="{check:good.isCheck}" ></i>
            <img :src="good.image" alt="">
            <div class="details">
              <p>{{good.goodname}}</p>
              <div class="wrap">
                <p class="count"><span>-</span>{{good.count}}<span>+</span></p>
                <p class="price">￥{{good.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p class="footer-left">
        <i :class="{check:isCheck}" class="checkbox"></i><span>全选</span>
      </p>
      <div class="footer-right">
        <p>合计：<span>￥0</span></p>
        <p class="btn">结算(<span>0</span>)</p>
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
      allCount: '0',
      headerShow: false,
      shops: [],
      isCheck: false,
      popShow: false,
      isCheckAll: false,
      isCheck: false,
    };
  },
  components: {},
  computed: {
    // ...mapGetters(["shopList"]),
    // ...mapGetters(["cartProducts"])
    allCount() {

    }
  },
  mounted() {
    this.getJson();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //从json文件获取数据
    getJson() {
      this.$http.get("/api/shops").then(res => {
        let shops = res.data.shop;
        this.shops = shops;
        console.log(shops);
      });
    },
    //选择
    // checked(item) {
    //   item.isCheck = !item.isCheck;
    // }
    // 滚动事件
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 100) {
        this.headerShow = true;
      } else {
        this.headerShow = false;
      }
    }
  },
  watch: {}
};
</script>
<style lang='scss' scoped>
@import "../style/_normalize.scss";
.cartContainer {
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
    background-color: #efefef;
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
      margin-top: -4rem;
      .shop {
        position: relative;
        margin: 1rem;
        background: #fff;
        border-radius: 6px;
        padding: 0.6rem;
        .shopTit {
          p {
            display: inline-block;
            vertical-align: middle;
          }
        }
        .goods {
          margin: 1rem 0;
          input {
            float: left;
          }
          img {
            display: inline-block;
            width: 6rem;
            height: 5rem;
            margin: 0 0.5rem;
            vertical-align: top;
          }
          .details {
            width: 55%;
            display: inline-block;
            vertical-align: middle;
            .wrap {
              margin: 0.5rem;
              overflow: hidden;
              p {
                height: 1.8rem;
                line-height: 2rem;
                vertical-align: middle;
                &.count {
                  float: right;
                  width: 6rem;
                  border: 1px solid #ccc;
                  text-align: center;
                  span {
                    padding: 0 0.5rem;
                    &:first-of-type {
                      float: left;
                      margin-right: 0.7rem;
                      border-right: 1px solid #ccc;
                    }
                    &:last-of-type {
                      float: right;
                      margin-left: 0.7rem;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
                &.price {
                  float: left;
                  color: orangered;
                }
              }
            }
            p {
              vertical-align: middle;
            }
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