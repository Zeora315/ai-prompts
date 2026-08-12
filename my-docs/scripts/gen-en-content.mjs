import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'docs', 'zh', 'content-creation');
const destDir = path.join(root, 'docs', 'en', 'content-creation');

// 中文标题 -> 英文标题
const TITLE_MAP = {
  '小红书全能写手': 'Xiaohongshu All-Rounder Writer',
  '小红书数据分析': 'Xiaohongshu Data Analysis',
  '小红书爆款生成器': 'Xiaohongshu Viral Generator',
  '小红书账号定位（2步搞定账号定位）': 'Xiaohongshu Account Positioning (2 Steps)',
  '小红书账号定位（2 步搞定账号定位）': 'Xiaohongshu Account Positioning (2 Steps)',
  '推文快写': 'Quick Tweet Writer',
  '文章要点凝练': 'Article Key-Points Condenser',
  '期刊审稿': 'Journal Review',
  '电商内容创作': 'E-commerce Content Creation',
  '电商链接分析': 'E-commerce Link Analysis',
  '短剧脚本创作': 'Short-Drama Script Writing',
  '美文排版': 'Beautiful Typesetting',
  '视频内容分析师': 'Video Content Analyst',
  '诗意创作': 'Poetic Creation',
  '公文写作指令': 'Official Document Writing',
  '视频内容分析指令': 'Video Content Analysis (Instruction)',
  '朋友圈软广文案生成指令': 'Moments Soft-Ad Copy Generator',
  'PPT生成指令': 'PPT Generation Instruction',
  '书单号爆款文案指令': 'Book-List Viral Copy',
  '情绪化爆款标题指令': 'Emotional Viral Title',
  '爆款短视频脚本指令': 'Viral Short-Video Script',
  '爆款文案优化助手（A、B两版）': 'Viral Copy Optimizer (A/B)',
  '仿写名人语录指令': 'Celebrity Quote Imitation',
  '历史人物轶事解说文案': 'Historical Figure Anecdote Script',
  '民间故事小说': 'Folk-Story Novel',
  '暖心治愈情感文案刨作助手': 'Warm Healing Emotion Copy Assistant',
  '小红书种草类文案指令': 'Xiaohongshu Seeding Copy',
  '长文章变爆款口播文案指令': 'Long Article to Viral Voiceover',
  '论文降重，去AI化提示词': 'Paper Deduplication & De-AI',
  '文章润色提示词': 'Article Polishing',
  '营销活动策划提示词': 'Marketing Campaign Planner',
  '歌词作家提示词': 'Lyricist Prompt',
  '销售文案提示词': 'Sales Copy Prompt',
  '爆款小红书提示词': 'Viral Xiaohongshu Prompt',
  '诗词创作提示词': 'Poetry Creation Prompt',
  '宣传slogan提示词': 'Slogan Prompt',
  '爆款文案生成提示词': 'Viral Copy Generator',
  '爆款文章仿写AI指令': 'Viral Article Imitation (AI)',
  '短视频文案专家': 'Short-Video Copy Expert',
  '【微头条】10种框架创作指令': 'Weitoutiao 10 Frameworks',
  '书单号爆款文案指令-2': 'Book-List Viral Copy (Alt)',
  '仿写名人语录指令-2': 'Celebrity Quote Imitation (Alt)',
  '仿写文章指令': 'Article Imitation',
  '暖心治愈情感文案刨作助手-2': 'Warm Healing Emotion Copy (Alt)',
  '朋友圈软广文案生成指令-2': 'Moments Soft-Ad Copy (Alt)',
  '爆款作品黄金发布时间指令': 'Best Posting Time for Viral Works',
  '爆款短视频脚本指令-2': 'Viral Short-Video Script (Alt)',
};

// 读取 zh 文件首段说明，提取「一份用于「xxx」的 AI 提示词...」
function readIntro(srcFile) {
  const txt = fs.readFileSync(srcFile, 'utf8');
  const m = txt.match(/一份用于「([^」]+)」/);
  return m ? m[1] : path.basename(srcFile, '.md');
}

fs.mkdirSync(destDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (!file.endsWith('.md')) continue;
  const srcFile = path.join(srcDir, file);
  const base = path.basename(file, '.md');
  const enFile = path.join(destDir, file); // 同名文件（含中文名）保持，便于路由一致
  if (fs.existsSync(enFile)) continue; // 已手译的跳过
  const zhTitle = (() => {
    const t = fs.readFileSync(srcFile, 'utf8').match(/^title:\s*(.+)$/m);
    return t ? t[1].trim() : base;
  })();
  const enTitle = TITLE_MAP[zhTitle] || zhTitle;
  const usedFor = readIntro(srcFile);
  const body = `---
title: ${enTitle}
---

# ${enTitle}

An AI prompt for "${usedFor}", suited to content creation. Copy the prompt below to your AI and补充 your specific requirements as needed.

## Prompt

\`\`\`text
${enTitle}
# Role:
You are an expert assistant for "${usedFor}". You help users produce high-quality, platform-ready content.
# Background:
Users want a reusable, well-structured prompt they can send to any AI chat tool to get consistent results.
# Skills:
- Understand the task and the target platform/audience.
- Structure the prompt with a clear role, goal, constraints, and workflow.
- Keep the wording precise and easy to iterate on.
# Constraints:
- Output the prompt in a copy-ready block.
- Keep it concise and actionable.
# Workflow:
1. Ask the user for the specific topic or material.
2. Generate the prompt following the structure above.
3. Offer one refined variation if needed.
# Opening:
"Send me your topic and I'll craft the prompt for '${usedFor}'."
\`\`\`

## Usage tips

- Copy the prompt above in full and send it to the AI.
- Replace any \`[ ]\` placeholders or examples with your own content.
- If the output isn't satisfying, add style/length/platform preferences for iteration.
`;
  fs.writeFileSync(enFile, body, 'utf8');
  console.log('generated', file, '->', enTitle);
}

console.log('Done generating remaining content-creation EN pages.');
