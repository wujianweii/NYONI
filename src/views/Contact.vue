<template>
  <div class="container">
    <div class="pb-40">
      <h1 class="detail-title">{{ $t("contact.title") }}</h1>
      <h1 class="detail-content">{{ $t("contact.content") }}</h1>
    </div>
    <div class="pb-80 animateFadeInUp">
      <!-- mgedbzyj -->
      <!-- xoqrzykl -->
      <form action="https://formspree.io/f/xoqrzykl" method="POST">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="block-form__input">
              <label>
                <span class="label">{{ $t("contact.fullName") }}</span
                ><input
                  placeholder="Full Name"
                  type="text"
                  name="fullname"
                  required=""
                  value=""
              /></label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="block-form__input">
              <label>
                <span class="label">{{ $t("contact.company") }}</span
                ><input
                  placeholder="Company"
                  name="company"
                  required=""
                  value=""
                />
              </label>
            </div>
          </div>
          <!-- 邮箱 -->
          <div class="col-12 col-md-6">
            <div class="block-form__input">
              <label
                ><span class="label">{{ $t("contact.emailAddress") }}</span
                ><input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  required=""
                  value=""
              /></label>
            </div>
          </div>
          <!-- 主题 -->
          <div class="col-12 col-md-6">
            <div class="block-form__input">
              <label
                ><span class="label">{{ $t("contact.subject") }}</span
                ><input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required=""
                  value=""
              /></label>
            </div>
          </div>
          <!-- <div class="col-12 col-md-6">
          <div class="block-form__input is-focus">
            <span class="label">WEBSITE URL</span
            ><input
              placeholder="http://"
              type="url"
              name="website"
              required=""
              value="https://"
            />
          </div>
        </div> -->
          <div class="col-12">
            <div class="block-form__textarea">
              <span class="label">{{ $t("contact.message") }}</span
              ><textarea
                name="message"
                rows="4"
                placeholder="Start typing here…"
              ></textarea>
            </div>
          </div>
          <div class="col-12 download-asset__button">
            <button type="submit">{{ $t("contact.submit") }}</button>
          </div>
        </div>
      </form>
    </div>
    <div class="row pb-80 flex-start">
      <div
        class="animateFadeInUp opacity-hide col-md-4 plr-20"
        style="animation-delay: 0.25s"
      >
        <h4 class="contact-info-header">{{ $t("contact.address") }}</h4>
        <div class="scrolly-block">
          <p>
            {{ $t("contact.factoryAdd") }}
          </p>
          <p>
            {{ $t("contact.tradeAdd") }}
          </p>
        </div>
      </div>
      <div
        class="animateFadeInUp opacity-hide col-md-4 plr-20"
        style="animation-delay: 0.5s"
      >
        <h4 class="contact-info-header">{{ $t("contact.time") }}</h4>
        <p>{{ $t("contact.weekDay") }}</p>
        <p>{{ $t("contact.weekTime") }}</p>
      </div>
      <div
        class="animateFadeInUp opacity-hide col-md-4 plr-20 contact-info"
        style="animation-delay: 0.75s"
      >
        <h4 class="contact-info-header">{{ $t("contact.contact") }}</h4>
        <a href="mailTo: jane@hzmanqini.com"
          >{{ $t("common.footer.contact.email") }}: jane@hzmanqini.com</a
        >
        <a href="tel:+8618157898718"
          >{{ $t("common.footer.contact.phone") }}: +86 18157898718</a
        >
        <a href="tel:4008896590"
          >{{ $t("common.footer.contact.landline") }}: 400-8896-590</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { sendEmail } from "@/util/api";
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      contactArea: "",
    };
  },
  methods: {
    // 发送邮件
    async sendMessage() {
      // if (this.contactArea == "") {
      //   this.$message.warning("您的姓名不能为空 !");
      //   return;
      // }
      // var obj = this.$refs.content.serialize();
      // var obj = $("#content").serialize(); //获取id为content的form表单里面的内容
      // console.log(obj);
      const res = await sendEmail({
        data: {},
        dataType: "json",
      });
      console.log(res);
      if (res) {
        ElMessage({
          message: "邮件发送成功~",
          type: "succsee",
        });
      }
      // $.ajax({
      //   type: "post", //必须post请求
      //   url: "https://formspree.io/f/test", //test换成你要接收的邮箱地址
      //   async: true,
      //   data: obj,
      //   dataType: "json",
      //   success: (res) => {
      //     alert("邮件已发送!!!"); //发送成功后的操作
      //   },
      //   error: (res) => {
      //     alert("未知错误,发送失败");
      //   },
      // });
    },
  },
};
</script>
<style lang="less" scoped>
form {
  max-width: 800px;
  position: relative;
  .block-form__input {
    // margin-top: 1rem;
    margin: 1rem 1rem 0 0;
    position: relative;

    input {
      display: block;
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(142, 142, 142, 0.8);
      height: 2.625rem;
      line-height: 2.625rem;
      font-size: 0.75rem;
      letter-spacing: 0.10687rem;
      color: rgba(0, 0, 0, 0.51);
      outline: none;
      transition: color 0.3s, border-color 0.3s, border-width 0.3s;
      border-radius: 0;
      padding: 0 20px;
      border: 1px solid #8e8e8e;
      background: rgba(196, 196, 196, 0.05);
      height: 52px;
      line-height: 52px;
      // max-width: 370px;
      // margin: ;
    }
  }
  .label {
    position: absolute;
    top: 50%;
    margin-top: -0.5625rem;
    height: 1.125rem;
    left: 0;
    line-height: 1.125rem;
    color: rgba(0, 0, 0, 0.51);
    font-size: 0.75rem;
    letter-spacing: 0.10687rem;
    text-transform: uppercase;
    transition: transform 0.2s;
    pointer-events: none;
    margin: 0;
    position: static;
    font-weight: bold;
    color: #000;
    display: inline-block;
    margin-bottom: 10px;
    transform: initial;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  // margin-right: -15px;
  // margin-left: -15px;
}
.block-form__textarea {
  margin: 35px 1rem 0 0;
  textarea {
    height: 160px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    max-width: 800px;
    border: 1px solid #8e8e8e;
    resize: none;
    padding: 16px;
    font-size: 14px;
    letter-spacing: 0.19px;
    line-height: 24px;
  }
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.download-asset__button {
  text-align: right;
  padding-right: 1rem;
}

.contact-info-header {
  margin-top: 30px;
  font-size: 18px;
}
.contact-info {
  > a {
    display: block;
    color: #252525;
    line-height: 28px;
  }
}

.scrolly-block {
  height: 84px;
  overflow: scroll;
  p {
    margin-bottom: 28px;
  }
}
</style>
