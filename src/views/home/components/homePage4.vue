<template>
  <swiper-slide class="home-page4">
    <div class="content">
      <img class="img1" src="../../../assets/images/P4/p4_wz.png" alt="" />
      <div class="r-wrapper">
        <div class="nav">
          <a @click="onClick(0)">HOME</a>
          <a @click="onClick(1)">PLAY TO ERARN</a>
          <a @click="onClick(1)">GAME PLAY</a>
          <a @click="onClick(2)">NFTS ITEMS</a>
          <a @click="$store.commit('Set_ComingSoon', true)">WHITEPAPER</a>
        </div>
        <div class="share-box">
          <div class="title">JOIN OUR COMMUNITY</div>
          <div class="btns">
            <a href="https://twitter.com/Era7_official" target="_blank"></a>
            <a href="https://discord.gg/jtFRzTv5Zw" target="_blank"></a>
            <a
              href="https://t.me/joinchat/aF3LUIC8PKVhNDA6"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "homePage4",
  props: {},
  components: { SwiperSlide },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClick: function (index) {
      this.swiper.slideTo(index, 1000, true);
    },
  },
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped lang="less">
.home-page4 {
  height: 400px;
  background: #1f2237;
  padding-top: 100px;

  .content {
    width: 1200px;
    max-width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .r-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .nav {
      display: flex;
      align-items: center;
      height: 80px;
      font-size: 14px;
      color: #fff;
      background: url("../../../assets/images/P3/03/p3_bg_lin2.png") no-repeat
        bottom center;
      background-size: 100% 1px;
      margin-bottom: 40px;

      a {
        padding: 0 30px;
        position: relative;
        cursor: pointer;

        &:hover {
          color: #60a7ff;
        }

        & + a:after {
          content: "";
          width: 1px;
          height: 10px;
          background: #565e9a;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) rotate(13deg);
          transform-origin: center;
        }
      }
    }

    .share-box {
      color: #b5bef7;

      .title {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    .btns {
      color: #b5bef7;
      display: flex;
      align-items: center;

      a {
        width: 64px;
        height: 64px;
        display: block;
        background: url("../../../assets/images/P1/p1_fuchuang_icon4.png")
          no-repeat;
        background-size: 192px 128px;

        &:hover {
          background-position-y: -64px;
          &:nth-child(2) {
            background-position-x: -64px;
          }
        }

        &:nth-child(1) {
          background-position-x: 0;
        }

        &:nth-child(2) {
          background-position-x: -64px;
        }

        &:nth-child(3) {
          background-position-x: -128px;
        }
      }

      a + a {
        margin-left: 10px;
      }
    }
  }
}
</style>
