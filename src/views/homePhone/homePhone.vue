<template>
  <div class="test">
    <img class="test-img" src="../../assets/images/comingsoon/wz.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "homePhone",
};
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/comingsoon/bg.jpg);
  background-size: cover;
  position: fixed;
  overflow: hidden;
  align-items: center;
}
.test-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
