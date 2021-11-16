<template>
  <div class="float-box">
    <a target="_blank" v-bind:href="twitter"></a>
    <a target="_blank" v-bind:href="discord"></a>
    <a target="_blank" v-bind:href="telegram"></a>
    <a target="_blank" v-bind:href="facebook"></a>
    <a target="_blank" v-bind:href="reddit"></a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "floatBox",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["twitter", "telegram", "discord","facebook","reddit"]),
  },
  methods: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped lang="less">
.float-box {
  background: rgba(77, 82, 112, 0.8);
  border-radius: 12px 0 0 12px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 230px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  a {
    width: 32px;
    height: 32px;
    display: block;
    background: url("../../../assets/images/P1/p1_fuchuang_icon4.png") no-repeat;
    background-size: 160px 64px;
    &:hover {
      background-position-y: -32px;
    }
    &:nth-child(1) {
      background-position-x: 0;
    }
    &:nth-child(2) {
      background-position-x: -32px;
    }
    &:nth-child(3) {
      background-position-x: -64px;
    }
    &:nth-child(4) {
      background-position-x: -96px;
    }
    &:nth-child(5) {
      background-position-x: -128px;
    }
  }
}
</style>
