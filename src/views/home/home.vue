<template>
  <div class="home">
    <home-nav ref="navBox" v-if="!isEnd"/>
    <float-box v-if="!isEnd"/>
    <!--    swiper-no-swiping-->
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
      <home-page1/>
      <home-page2/>
      <home-page3 ref="page3"/>
      <home-page5/>
      <home-page4 ref="page4"/>
    </swiper>
    <coming-soon/>
  </div>
</template>

<script>
import {Swiper, directive} from "vue-awesome-swiper";
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
import HomePage5 from "@/views/home/components/homePage5";
import ComingSoon from "@/views/comingSoon";

export default {
  name: "Home",
  components: {
    ComingSoon,
    HomePage5,
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
      //是否滑到最后
      isEnd: false,
      swiperOptions: {
        direction: "vertical",
        mousewheel: true,
        touchRatio: .5,
        speed: 1000,
        slidesPerView: "auto",
        simulateTouch: false,
        spaceBetween: 0,
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
          reachEnd: () => {
            this.isEnd = true;
          },
          fromEdge:()=>{
            this.isEnd=false;
          },
          slideChange: () => {
            // console.log(this.swiper.progress);
            // console.log(this.swiper.isEnd);
            this.isEnd = this.swiper.isEnd;
            this.navBox.activeItem = this.swiper.activeIndex;
            this.$refs.page3.pageIndex = this.swiper.activeIndex;
          },
        },
        // Some Swiper option/callback...
      },
    };
  }
  ,
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
    ,
  }
  ,
  mounted() {
    this.navBox = this.$refs.navBox;
    this.navBox.swiper = this.swiper;
    this.$refs.page4.swiper = this.swiper;
  }
  ,
}
;
</script>
<style lang="less">
.home-swiper {
  height: 100vh;
}
</style>
