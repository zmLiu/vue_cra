export function loadingFn() {
  // let $loading = document.querySelector(".loading-box");
  // $loading.parentNode.removeChild($loading);
  setTimeout(() => {
    let imgs = document.querySelectorAll("img");
    let allLen = imgs.length + 10;
    let count = 0;
    setProgress();
    imgs.forEach((item) => {
      let img = new Image();
      img.onload = () => {
        count++;
        setProgress();
      };
      img.src = item.src;
    });
    function setProgress() {
      let progress = (count / allLen) * 100;
      document.querySelector(".loading-active").style.height = progress + "%";
      if (progress == 100) {
        let $loading = document.querySelector(".loading-box");
        $loading.parentNode.removeChild($loading);
      }
    }
    let timer = setInterval(() => {
      if (window.iframeLoaded) {
        count += 10;
        setProgress();
        clearInterval(timer);
      }
    }, 500);
  }, 200);
}
