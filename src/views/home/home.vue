<template>
  <div class="home">
    <home-nav/>
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
      <home-page1/>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
import HomePage1 from "@/views/home/components/homePage1";
import HomeNav from "@/views/home/components/homeNav";
export default {
  name: "Home",
  components: {
    HomeNav,
    HomePage1,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        direction:'vertical',
        pagination: {
          el: '.swiper-pagination'
        },
        lazy:{
          loadPrevNext: true,
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)x
  }
};
</script>
<style lang="less">
.home-swiper{
  height: 100vh;
}
</style>
