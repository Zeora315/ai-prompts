# AI 提示词集

一个汇集各类 AI 提示词（Prompt）的文档站点，按使用场景分类整理，方便检索与复制使用。基于 [Rspress](https://rspress.rs/) 构建。

## 简介

本项目收集并整理了覆盖多场景的实用 AI 提示词，包括：

- **工作与效率**：会议纪要、周报编写、项目复盘
- **内容创作**：小红书文案、短视频脚本、爆款标题、仿写创作、诗词歌词
- **学术与专业**：行业/企业分析（PEST/SWOT）、论文研读、学习效率
- **其他**：PPT 整理、账号分析、创意生成

每个提示词页面均以统一格式呈现「说明 + 提示词原文 + 使用建议」，并支持一键复制 Markdown 或 Markdown 链接，便于直接喂给 AI 工具。

## 特性

- 📑 每个页面支持「复制 Markdown / 复制 Markdown 链接」按钮（SSG-MD / `llms.txt`）
- 📢 顶部 Banner 公告，可点击跳转「快速开始」
- 🗂 清晰的侧边栏分组与首页导航卡片
- 🌐 中文本地化界面

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 本地预览生产构建
npm run preview
```

构建后会在 `doc_build` 目录生成站点，以及 `llms.txt` / `llms-full.txt` 供 AI 索引使用。

## 目录结构

```
my-docs/
├── docs/                 # 文档源文件（按场景分目录）
│   ├── content-creation/ # 内容创作
│   ├── academic/         # 学术与专业
│   ├── work-efficiency/  # 工作与效率
│   ├── others/           # 其他
│   ├── index.md          # 首页
│   └── quick-start.md    # 快速开始
├── theme/                # 自定义主题（Banner 等）
├── rspress.config.ts     # 站点配置
└── package.json
```
