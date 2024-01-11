(() => {
  const loadTimeWrapper = document.querySelector(".header__page-load-time");

  if (loadTimeWrapper) {
    window.addEventListener("load", () => {
      const pageEnd = performance.mark("pageEnd");
      const loadTime = pageEnd.startTime / 1000;
      loadTimeWrapper.innerHTML += `${loadTime.toFixed(3)} секунды`;
    });
  }
})();
