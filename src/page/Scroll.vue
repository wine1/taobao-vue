<template>
  <div id="scroll">
    <div class="letter-wrapper">
      <ul class="content">
        <li v-for="item in letterArr">{{item}}</li>
      </ul>
    </div>
    <div class="city-wrapper">
      <ul class="content">
        <li v-for="item in cityArr">
          <p>{{item.letter}}</p>
          <ul>
            <li v-for="name in item.name">{{name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
// 写着写着又不会写了，就这样吧，等把better-scroll琢磨明白了再来接着写吧
export default {
  data() {
    return {
      letterArr: [],
      cityArr: {}
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$nextTick(() => {
      this.scrollRight = new BScroll(this.$refs.letter - wrapper, {
        click: true
      });
      this.scrollLeft = new BScroll(this.$refs.city - wrapper, {
        probeType: 3
      });
      this.scrollLeft.on('scroll',(pos)=> {
          this.scrollY = Math.abs(Math.round(pos.y));
      })
    });
    let letterArr = [];
    for (let i = 0; i < 26; i++) {
      letterArr.push(String.fromCharCode(65 + i));
    }
    this.letterArr = letterArr;
    this.getCity();
  },

  methods: {
    getCity() {
      this.$http.get(this.resource + "/api/city").then(res => {
        this.cityArr = res.data;
        this.cityArr.forEach((item, index) => {
          item.name = item.name.split(",");
        });
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
    margin-top: 15%;
    z-index: 10;
    .content {
      li {
        padding: 0.1rem 0;
        font-size: 1.1rem;
        color: #666;
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
        background: #fafafa;
        p {
          padding: 1rem;
        }
        ul {
          li {
            padding: 1rem 0 1rem 2rem;
            background: #fff;
            border-bottom: 1px solid #eee;
          }
        }
      }
    }
  }
}
</style>