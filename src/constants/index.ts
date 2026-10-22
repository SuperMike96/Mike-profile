// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  canterbury,
  dbappsecurity,
  pythonDev,
  confidential,
  project3,
  project6,
  award,
  translate,
  globe,
  xiaohongshu,
  x,
  github,
} from "../assets";

import douyinNotes from "../assets/projects/mike/douyin-notes.png";
import aiNews from "../assets/projects/mike/ai-news.png";
import predictiveXiangqi from "../assets/projects/mike/predictive-xiangqi.png";
import weddingCandy from "../assets/projects/mike/wedding-candy.png";

export type LocalizedString = { en: string; zh: string };

// Navbar Links (titles localized in Navbar via UI.nav)
export const NAV_LINKS = [
  {
    id: "about",
    titleKey: "about" as const,
    link: null,
  },
  {
    id: "work",
    titleKey: "work" as const,
    link: null,
  },
  {
    id: "contact",
    titleKey: "contact" as const,
    link: null,
  },
  {
    id: "source-code",
    titleKey: "sourceCode" as const,
    link: "https://github.com/SuperMike96",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: { en: "Security Researcher", zh: "安全研究员" },
    icon: web,
  },
  {
    title: { en: "Python Developer", zh: "Python 开发" },
    icon: backend,
  },
  {
    title: { en: "Attack & Defense Detection", zh: "攻防检测" },
    icon: mobile,
  },
  {
    title: { en: "Situational Awareness & Big Data", zh: "态势感知与大数据" },
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
  { name: "docker", icon: docker },
] as const;

// Experiences — Canterbury / DBAPPSecurity / Bendian / Confidential
export const EXPERIENCES = [
  {
    title: {
      en: "Student / Computer Engineering",
      zh: "学生 / 计算机工程",
    },
    company_name: {
      en: "University of Canterbury, New Zealand",
      zh: "新西兰坎特伯雷大学",
    },
    icon: canterbury,
    iconBg: "#FFFFFF",
    date: "2015–2018",
    points: {
      en: [
        "Studied Computer Engineering at the University of Canterbury in New Zealand.",
        "Built a foundation in computer systems, software development, and engineering practice.",
        "Developed analytical and problem-solving skills that later supported security and systems work.",
      ],
      zh: [
        "于新西兰坎特伯雷大学学习计算机工程。",
        "奠定计算机系统、软件开发与工程实践的基础。",
        "培养分析与问题解决能力，为后续安全与系统工作打下基础。",
      ],
    },
  },
  {
    title: { en: "Security Researcher", zh: "安全研究员" },
    company_name: {
      en: "Hangzhou DBAPPSecurity (安恒信息)",
      zh: "杭州安恒信息科技有限公司",
    },
    icon: dbappsecurity,
    iconBg: "#FFFFFF",
    date: "2019",
    points: {
      en: [
        "Worked on situational awareness and big data related security research.",
        "Contributed to user profiling and attack-defense detection capabilities.",
        "Supported research and engineering efforts around cyber defense visibility.",
      ],
      zh: [
        "从事态势感知与大数据相关安全研究。",
        "参与用户画像与攻防检测能力建设。",
        "支撑网络安全可视性相关的研究与工程工作。",
      ],
    },
  },
  {
    title: { en: "Python Developer", zh: "Python 开发工程师" },
    company_name: {
      en: "Cixi Bendian Technology (慈溪本电科技)",
      zh: "慈溪本电科技有限公司",
    },
    icon: pythonDev,
    iconBg: "#1E293B",
    date: "2020",
    points: {
      en: [
        "Developed software solutions in Python for product and engineering needs.",
        "Built and maintained application logic, tooling, and integrations.",
        "Collaborated on delivery of features with a focus on reliability and clarity.",
      ],
      zh: [
        "使用 Python 为产品与工程需求开发软件方案。",
        "构建并维护应用逻辑、工具与集成。",
        "协作交付功能，注重可靠性与清晰度。",
      ],
    },
  },
  {
    title: {
      en: "Security & Systems Engineer",
      zh: "安全与系统工程师",
    },
    company_name: { en: "Confidential", zh: "保密单位" },
    icon: confidential,
    iconBg: "#111827",
    date: "late 2020 – Present",
    points: {
      en: [
        "Responsible for security maintenance across systems and services.",
        "Developed and managed systems in support of operations and security goals.",
        "Combined security practice with day-to-day system development and administration.",
      ],
      zh: [
        "负责系统与服务的安全运维。",
        "开发并管理支撑运营与安全目标的系统。",
        "将安全实践与日常系统开发、管理工作相结合。",
      ],
    },
  },
] as const;

// Testimonials (personal highlights) — abstract icons, not face photos
export const TESTIMONIALS = [
  {
    testimonial: {
      en: "Named Outstanding Worker in the 2020 护网 (HW) cyber defense exercise.",
      zh: "在 2020 年护网行动中被评为优秀工作者。",
    },
    name: { en: "Award", zh: "荣誉" },
    designation: { en: "Outstanding Worker", zh: "优秀工作者" },
    company: { en: "护网 2020 / HW", zh: "护网 2020" },
    image: award,
  },
  {
    testimonial: {
      en: "Key contributor to Linux China's translation projects.",
      zh: "Linux 中国翻译项目的重要贡献者。",
    },
    name: { en: "Community", zh: "社区" },
    designation: { en: "Contributor", zh: "贡献者" },
    company: { en: "Linux China", zh: "Linux 中国" },
    image: translate,
  },
  {
    testimonial: {
      en: "Practitioner of traveling around the world.",
      zh: "环球旅行实践者。",
    },
    name: { en: "Life", zh: "生活" },
    designation: { en: "Traveler", zh: "旅行者" },
    company: { en: "Around the world", zh: "环游世界" },
    image: globe,
  },
] as const;

// Projects — bilingual
export const PROJECTS = [
  {
    name: {
      en: "Douyin Favorites → AI Notes",
      zh: "抖音收藏 → AI 文字笔记",
    },
    description: {
      en: "Turns Douyin favorites—speech, on-screen text, and related frames—into categorized Markdown notes. AI analysis and source checks build a searchable personal knowledge base, with local transcription, OCR, deduplication, and progress tracking.",
      zh: "把抖音收藏中的语音、画面文字和相关画面整理为分类 Markdown 笔记，通过 AI 分析与来源核查形成可检索的个人知识库。支持本地转写、OCR、去重和进度管理。",
    },
    tags: [
      { name: { en: "AI Notes", zh: "AI 笔记" }, color: "blue-text-gradient" },
      {
        name: { en: "Speech-to-text", zh: "语音转写" },
        color: "green-text-gradient",
      },
      { name: { en: "OCR", zh: "OCR" }, color: "pink-text-gradient" },
    ],
    image: douyinNotes,
    image_alt: {
      en: "Flow diagram of Douyin favorites to text knowledge base",
      zh: "抖音收藏文字知识库的流程对照图",
    },
    image_note: {
      en: "Historical flow diagram (2026-10-15)",
      zh: "历史流程对照图（2026-10-15）",
    },
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: {
      en: "Daily AI News Vertical Video",
      zh: "每日 AI 新闻竖版视频",
    },
    description: {
      en: "Uses React and Remotion to turn news into vertical videos with Chinese voice-over, subtitles, and animated scenes. Existing work includes a deep-blue final cut and covers adapted for different platforms.",
      zh: "使用 React 与 Remotion 把新闻内容制作成竖版视频，组合中文配音、字幕和动画画面。现有作品包含深蓝版成片及适配不同平台的封面。",
    },
    tags: [
      { name: { en: "Remotion", zh: "Remotion" }, color: "blue-text-gradient" },
      { name: { en: "React", zh: "React" }, color: "green-text-gradient" },
      {
        name: { en: "Voice & subtitles", zh: "配音字幕" },
        color: "pink-text-gradient",
      },
    ],
    image: aiNews,
    image_alt: {
      en: "Douyin-style cover for AI news video",
      zh: "AI 新闻视频的抖音版封面",
    },
    image_note: { en: "", zh: "" },
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: { en: "Predictive Xiangqi", zh: "预判棋" },
    description: {
      en: "A three-move hidden-war variant of Chinese chess: both sides secretly preset three moves, then reveal and execute them in turn. Supports offline vs AI and same-device two-player; predictions are re-validated against the real board at execution time.",
      zh: "基于中国象棋的三步暗战变体：双方秘密预设三步，共同公开后按步序交替执行。支持离线人机与同设备双人，预判会在执行时依据真实棋盘重新检查。",
    },
    tags: [
      {
        name: { en: "Strategy game", zh: "策略游戏" },
        color: "blue-text-gradient",
      },
      {
        name: { en: "3-move prediction", zh: "三步预判" },
        color: "green-text-gradient",
      },
      {
        name: { en: "Local play", zh: "本地对弈" },
        color: "pink-text-gradient",
      },
    ],
    image: predictiveXiangqi,
    image_alt: {
      en: "Historical desktop playtest screenshot of Predictive Xiangqi",
      zh: "预判棋的历史桌面试玩截图",
    },
    image_note: {
      en: "Historical desktop playtest screenshot",
      zh: "历史桌面试玩截图",
    },
    source_code_link: "https://github.com/SuperMike96/predictive-xiangqi-play",
    live_site_link: "https://supermike96.github.io/predictive-xiangqi-play/",
  },
  {
    name: {
      en: "Wealth Returns Dashboard",
      zh: "财富收益看板",
    },
    description: {
      en: "A personal wealth returns dashboard for logging investments, analyzing returns, tracking asset trends, and closed periods. Includes XIRR annualized returns, privacy mode, and local import/export.",
      zh: "面向个人理财记录的收益看板，支持多笔理财录入、收益分析、资产趋势和封闭期追踪。提供 XIRR 年化计算、隐私模式及本地数据导入导出。",
    },
    tags: [
      {
        name: { en: "Returns analysis", zh: "收益分析" },
        color: "blue-text-gradient",
      },
      { name: { en: "XIRR", zh: "XIRR" }, color: "green-text-gradient" },
      {
        name: { en: "Local storage", zh: "本地存储" },
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    image_alt: {
      en: "Template dashboard image; not a Wealth Returns screenshot",
      zh: "模板后台看板配图，非财富收益看板截图",
    },
    image_note: {
      en: "Template image · screenshot pending",
      zh: "模板配图 · 待补项目截图",
    },
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: { en: "What to Eat Today", zh: "今天吃什么" },
    description: {
      en: "My first Codex project: swipe cards to like, maybe, or skip dishes. After confirming a menu, get an ingredient list and step-by-step recipes; choices are saved locally.",
      zh: "我的第一个 Codex 项目，用滑动卡片选择想吃、待定或跳过的菜品。确认菜单后可汇总食材清单、查看分步菜谱，选择记录保存在本地。",
    },
    tags: [
      {
        name: { en: "Life utility", zh: "生活工具" },
        color: "blue-text-gradient",
      },
      {
        name: { en: "Swipe to pick", zh: "滑动选菜" },
        color: "green-text-gradient",
      },
      {
        name: { en: "Ingredient list", zh: "食材清单" },
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    image_alt: {
      en: "Template travel/food image; not a What to Eat Today screenshot",
      zh: "模板旅行餐饮配图，非今天吃什么项目截图",
    },
    image_note: {
      en: "Template image · screenshot pending",
      zh: "模板配图 · 待补项目截图",
    },
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: { en: "AI Wedding Series", zh: "AI 婚礼系列" },
    description: {
      en: "A wedding series including an electronic invitation, wedding video scripts and storyboards, and cartoon couple art for candy packaging—linking storytelling, web interaction, and visual design.",
      zh: "围绕婚礼制作的系列作品，包含电子请柬、婚礼视频脚本与分镜，以及喜糖包装用的新人卡通插画。把故事表达、网页互动和视觉设计串联起来。",
    },
    tags: [
      {
        name: { en: "E-invitation", zh: "电子请柬" },
        color: "blue-text-gradient",
      },
      {
        name: { en: "Script & storyboard", zh: "脚本分镜" },
        color: "green-text-gradient",
      },
      {
        name: { en: "AI illustration", zh: "AI 插画" },
        color: "pink-text-gradient",
      },
    ],
    image: weddingCandy,
    image_alt: {
      en: "Cartoon candy packaging art of whiteMike and Selina",
      zh: "whiteMike 与 Selina 的喜糖卡通插画",
    },
    image_note: { en: "", zh: "" },
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const XIAOHONGSHU_NICKNAME = "Mike的AI旅行";

export const XIAOHONGSHU_LINK = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(XIAOHONGSHU_NICKNAME)}`;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/SuperMike96",
  },
  {
    name: "小红书 · Mike的AI旅行",
    icon: xiaohongshu,
    link: XIAOHONGSHU_LINK,
  },
  {
    name: "X",
    icon: x,
    link: "https://x.com/superMi11818336",
  },
] as const;
