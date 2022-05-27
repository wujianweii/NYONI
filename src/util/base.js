function toRouter(name, params = "", query = "") {
  this.$router.push({
    name,
    params,
    query,
  });
}
function isMobile() {
  let mobile = false;
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    // console.log('移动端');
    mobile = true;
  }
  if (document.body.clientWidth < 800) {
    mobile = true;
  }
  return mobile;
}

export default {
  isMobile,
  toRouter,
};
