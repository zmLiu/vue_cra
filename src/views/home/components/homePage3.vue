<template>
  <swiper-slide class="home-page3">
    <img
      v-if="activeIndex == 0"
      class="img3"
      src="../../../assets/images/P3/01/p3_man2.png"
    />
    <div class="title">
      <span>
        Get your NFTs item by marketplace,summon your Legion and make money!
      </span>
    </div>
    <img
      class="left-float"
      src="../../../assets/images/P3/p3_chebian.png"
      alt=""
    />
    <div class="content">
      <swiper class="page3-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="item-box">
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/01/man.png"
          />
          <div class="top-img-box">
            <img class="img4" src="../../../assets/images/P3/01/p3_01_pz.png" />
            <img
              class="img5"
              src="../../../assets/images/P3/01/p3_01_name.png"
            />
          </div>
          <div class="text-box">
            <img class="img6" src="../../../assets/images/P3/01/p3_01_zz.png" />
            <div class="text font-light">
              King of beasts in the wild. Forthright, informal, heroic. There's
              nothing that can't be solved by fighting. Ryan was raised by wild
              animals from an early age and was able to communicate with wild
              beasts in the wild. Legend has it that when he was young, he
              challenged and defeated a hundred different ferocious beasts (the
              source of his scars) with his bare hands, earning the respect and
              recognition of all animals in the wild. The biggest headache thing
              is arithmetic.
            </div>
            <img
              class="img7 ani"
              swiper-animate-effect="fadeInUp"
              swiper-animate-duration=".4s"
              swiper-animate-delay=".6s"
              src="../../../assets/images/P3/01/p3_btn.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/02/P3_02_man.png"
          />
          <img
            class="img9 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wenhao.png"
          />
          <img
            class="coming-soon ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/03/p3_03_man.png"
          />
          <img
            class="img9 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wenhao.png"
          />
          <img
            class="coming-soon ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/03/p3_03_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/04/P3_04_man.png"
          />
          <img
            class="img9 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wenhao.png"
          />
          <img
            class="coming-soon ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/04/P3_04_wz.png"
          />
        </swiper-slide>
        <swiper-slide class="item-box">
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".2s"
            src="../../../assets/images/P3/p3_bg.png"
          />
          <img
            class="img1 ani"
            swiper-animate-effect="zoomIn"
            swiper-animate-duration=".5s"
            src="../../../assets/images/P3/p3_kuang.png"
          />
          <img
            class="img2 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".8s"
            src="../../../assets/images/P3/05/P3_05_man.png"
          />
          <img
            class="img9 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/02/P3_02_wenhao.png"
          />
          <img
            class="coming-soon ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".5s"
            swiper-animate-delay=".4s"
            src="../../../assets/images/P3/05/P3_05_wz.png"
          />
        </swiper-slide>
      </swiper>
      <div class="btn-bar">
        <div class="left-btn"></div>
        <div class="home-page3-pagination"></div>
        <div class="right-btn"></div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide, Swiper, directive } from "vue-awesome-swiper";
import {
  swiperAnimateCache,
  swiperAnimate,
} from "@/assets/swiper.animate1.0.3.min";

export default {
  name: "homePage3",
  props: {},
  components: { Swiper, SwiperSlide },
  data() {
    return {
      activeIndex: 0,
      swiperOptions: {
        pagination: {
          el: ".home-page3-pagination",
        },
        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          nextEl: ".right-btn",
          prevEl: ".left-btn",
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
  margin-top: 80px;
  position: relative;
  text-align: center;
  z-index: 100;
  font-size: 24px;
  -webkit-text-stroke: 1px #4e5bab;
  text-stroke: 1px #4e5bab;
  span {
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
  }
}

.content {
  width: 1200px;
  max-width: 70%;
  height: 700px;
  max-height: 80vh;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  //background: rgba(0, 0, 0, 0.5);
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
  height: calc(100% - 100px);
}

.item-box {
  position: relative;

  .img1 {
    width: calc(100% - 50px);
    height: auto;
    position: absolute;
    bottom: 0;
    left: 25px;
  }

  .img0 {
    width: calc(100% - 50px);
    height: auto;
    position: absolute;
    bottom: 0;
    left: 25px;
  }

  .img2 {
    position: absolute;
    bottom: -50px;
    left: -30px;
    height: 100%;
  }

  .img4 {
    height: 30px;
    margin-bottom: 20px;
  }

  .img5 {
    height: 40px;
  }

  .img9 {
    width: 60px;
    position: absolute;
    bottom: 130px;
    left: 300px;
    z-index: 10;
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
    width: 400px;

    .img6 {
      height: 60px;
    }

    .text {
      font-size: 18px;
      color: #fff;
      overflow: auto;
      height: 200px;
      margin: 20px 0;
      padding-right: 20px;
    }

    .img7 {
      height: 70px;
      display: block;
      margin: auto;
    }

    .img8 {
      height: 50px;
      margin: 100px 0 100px 0;
    }
  }

  .coming-soon {
    position: absolute;
    bottom: 100px;
    right: 0;
    height: 400px;
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
