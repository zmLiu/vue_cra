<template>
  <div class="float-box">
    <a href=""
      ><img src="../../../assets/images/P1/p1_fuchuang_icon1.png" alt=""
    /></a>
    <a href=""
      ><img src="../../../assets/images/P1/p1_fuchuang_icon2.png" alt=""
    /></a>
    <a href=""
      ><img src="../../../assets/images/P1/p1_fuchuang_icon3.png" alt=""
    /></a>
  </div>
</template>

<script>
export default {
  name: "floatBox",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
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
  height: 180px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
}
</style>
