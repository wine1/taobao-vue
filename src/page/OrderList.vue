<template>
 <div class="orderContainer">
   <div class="list">
     <ul>
       <li v-for="item in list">
         <img :src="item.pic" alt="">
         <p>{{item.name}}</p>
         <p>{{item.goodamount}}</p>
       </li>
     </ul>
   </div>

 </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      list: []
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
        .get(this.resource + "/api/order/getlist", {
          params: {
            username: this.username
          }
        })
        .then(res => {
          this.list = res.data;
          console.log(this.list);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.orderContainer {
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
}
</style>