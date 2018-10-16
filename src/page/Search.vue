<template>
 <div class="search-container">
    <header>
        <a class="back" @click="back"></a>
        <div class="wrap-search">
            <input type="text" autofocus="true" v-model="searchWords" placeholder="小包包" >
        </div>
        <a @click="search" class="search-btn">搜索</a>
    </header>
    <div class="main">
      <ul class="history-records">
        <li v-for="item in historys">{{item}}</li>
        <li @click="clearHistory">清除历史记录</li>
      </ul>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      historys: [],
      searchWords: ""
    };
  },

  components: {},

  //  computed: {},

  //  mounted: {},

  methods: {
    search() {
      let words = this.searchWords;
      if (words) {
        this.historys = this.historys.concat(words);
        this.historys.reverse();
      }
      this.searchWords = "";
      // search真正的逻辑部分
      // realSearch();
    },
    clearHistory() {
      this.historys = [];
    },
    back() {
      window.history.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
.search-container {
  height: 100%;
  text-align: left;
  background-color: #f1f1f1;
  header {
    padding: 1rem;
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
      width: 58%;
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
        width: 80%;
        text-shadow: 0px 0px 0px #000;
        -webkit-text-fill-color: transparent;
        caret-color:orangered;
      }
    }
    .search-btn {
      display: inline-block;
      padding: 0.4rem 1rem;
      color: #fff;
      background: linear-gradient(left, orange, orangered);
      border-radius: 2rem;
    }
  }
  .main {
    .history-records {
      margin: 1rem;
      border-radius: 12px;
      background-color: #fff;
      text-align: center;
      li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
        &:last-of-type {
          border: 0;
          color: #666;
        }
      }
    }
  }
}
</style>