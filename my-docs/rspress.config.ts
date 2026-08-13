import * as path from 'node:path';
import OpenCC from 'opencc-js';
import { defineConfig } from '@rspress/core';
import { pluginLlms } from '@rspress/plugin-llms';

const toTW = OpenCC.Converter({ from: 'cn', to: 'tw' });

type SidebarItem = {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
};

// 简体中文侧边栏（默认语言，路由无前缀）
const zhSidebar: SidebarItem[] = [
  { text: '快速上手', link: '/quick-start' },
  { text: 'AI 聚合', link: '/ai-hub' },
  {
    text: '工作与效率',
    items: [
      { text: '会议纪要与行动项', link: '/work-efficiency/meeting-summary' },
      { text: '周报编写助手', link: '/work-efficiency/weekly-report' },
      { text: '项目复盘报告写作指令', link: '/work-efficiency/project-retrospective' },
    ],
  },
  {
    text: '内容创作',
    items: [
      { text: 'Kimi Xmind 将 PDF 生成思维导图', link: '/content-creation/Kimi-Xmind-将-PDF-生成思维导图' },
      { text: 'Kimi 小红书一键生成爆款文案', link: '/content-creation/Kimi-小红书一键生成爆款文案' },
      { text: 'Prompt创作助手', link: '/content-creation/Prompt创作助手' },
      { text: 'Stable Diffusion prompt 生成器 1', link: '/content-creation/Stable-Diffusion-prompt-生成器1' },
      { text: 'SUNO歌词生成', link: '/content-creation/SUNO歌词生成' },
      { text: '儿童绘本创作者', link: '/content-creation/儿童绘本创作者' },
      { text: '小红书全能写手', link: '/content-creation/小红书全能写手' },
      { text: '小红书数据分析', link: '/content-creation/小红书数据分析' },
      { text: '小红书爆款生成器', link: '/content-creation/小红书爆款生成器' },
      { text: '小红书账号定位（2 步搞定账号定位）', link: '/content-creation/小红书账号定位（2步搞定账号定位）' },
      { text: '推文快写', link: '/content-creation/推文快写' },
      { text: '文章要点凝练', link: '/content-creation/文章要点凝练' },
      { text: '期刊审稿', link: '/content-creation/期刊审稿' },
      { text: '电商内容创作', link: '/content-creation/电商内容创作' },
      { text: '电商链接分析', link: '/content-creation/电商链接分析' },
      { text: '短剧脚本创作', link: '/content-creation/短剧脚本创作' },
      { text: '美文排版', link: '/content-creation/美文排版' },
      { text: '视频内容分析师', link: '/content-creation/视频内容分析师' },
      { text: '诗意创作', link: '/content-creation/诗意创作' },
      { text: '公文写作指令', link: '/content-creation/公文写作指令' },
      { text: '视频内容分析指令', link: '/content-creation/视频内容分析指令' },
      { text: '朋友圈软广文案生成指令', link: '/content-creation/朋友圈软广文案生成指令' },
      { text: 'PPT生成指令', link: '/content-creation/PPT生成指令' },
      { text: '书单号爆款文案指令', link: '/content-creation/书单号爆款文案指令' },
      { text: '情绪化爆款标题指令', link: '/content-creation/情绪化爆款标题指令' },
      { text: '爆款短视频脚本指令', link: '/content-creation/爆款短视频脚本指令' },
      { text: '爆款文案优化助手（A、B两版）', link: '/content-creation/爆款文案优化助手（A、B两版）' },
      { text: '仿写名人语录指令', link: '/content-creation/仿写名人语录指令' },
      { text: '历史人物轶事解说文案', link: '/content-creation/历史人物轶事解说文案' },
      { text: '民间故事小说', link: '/content-creation/民间故事小说' },
      { text: '暖心治愈情感文案刨作助手', link: '/content-creation/暖心治愈情感文案刨作助手' },
      { text: '小红书种草类文案指令', link: '/content-creation/小红书种草类文案指令' },
      { text: '长文章变爆款口播文案指令', link: '/content-creation/长文章变爆款口播文案指令' },
      { text: '论文降重，去AI化提示词', link: '/content-creation/论文降重，去AI化提示词' },
      { text: '文章润色提示词', link: '/content-creation/文章润色提示词' },
      { text: '营销活动策划提示词', link: '/content-creation/营销活动策划提示词' },
      { text: '歌词作家提示词', link: '/content-creation/歌词作家提示词' },
      { text: '销售文案提示词', link: '/content-creation/销售文案提示词' },
      { text: '爆款小红书提示词', link: '/content-creation/爆款小红书提示词' },
      { text: '诗词创作提示词', link: '/content-creation/诗词创作提示词' },
      { text: '宣传slogan提示词', link: '/content-creation/宣传slogan提示词' },
      { text: '爆款文案生成提示词', link: '/content-creation/爆款文案生成提示词' },
      { text: '爆款文章仿写AI指令', link: '/content-creation/爆款文章仿写AI指令' },
      { text: '短视频文案专家', link: '/content-creation/短视频文案专家' },
      { text: '【微头条】10 种框架创作指令', link: '/content-creation/【微头条】10种框架创作指令' },
      { text: '书单号爆款文案指令', link: '/content-creation/书单号爆款文案指令-2' },
      { text: '仿写名人语录指令', link: '/content-creation/仿写名人语录指令-2' },
      { text: '仿写文章指令', link: '/content-creation/仿写文章指令' },
      { text: '暖心治愈情感文案刨作助手', link: '/content-creation/暖心治愈情感文案刨作助手-2' },
      { text: '朋友圈软广文案生成指令', link: '/content-creation/朋友圈软广文案生成指令-2' },
      { text: '爆款作品黄金发布时间指令', link: '/content-creation/爆款作品黄金发布时间指令' },
      { text: '爆款短视频脚本指令', link: '/content-creation/爆款短视频脚本指令-2' },
      { text: '镜头提示词', link: '/drawing/lens' },
      { text: '人物提示词', link: '/drawing/character' },
      { text: '服饰提示词', link: '/drawing/costume' },
      { text: '表情提示词', link: '/drawing/expression' },
      { text: '双人绘画提示词', link: '/drawing/couple' },
      { text: '猫娘提示词', link: '/drawing/catgirl' },
      { text: 'ChatGPT 绘画指令', link: '/drawing/chatgpt-drawing' },
      { text: 'SORA2 使用指南', link: '/video/sora2-guide' },
      { text: 'SORA2 真人绘画', link: '/video/sora2-portrait' },
      { text: 'SORA2 注册教程', link: '/video/sora2-register' },
    ],
  },
  {
    text: '学术与专业',
    items: [
      { text: 'Kimi PEST 模型搞定行业分析', link: '/academic/Kimi-PEST-模型搞定行业分析' },
      { text: 'Kimi SWOT 企业分析', link: '/academic/Kimi-SWOT-企业分析' },
      { text: 'Kimi苏格拉底式提问法', link: '/academic/Kimi苏格拉底式提问法' },
      { text: '网课学习助手（1 分钟刷完一节网课）', link: '/academic/网课学习助手（1分钟刷完一节网课）' },
      { text: '论文 Kimchat指令模型手册', link: '/academic/论文-Kimchat指令模型手册' },
      { text: '英文文献阅读指令', link: '/academic/英文文献阅读指令' },
      { text: '单词记忆', link: '/academic/单词记忆' },
      { text: '教案写作指令', link: '/academic/教案写作指令' },
      { text: '利用记忆宫殿背诵课文', link: '/academic/利用记忆宫殿背诵课文' },
      { text: '论文审稿提示词，用来对论文优化改写', link: '/academic/论文审稿提示词，用来对论文优化改写' },
      { text: '利用记忆宫殿背诵课文', link: '/academic/利用记忆宫殿背诵课文-2' },
      { text: '教案写作指令', link: '/academic/教案写作指令-2' },
      { text: '英文文献阅读指令', link: '/academic/英文文献阅读指令-2' },
      { text: '文献分析全流程指令', link: '/paper/literature-analysis' },
      { text: '文献综述 24 条指令', link: '/paper/literature-review' },
      { text: 'ChatGPT 顶级学术论文指令', link: '/paper/top-academic' },
      { text: 'GPT 给论文插入参考文献指令', link: '/paper/insert-references' },
      { text: 'ChatGPT 批改考研英语作文教程', link: '/paper/english-essay-grading' },
      { text: '免费 AIGC 检测工具', link: '/paper/free-aigc-check' },
    ],
  },
  {
    text: '其他',
    items: [
      { text: 'kimi canva', link: '/others/kimi-canva' },
      { text: 'thinking prompt，让claude 3.5变成gpt O1提示词', link: '/others/thinking-prompt，让claude-3.5变成gpt-O1提示词' },
      { text: '即梦AI 儿童绘本故事指令', link: '/others/即梦AI-儿童绘本故事指令' },
      { text: '视频内容分析指令', link: '/others/视频内容分析指令' },
      { text: 'PPT整理提示词', link: '/others/PPT整理提示词' },
      { text: '对标博主账号分析', link: '/others/对标博主账号分析' },
      { text: 'PPT整理提示词', link: '/others/PPT整理提示词-2' },
      { text: '对标博主账号分析', link: '/others/对标博主账号分析-2' },
    ],
  },
  {
    text: 'AI 安全研究（越狱/破限）',
    collapsed: true,
    items: [
      { text: '【Deepseek 专用】解禁词', link: '/security/deepseek-jailbreak' },
      { text: '【grok3 专用】解禁词', link: '/security/grok3-jailbreak' },
      { text: '解锁教学文字版（含 word 版解锁词）', link: '/security/unlock-teach-text' },
      { text: '解禁提示词 1114', link: '/security/jailbreak-prompts-1114' },
      { text: '解锁教程文字版 0924', link: '/security/unlock-teach-0924' },
      { text: '《凡人修仙传》可破甲提示词', link: '/security/fanren-kepojia' },
      { text: '发Q的狐狸提示词', link: '/security/faq-huli' },
      { text: '可盐可甜 M 小狼狗提示词', link: '/security/keyan-ketian' },
      { text: '龙娘提示词', link: '/security/longniang' },
      { text: '魅魔提示词', link: '/security/meimo' },
      { text: '小说创作提示词', link: '/security/xiaoshuo-chuangzuo' },
      { text: '御坂美琴提示词', link: '/security/yusaka-misaka' },
    ],
  },
  {
    text: '工具与案例',
    items: [
      { text: 'ChatGPT 实用指南', link: '/tools/chatgpt-practical' },
      { text: '100 个 Nano Banana 案例', link: '/tools/nano-banana' },
    ],
  },
];

