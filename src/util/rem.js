function setRem() {
  let baseSize = 14; // 32
  const clientWidth = document.documentElement.clientWidth; // 750
  if (clientWidth >= 768) {
    baseSize = 16;
  }
  document.documentElement.style.fontSize = baseSize + "px";
}
setRem();
window.onresize = () => {
  setRem();
};
