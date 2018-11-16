<template>
 <div class="msgtipsContainer">
   <transition name="fade">
      <p v-if="show">{{msg}}</p>
   </transition>
 </div>
</template>

<script>
export default {
  data() {
    return {
      show: this.tips.show,
      msg: this.tips.msg
    };
  },
  props: ["tips"],

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
};
</script>
<style lang='scss' scoped>
.msgtipsContainer {
  p {
    position: absolute;
    padding: 0.5rem 1rem;
    left: 50%;
    top: 50%;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(-50%);
    transform: translateX(-50%);
    opacity: 1;
  }
}
</style>