// 由简体侧边栏自动生成繁体中文侧边栏（文本转繁体 + 链接加 /zh-TW 前缀）
function toTWItem(item: SidebarItem): SidebarItem {
  const out: SidebarItem = {
    text: toTW(item.text),
  };
  if (item.link) out.link = '/zh-TW' + item.link;
  if (item.items) out.items = item.items.map(toTWItem);
  if (item.collapsed !== undefined) out.collapsed = item.collapsed;
  return out;
}

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  // 启用 SSG-MD，生成各页 .md 及 llms.txt，并在标题下方注入「复制 Markdown / 复制 Markdown 链接」按钮
  plugins: [pluginLlms()],
  // 国际化：简体中文为默认语言（路由无前缀），繁体中文 /en 加语言前缀
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'AI 提示词集',
      description: '精选分类提示词，让 AI 更好为你所用',
    },
    {
      lang: 'zh-TW',
      label: '繁體中文',
      title: 'AI 提示詞集',
      description: '精選分類提示詞，讓 AI 更好為你所用',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'AI Prompts',
      description: 'Curated categorized prompts to get more from AI',
    },
  ],
  title: 'AI 提示词集',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    sidebar: {
      // 简体中文（默认语言，无前缀）
      '/': zhSidebar,
      // 繁体中文（由简体自动转繁体生成，链接加 /zh-TW 前缀）
      '/zh-TW/': zhSidebar.map(toTWItem),
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
