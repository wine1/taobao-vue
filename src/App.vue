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
