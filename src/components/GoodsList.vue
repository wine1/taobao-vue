<template>
 <div class="goods-container">
    <ul class="goods-list">
        <router-link :to="{path: 'gooddetails', query:{id: good.id}}" v-for="good in goods" :key="good.id" tag="li">
            <img :src="good.image" alt="">
            <div class="msg">
            <p class="name">{{good.name}}</p>
                <p class="price">￥{{good.price}}</p>
                <p class="payfor">共有{{good.count}}人付款</p>
            </div>
        </router-link>
    </ul>
    <p class="tips" v-if="noMore">已经到底了哟~</p>
 </div>
</template>

<script>
export default {
  name: "goodsList",
  data() {
    return {
      goods: [],
      noMore: false
    };
  },
  props: {},

  //  components: {},

  //  computed: {},

  mounted() {
    this.getGoods();
  },

  methods: {
    getGoods() {
      this.$http.get("/api/index").then(res => {
        let data = res.data.data;
        console.log(data);
        this.goods = data.goods;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.goods-container {
  .goods-list {
    width: 100%;
    li {
      display: inline-block;
      width: 48%;
      margin: 0 1%;
      background-color: #fff;
      text-align: left;
      vertical-align: top;
      img {
        width: 100%;
        height: 18rem;
      }
      .msg {
        padding: 0.5rem;
        overflow: hidden;
        .name {
          margin-bottom: 0.5rem;
          font-size: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          flex-direction: column;
        }
        .price {
          float: left;
          color: orangered;
        }
        .payfor {
          float: left;
          margin: 0.2rem 0 0 1rem;
          font-size: 1rem;
        }
      }
    }
  }
}
</style> 