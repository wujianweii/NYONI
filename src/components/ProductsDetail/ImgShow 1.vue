<template>
  <div class="goods-image">
    <div
      class="large"
      :style="[
        { backgroundImage: 'url(' + images[currIndex] + ')' },
        {
          backgroundPosition: `${backgroundposition.left} ${backgroundposition.top}`,
        },
      ]"
      v-if="!hide"
    ></div>
    <div
      class="middle"
      ref="target"
      @mouseenter="hide = false"
      @mouseleave="hide = true"
    >
      <img :src="require('@/assets/products/' + model + '1.jpg')" alt="" />
      <div class="layer" :style="position"></div>
    </div>
    <ul class="small">
      <li
        v-for="(img, i) in images"
        :key="img"
        :class="{ active: i === currIndex }"
      >
        <img @mouseenter="currIndex = i" :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";
export default {
  name: "GoodsImage",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    model: {
      type: String,
      required: true,
    },
  },
  setup() {
    const currIndex = ref(0);
    const hide = ref(true);
    const target = ref(null);
    // 遮罩层位置坐标
    const position = reactive({
      left: 0,
      top: 0,
    });
    const backgroundposition = reactive({
      left: 0,
      top: 0,
    });
    const { elementX, elementY, isOutside } = useMouseInElement(target);
    watch([elementX, elementY, isOutside], () => {
      if (isOutside.value) return;
      // X方向坐标范围控制
      if (elementX.value < 100) {
        // 左侧
        position.left = 0;
      } else if (elementX.value > 300) {
        // 右侧
        position.left = 200;
      } else {
        // 中间
        position.left = elementX.value - 100;
      }
      // Y方向坐标范围控制
      if (elementY.value < 100) {
        // 左侧
        position.top = 0;
      } else if (elementY.value > 300) {
        // 右侧
        position.top = 200;
      } else {
        // 中间
        position.top = elementY.value - 100;
      }
      // 计算预览大图的移动的距离
      backgroundposition.left = -position.left * 2 + "px";
      backgroundposition.top = -position.top * 2 + "px";
      // 计算遮罩层的位置
      position.left = position.left + "px";
      position.top = position.top + "px";
      // 方法2
      // if (!v1[2]) {
      //   console.log(v1)
      //   if (v1[0] <= 300) {
      //     position.left = v1[0] - 100 + 'px'
      //     backgroundposition.left = -(v1[0] - 100) * 2 + 'px'
      //     if (v1[0] <= 100) {
      //       position.left = 0 + 'px'
      //       backgroundposition.left = 0 + 'px'
      //     }
      //   } else if (v1[0] > 300) {
      //     position.left = 200 + 'px'
      //   }
      //   if (v1[1] <= 300) {
      //     position.top = v1[1] - 100 + 'px'
      //     backgroundposition.top = -(v1[1] - 100) * 2 + 'px'
      //     if (v1[1] <= 100) {
      //       position.top = 0 + 'px'
      //       backgroundposition.top = 0 + 'px'
      //     }
      //   } else if (v1[1] > 300) {
      //     position.top = 200 + 'px'
      //   }
      // }
    });
    return { currIndex, target, position, backgroundposition, hide };
  },
};
</script>
<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid #000;
      }
    }
  }
}
.middle:hover {
  position: relative;
  cursor: move;
  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    left: 0;
    top: 0;
    position: absolute;
  }
}
</style>
