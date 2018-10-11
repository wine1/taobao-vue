<template>
    <div id="pop-container" v-show="show">
      <p>{{popMsg}}</p>
      <p>balabala</p>
      <div class="confirm" @click="closeTip">确认</div>
    </div>
</template>

<script>
export default {
  name: "pop",
  data() {
    return {
      show: this.obj.show,
      popMsg: this.obj.popMsg
    };
  },
  counted() {},
  props: ["obj"],
  methods: {
    closeTip() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss">
@import "../style/_normalize.scss";
#pop-container {
  position: absolute;
  width: 60%;
  height: 8rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  border-radius: 5px;
  z-index: 1000;
  p {
    color: #fff;
  }
  .confirm {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    color: #fff;
  }
}
</style>
