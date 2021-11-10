<template>
  <swiper-slide class="home-page2">
    <img
      class="left-float"
      src="../../../assets/images/P2/p2_cebian.png"
      alt=""
    />
    <div class="content">
      <div class="row1-box">
        <div
          class="text-box font-light ani"
          swiper-animate-effect="fadeInLeft"
          swiper-animate-duration=".5s"
        >
          <div class="title">ABOUT GAME</div>
          <div class="text">
            Binance Smart Chain (BSC)-based Era7: Game of Truth combines TCG
            (trading card gaming) with fast-pace competitive gameplay while
            incorporating NFT-themed play-to-earn concepts.Players can enjoy the
            fun of fighting while collecting NFT cards and earning token
            rewards, play to earn and play for fun! Join the battlefield now and
            open the land of truth!
          </div>
        </div>
        <img
          swiper-animate-effect="fadeInDown"
          swiper-animate-duration=".5s"
          swiper-animate-delay=".5s"
          class="img1 ani"
          src="../../../assets/images/P2/p2_pic1.png"
          alt=""
        />
      </div>
      <div class="row2-box">
        <div
          class="img-box ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration=".5s"
          swiper-animate-delay=".5s"
        >
          <img src="../../../assets/images/P2/pc_pic3_man1.png" alt="" />
        </div>
        <div
          class="text-box ani"
          swiper-animate-effect="fadeInRight"
          swiper-animate-duration=".5s"
        >
          <img src="../../../assets/images/P2/p2_title.png" alt="" />
          <div class="text font-light">
            Era7: Game of Truth makes it easy to make money every day! Era7
            focuses on creating a financial system that combines blockchain with
            games to create an E-sports ecosystem. With up to 1000 different
            cards in the game, this will give players a 3-minute, one-game
            experience and rich Era token, ALP (a resource token for summoning
            functions) rewards, players can trade, regardless of your game
            technology or the size of your investment in NFTs, and you'll have a
            chance to earn money!
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "homePage2",
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
.home-page2 {
  width: 100%;
  height: 100%;
  background: url("./../../../assets/images/P2/bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.content {
  width: 1200px;
  max-width: 70%;
  height: 100%;
  margin: auto;

  .row1-box {
    display: flex;
    height: 40%;

    .text-box {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 14px;
      position: relative;
      z-index: 1;
      &:before {
        content: "";
        background: url("../../../assets/images/P2/bg2.jpg") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: rotate(180deg);
        transform-origin: center;
        width: 100%;
        height: 100%;
      }
      .title {
        border-bottom: 1px solid #ffdf52;
        line-height: 2;
        font-size: 28px;
        color: #ffdf52;
        margin-bottom: 20px;
      }

      .text {
        font-size: 18px;
        color: #fffbd2;
        line-height: 1.5;
      }
    }

    .img1 {
      width: calc(100% - 400px);
      height: 100%;
      object-fit: cover;
    }
  }

  .row2-box {
    display: flex;
    height: 60%;

    .img-box {
      width: 400px;
      background: url("../../../assets/images/P2/pc_pic3_bg.jpg") no-repeat
        center;
      background-size: cover;
      position: relative;
      img {
        width: 450px;
        height: auto;
        position: absolute;
        bottom: 0;
        left: -25px;
      }
    }
    .text-box {
      width: calc(100% - 400px);
      display: flex;
      flex-direction: column;
      background: url("../../../assets/images/P2/bg2.jpg") no-repeat;
      background-size: 100% 100%;
      img {
        width: 100%;
      }
      .text {
        flex: 1;
        font-size: 18px;
        color: #fffbd2;
        display: flex;
        align-items: center;
        padding: 14px;
        line-height: 2;
      }
    }
  }
}
.left-float {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
}
</style>
