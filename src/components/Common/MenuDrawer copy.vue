<template>
  <div class="relative">
    <!-- <div class="menu-drawer-header">
      <div class="flex space-between align-center"> -->
    <img
      src="@/assets/common/nyoni_white.png"
      alt="nyoni"
      class="menu-drawer-logo"
      v-show="menuSwitch"
    />
    <div
      class="menu-drawer-switch"
      :class="{ 'color-white': menuSwitch }"
      @click="menuSwitch = !menuSwitch"
    >
      switch
    </div>
    <!-- </div>
    </div> -->

    <div class="menu-drawer" :class="{ 'menu-drawer-open': !!menuSwitch }">
      <ul class="row">
        <li class="menu-drawer-li" @click="toRouter('home')">
          {{ $t("common.header.home") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuSwitch: 0, // 默认隐藏 0隐藏 1显示
    };
  },
  methods: {
    toRouter(data, params) {
      this.menuSwitch = 0;
      this.$router.push({
        name: data,
        params: params,
      });
    },
  },
};
</script>

<style>
.menu-drawer {
  transition: opacity 500ms ease;
  opacity: 0;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: block;
  color: #fff;
  overflow: hidden;
  will-change: transform;
  pointer-events: none;
  overflow: hidden;
}
.menu-drawer-switch {
  z-index: 10;
  position: fixed;
  top: 20px;
  right: 20px;
  height: 40px;
  line-height: 40px;
  color: #000;
  cursor: pointer;
}
.menu-drawer-logo {
  z-index: 10;
  position: fixed;
  top: 26px;
  left: 20px;
  width: 114px;
}
.color-white {
  color: #fff;
}
.menu-drawer-open {
  pointer-events: auto;
  opacity: 1;
}
.menu-drawer-li {
  flex: 0 0 100%;
  padding: 14px 20px;
}
.menu-drawer-li:hover {
  opacity: 0.6;
}
@media screen and (min-width: 768px) {
  .menu-drawer {
    display: none !important;
  }
  .menu-drawer-switch {
    display: none !important;
  }
}
</style>
