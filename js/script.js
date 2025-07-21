window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".video video").forEach((video) => {
      video.muted = true; // 자동재생을 위해 음소거
      video.loop = true; // 무한반복
      video.play();
    });
  }, 5000);
});
