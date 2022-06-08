<template>
  <div class="index-group-box">
    <!-- 右边滑动箭头 -->
    <div class="scrollX" @click="groupScroll" v-if="arrowShow">
      <img v-if="direction === 'left'" src="../../assets/icon/arrow-left.svg" />
      <img v-else src="../../assets/icon/arrow-right.svg" />
    </div>
    <!-- 卡⽚ -->
    <div class="index-group-boxIn" ref="groupBoxRef">
      <div
        v-for="item in groupInfo"
        :key="item.id"
        ref="groupCardRef"
        class="group-card"
      >
        <div class="card-name">
          名称
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, onMounted, watchEffect } from "vue";
export default defineComponent({
  name: "scroll",
  setup() {
    const groupInfo = ref([]); // 卡片list
    const direction = ref("right"); // 默认箭头向右
    const arrowShow = ref(false); // 滚动箭头是否显示
    const groupBoxRef = ref(null); // 获取外层卡⽚ref
    const groupCardRef = ref(null); // 获取卡⽚ref
    const scrollPosition = reactive({
      left: 0,
      top: 0,
    }); // 滚动位置

    // 获取卡片列表
    const getMyGroup = async () => {
      const data = [
        {
          id: 1,
          name: "卡片1",
        },
        {
          id: 2,
          name: "卡片2",
        },
        {
          id: 3,
          name: "卡片3",
        },
        {
          id: 4,
          name: "卡片4",
        },
        {
          id: 5,
          name: "卡片5",
        },
      ];
      groupInfo.value = data;
    };

    // 获取卡⽚宽度，第⼀个参数是卡⽚个数，默认是整个数组，第⼆个参数是剩余的margin
    const getWidth = (num = groupInfo.value.length, restMargin = 16) => {
      // 如果没有内容就返回0
      if (!groupCardRef.value) return 0;
      return num * (groupCardRef.value.offsetWidth + 16) - restMargin;
    };
    // 改变滚动⽅向
    const changeArrow = (scrollLeft) => {
      // 默认获取scoll部分整个宽度
      const getScrollWidth = getWidth();
      // 获取剩余宽度
      const restWidth = getScrollWidth - scrollLeft;
      if (restWidth <= groupBoxRef.value.offsetWidth) {
        direction.value = "left";
      } else if (scrollLeft === 0) {
        direction.value = "right";
      }
    };
    // ⿏标点击滚动
    const groupScroll = async () => {
      // 获取滚动宽度
      const getMoveWidth = getWidth(3, 0);
      if (direction.value === "right") {
        groupBoxRef.value.scrollLeft += getMoveWidth;
      } else {
        groupBoxRef.value.scrollLeft -= getMoveWidth;
      }
      // 滚动需要时间才能获取最新的距离
      setTimeout(() => {
        changeArrow(groupBoxRef.value.scrollLeft);
      }, 500);
    };

    // 判断arrow是否展示
    const checkArrowShow = () => {
      arrowShow.value =
        getWidth() > groupBoxRef.value?.offsetWidth ? true : false;
    };

    watchEffect(() => {
      checkArrowShow();
    });

    // 获取scroll函数的位置
    const handleScroll = (e) => {
      scrollPosition.left = e.target.scrollLeft;
      scrollPosition.top = e.target.scrollTop;
      changeArrow(scrollPosition.left);
    };

    getMyGroup();

    onMounted(() => {
      // 监听scroll事件
      groupBoxRef.value.addEventListener("scroll", handleScroll, true);
      // 监听窗⼝变化事件，判断arrow的展示
      window.addEventListener("resize", checkArrowShow, true);
      // 首次检查箭头展示
      checkArrowShow();
    });

    return {
      // data
      groupInfo,
      direction,
      arrowShow,
      // ref
      groupBoxRef,
      groupCardRef,
      // methods
      groupScroll,
    };
  },
});
</script>
<style scoped>
.index-group-box {
  padding-right: 16px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

.scrollX {
  width: 16px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #512d6d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scrollX:hover {
  cursor: pointer;
  background-color: #65447d;
}

.index-group-boxIn {
  display: flex;
  scroll-behavior: smooth;
  white-space: nowrap;
  overflow-x: auto;
  flex: none;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.index-group-boxIn::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.group-card {
  padding: 8px 16px;
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  margin-right: 16px;
  flex: none;
  background: #71efa3;
  color: #54436b;
}

.group-card span {
  color: #54436b;
}

.group-card:hover {
  background: #acffad;
}

.group-card:nth-last-of-type(1) {
  margin-right: 0px;
}
</style>
