<template>
  <div class="coming-soon-box" v-if="showComingSoon">
    <div class="back-btn" @click="$store.commit('Set_ComingSoon', false)">
      <img src="../../assets/images/comingsoon/back.png" alt="" />
    </div>
    <img class="text" src="../../assets/images/comingsoon/wz.png" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "comingSoon",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["showComingSoon"]),
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
.coming-soon-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  .back-btn {
    position: absolute;
    left: 10vw;
    top: 5vh;
    cursor: pointer;
    height: 30px;
    img {
      height: 100%;
    }
  }
}
.coming-soon-box {
  background: url("../../assets/images/comingsoon/bg.jpg") no-repeat center;
  background-size: cover;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 24px;
}
</style>
