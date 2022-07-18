<template>
  <header class="relative">
    <video
      class="bgvid"
      src="../../assets/video/NYONI.mp4"
      playsinline
      autoplay
      muted
      loop
    ></video>
    <div class="header-title">
      <h1 class="preTitle">{{ $t("home.header.title1") }}</h1>
      <h2 class="title">
        {{ $t("home.header.title2") }}
      </h2>
    </div>
    <div class="header-content"></div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.bgvid {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: 1;
}
.header-content {
  width: 100vw;
  height: 100vh;
}
.header-title {
  position: absolute;
  top: 23rem;
  left: 20px;
  right: 20px;
  z-index: 5;
}

.preTitle {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 1.7rem;
  color: #fff;
}
.title {
  line-height: 57px;
  max-width: 770px;
  font-size: 48px;
  margin-bottom: 2.5rem;
  color: #fff;
}

@media screen and (min-width: 576px) {
  .header-title {
    left: 20px;
    right: 20px;
  }
}
@media screen and (min-width: 768px) {
  .header-title {
    left: 56px;
    right: 56px;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 34px;
    line-height: 36px;
  }
}
</style>
