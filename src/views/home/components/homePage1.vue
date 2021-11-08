<template>
  <swiper-slide class="home-page1">
    <img class="img2" src="./../../../assets/images/P1/p1_bgwz.png" alt="">
    <div class="content">
      <div class="line-div line-top">
        <div class="logo"></div>
      </div>
      <div class="line-div line-right"></div>
      <div class="line-div line-bottom"></div>
      <div class="line-div line-left"></div>
      <img class="img1" src="./../../../assets/images/P1/p1_man.png" alt="">
      <div class="right-box">
        <img src="./../../../assets/images/P1/p1_slogan.png" alt="">
        <div class="text font"></div>
        <img class="img-btn" src="./../../../assets/images/P1/p1_btn2.png" alt="">
      </div>
    </div>
  </swiper-slide>
</template>

<script>

import {SwiperSlide,} from 'vue-awesome-swiper'

export default {
  name: 'homePage1',
  props: {},
  components: {SwiperSlide},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
}
</script>

<style scoped lang="less">
.home-page1 {
  width: 100%;
  height: 100%;
  background: url("./../../../assets/images/P1/bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.content {
  width: 100%;
  max-width: 1200px;
  height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-div {
  position: absolute;
  z-index: 10;

  &.line-top {
    left: 25px;
    top: 0;
    width: calc(100% - 50px);
    height: 50px;
    background: url("./../../../assets/images/P1/p1_kuang_shang.png") no-repeat center;
    background-size: 100% auto;

    .logo {
      width: 145px;
      height: 50px;
      margin: auto;
      background: url("./../../../assets/images/P1/p1_logo.png") no-repeat center;
      background-size: auto 90%;
    }
  }

  &.line-bottom {
    left: 25px;
    bottom: 0;
    width: calc(100% - 50px);
    height: 50px;
    background: url("./../../../assets/images/P1/p1_kuang_xia.png") no-repeat center;
    background-size: 100% auto;
  }

  &.line-left {
    left: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background: url("./../../../assets/images/P1/p1_kuang_shuxian.png") no-repeat center;
    background-size: auto calc(100% - 60px);
  }

  &.line-right {
    right: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background: url("./../../../assets/images/P1/p1_kuang_shuxian.png") no-repeat center;
    background-size: auto calc(100% - 60px);
  }
}

.img1 {
  width: 1000px;
  max-width:60%;
  height: auto;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 0;
}

.img2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 700px;
}

.right-box {
  position: absolute;
  right: 50px;
  top: 50px;
  width:400px;
  max-width:30%;
  img{
    max-width:100%;
  }
  .img-btn{
    width: 60%;
    margin-left: 40%;
    cursor: pointer;
  }
}
</style>
