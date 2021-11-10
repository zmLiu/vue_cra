<template>
  <div class="nav-box">
    <template v-for="(item, index) in navList">
      <div :key="index" :class="[index === activeItem ? 'active' : '', 'item']">
        {{ item.name }}
      </div>
    </template>
    <a class="link-btn"></a>
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
        { name: "Home" },
        { name: "History" },
        { name: "NETS" },
        { name: "Contact" },
      ],
    };
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
.nav-box {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  height: 100px;
  font-style: italic;
  display: flex;
  align-items: center;
  color: #3d4857;
  font-size: 18px;
  text-shadow: 0 1px 2px #4e5bab;
  .item {
    padding: 0 14px;
    margin: 0 20px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .active {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    background: url("./../../../assets/images/P1/p1_sanjiaoxing.png") no-repeat
      left center;
    background-size: 8px auto;
  }
  .link-btn {
    width: 120px;
    height: 30px;
    display: block;
    background: url("./../../../assets/images/P1/p1_btn.png") no-repeat center;
    background-size: 100% auto;
    margin: 0 40px;
    cursor: pointer;
  }
}
</style>
