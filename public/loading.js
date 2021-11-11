(function () {
  setTimeout(() => {
    var imgs = document.querySelectorAll("img");
    var allLen = imgs.length;
    var count = 0;
    console.log(allLen, count);
    setProgress();
    imgs.forEach((img) => {
      img.onload = () => {
        count++;
        setProgress();
      };
    });
    function setProgress() {
      document.querySelector(".loading-active").style.height =
        count / allLen + "%";
    }
  }, 200);
})();
