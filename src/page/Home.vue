<template>
 <div id="home"> 
   <header>
     <div class="search" @click="toSearch">
       <img src="/static/image/taolive_icon_search_white.png" alt="">
       <p>小裙子</p>
     </div>
   </header>
   <!-- 轮播图 -->
   <swiper class="swiper" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="items in swiper" :key="items.id">
         <img :src='items.bannerCover'>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <!-- 分类表开始 -->
  <ul class="classfify">
    <li><img src="/static/image/home_main_icon0.png" alt=""><p>天猫</p>
    </li>
    <li><img src="/static/image/home_main_icon1.png" alt=""><p>聚划算</p>
    </li>
    <li><img src="/static/image/home_main_icon2.png" alt=""><p>天猫国际</p>
    </li>
    <li><img src="/static/image/home_main_icon3.png" alt=""><p>饿了么</p>
    </li>
    <li><img src="/static/image/home_main_icon4.png" alt=""><p>天猫超市</p>
    </li>
    <li><img src="/static/image/home_main_icon5.png" alt=""><p>充值中心</p>
    </li>
    <li><img src="/static/image/home_main_icon6.png" alt=""><p>飞猪旅行</p>
    </li>
    <li><img src="/static/image/home_main_icon7.png" alt=""><p>领金币</p>
    </li>
    <li><img src="/static/image/home_main_icon8.png" alt=""><p>拍卖</p>
    </li>
    <li><img src="/static/image/home_main_icon9.png" alt=""><p>分类</p>
    </li>
  </ul>
  <!-- 分类表结束 -->
   <!-- 头条新闻轮播 -->
  <div class="head-line">
    <swiper class="swiper2" :options="swiperOption" ref="mySwiper">
    <!-- <swiper-slide v-for="items in headline" :key="items.id">
      <img :src='items.image'>
    </swiper-slide> -->
  </swiper>
  </div>
  <!-- 头条新闻轮播 -->
  <!-- 商品列表 -->
  <goods-list :goods="goods"></goods-list>
 <!-- 未登录时提示登录的条 -->
  <div class="login-bar" v-if="!username">
    <p>登录手机淘宝 打开精彩世界</p>
    <router-link to="/login">立即登录</router-link>
  </div>
 <!-- 未登录时提示登录的条 -->
  <!-- 弹窗 -->
  <pop :obj="obj"></pop>
  <!-- 弹窗 -->
 </div>
</template>

<script>
import Pop from "@/components/Pop";
import goodsList from "@/components/GoodsList";
import { swiper, swiperSlider } from "vue-awesome-swiper";
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Pop,
    swiper,
    swiperSlider,
    goodsList
  },
  data() {
    return {
      obj: {
        show: false,
        popMsg: ""
      },
      swiper: [],
      swiperOption: {
        autoplay: true,
        speed: 1000,
        direction: "horizontal",
        pagination: { el: ".swiper-pagination", clickable: true }
      },
      goods: []
    };
  },
  created() {},
  computed: {
    ...mapGetters(["username"])
  },
  mounted() {
    this.getPic();
    this.getGoods();
  },
  methods: {
    //获取轮播图
    getPic() {
      this.$http.get(this.resource+"/api/goodslist/swiper").then(res => {
        console.log('banner',res.data)
        this.swiper = res.data.data;
      });
    },
    toSearch() {
      this.$router.push("/search");
    },
    getGoods() {
      this.$http.get(this.resource + "/api/goodslist/getGoodsList").then(res => {  
        console.log('goodslist',res.data)
        this.goods = res.data.data;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#home {
  padding: 4.5rem 0 6rem;
  background-color: #f1f1f1;
  header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 0.5rem 1rem;
    background-color: orangered;
    text-align: center;
    z-index: 1000;
    .search {
      display: inline-block;
      width: 60%;
      img {
        display: inline-block;
        height: 2rem;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        width: 80%;
        border: 0;
        border-bottom: 1px solid #fff;
        background-color: orangered;
        color: #fff;
        text-align: left;
      }
      input:-ms-input-placeholder {
        color: #fff;
      }
      ::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
  .swiper {
    height: 13rem;
    img {
      display: block;
      width: 100%;
      height: 13rem;
    }
  }
  .classfify {
    position: relative;
    padding: 1rem 0;
    background-color: #fff;
    z-index: 100;
    li {
      display: inline-block;
      width: 19%;
      img {
        width: 90%;
      }
    }
  }
  .head-line {
    height: 5rem;
    margin: 1rem 0;
    background-color: #fff;
    background-image: url(/static/image/headline_taolongpic_logo.png);
    background-repeat: no-repeat;
    background-size: 10rem 2.3rem;
    background-position: 0.5rem center;
  }
  .login-bar {
    position: fixed;
    bottom: 5rem;
    width: 100%;
    padding: 0.5rem 0;
    background: rgba(#000, 0.5);
    overflow: hidden;
    p {
      float: left;
      margin-left: 1rem;
      line-height: 2.5rem;
      color: #fff;
    }
    a {
      display: block;
      float: right;
      margin-right: 1rem;
      padding: 0.5rem 1rem;
      background: linear-gradient(left, orange, orangered);
      color: #fff;
      border-radius: 2rem;
    }
  }
}
</style>