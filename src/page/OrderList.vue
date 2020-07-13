<template>
 <div class="orderContainer">
   <header>
      <p><i class="back" @click="back"></i>订单列表</p>
   </header>
   <div class="list">
     <ul>
       <li v-for="item in list">
         <img :src="item.pic" alt="">
         <p>{{item.name}}</p>
         <p>{{item.goodamount}}</p>
       </li>
     </ul>
   </div>
    <div class="nothing" v-show="nothing">
      您还没有下过订单~
    </div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      list: [],
      nothing:false
    };
  },
  components: {},
  computed: {
    ...mapGetters(["username"])
  },
  mounted() {
    this.getorder();
  },
  methods: {
    getorder() {
      this.$http
        .get(this.resource + "/api/order/getOrderList", {
          params: {
            username: this.username
          }
        })
        .then(res => {
          this.list = res.data;
          console.log(this.list);
          console.log(1);
          if(this.list.length == 0) {
            this.nothing=true;
          }
        });
    },
    back() {
      window.history.go(-1)
    }
  }
};
</script>
<style lang='scss' scoped>
.orderContainer {
  header {
    position: relative;
    background: orangered;
    padding: 1rem 0;
    .back {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 2rem;
      height: 2rem;
      background: url(/static/image/back45.png) no-repeat;
      background-size: contain;
    }
    p {
    font-size: 1.6rem;
    color: #fff;
    }
  }
  .list {
    padding: 1rem;
    ul {
      li {
        margin: 1rem 0;
        overflow: hidden;
        img {
          float: left;
          width: 4rem;
          margin: 0 1rem;
        }
        p {
          text-align: left;
        }
      }
    }
  }
  .nothing {
    margin: 5rem 0;
  }
}
</style>