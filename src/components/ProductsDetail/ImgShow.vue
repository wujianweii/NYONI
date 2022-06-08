<template>
  <div class="magnifier-container">
    <!-- 标准区块 -->
    <div
      class="magnifier-mian"
      @mousemove="glassMoveHandle"
      @mouseleave="glassLeaveHandle"
    >
      <img ref="orginImg" :src="src" alt="" />
      <div ref="magnifierCover" class="magnifier-cover"></div>
    </div>
    <!-- 缩略图区块 -->
    <ul class="magnifier-img-list" @mousemove="imgMoveHandle">
      <li
        v-for="item in srcs"
        :key="item.src"
        :src="item.src"
        :class="{ active: item.src === src }"
      >
        <img :src="item.src" alt="" :data-src="item.src" />
      </li>
    </ul>
    <!-- 大图区块 -->
    <div ref="magnifierBig" class="magnifier-big"></div>
  </div>
</template>
<script>
export default {
  name: "magnifier",
  props: {
    model: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      src: "", // 当前选中第一张图片
      coversrc: "", // 放大镜遮罩图片
      srcs: [], // 需要发大的图片的路径
    };
  },
  mounted() {
    this.coversrc = require(`@/assets/products/${this.model}/1.jpg`);
    for (let i = 1; i < 6; i++) {
      this.srcs.push({
        src: require(`@/assets/products/${this.model}/${i}.jpg`),
      });
    }
    // console.log(this.srcs);
    this.src = this.srcs[0].src; //  默认选中第一张图片
    this.$nextTick(() => {
      // this.$refs.magnifierCover.style.backgroundImage = `url(${this.coversrc})`; // 设置遮罩图片
      this.$refs.magnifierBig.style.backgroundImage = `url(${this.srcs[0].src})`; //设置大图
    });
  },
  methods: {
    /* 鼠标移入事件 */
    imgMoveHandle: function (event) {
      let { src } = event.target.dataset;
      if (src) {
        let srcObj = this.srcs.find((c) => c.src === src);
        if (srcObj) {
          this.src = srcObj.src;
          this.$refs.magnifierBig.style.backgroundImage = `url(${srcObj.src})`;
        }
      }
    },
    /** 放大镜移入 **/
    glassMoveHandle: function (event) {
      // 鼠标的位置
      let x = event.clientX,
        y = event.clientY;
      // 获取元素
      let imgEl = this.$refs.orginImg.getBoundingClientRect();
      // 获取元素左上角的坐标
      let cx = imgEl.left,
        cy = imgEl.top;
      let coverEl = this.$refs.magnifierCover.getBoundingClientRect();
      let tx = x - cx - coverEl.width / 2;
      let ty = y - cy - coverEl.height / 2;
      let maxX = imgEl.width - coverEl.width;
      if (tx < 0) tx = 0;
      else {
        tx = tx > maxX ? maxX : tx;
      }
      let maxY = imgEl.height - coverEl.height;
      if (ty < 0) ty = 0;
      else {
        ty = ty > maxY ? maxY : ty;
      }
      this.$refs.magnifierCover.style.display = "block";
      this.$refs.magnifierBig.style.display = "block";
      this.$refs.magnifierBig.style.backgroundPosition = `${
        (tx / maxX) * 100
      }% ${(ty / maxY) * 100}%`;
      this.$refs.magnifierCover.style.left = `${tx}px`;
      this.$refs.magnifierCover.style.top = `${ty}px`;
    },
    /***移出事件*/
    glassLeaveHandle: function () {
      this.$refs.magnifierCover.style.display = "none";
      this.$refs.magnifierBig.style.display = "none";
    },
  },
};
</script>

<style lang="less" scoped>
.magnifier-container {
  // width: 400px;
  flex: 0 0 400px;
  border: 1px solid #fff;
  position: relative;
  .magnifier-mian {
    position: relative;
    width: 400px;
    height: 400px;
    margin-bottom: 15px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .magnifier-cover {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 120px;
      height: 120px;
      border: 1px solid #dee2e6;
      background: hsla(0, 0%, 100%, 0.5);
    }
  }
  .magnifier-big {
    position: absolute;
    display: none;
    top: 0;
    left: 400px;
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    background-size: 287%;
    z-index: 999;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
    list-style: none;
    display: flex;
    justify-content: left;
    li {
      margin-right: 5px;
      border: 1px solid #979797;
      img {
        display: block;
        width: 50px;
        height: 50px;
      }
    }
    li.active {
      border: 1px solid #64a8f0;
      // box-shadow: ;
    }
  }
}
</style>
