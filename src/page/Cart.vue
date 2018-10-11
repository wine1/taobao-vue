<template>
 <div class="cartContainer">
    <header>
      <p>购物车(33)</p>
      <p class="manage">管理</p>
    </header>

    <div class="main">
      <div class="top">
        <p><span class="le">购物车</span>
        <span class="ri">管理</span></p>
        <p class="total">共有<span>33</span>件宝贝</p>
      </div>
      <div class="shop">
        <div class="shopTit">
          <i :class="{check:isCheck}" @click="checked" class="checkbox"></i>
          <p>随便一家店</p>
        </div>
        <div class="goods" v-for="item in items" :key="item.id">
          <i class="checkbox" :class="{check:item.isCheck}" @click="checked(item)"></i>
          <img :src="item.image" alt="">
          <div class="details">
            <p>{{item.name}}</p>
            <div class="wrap">
              <p class="count"><span>-</span>{{item.count}}<span>+</span></p>
              <p class="price">￥{{item.price}}</p>
            </div>
          </div>

        </div>
      </div>

    </div>

    <footer>
      <p class="footer-left">
        <i :class="{check:isCheck}" @click="checked" class="checkbox"></i><span>全选</span>
      </p>
      <div class="footer-right">
        <p>合计：<span>￥0</span></p>
        <p class="btn">结算(<span>0</span>)</p>
      </div>
    </footer>
 </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>

<script>
export default {
  name: "cart",
  data() {
    return {
      items: [],
      isCheck: false
    };
  },
  components: {},
  mounted() {
    this.getJson();
  },
  methods: {
    //从json文件获取数据
    getJson() {
      this.$http.get("/api/index").then(res => {
        let data = res.data.data;
        data.goods.forEach(item => {
          item.isCheck = false;
        });
        this.items = data.goods;
      });
    },
    //选择
    checked(item) {
      // if(this.isCheck === true) {
      //   this.isCheck = false;
      // }else {
      //   this.isCheck = true;
      // }
      item.isCheck = !item.isCheck;
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
    width: 1rem;
    height: 1rem;
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
    display: none;
    position: fixed;
    top: 0;
    height: 3rem;
    width: 100%;
    line-height: 3rem;
    z-index: 999;
    background: linear-gradient(left, #ff7d08, orangered);
    p {
      display: inline-block;
      color: #fff;
      &.manage {
        position: absolute;
        right: 1rem;
      }
    }
  }

  .main {
    text-align: left;
    margin-bottom: 7rem;
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
    .shop {
      position: relative;
      margin: 0 1rem;
      margin-top: -4rem;
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
          width: 5rem;
          height: 4rem;
          margin: 0 0.5rem;
          vertical-align: middle;
        }
        .details {
          width: 55%;
          display: inline-block;
          vertical-align: middle;
          .wrap {
            margin: 0.5rem;
            overflow: hidden;
            p {
              height: 1.3rem;
              line-height: 1.5rem;
              vertical-align: middle;
              &.count {
                float: right;
                border: 1px solid #ccc;
                span {
                  display: inline-block;
                  padding: 0 0.3rem;
                  &:first-of-type {
                    margin-right: 0.7rem;
                    border-right: 1px solid #ccc;
                  }
                  &:last-of-type {
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
}
</style>