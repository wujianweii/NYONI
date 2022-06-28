import req from "./request";

// 发送邮件
export const sendEmail = (options) =>
  req.post("https://formspree.io/f/mgedbzyj", options);
