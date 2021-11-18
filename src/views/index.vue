<template>
  <div>
    <home v-if="!isPhone" />
    <homePhone v-if="isPhone" />
  </div>
</template>

<script>
import home from "./home/home.vue";
import homePhone from "./homePhone/homePhone.vue";

export default {
  name: "index",
  components: { home, homePhone },
  data() {
    return {
      isPhone: false,
    };
  },
  methods: {
    onResize: function () {
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      if (winW < winH) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    },
  },
  created() {
    this.onResize();
    if (this.isPhone) {
      window.iframeLoaded = true;
    }
    window.addEventListener("resize", this.onResize);
  },
};
</script>
