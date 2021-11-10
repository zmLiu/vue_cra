<template>
  <div class="home">
    <home-nav />
    <float-box />
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
      <home-page1 />
      <home-page2 />
      <home-page3 />
      <home-page4 />
    </swiper>
  </div>
</template>

<script>
import { Swiper, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import HomePage1 from "@/views/home/components/homePage1";
import HomeNav from "@/views/home/components/homeNav";
import HomePage2 from "@/views/home/components/homePage2";
import HomePage3 from "@/views/home/components/homePage3";
import FloatBox from "@/views/home/components/floatBox";
import {
  swiperAnimateCache,
  swiperAnimate,
} from "@/assets/swiper.animate1.0.3.min";
import HomePage4 from "@/views/home/components/homePage4";

export default {
  name: "Home",
  components: {
    HomePage4,
    FloatBox,
    HomePage3,
    HomePage2,
    HomeNav,
    HomePage1,
    Swiper,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        mousewheel: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
        },
        lazy: {
          loadPrevNext: true,
        },
        on: {
          init: function () {
            // eslint-disable-next-line no-undef
            swiperAnimateCache(this); //隐藏动画元素
            // eslint-disable-next-line no-undef
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            // eslint-disable-next-line no-undef
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false)x
  },
};
</script>
<style lang="less">
.home-swiper {
  height: 100vh;
}
</style>
