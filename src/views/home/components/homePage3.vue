<template>
  <swiper-slide class="home-page3">
    <img
      v-if="activeIndex == 0"
      class="img3"
      src="../../../assets/images/P3/01/p3_man2.png"
    />
    <div
      class="title ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration=".5s"
      swiper-animate-delay=".2s"
    >
      <span class="font-light">
        Get your NFTs item by marketplace,summon your Legion and make money!
      </span>
    </div>
    <img
      class="left-float"
      src="../../../assets/images/P3/p3_chebian.png"
      alt=""
    />
    <div class="content" ref="content">
      <swiper class="page3-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="item-box">
          <img
            class="img1 ani2 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani2 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/01/man.png"
          />
          <img
            class="coming-soon1 ani2 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/01/wz.png"
          />
          <div class="text-box">
            <div
              class="text font-light ani2 ani"
              swiper-animate-effect="fadeInUp"
              swiper-animate-duration=".4s"
              swiper-animate-delay=".4s"
            >
              King of the beasts in the wild. Ryan is forthright, informal and
              heroic. He believes that there's nothing that can't be solved by a
              fight. Ryan was raised by wild animals and was able to communicate
              with beasts in the wild. It is said that when he was young, he
              challenged and defeated a hundred different ferocious beasts (the
              source of his scars) with his bare hands, earning the respect and
              recognition of all beasts in the wild. The biggest headache for
              Ryan is doing arithmetic.
            </div>
            <div
              @click="$store.commit('Set_ComingSoon', true)"
              swiper-animate-effect="fadeInUp"
              swiper-animate-duration=".4s"
              swiper-animate-delay=".6s"
              class="img7 ani2 ani"
            ></div>
          </div>
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/02/P3_02_man.png"
          />
          <img
            class="coming-soon ani2"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/03/P3_03_man.png"
          />
          <img
            class="coming-soon ani2"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/03/p3_03_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/04/P3_04_man.png"
          />
          <img
            class="coming-soon ani2"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/04/P3_04_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani2"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/05/P3_05_man.png"
          />
          <img
            class="coming-soon ani2"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/05/P3_05_wz.png"
          />
        </swiper-slide>
      </swiper>
      <div class="btn-bar">
        <div class="left-btn" @click="onNextPrev(-1)"></div>
        <div class="home-page3-pagination"></div>
        <div class="right-btn" @click="onNextPrev(1)"></div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide, Swiper, directive } from "vue-awesome-swiper";
import {
  swiperAnimateCache,
  swiperAnimate,
} from "@/assets/swiper2.animate1.0.3.min";

export default {
  name: "homePage3",
  props: {},
  components: { Swiper, SwiperSlide },
  data() {
    return {
      pageIndex: 0,
      activeIndex: 0,
      swiperOptions: {
        pagination: {
          el: ".home-page3-pagination",
        },
        speed: 500,
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
          slideChange: () => {
            this.activeIndex = this.swiper.activeIndex;
            console.log(this.swiper.activeIndex);
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  directives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    onNextPrev(num) {
      if (this.activeIndex == 0 && num == -1) return;
      if (this.activeIndex == 4 && num == 1) return;
      this.activeIndex += num;
      this.swiper.slideTo(this.activeIndex, 500, true);
    },
    setContentScale() {
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      let sx = winW / 1920;
      let sy = winH / 1000;
      let scale = sx > sy ? sy : sx;
      this.$refs.content.style.transform = "scale(" + scale + ")";
    },
    onWindowResize: function () {
      this.setContentScale();
    },
  },
  watch: {},
  created() {},
  async mounted() {
    await this.$nextTick();
    this.setContentScale();
    window.addEventListener("resize", this.onWindowResize);
  },
  updated() {},
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  destroyed() {},
};
</script>

<style scoped lang="less">
.home-page3 {
  width: 100%;
  height: 100%;
  background: url("./../../../assets/images/P3/bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.title {
  width: auto;
  font-weight: bold;
  color: #ffffff;
  margin-top: 15vh;
  position: relative;
  text-align: center;
  z-index: 100;
  font-size: 24px;
  text-shadow: 2px 2px 4px #4e5bab;

  span {
    //border-bottom: 1px solid #fff;
    padding-bottom: 10px;
    background: url("../../../assets/images/P3/03/p3_bg_lin2.png") no-repeat
      bottom center;
    background-size: 100% 1px;
  }
}

.content {
  width: 1200px;
  height: 700px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -600px;
  .btn-bar {
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-btn {
      cursor: pointer;
      width: 60px;
      height: 60px;
      background: url("../../../assets/images/P3/p3_jiantou1.png") no-repeat
        center;
      background-size: 100% auto;
    }

    .right-btn {
      cursor: pointer;
      width: 60px;
      height: 60px;
      background: url("../../../assets/images/P3/p3_jiantou1.png") no-repeat
        center;
      background-size: 100% auto;
      transform: rotate(180deg);
      transform-origin: center;
    }

    .home-page3-pagination {
      width: calc(100% - 200px);
      display: flex;
      align-items: center;
      justify-content: space-between;

      /deep/ span {
        width: 100px;
        height: 3px;
        background: #3b405c;
        opacity: 1;
        border-radius: 2px;

        &.swiper-pagination-bullet-active {
          background: #f7bb48;
        }
      }
    }
  }
}

.page3-swiper {
  height: 600px;
  width: 1200px;
}

.item-box {
  position: relative;

  .img1 {
    width: calc(100% - 50px);
    height: 450px;
    position: absolute;
    bottom: 0;
    left: 25px;
  }

  .img0 {
    width: calc(100% - 50px);
    height: 450px;
    position: absolute;
    bottom: 0;
    left: 25px;
  }

  .img2 {
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 100%;
  }

  .img4 {
    height: 30px;
    margin-bottom: 20px;
  }

  .img5 {
    height: 40px;
  }

  .top-img-box {
    position: absolute;
    top: 50px;
    right: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }

  .text-box {
    position: absolute;
    right: 50px;
    bottom: 20px;
    z-index: 100;
    width: 460px;

    .img6 {
      height: 60px;
    }

    .text {
      font-size: 18px;
      color: #fff;
      height: 200px;
      margin-bottom: 40px;
      padding-right: 40px;
    }

    .img7 {
      width: 300px;
      height: 60px;
      display: block;
      margin: auto;
      background: url("../../../assets/images/P3/01/p3_btn.png") no-repeat top
        center;
      background-size: 300px 120px;
      cursor: pointer;

      &:hover {
        background-position-y: bottom;
      }
    }

    .img8 {
      height: 50px;
      margin: 100px 0 100px 0;
    }
  }

  .coming-soon {
    position: absolute;
    top: 0;
    right: 0;
    height: 400px;
  }

  .coming-soon1 {
    position: absolute;
    top: 0;
    right: 0;
    height: 250px;
  }
}

.img3 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
}

.left-float {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
}
</style>
