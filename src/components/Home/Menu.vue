<template>
  <div class="header-bar">
    <a href="/"
      ><img src="@/assets/common/nyoni_white.png" alt="logo" class="logo"
    /></a>

    <ul class="header-bar-list">
      <li>
        <a href="/home">{{ $t("index.home") }}</a>
      </li>
      <li>
        <a href="/home">{{ $t("index.home") }}</a>
      </li>
      <li>
        <a href="/home">{{ $t("index.home") }}</a>
      </li>
      <li>
        <a href="/home">{{ $t("index.home") }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-bar {
  position: fixed;
  height: 40px;
  z-index: 5;
  left: 20px;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (min-width: 576px) {
  .header-bar {
    left: 16px;
    right: 16px;
    top: 16px;
  }
}
@media screen and (min-width: 768px) {
  .header-bar {
    left: 56px;
    right: 56px;
    top: 52px;
  }
}
.logo {
  width: 114px;
}
.header-bar-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
}
.header-bar-list > li > a:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 15px;
  right: 15px;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.4s cubic-bezier(0.75, 0, 0.2, 1);
  background-color: white;
}
.header-bar-list > li:hover > a:after {
  transform: scaleX(1);
  transform-origin: left center;
}
.header-bar-list > li > a {
  position: relative;
  z-index: 5;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  padding: 12px 15px;
}
@media (max-width: 990px) {
  .header-bar-list > li > a {
    padding: 12px 8px;
  }
}
</style>
