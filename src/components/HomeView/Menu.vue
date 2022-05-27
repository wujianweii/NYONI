<template>
  <div class="menu relative">
    <div class="menu-head" v-show="isMobile">
      <img src="@/assets/common/nyoni_black.png" alt="logo" class="logo" />
      <div @click="switchMenu">
        <img src="@/assets/common/nyoni_black.png" alt="logo" class="logo" />
      </div>
    </div>
    <div v-show="isMobile" class="menu-head-block"></div>
    <el-menu
      :default-active="1"
      :mode="mode"
      @select="handleSelect"
      :collapse="isCollapse"
    >
      <el-menu-item index="0" v-show="!isMobile"
        ><img src="@/assets/common/nyoni_black.png" alt="logo" class="logo"
      /></el-menu-item>
      <el-menu-item index="1">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ElMenu, ElMenuItem } from "element-plus";
export default {
  components: {
    ElMenu,
    ElMenuItem,
  },
  data() {
    return {
      isMobile: true,
      isCollapse: true,
      mode: "vertical",
      // textColor: "#000",
    };
  },
  mounted() {
    this.changeMenu();
    window.addEventListener(
      "resize",
      () => {
        this.changeMenu();
      },
      false
    );
  },
  methods: {
    changeMenu() {
      this.isMobile = this.$base.isMobile();
      this.mode = this.isMobile ? "vertical" : "horizontal";
      this.isCollapse = this.isMobile ? true : false;
      // this.textColor = this.isMobile ? "#fff" : "#000";
      // console.log(this.isMobile);
    },
    switchMenu() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style>
.logo {
  height: 20px;
  margin: 18px 0;
}
.menu-head {
  display: flex;
  z-index: 999;
  padding: 0 20px;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  background: #fff;
}
.menu-head-block {
  height: 59px;
  width: 100%;
}
.menu .el-menu--vertical {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  padding-top: 60px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
}
.menu .el-menu--collapse {
  width: 0;
  overflow: hidden;
}
</style>
