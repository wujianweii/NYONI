import axios from "axios";
// import Vue from "vue";
// import router from "@/router/index";
// import store from "@/store/index";
import { ElMessage } from "element-plus";

function processResponse(res) {
  // ElMessage({
  //   message: "邮件发送成功~",
  //   type: "succsee",
  // });
  return res.data;
  // const routerName = router.history.current.name;
  // const notShowIntegral =
  //   routerName !== "member" &&
  //   routerName !== "my-points" &&
  //   routerName !== "intergral-ranking-list" &&
  //   routerName !== "points-mall" &&
  //   routerName !== "draw" &&
  //   routerName !== "zan-exchange";
  // if (res.status === 200 || res.status === 304) {
  //   if (res.data.code === 401) {
  //     window.location.href = res.data.jump_url;
  //   }
  //   if (res.data.msg) {
  //     Vue.$vux.toast.show({
  //       text: res.data.msg,
  //       type: res.data.code === 1 ? "success" : "text",
  //       width:
  //         res.data.msg.length > 4 ? `${res.data.msg.length + 4.6}em` : "7.6em",
  //     });
  //   }
  //   if (
  //     res.data.data &&
  //     res.data.data.integral &&
  //     notShowIntegral &&
  //     res.data.code === 1
  //   ) {
  //     Vue.$vux.toast.show({
  //       text: `积分+${
  //         res.data.data.integral.integral || res.data.data.integral
  //       }`,
  //     });
  //   }
  //   if (res.data.code === 3) {
  //     store.dispatch("changeUserAuthentification", 1);
  //   }
  //   return res.data;
  // }
  // return null;
}

function processRequest(method, url, options, isBaseUrl) {
  return axios({
    url,
    method,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    params: options.params ? options.params : {},
    data: options.data ? options.data : {},
    dataType: options.dataType ? options.dataType : "json",
    baseURL: isBaseUrl ? "" : "",
    // async: true,
  })
    .then((res) => processResponse(res))
    .catch(() => {
      ElMessage({
        message: "网络错误，请稍后重试!",
        type: "error",
      });
      // if (url !== "/post-share") {
      //   // Vue.$vux.toast.show({
      //   //   text: "网络错误，请稍后重试!",
      //   //   type: "cancel",
      //   //   width: "10.6em",
      //   // });
      // }
    });
}

export default {
  get(url, params, isBaseUrl) {
    return processRequest(
      "get",
      url,
      {
        params,
      },
      isBaseUrl
    );
  },
  post(url, data) {
    return processRequest("post", url, {
      data,
    });
  },
  put(url, data) {
    return processRequest("put", url, {
      data,
    });
  },
  delete(url, data) {
    return processRequest("delete", url, {
      data,
    });
  },
  getNoCode(url, params) {
    return processRequest(
      "get",
      url,
      {
        params,
      },
      false
    );
  },
};
