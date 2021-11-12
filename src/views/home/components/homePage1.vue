<template>
  <swiper-slide class="home-page1">
    <img class="img2" src="./../../../assets/images/P1/p1_bgwz.png" alt="" />
    <div
      class="line-div line-top ani"
      swiper-animate-effect="an4"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    ></div>
    <div
      class="line-div line-left ani"
      swiper-animate-effect="an1"
      swiper-animate-duration="1s"
    ></div>
    <div
      class="line-div line-bottom ani"
      swiper-animate-effect="an2"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    ></div>
    <div
      class="line-div line-right ani"
      swiper-animate-effect="an3"
      swiper-animate-duration="1s"
      swiper-animate-delay="1s"
    ></div>
    <iframe ref="dragonBones" class="iframe"></iframe>
    <div class="content">
      <!-- <img class="img1" src="./../../../assets/images/P1/p1_man.png" alt="" /> -->
      <div class="right-box">
        <img
          class="ani"
          swiper-animate-effect="slideInDown"
          swiper-animate-duration=".5s"
          src="./../../../assets/images/P1/p1_slogan.png"
          alt=""
        />
        <div class="img-btn" @click="$store.commit('Set_ComingSoon', true)">
          <img
            class="ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".5s"
            src="./../../../assets/images/P1/p1_btn2.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mouse-tips">
      <img
        class="up downUp"
        src="../../../assets/images/P1/p1_fuchuang_shang.png"
        alt=""
      />
      <div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;Roll</span>
        <span>Switch</span>
      </div>
      <img
        class="down upDown"
        src="../../../assets/images/P1/p1_fuchuang_xia.png"
        alt=""
      />
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "homePage1",
  props: {},
  components: { SwiperSlide },
  data() {
    return {};
  },
  computed: {},
  methods: {
    initDragonBones: function () {
      let src = "./dragonbones_player/index.html?name=gmsm&playname=idle";
      this.$refs.dragonBones.src = src;
      this.$refs.dragonBones.onload = this.dragonBonesOnLoad;
    },
    dragonBonesOnLoad: function () {
      this.$refs.dragonBones.contentWindow["aniComplete"] =
        this.initDragonBonesComplete;
    },
    initDragonBonesComplete: function () {
      this.setDragonBonesScale();
    },
    setDragonBonesScale: function () {
      let sy = document.body.clientHeight / 960;
      this.$refs.dragonBones.contentWindow.setAniScale(sy >= 1 ? 1 : sy);
      window.iframeLoaded = true;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.initDragonBones();
    let thisObj = this;
    window.addEventListener('resize',() => {
      thisObj.setDragonBonesScale();
    }, false);
  },
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
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
  width: 80%;
  max-width: 1300px;
  height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-div {
  position: absolute;
  z-index: 10;
  opacity: 0;

  &.line-top {
    right: 75px;
    top: 50px;
    width: calc(100% - 150px);
    height: 50px;
    background: url("./../../../assets/images/P1/p1_kuang_xia.png") no-repeat
      center;
    background-size: 100% auto;
  }

  &.line-bottom {
    left: 75px;
    bottom: 50px;
    width: calc(100% - 150px);
    height: 50px;
    background: url("./../../../assets/images/P1/p1_kuang_xia.png") no-repeat
      center;
    background-size: 100% auto;
  }

  &.line-left {
    left: 50px;
    top: 0;
    width: 50px;
    height: 100%;
    background: url("./../../../assets/images/P1/p1_kuang_shuxian.png")
      no-repeat center;
    background-size: auto calc(100% - 160px);
  }

  &.line-right {
    right: 50px;
    bottom: 0;
    width: 50px;
    height: 100%;
    background: url("./../../../assets/images/P1/p1_kuang_shuxian.png")
      no-repeat center;
    background-size: auto calc(100% - 160px);
  }
}

.img1 {
  width: 1000px;
  max-width: 70%;
  height: auto;
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  left: 0;
}
.iframe {
  width: 100%;
  height: 110%;
  position: absolute;
  top: 0;
  left: -20%;
  border: none;
}

.img2 {
  position: absolute;
  top: 0;
  right: 50px;
  width: 700px;
}

.right-box {
  position: absolute;
  right: 50px;
  top: 50px;
  width: 35%;
  z-index: 100;
  //max-width: 40%;

  img {
    max-width: 100%;
  }

  .text {
    text-align: left;
    font-size: 16px;
    color: #fff;
    margin: 20px 0 60px 0;
  }

  .img-btn {
    width: 240px;
    height: 60px;
    display: block;
    cursor: pointer;
    margin: 20% 0 0 auto;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      width: 240px;
      height: 120px;
    }
    &:hover {
      img {
        top: -60px;
      }
    }
  }
}

.mouse-tips {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  .up,
  .down {
    width: 30px;
  }
  > div {
    height: 50px;
    width: 180px;
    display: flex;
    margin: 30px 0 10px 0;
    justify-content: space-between;
    align-items: center;
    background: url("../../../assets/images/P1/p1_fuchuang_shubiao.png")
      no-repeat center;
    background-size: auto 50px;
  }
}
@keyframes upDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(25px);
  }
}
@keyframes downUp {
  0% {
    transform: translateY(25px);
  }
  100% {
    transform: translateY(0);
  }
}
.upDown {
  animation-name: upDown;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.downUp {
  animation-name: downUp;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes an1 {
  0% {
    visibility: initial;
    transform: translateY(-100%);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    visibility: initial;
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes an2 {
  0% {
    visibility: initial;
    transform: translateX(-100%);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    visibility: initial;
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes an3 {
  0% {
    visibility: initial;
    transform: translateY(100%);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    visibility: initial;
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes an4 {
  0% {
    visibility: initial;
    transform: translateX(100%);
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    visibility: initial;
    transform: translateX(0%);
    opacity: 1;
  }
}
.an1 {
  animation-name: an1;
}
.an2 {
  animation-name: an2;
}
.an3 {
  animation-name: an3;
}
.an4 {
  animation-name: an4;
}
</style>
