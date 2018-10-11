<template>
  <div id="app">

   
    <router-view/>
    <commonFooter v-show="isShow"></commonFooter>
  </div>
</template>

<script>
import commonFooter from "@/components/Footer";
export default {
  name: "App",
  components: {
    commonFooter
  },
  data() {
    return {
    }
  },
  computed: {
    isShow() {
      let route = this.$route.path
      if (route == '/' || route == '/cart' || route == '/mine' || route == '/message' || route == '/weitao') {
        return true
      } else {
        return false
      }
    }
  },
  // mounted:function() {
  //   this.currentPath = this.$route.path;
  //   this.isShow = (
  //     this.currentPath == "/" ||
  //     this.currentPath == "/cart" || 
  //     this.currentPath == "/mine"||
  //     this.currentPath == "/message"||
  //     this.currentPath == "/weitao"
  //   );
  //   console.log(this.isShow)
  // },
  // watch: {
  //   $route(to, from) {
  //     this.currentPath = to.path;
  //     this.isShow = (
  //       this.currentPath == "/" ||
  //       this.currentPath == "/cart" || 
  //       this.currentPath == "/mine"||
  //       this.currentPath == "/message"||
  //       this.currentPath == "/weitao"
  //     );
  //   }
  // }
};
</script>

<style lang='scss' scoped>
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
