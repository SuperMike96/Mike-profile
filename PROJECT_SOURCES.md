# Mike 的 Projects 内容来源

核对日期：2026-10-21。只修改本网站仓库，源项目均只读；不推送、不部署。

## 网站定位依据

- 已搜索 `~/.codex/sessions` 与 `~/.codex/archived_sessions`。
- 实际创建会话：`rollout-2026-10-19T09-28-45-01a151c6-7f8e-77d0-9668-7c7cd2fd3720.jsonl`。
- 会话工作目录：`/Users/whitemike/Documents/self_improving`。
- 用户原始请求：`Clone https://github.com/sanidhyy/3d-portfolio and get it running locally.`
- clone 命令：`git clone https://github.com/sanidhyy/3d-portfolio.git 3d-portfolio`。首次网络解析失败，随后重试完成。
- 后续 `pnpm dev --host 127.0.0.1`、`pnpm check-types`、`pnpm build` 的工作目录均为 `/Users/whitemike/Documents/self_improving/3d-portfolio`；当前 Git origin 与之匹配。
- 其他搜索命中包含对该项目的引用和审批记录；以上会话具有实际 clone 和本地运行证据，因此选择此目录。
- 本次开始时工作区干净，`mike-projects` 已存在且与 `main` 同指 `dd62397`。按要求执行 `git checkout -b mike-projects` 后 Git 提示同名分支存在，因此沿用当前分支，没有重置或覆盖分支。

## 内容和图片

以下源路径均相对于 `~/Documents/`。公开链接只采用明确记录在源 README 中的项目入口；未确认的链接保留为空，卡片不渲染对应按钮。

### 1. 抖音收藏 → AI 文字笔记

- 事实：`self_improving/douyin-favorites-notes/README.md`、`self_improving/douyin-personal-notes/README.md`。本地语音转写、OCR、去重、分类 Markdown、AI 分析及来源核查；没有将未验收流程描述为全自动完成。
- 图片：`self_improving/douyin-personal-notes/exports/2026-10-15-收藏流程前后对照.svg.png`，原样复制为 `src/assets/projects/mike/douyin-notes.png`。标注历史流程日期，图内数据属于原图历史记录，不作为当前效果承诺。
- 标签：AI 笔记 / 语音转写 / OCR。公开链接：空。

### 2. 每日 AI 新闻竖版视频

- 事实：`Codex/2026-10-18/codex-news-video/work/smoke-test/README.md` 为 Remotion 模板说明；补查 `src/Root.tsx`、`src/NewsEpisode.tsx` 和实际 `outputs/` 产物，核对 React、音频、字幕、动画和平台封面。名称中的“每日”来自 Mike 的任务命名，不表示已验证每日自动发布。
- 图片：`Codex/2026-10-18/codex-news-video/outputs/四条新闻-封面-抖音.png`，原样复制为 `src/assets/projects/mike/ai-news.png`。
- 标签：Remotion / React / 配音字幕。公开链接：空。未把依赖或模板的仓库链接当成 Mike 的项目链接。

### 3. 预判棋

- 事实：`ChatGPT/新版中国象棋/README.md`。双方秘密预设三步，共同公开后按顺序交替执行；不是六步同时移动。离线人机与同设备双人为开放模式。
- 图片：`ChatGPT/新版中国象棋/outputs/xiangqi-desktop.png`，原样复制为 `src/assets/projects/mike/predictive-xiangqi.png`，标注历史桌面试玩截图，不冒充当前版本截图。
- 标签：策略游戏 / 三步预判 / 本地对弈。
- 在线体验：`https://supermike96.github.io/predictive-xiangqi-play/`。
- 公开发布仓库：`https://github.com/SuperMike96/predictive-xiangqi-play`，依据 README 的明确公开仓库记录；不链接私有源码仓库。此轮未做公网可达性检查。

### 4. 财富收益看板

- 事实：`网页版_理财收益/README.md`。多笔理财记录、收益分析、资产趋势、封闭期、XIRR、隐私模式和本地导入导出。
- 未找到源目录内项目截图或封面。沿用 `src/assets/projects/project3.png` 模板后台看板图，卡片明确显示“模板配图 · 待补项目截图”，替代文本也说明不是实际项目截图。
- 标签：收益分析 / XIRR / 本地存储。公开链接：空。

### 5. 今天吃什么

- `codex_001/` 没有 README；补查 `package.json`、`src/App.tsx` 和 `CHANGES.md`。功能以当前代码为准：想吃/待定/跳过、菜单确认、食材汇总、分步菜谱及本地记录。“我的第一个 Codex 项目”由 Mike 本次明确提供。
- 未找到源目录内项目截图或封面。沿用 `src/assets/projects/project6.png` 模板旅行餐饮图，卡片与替代文本明确说明属于模板配图。
- 标签：生活工具 / 滑动选菜 / 食材清单。公开链接：空。

### 6. AI 婚礼系列

- `beautiful_memory/README.md` 仍是 starter 说明；补查 `beautiful_memory/app/page.tsx` 核对电子请柬。
- `self_improving/wedding-video-projects/` 没有 README；补查 `2026-09-20-01/STORYBOARD-v1.md` 核对脚本与分镜。不宣称婚礼视频已经完成。
- `self_improving/output/wedding-candy-cartoons/` 没有 README；核对 `prompts.txt` 和成图。
- 图片：`self_improving/output/wedding-candy-cartoons/02-together.png`，原样复制为 `src/assets/projects/mike/wedding-candy.png`。
- 标签：电子请柬 / 脚本分镜 / AI 插画。公开链接：空。

图片按原比例完整显示，不裁掉竖版封面、流程图或插画上的内容。源图片、源代码和个人数据均未修改。

## 本次验证

- `pnpm check-types`：通过。
- `pnpm build`：通过；Vite 提示部分构建块超过 500 kB，没有构建错误。
- `git diff --check`：通过。检查项目数为 6、每项 3 个标签；4 张复制图片与源文件的 SHA-256 一致。
- `pnpm preview --host 127.0.0.1 --port 4173 --strictPort`：当前执行环境拒绝监听端口（`EPERM`），未完成浏览器目视验收。可在本机终端运行相同命令并打开 `http://127.0.0.1:4173/`。
