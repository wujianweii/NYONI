<template>
  <div>
    <div class="relative">
      <video
        class="bgvid"
        src="../assets/video/NYONI.mp4"
        playsinline
        autoplay
        muted
        loop
      ></video>
    </div>
  </div>
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
  top: 0;
  left: 0;
}
</style>