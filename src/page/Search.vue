<template>
 <div class="search-container">
    <header>
        <a class="back"></a>
        <div class="wrap-search">
            <input type="text" autofocus="true" placeholder="小包包">
        </div>
        <a class="search-btn">搜索</a>
    </header>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {}

  //  computed: {},

  //  mounted: {},

  //  methods: {}
};
</script>
<style lang='scss' scoped>
.search-container {
  height: 100%;
  padding: 1rem;
  text-align: left;
  background-color: #f1f1f1;
  header {
    overflow: hidden;
    .back {
      float: left;
      width: 2rem;
      height: 2rem;
      background: url(/static/image/icon_system_arrow_back.png) no-repeat;
      background-size: contain;
    }
    .wrap-search {
      display: inline-block;
      width: 60%;
      padding: 0.5rem 1rem;
      margin: 0 5%;
      background-image: url(/static/image/cam.png);
      background-repeat: no-repeat;
      background-size: 2rem 1.6rem;
      background-position: 90% center;
      background-color: #fff;
      border-radius: 2rem;
      input {
        border: 0;
      }
    }
    .search-btn {
      display: inline-block;
      padding: .4rem 1rem;
      color: #fff;
      
      background: linear-gradient(left, orange, orangered);
      border-radius: 2rem;
    }
  }
}
</style>