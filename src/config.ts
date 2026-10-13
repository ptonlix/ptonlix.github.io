export const siteConfig = {
  name: '陈富东',
  title: 'AI 产品经理 · 开发者 · 创业者',
  tagline: '让 AI 不止会回答，更能进入真实工作流，与人一起把事情做成',
  description: 'AI 产品经理 · 开发者 · 创业者 | 构建能进入真实工作流的 AI Agent 产品',
  url: 'https://ptonlix.github.io',
  author: 'CyberFD',
  email: 'baird0917@163.com',
  twitter: 'Baird_cfd',
  github: 'ptonlix',
  zhihu: 'baird-66',
  lang: 'zh-CN',
};

export const about = {
  greeting: '👋 Hi，我是陈富东 / CyberFD',
  intro: '让 AI 不止会回答，更能进入真实工作流，与人一起把事情做成。',
  highlights: [
    '构建真正进入工作流、能与人协作的 AI 产品',
    '关注 Agent 原生应用、个人知识系统、企业级 AI 协作',
    '主要使用 Python / Go / TypeScript，持续参与开源',
  ],
};

export const featuredProjects = [
  {
    name: 'BeeWeave',
    description: '🐝 Agent-native creation workbench - 将素材收集、AI 辅助创作和知识积累融为一体的创作工作台',
    tags: ['Python', 'Agent', 'Knowledge Vault'],
    repo: 'ptonlix/beeweave',
    links: [
      { text: 'GitHub', url: 'https://github.com/ptonlix/beeweave' },
      { text: '文档', url: 'https://ptonlix.github.io/beeweave' },
    ],
  },
  {
    name: '即应 MagicChat',
    description: '🔥 企业 AI 原生工作入口 - 长亭科技出品，内置智能助理"茉莉"',
    role: '核心开发者',
    tags: ['Enterprise AI', 'Agent', 'Workplace'],
    repo: 'chaitin/MagicChat',
    links: [
      { text: 'GitHub', url: 'https://github.com/chaitin/MagicChat' },
    ],
  },
  {
    name: 'GoHumanLoop',
    description: '💯 Perfecting AI workflows with human intelligence - 让 AI Agent 能在关键阶段动态请求人类输入的 Python 库',
    tags: ['Python', 'Agent', 'Human-in-the-loop'],
    repo: 'ptonlix/gohumanloop',
    links: [
      { text: 'GitHub', url: 'https://github.com/ptonlix/gohumanloop' },
      { text: 'Hub', url: 'https://github.com/ptonlix/gohumanloophub' },
      { text: '飞书集成', url: 'https://github.com/ptonlix/gohumanloop-feishu' },
      { text: '企微集成', url: 'https://github.com/ptonlix/gohumanloop-wework' },
    ],
  },
  {
    name: 'LangChain-SearXNG',
    description: '🔍 AI Q&A Search Engine - 基于 LangChain 和 SearXNG 打造的开源 AI 搜索引擎',
    tags: ['Python', 'LangChain', 'Search'],
    repo: 'ptonlix/LangChain-SearXNG',
    links: [
      { text: 'GitHub', url: 'https://github.com/ptonlix/LangChain-SearXNG' },
    ],
  },
  {
    name: 'WhaleHire',
    description: '🐋 AI 智能招聘引擎 - 重新定义人才匹配与招聘流程',
    tags: ['Go', 'AI', 'Recruitment'],
    links: [
      { text: '产品页', url: 'https://baizhi.cloud/landing/whalehire' },
    ],
  },
  {
    name: 'MercLink',
    description: '💼 在 AI 时代，让天下没有难做的生意',
    tags: ['TypeScript', 'AI', 'Business'],
    repo: 'ptonlix/MercLink',
    links: [
      { text: 'GitHub', url: 'https://github.com/ptonlix/MercLink' },
    ],
  },
  {
    name: 'EEnhance',
    description: '🎙️ 基于 LangGraph 的研究报告播客生成 Agent',
    tags: ['Python', 'LangGraph', 'Research'],
    repo: 'ptonlix/EEnhance',
    links: [
      { text: 'GitHub', url: 'https://github.com/ptonlix/EEnhance' },
    ],
  },
];

export const archivedProjects = [
  { name: 'spokenai', repo: 'ptonlix/spokenai', description: 'AI 口语练习工具' },
  { name: 'LangChain-Emoji', repo: 'ptonlix/LangChain-Emoji', description: 'AI 表情包斗图 Agent' },
  { name: 'ssprompt', repo: 'ptonlix/ssprompt', description: 'Prompt 管理工具' },
  { name: 'PromptHub', repo: 'ptonlix/PromptHub', description: 'Prompt 分享社区' },
];

export const experience = [
  {
    company: '长亭科技',
    position: 'AI 产品经理',
    period: '2025.09 - 至今',
    description: '即应 MagicChat 核心开发者 - 企业 AI 原生工作入口产品，内置智能助理"茉莉"，为企业提供 AI 协作解决方案',
    url: 'https://www.chaitin.cn',
  },
  {
    company: '新奥集团 - 新绎',
    position: '产品经理',
    period: '2022 - 2025.09',
    description: '基于新绎旅游场景，构建哇途文旅智能模型 Waa-GPT，重构需供链接与服务模式，推动产业智能化升级。负责北海国际客运港及涠洲岛相关企业智能产品（旅游智伴、经营智伴和平台产品）设计，主导推动相关产品的研发、测试、部署和维护。产品每年服务超 220 万+ 游客和 500+ 生态商家',
    url: 'https://www.enowa.cn',
  },
  {
    company: '深信服',
    position: '研发工程师 | 产品经理',
    period: '2018 - 2022',
    description: '作为研发工程师，负责安全组网产品 SDWAN 智能路由器 4.0 系列版本、安全服务 Central 云图产品的后台架构实现。作为产品经理，负责产品的需求分析、产品设计和项目管理等工作。产品发货超 3 万+，服务京东、顺丰、联华超市、工商银行等企业客户',
    url: 'https://www.sangfor.com.cn',
  },
];

export const education = {
  school: '杭州电子科技大学',
  degree: '电子信息工程 - 本科',
  period: '2013 - 2017',
  description: '浙江省高水平大学建设高校 - "笃学力行、守正求新"',
};

export const techStack = {
  ai: ['Agents', 'Human-in-the-loop', 'LangGraph', 'LangChain', '知识工作流'],
  languages: ['Python', 'Go', 'TypeScript'],
  runtime: ['Docker', 'Linux', 'GitHub Actions'],
};

export const interests = [
  '🏀 篮球 三分很准',
  '📖 阅读 阳明心学 | 科技人文',
  '🎮 游戏 Steam | PS5 | Switch',
  '📷 记录美好生活',
];
