export type Lang = "en" | "zh";

type Dict = Record<Lang, string>;

export const UI = {
  nav: {
    about: { en: "About", zh: "关于" },
    work: { en: "Work", zh: "经历" },
    contact: { en: "Contact", zh: "联系" },
    sourceCode: { en: "Source Code", zh: "源码" },
    developer: { en: "Developer", zh: "开发者" },
  },
  hero: {
    greeting: { en: "Hi, I'm", zh: "你好，我是" },
    subtitle: {
      en: "Security researcher & Python developer, with a passion for travel",
      zh: "Python 开发出身，安全方向出道，环球旅行实践者。",
    },
  },
  about: {
    sub: { en: "Introduction", zh: "简介" },
    title: { en: "Overview", zh: "概述" },
    body: {
      en: "I'm a security researcher and Python developer with experience in situational awareness, attack-defense detection, and system development & operations. I also have a passion for travel.",
      zh: "我是安全研究员与 Python 开发者，擅长态势感知、攻防检测以及系统开发与运维，同时也热爱旅行。",
    },
  },
  experience: {
    sub: { en: "What I have done so far", zh: "迄今为止" },
    title: { en: "Work Experience", zh: "工作经历" },
  },
  works: {
    sub: { en: "My work", zh: "我的作品" },
    title: { en: "Projects", zh: "项目" },
    body: {
      en: "From knowledge notes and news videos to strategy games and wedding creations, these projects capture how I use AI to solve everyday problems and bring ideas to life.",
      zh: "从知识整理、新闻视频到策略游戏和婚礼创作，这些项目记录了我用 AI 解决日常问题、实现想法的实践。",
    },
    openLive: { en: "Open live demo of", zh: "打开在线体验：" },
    viewRepo: { en: "View public repo of", zh: "查看公开仓库：" },
  },
  feedbacks: {
    sub: { en: "Personal highlights", zh: "个人亮点" },
    title: { en: "Highlights", zh: "亮点" },
    of: { en: "of", zh: "·" },
  },
  contact: {
    sub: { en: "Get in touch", zh: "取得联系" },
    title: { en: "Contact", zh: "联系" },
    name: { en: "Your Name*", zh: "你的姓名*" },
    email: { en: "Your Email*", zh: "你的邮箱*" },
    message: { en: "Your Message*", zh: "你的留言*" },
    namePh: { en: "John Doe", zh: "张三" },
    emailPh: { en: "johndoe@email.com", zh: "you@email.com" },
    messagePh: { en: "Hello there!", zh: "你好！" },
    nameTitle: { en: "What's your name?", zh: "你叫什么名字？" },
    emailTitle: { en: "What's your email?", zh: "你的邮箱是？" },
    messageTitle: { en: "What do you want to say?", zh: "想说点什么？" },
    invalidName: { en: "Invalid Name!", zh: "姓名无效！" },
    invalidEmail: { en: "Invalid E-mail!", zh: "邮箱无效！" },
    invalidMessage: { en: "Invalid Message!", zh: "留言无效！" },
    send: { en: "Send", zh: "发送" },
    sending: { en: "Sending...", zh: "发送中..." },
    recaptcha: {
      en: "This site is protected by reCAPTCHA.",
      zh: "本站受 reCAPTCHA 保护。",
    },
    unavailable: {
      en: "Contact form is currently unavailable.",
      zh: "联系表单暂不可用。",
    },
    recaptchaNotReady: {
      en: "reCAPTCHA is not ready. Please try again.",
      zh: "reCAPTCHA 尚未就绪，请稍后再试。",
    },
    thanks: { en: "Thanks for contacting me.", zh: "感谢联系我。" },
    somethingWrong: { en: "Something went wrong.", zh: "出错了，请稍后再试。" },
  },
  footer: {
    rights: {
      en: "All rights reserved.",
      zh: "保留所有权利。",
    },
  },
} as const satisfies Record<string, Record<string, Dict>>;

export function pick(lang: Lang, value: Dict): string {
  return value[lang];
}
