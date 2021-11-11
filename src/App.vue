<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { loadingFn } from "@/assets/loading";

export default {
  created() {
    loadingFn();
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img {
  user-select: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@font-face {
  font-family: "font-light";
  src: url("./assets/fonts/Oxanium-Light.ttf") format("truetype");
}

.font-light {
  font-family: font-light, Avenir, Helvetica, Arial, sans-serif;
}
</style>
