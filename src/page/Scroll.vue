<template>
  <div id="scroll">
    <div class="letter-wrapper">
      <ul class="content">
        <li v-for="item in letterArr">{{item}}</li>
      </ul>
    </div>
    <div class="city-wrapper">
      <ul class="content">
        <li v-for="item in cityArr">{{item.cityname}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      letterArr: [],
      cityArr: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    //  this.$nextTick(()=> {
    //      this.scroll = new BScroll(this.$refs.wrapper,{})
    //  })
    let letterArr = [];
    for (let i = 0; i < 26; i++) {
      letterArr.push(String.fromCharCode(65 + i));
    }
    this.letterArr = letterArr;
    console.log(letterArr);
    this.getCity();
  },

  methods: {
    getCity() {
      this.$http.get(this.resource + "/api/city").then(res => {
        this.cityArr = res.data;
        console.log(res.data)
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#scroll {
  .letter-wrapper {
    position: fixed;
    width: 2rem;
    right: 0.5rem;
    margin-top: 20%;
    z-index: 10;
    .content {
      li {
        padding: 0.2rem 0;
        &.active {
          color: orangered;
        }
      }
    }
  }
  .city-wrapper {
      text-align: left;
      .content {
          li {
              padding: 1rem;
              background: #fafafa;
              border-bottom: 1px solid #eee; 
          }
      }
  }
}
</style>