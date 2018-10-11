<template>
 <div id="footer">
  <ul>
    <li><router-link to="/" class="footer-home"></router-link>
    </li>
    <li><router-link to="/weitao" class="footer-weitao"></router-link></li>
    <li><router-link to="/message" class="footer-message"></router-link></li>
    <li><router-link to="/cart" class="footer-cart"></router-link></li>
    <li><router-link to="/mine" class="footer-mine"></router-link></li>
  </ul>
 </div>
</template>

<script>
export default {
  name: "commonFooter",
  data() {
    return {};
  },
  props: [],

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>