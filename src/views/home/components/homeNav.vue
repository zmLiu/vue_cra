<template>
  <div class="nav-container" :style="style">
    <div class="nav-box">
      <template v-for="(item, index) in navList">
        <div
          :key="index"
          :class="[index === activeItem ? 'active' : '', 'item']"
          @click="onClick(index)"
          :style="item.style"
        >
          {{ item.name }}
        </div>
      </template>
      <div
        @click="$store.commit('Set_ComingSoon', true)"
        class="link-btn"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeNav",
  props: {},
  components: {},
  data() {
    return {
      activeItem: 0,
      navList: [
        { name: "Home", style: { paddingTop: "2px" } },
        { name: "Gameplay" },
        { name: "NFTS", style: { paddingTop: "2px" } },
        { name: "Contact" },
      ],
    };
  },
  computed: {
    style() {
      let style = { height: "80px" };
      if (this.activeItem > 0) {
        style = {
          height: "50px",
          background: "rgba(0,0,0,.5)",
        };
      }
      return style;
    },
  },
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
.nav-container {
  position: fixed;
  right: 0;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-box {
  font-style: italic;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;

  .item {
    padding: 0 14px;
    margin: 0 20px;
    height: 28px;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .active {
    font-size: 18px;
    font-weight: bold;
    color: #2456e4;
    position: relative;
    z-index: 1;

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      transform: skew(-15deg);
      background: rgba(255, 255, 255, 0.58);
      border: 1px solid #ffffff;
    }
  }

  .link-btn {
    width: 150px;
    height: 26px;
    display: block;
    background: url("./../../../assets/images/P1/p1_btn.png") no-repeat top left;
    background-size: 100% 52px;
    margin: 0 40px;
    cursor: pointer;

    &:hover {
      background: url("./../../../assets/images/P1/p1_btn.png") no-repeat left
        bottom;
      background-size: 100% 52px;
      //background-position-x: 30px;
    }
  }
}
</style>
