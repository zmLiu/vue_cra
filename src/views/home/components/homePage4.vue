<template>
  <swiper-slide class="home-page4">
    <div class="content">
      <img class="img1" src="../../../assets/images/P4/p4_wz.png" alt="" />
      <div class="r-wrapper">
        <div class="nav">
          <a>HOME</a>
          <a>PLAY TO ERARN</a>
          <a>GAME PLAY</a>
          <a>NFTS ITEMS</a>
          <a>WHITEPAPER</a>
        </div>
        <div class="share-box">
          <div class="title">JOIN OUR COMMUNITY</div>
          <div class="btns">
            <a><img src="../../../assets/images/P4/p4_icon1.png" alt="" /></a>
            <a><img src="../../../assets/images/P4/p4_icon2.png" alt="" /></a>
            <a><img src="../../../assets/images/P4/p4_icon3.png" alt="" /></a>
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
      border-bottom: 1px solid #fff;
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
      a + a {
        margin-left: 10px;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
