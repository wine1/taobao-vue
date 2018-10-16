<template>
 <div class="shop-container">
     <header>
        <p class="back" @click="back"></p>
         <p class="shop-name">白日梦</p>
         <ul>
             <li>
                 <p @click="toSearch" class="search">搜索</p>
             </li>
             <li>首页</li>
             <li>全部</li>
         </ul>
     </header>

     <div class="main">
       <goods-list></goods-list>
     </div>
 </div>
</template>

<script>

import goodsList from "@/components/GoodsList";
export default {
  data() {
    return {};
  },

   components: {
     goodsList,
   },

  //  computed: {},

  //  mounted: {},

  methods: {
    toSearch() {
      this.$router.push("/search");
    },
    back(){
      window.history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
.shop-container {
  text-align: left;
  header {
    background: #eee;
    padding: 1rem;
    .back {
      position: relative;
      width: 2rem;
      height: 2rem;
      background: url(/static/image/back45.png) no-repeat;
      background-size: contain;
    }
    .shop-name {
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    ul {
      li {
        display: inline-block;
        p {
          padding: 0.3rem 1rem 0.3rem 2.3rem;
          background-image: url(/static/image/taolive_icon_search_white.png);
          background-repeat: no-repeat;
          background-size: 1.2rem 1.2rem;
          background-position: 1rem center;
          background-color: rgba(#333, 0.6);
          border-radius: 2rem;
          font-size: 1.3rem;
          color: #fff;
        }
      }
    }
  }
  .main {
    padding-top: 1rem;
    background-color: #fff;
  }
}
</style>