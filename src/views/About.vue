<template>
  <div class="container-middle animateFadeInUp">
    <!-- <form action="https://formspree.io/f/mgedbzyj" method="post" ref="content">
      <label>
        FIRST NAME
      <input
        type="text"
        name="name"
        placeholder="姓名"
        class="contact-area"
        v-model="contactArea"
      />
      </label>

      <input type="text" name="company" placeholder="公司名称" />
      <input type="text" name="position" placeholder="职位" />
      <input type="text" name="phone" placeholder="联系电话" />
      <input type="email" name="_replyto" placeholder="邮箱" />
      <div class="commit" @click="sendMessage">点击预约</div>
    </form> -->
    <form class="" action="https://formspree.io/f/mgedbzyj" method="POST">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="block-form__input">
            <span class="label">First name</span
            ><input
              placeholder="First name"
              type="text"
              name="firstname"
              required=""
              value=""
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="block-form__input">
            <span class="label">Last Name</span
            ><input
              placeholder="Last Name"
              type="text"
              name="lastname"
              required=""
              value=""
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="block-form__input">
            <span class="label">Email Address</span
            ><input
              placeholder="Email Address"
              type="email"
              name="email"
              required=""
              value=""
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="block-form__input">
            <span class="label">Company</span
            ><input placeholder="Company" name="company" required="" value="" />
          </div>
        </div>
        <div class="col-12 col-md-6">
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
        </div>
        <div class="col-12">
          <div class="block-form__textarea">
            <span class="label">Message</span
            ><textarea
              name="message"
              rows="4"
              placeholder="Start typing here…"
            ></textarea>
          </div>
        </div>
        <div class="col-12 download-asset__button">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
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
  margin: 0 auto;
  .block-form__input {
    margin-top: 1rem;
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
      max-width: 370px;
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
  margin-top: 35px;
  // margin-right: 1rem;
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
@media (min-width: 769px) {
  .container-middle {
    padding: 0 85px;
  }
}

@media (min-width: 576px) {
  .container-middle {
    max-width: 100%;
    padding: 0 56px;
  }
}

.container-middle {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 80px;
  margin-right: auto;
  margin-left: auto;
}

button {
  cursor: pointer;
  // margin-right: 1rem;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 4.07px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #000;
  padding: 0 4rem;
  display: inline-block;
  transition: all 0.55s ease-out;
  text-decoration: none !important;
  background-color: #000;
  margin-top: 15px;
}
button:hover {
  color: black;
  background-color: #fff;
}
.download-asset__button {
  text-align: right;
}
</style>
