<template>
  <swiper-slide class="home-page5">
    <div class="content">
      <img
        class="title ani"
        swiper-animate-effect="fadeInDown"
        swiper-animate-duration=".8s"
        src="../../../assets/images/P5/title.png"
        alt=""
      />
      <img
        class="logo ani"
        swiper-animate-effect="fadeInDown"
        swiper-animate-duration=".8s"
        swiper-animate-delay=".3s"
        src="../../../assets/images/P5/logo.png"
        alt=""
      />
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "homePage5",
  props: {},
  components: { SwiperSlide },
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
.home-page5 {
  width: 100%;
  height: 100%;
  background: rgba(59, 62, 87, 1);
  padding-top: 100px;
  .content {
    width: 1200px;
    max-width: 80%;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      height: 40px;
      margin-bottom: 10vh;
    }
    .logo {
      height: 25vh;
    }
  }
}
</style>
