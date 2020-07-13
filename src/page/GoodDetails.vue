<template>
 <div class="goods-container">
     <header>
        <!-- <swiper class="swiper" :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="items in swiper" :key="items.id">
            <img :src='items.image'>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> -->
        <img :src="good.pic">
        <p class="back" @click="back"></p>
        <p class="to-cart" @click="toCart"></p>

     </header>
     <div class="main">
         <div class="msg">
           <p class="price">￥<span>{{good.price}}</span></p>
           <p class="name">{{good.name}}</p>
           <div class="wrap">
               <p class="send">免邮</p>
               <p class="sold">月销量<span>{{good.count}}</span>笔</p>
               <p class="address">杭州</p>
           </div>
         </div>
     </div>

     <footer class="good-footer">
         <ul>
             <li class="shop"><router-link :to="{path:'shop', query:{id: good.shopid}}">店铺</router-link></li>
             <li class="service">客服</li>
             <li class="save" :class="{saved:isSaved}" @click="save">{{saveWord}}</li>
             <li class="add-cart" @click="addGood"><p>加入购物车</p></li>
             <li class="buy-it"><p>立即购买</p></li>
         </ul>
     </footer>
     <msgTips v-if="show" :tips="tips"></msgTips>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapGetters, mapActions } from "vuex";
import msgTips from "@/components/MsgTips";
export default {
  data() {
    return {
      good: {},
      isSaved: false,
      saveWord: "收藏",
      show: false,
      tips: {
        msg: "商品已经在购物车等您咯~"
      }
    };
  },

  components: { msgTips },

  computed: {
    ...mapGetters(["username"])
  },
  mounted() {
    this.getGood();
  },

  methods: {

    getGood() {
      this.$http
        .get(this.resource + "/api/goodslist/details", {
          params: { goodsid: this.$route.query.id }
        })
        .then(res => {
          let data = res.data[0];
          this.good = data;
        });
    },
    addGood() {
      this.$http
        .post(this.resource + "/api/order/updateOrderList", {
          username: this.username,
          goodid: this.$route.query.id
        })
        .then(res => {
          if (res.status == 200) {
            this.show = true;
            setTimeout(()=>{
              this.show = false;
            },1500)
          }
        });
    },
    save() {
      this.isSaved = !this.isSaved;
      if (this.isSaved) {
        this.saveWord = "已收藏";
      } else {
        this.saveWord = "收藏";
      }
    },
    toShop() {
      this.$router.push("/shop");
    },
    toCart() {
      this.$router.push("/cart");
    },
    back() {
      window.history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
.goods-container {
  text-align: left;
  header {
    img {
      width: 100%;
      height: 20rem;
    }
    .to-cart {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 3rem;
      height: 3rem;
      background: url(/static/image/ic_flow_back_cart.png) no-repeat;
      background-size: contain;
    }
    .back {
      position: absolute;
      top: 1.7rem;
      left: 1rem;
      width: 2rem;
      height: 2rem;
      background: url(/static/image/back45.png) no-repeat;
      background-size: contain;
    }
  }
  .main {
    .msg {
      padding: 1rem;
      .price {
        color: orangered;
        font-size: 1.4rem;
        span {
          font-size: 1.8rem;
        }
      }
      .name {
        font-size: 1.6rem;
        margin: 1rem 0;
      }
      .wrap {
        display: flex;
        .send,
        .sold,
        .address {
          flex: 1;
          color: #666;
        }
        .address {
          text-align: right;
        }
      }
    }
  }
  .good-footer {
    ul {
      display: flex;
      position: fixed;
      bottom: 0;
      padding: 0.3rem 1rem 0.3rem 0;
      border-top: 1px solid #ddd;
      width: 100%;
      z-index: 1000;
      li {
        flex: 1;
        padding-top: 2.5rem;
        text-align: center;
        &.add-cart,
        &.buy-it {
          flex: 2;
          padding-top: 0.2rem;
          p {
            height: 4rem;
            width: 90%;
            line-height: 4rem;
            color: #fff;
            font-size: 1.6rem;
          }
        }
        &.add-cart {
          p {
            background-color: orange;
            border-radius: 2rem 0 0 2rem;
          }
        }
        &.buy-it {
          p {
            margin-left: -10%;
            background-color: orangered;
            border-radius: 0 2rem 2rem 0;
          }
        }
        &.shop {
          a {
            display: inline-block;
            height: 100%;
            padding-top: 2.5rem;
            margin-top: -2.5rem;
            background: url(/static/image/tf_search_shop_title.png) no-repeat;
            background-size: 2.2rem 2.2rem;
            background-position: center 0.5rem;
            color: #333;
          }
        }
        &.service {
          background: url(/static/image/shophead_wangwang_icon.png) no-repeat;
          background-size: 2.2rem 2.2rem;
          background-position: center 0.5rem;
        }
        &.save {
          background: url(/static/image/tf_favor_shop_favor.png) no-repeat;
          background-size: 2.2rem 2.2rem;
          background-position: center 0.5rem;
          &.saved {
            background: url(/static/image/tf_favor_shop_favorfill.png) no-repeat;
            background-size: 2.2rem 2.2rem;
            background-position: center 0.5rem;
          }
        }
      }
    }
  }
}
</style>