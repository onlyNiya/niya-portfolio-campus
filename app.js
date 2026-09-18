const projects = [
  {
    id: "campus-media",
    cardTitle: "校园经历",
    cardTitleEn: "CAMPUS EXPERIENCE",
    title: "校园经历",
    titleEn: "CAMPUS EXPERIENCE",
    category: "CAMPUS MEDIA · PUBLIC COMMUNICATION",
    year: "02 PROJECTS",
    summary:
      "校园实践涵盖三年校园官媒运营，以及重庆大学×重庆市血液中心70周年公益宣传项目，呈现从平台运营到大型公益项目制作与展演落地的完整能力。",
    role: "官媒运营、制片、舞台音效、舞台监督",
    output: "校园双微矩阵 / 电影短片 / 舞台展演",
    status: "校园经历",
    metrics: [
      ["02", "项目板块 / Sections"],
      ["03", "官媒运营年限 / Years"],
      ["02", "公益作品 / Works"],
    ],
    palette: {
      bg: "#e0cbb6",
      ink: "#2b2018",
      visual: "linear-gradient(145deg, #f0dfca 0%, #d2ad8f 58%, #8c6954 100%)",
      image:
        "linear-gradient(165deg, rgba(255,232,203,.45), transparent 42%), linear-gradient(135deg, #b78361, #563d2f)",
    },
    gallery: [],
  },
  {
    id: "internships",
    cardTitle: "实习经历",
    cardTitleEn: "INTERNSHIP EXPERIENCE",
    title: "实习经历",
    titleEn: "INTERNSHIP EXPERIENCE",
    category: "CONTENT OPERATIONS · COMMUNICATION",
    year: "04 EXPERIENCES",
    summary:
      "四段经历覆盖海外内容运营、赛事新媒体、新闻采编与品牌渠道策划，形成从内容判断、生产执行到数据复盘和商业协同的完整实践链路。",
    role: "内容运营、新媒体、新闻采编、渠道策划",
    output: "YouTube 矩阵 / 赛事传播 / 新闻报道 / 品牌项目",
    status: "工作经历",
    metrics: [
      ["04", "实习经历 / Roles"],
      ["05", "爱奇艺频道 / Channels"],
      ["09", "华龙网报道 / Reports"],
    ],
    palette: {
      bg: "#1f2935",
      ink: "#f3f1eb",
      visual:
        "radial-gradient(circle at 100% 0%, rgba(111, 137, 160, .42), transparent 44%), linear-gradient(145deg, #2f4051 0%, #1d2834 62%, #10161d 100%)",
      image:
        "radial-gradient(circle at 18% 82%, rgba(129, 160, 184, .34), transparent 40%), linear-gradient(145deg, #334858, #131b23 72%)",
    },
    gallery: [],
  },
  {
    id: "visual-design",
    title: "平面与版式设计",
    titleEn: "VISUAL & EDITORIAL DESIGN",
    category: "POSTER · MAGAZINE · LAYOUT",
    year: "12 WORKS",
    summary:
      "八张海报与四张杂志内页设计，围绕中国传统文化主题展开图像、字体与信息层级实验，并以两套可交互画廊展示完整作品。",
    role: "视觉设计、版式设计",
    output: "8 张海报 / 4 张杂志内页",
    status: "作品档案",
    metrics: [
      ["08", "海报 / Posters"],
      ["04", "杂志内页 / Editorial"],
      ["12", "视觉作品 / Works"],
    ],
    palette: {
      bg: "#c8b4a8",
      ink: "#261a17",
      visual: "linear-gradient(150deg, #e1cec1 0%, #c4a89d 58%, #9b796f 100%)",
      image:
        "linear-gradient(34deg, transparent 42%, rgba(255,227,197,.52) 43% 47%, transparent 48%), linear-gradient(145deg, #854039, #271c1c)",
    },
    gallery: ["editorial", "cover", "editorial", "cover"],
  },
  {
    id: "film-research",
    title: "剧本与电影研究",
    titleEn: "SCREENWRITING & FILM RESEARCH",
    category: "SCREEN · RESEARCH · CRITICISM",
    year: "2024—2026",
    summary:
      "以原创剧本《徜徉在黄昏》和单元式刑侦剧研究论文并置创作与学术训练，呈现从人物、意象和叙事结构到类型史与媒介生态的双向思考。",
    role: "编剧、研究、论文写作",
    output: "35 页原创剧本 / 9 页期刊论文",
    status: "研究与创作",
    metrics: [
      ["35", "剧本页数 / Script"],
      ["09", "论文页数 / Paper"],
      ["02", "成果 / Works"],
    ],
    palette: {
      bg: "#b9bdc3",
      ink: "#17191c",
      visual: "linear-gradient(145deg, #d7d9dc 0%, #afb3b9 55%, #838991 100%)",
      image:
        "linear-gradient(180deg, rgba(236,228,207,.12), rgba(13,16,22,.55)), linear-gradient(145deg, #6e747d, #171b21)",
    },
    gallery: ["research", "cover", "editorial", "research"],
  },
];

const rednoteCases = [
  {
    id: "audio",
    category: "拍摄方法",
    categoryEn: "CREATION METHOD",
    title: "用声音记住一座城市",
    titleEn: "TURNING SOUND INTO CITY MEMORY",
    published: "2026.03.24",
    subject: "DJI Mic Mini",
    method: "卖点叙事化",
    cover: "assets/rednote/case-audio.webp",
    link: "https://www.xiaohongshu.com/explore/6911a711000000000401327a?xsec_token=ABHYHHveHm3_6NZWrwSdIKD5cENTVifxbwdvdYHE9z9RU=&xsec_source=app_share",
    summary:
      "以“声音触发记忆”为内容命题，将收音设备从参数对象转化为保存城市感受的创作工具，并以重庆的环境声、行动声与人声构成完整体验。",
    metrics: [
      ["2.2W", "点赞 / Likes"],
      ["1.1W", "收藏 / Saves"],
      ["552", "评论 / Comments"],
    ],
    challenge: "如何避免麦克风内容沦为功能罗列，同时让非专业用户理解收音对影像创作的价值？",
    strategy:
      "从“普鲁斯特效应”切入，将嗅觉唤起记忆的概念延伸到声音，再落到真实城市记录问题；产品只在需要解决收音难题时出现。",
    structure: ["记忆概念建立", "重庆城市声音采集", "真实收音问题", "产品解决方案与方法总结"],
    highlights: [
      "将硬件卖点翻译为可复用的拍摄方法，弱化广告感。",
      "重庆既是声音素材，也是内容叙事本身，而非单纯背景。",
      "概念、场景与产品功能形成连续因果链，兼顾情绪价值和实用价值。",
    ],
  },
  {
    id: "review",
    category: "深度测评",
    categoryEn: "IN-DEPTH REVIEW",
    title: "人山人海，怎么拍？",
    titleEn: "SHOOTING CLEAN TRAVEL IMAGES IN A CROWD",
    published: "2026.05.14",
    subject: "Insta360 GO Ultra",
    method: "功能教程化",
    cover: "assets/rednote/case-review.webp",
    link: "https://www.xiaohongshu.com/explore/6a03ef74000000000803d945?xsec_token=AB0LDTyxy0EWH5nUmkgTwcBp0i7J90dckDlZmhAbP1WmA=&xsec_source=app_share",
    summary:
      "围绕节假日景区拥挤这一高频痛点，先给出可直接执行的拍摄方法，再让运动相机的体积、视角与稳定能力成为完成方法的工具。",
    metrics: [
      ["1,332", "点赞 / Likes"],
      ["729", "收藏 / Saves"],
      ["11", "评论 / Comments"],
    ],
    challenge: "旅行现场人群不可控，普通用户如何拍出主体清晰、画面干净且带有电影感的素材？",
    strategy:
      "以真实拍摄困境开场，将低速快门、机位选择和后期抽帧等技巧拆成操作步骤，再展示 GO Ultra 如何降低执行门槛。",
    structure: ["节假日拍摄痛点", "机位与运动路径", "参数及操作技巧", "产品能力验证", "成片效果对照"],
    highlights: [
      "用户问题先于产品功能，内容具备独立的方法价值。",
      "每个卖点都对应具体场景和操作，形成“方法—执行—结果”闭环。",
      "收藏/点赞比约 54.7%，体现较强的教程参考价值。",
    ],
  },
  {
    id: "ai",
    category: "AI 科技",
    categoryEn: "AI & TECHNOLOGY",
    title: "CES 2026 治愈产品清单",
    titleEn: "FROM PRODUCT LIST TO CULTURAL INSIGHT",
    published: "2026.05.14",
    subject: "CES 2026 / AI 产品趋势",
    method: "资讯观点化",
    cover: "assets/rednote/case-ai.webp",
    link: "https://www.xiaohongshu.com/explore/69bb7d96000000001f005278?xsec_token=ABenJw_ZCJNUTFwko93TwqMZYt-fZjQZkrfdm9Ammjn-w=&xsec_source=app_share",
    summary:
      "不做展会产品罗列，而是用健康、家庭、陪伴、出行、生产和创造六个生活场景，解释 AI 如何从可见产品转向日常基础设施。",
    metrics: [
      ["834", "点赞 / Likes"],
      ["562", "收藏 / Saves"],
      ["21", "评论 / Comments"],
    ],
    challenge: "面对信息密度极高的科技展会，如何让普通用户快速理解哪些变化与自己的生活真正相关？",
    strategy:
      "先提出“AI 正在成为隐形生活基础设施”的判断，再按生活场景组织案例，让产品服务于观点，而非用观点拼接产品。",
    structure: ["趋势判断", "六类生活场景", "代表产品举证", "普通用户关联", "未来影响总结"],
    highlights: [
      "从产品资讯上升到趋势解释，建立内容负责人的判断力。",
      "场景分类降低理解成本，同时保留科技议题的深度。",
      "结论明确，案例始终围绕中心观点展开。",
    ],
  },
  {
    id: "mobility",
    category: "智能出行",
    categoryEn: "SMART MOBILITY",
    title: "数码博主挑车的标准",
    titleEn: "A CREATOR'S DAY WITH XPENG MONA",
    published: "2026.06.15",
    subject: "小鹏 MONA M03",
    method: "产品场景化",
    cover: "assets/rednote/case-mobility.webp",
    link: "https://www.xiaohongshu.com/explore/6a2f86d20000000021020c56?xsec_token=ABiq7VUm18L26OA3LUlnmIcq0ZIV4BXp70hmhqTMHXsY8=&xsec_source=app_share",
    summary:
      "以摄影创作者的一天为叙事轴，将装载器材、移动拍摄、停车与休息等真实需求，转译为可感知的用车体验。",
    metrics: [
      ["754", "点赞 / Likes"],
      ["101", "收藏 / Saves"],
      ["9", "评论 / Comments"],
    ],
    challenge: "汽车功能繁多，如何避免逐项介绍，并让目标用户相信这些能力能真实改善创作工作流？",
    strategy:
      "使用“创作者的一天”组织内容，让后备箱、智能泊车、音响、氛围灯与座椅功能依次进入工作和休息场景。",
    structure: ["器材与移动痛点", "移动工作室", "智能停车", "氛围与休息", "创作者伙伴总结"],
    highlights: [
      "人物身份与产品使用场景高度匹配，体验具有可信度。",
      "从解决问题推进到情绪放松，兼顾实用信息和生活方式表达。",
      "“移动工作室—氛围导演—贴心伙伴”形成清晰的情绪递进。",
    ],
  },
];

const campusCases = [
  {
    id: "draw-spring",
    title: "为 CTBU 画一个不会谢的春天",
    titleEn: "DRAWING A SPRING THAT NEVER FADES",
    category: "手绘互动",
    categoryEn: "ILLUSTRATED STORY",
    date: "2022.04.08",
    asset: "assets/campus/draw-spring.jpg",
    width: 808,
    height: 19438,
    description: "以可互动手绘长图构建春日校园叙事，将校景、插画与轻交互结合，增强校园内容的视觉辨识度。",
  },
  {
    id: "holiday-reset",
    title: "假期余额清零，期待你的归来",
    titleEn: "THE RETURN-TO-CAMPUS COUNTDOWN",
    category: "节点创意",
    categoryEn: "MOMENT MARKETING",
    date: "2021.09.02",
    asset: "assets/campus/holiday-reset.jpg",
    width: 759,
    height: 23691,
    description: "借用朋友圈与聊天界面的熟悉语法回应返校节点，把通知型内容转化为轻量、有参与感的校园叙事。",
  },
  {
    id: "ideology-class",
    title: "12 字板书让全网泪目",
    titleEn: "A CLASSROOM MOMENT THAT MOVED THE WEB",
    category: "热点追踪",
    categoryEn: "TREND RESPONSE",
    date: "2022.03.13",
    asset: "assets/campus/ideology-class.jpg",
    width: 645,
    height: 15278,
    description: "快速跟进校园热点，以人物采访、评论反馈与媒体扩散路径组织内容，让校园故事形成更广泛的公共传播。",
  },
  {
    id: "lantern-riddles",
    title: "重工商大元宵灯会",
    titleEn: "LANTERN RIDDLES ACROSS CAMPUS",
    category: "节日互动",
    categoryEn: "FESTIVAL INTERACTION",
    date: "2021.02.26",
    asset: "assets/campus/lantern-riddles.jpg",
    width: 635,
    height: 12221,
    description: "把校园道路、建筑和空间特征转化为灯谜谜面，用节日节点组织一场可参与的校园识别游戏。",
  },
  {
    id: "farewell-ctbu",
    title: "再别了，重工商大",
    titleEn: "A SONIC FAREWELL TO CTBU",
    category: "毕业叙事",
    categoryEn: "GRADUATION STORY",
    date: "2021.07.12",
    asset: "assets/campus/farewell-ctbu.jpg",
    width: 630,
    height: 21116,
    description: "以校园环境声、音乐与影像串联离校情绪，通过声音线索完成一篇具有时间感的毕业叙事。",
  },
  {
    id: "hidden-words",
    title: "寻找校园里的隐藏词汇",
    titleEn: "FINDING ENGLISH WORDS AROUND CAMPUS",
    category: "考试节点",
    categoryEn: "EDUCATIONAL INTERACTION",
    date: "2022.06.12",
    asset: "assets/campus/hidden-words.jpg",
    width: 626,
    height: 23161,
    description: "结合四六级考试节点，用校园建筑、摄影和英文词汇设计找词游戏，降低知识型内容的阅读门槛。",
  },
  {
    id: "gaokao-journal",
    title: "高考手账",
    titleEn: "GAOKAO JOURNAL",
    category: "视频演示",
    categoryEn: "MOTION DEMO",
    date: "VIDEO",
    asset: "assets/campus/gaokao-journal.mp4",
    description: "以手账式视觉语言服务高考传播节点，用动态页面组织信息、校园氛围与情绪表达。",
    video: true,
  },
];

const campusSectionDetails = {
  official: {
    id: "official",
    title: "校园官方新媒体运营",
    titleEn: "UNIVERSITY OFFICIAL MEDIA",
    category: "CONTENT OPERATIONS · INSTITUTIONAL MEDIA",
    year: "3 YEARS",
    summary:
      "在重庆工商大学党委宣传部官方新媒体中心持续参与校园媒体工作，并担任平台运营负责人（副编辑）。围绕微信、微博双平台完成选题、内容生产、热点响应、跨部门协同与新人培训。",
    role: "平台运营负责人（副编辑）",
    output: "50+ 微信推文 / 双微矩阵 / 团队培训",
    status: "校园经历",
    metrics: [
      ["6W+", "粉丝净增长 / Growth"],
      ["50+", "微信推文 / Features"],
      ["4×", "同城热搜 Top 3"],
    ],
  },
  "public-good": {
    id: "public-good",
    title: "大型公益宣传",
    titleEn: "PUBLIC COMMUNICATION PROJECT",
    category: "PUBLIC COMMUNICATION · FILM · THEATRE",
    year: "2025.05—2025.10",
    summary:
      "全程参与重庆大学×重庆市血液中心70周年公益宣传项目，以电影短片《逆流》和小戏小品《热血真情》组成跨媒介内容组合，完成从创意策划、制作执行到舞台展演的完整落地。",
    role: "制片、舞台音效、舞台监督",
    output: "电影短片 / 舞台作品 / 线下展演 / 媒体传播",
    status: "大型公益宣传",
    metrics: [
      ["02", "公益作品 / Works"],
      ["03", "项目角色 / Roles"],
      ["02", "市级扶持 / Grants"],
    ],
  },
};

const publicGoodWorks = [
  {
    id: "niliu",
    kind: "电影短片",
    kindEn: "NARRATIVE SHORT FILM",
    title: "《逆流》",
    date: "2025",
    role: "制片",
    poster: "assets/campus-public/niliu-poster.webp",
    videoPoster: "assets/campus-public/niliu-video-poster.jpg",
    stream: "assets/campus-public/niliu/index.m3u8",
    description:
      "由重庆市血液中心与重庆大学美视电影学院联合制作，以剧情短片承载无偿献血主题，通过人物处境与叙事冲突建立公益议题的情感入口。影片获重庆市文联2025年度主题文艺创作扶持项目及“渝艺银光”短片扶持计划支持，完成后在央视频、新华网等平台投放报道。",
    highlights: ["校地联合制作", "双项市级文艺扶持", "央媒传播与报道"],
    links: [
      ["央视频报道", "https://m.yangshipin.cn/portrait_video?vid=t000064cqje&serverFrom=510103&pageContext=btype%3Dforum%26cpid%3D28371602691207877%26ctype%3Dcpid%26from%3D100013%26state%3Dinit%26ts%3D1764122403%26vid%3Dt000064cqje&ptag=4_2.8.5.23370_wxf"],
      ["项目报道", "https://mp.weixin.qq.com/s/dIUrjJw1-kghPO6v-hYY7w?scene=1&click_id=2081075975"],
    ],
  },
  {
    id: "rexue",
    kind: "小戏小品",
    kindEn: "STAGE PLAY",
    title: "《热血真情》",
    date: "2025",
    role: "舞台音效 / 舞台监督",
    poster: "assets/campus-public/rexue-poster.webp",
    stream: "assets/campus-public/rexue/index.m3u8",
    description:
      "作品以“献血证考验”引出家庭误会、身份反转与献血政策科普，在喜剧外壳中呈现普通人的善意与担当。项目获批重庆大学宣传部2025年毕业展演项目，并入围第六届重庆青年戏剧演出季及集中展演剧目。",
    highlights: ["毕业展演项目", "重庆青年戏剧演出季", "基层惠民展演"],
    links: [
      ["项目报道", "https://mp.weixin.qq.com/s/UUW0reDxB7-jzx8IF-3czA?scene=1&click_id=903892503"],
      ["《重庆日报》报道", "https://epaper.cqrb.cn/cqrb/2025-11/15/006/content_rb_353117.htm"],
    ],
  },
];

const posterWorks = [
  { id: "symmetry", title: "对称型", titleEn: "SYMMETRY", src: "assets/design/poster-symmetry.jpg" },
  { id: "full-bleed", title: "满版型", titleEn: "FULL BLEED", src: "assets/design/poster-full-bleed.jpg" },
  { id: "curve", title: "曲线型", titleEn: "CURVILINEAR", src: "assets/design/poster-curve.jpg" },
  { id: "triangle", title: "三角形", titleEn: "TRIANGULAR", src: "assets/design/poster-triangle.jpg" },
  { id: "top-bottom", title: "上下型", titleEn: "VERTICAL SPLIT", src: "assets/design/poster-top-bottom.jpg" },
  { id: "axis", title: "中轴型", titleEn: "CENTRAL AXIS", src: "assets/design/poster-axis.jpg" },
  { id: "focus", title: "重心型", titleEn: "VISUAL FOCUS", src: "assets/design/poster-focus.jpg" },
  { id: "free", title: "自由型", titleEn: "FREEFORM", src: "assets/design/poster-free.jpg" },
];

const magazineWorks = [
  { id: "juxtaposition", title: "并置型", titleEn: "JUXTAPOSITION", src: "assets/design/magazine-juxtaposition.jpg" },
  { id: "skeleton", title: "骨骼型", titleEn: "SKELETON GRID", src: "assets/design/magazine-skeleton.jpg" },
  { id: "diagonal", title: "倾斜型", titleEn: "DIAGONAL", src: "assets/design/magazine-diagonal.jpg" },
  { id: "corners", title: "四角型（错落）", titleEn: "OFFSET CORNERS", src: "assets/design/magazine-corners.jpg" },
];

const hualongReports = [
  {
    date: "2022.09.26",
    title: "重庆市公安局九龙坡区分局第三届“最美民警”系列报道③魏敏：三心二意两亏欠，道是无情却有情",
    link: "https://zf.cqnews.net/content/2022-09/26/content_1023971997077057536.html",
  },
  {
    date: "2022.08.19",
    title: "高新区第二届“我最喜爱的人民警察”系列报道㉓“情暖一方”康学良：“在服务人民的道路上一直走下去！”",
    link: "https://zf.cqnews.net/content/2022-08/19/content_1010188838765469696.html",
  },
  {
    date: "2022.08.18",
    title: "高新区第二届“我最喜爱的人民警察”系列报道㉒“多面能手”曹健：“当好群众贴心人，做好队伍大管家！”",
    link: "https://zf.cqnews.net/content/2022-08/18/content_1009831236749475840.html",
  },
  {
    date: "2022.08.08",
    title: "高新区第二届“我最喜爱的人民警察”系列报道⑭“织网能手”张跃飞：“在虚拟云端织就一张信息‘平安网’”",
    link: "https://zf.cqnews.net/content/2022-08/08/content_1006148539307139072.html",
  },
  {
    date: "2022.08.04",
    title: "高新区第二届“我最喜爱的人民警察”系列报道⑫“特别先生”胡加毅：“战斗在没有硝烟的战场！”",
    link: "https://zf.cqnews.net/content/2022-08/04/content_1004686983599394816.html",
  },
  {
    date: "2022.07.29",
    title: "高新区第二届“我最喜爱的人民警察”系列报道⑧“刑侦巨人”肖年湘：那一刻，他仿佛化身“巨人”",
    link: "https://zf.cqnews.net/content/2022-07/29/content_1002518934385659904.html",
  },
  {
    date: "2022.07.21",
    title: "高新区第二届“我最喜爱的人民警察”系列报道②“魔鬼教头”张登前：“打造特警‘尖刀连’，追求处警‘零失手’！”",
    link: "https://zf.cqnews.net/content/2022-07/21/content_999611516224712704.html",
  },
  {
    date: "2022.07.20",
    title: "高新区第二届“我最喜爱的人民警察”系列报道①“治安侠客”彭彦超：“警察就该站在为群众负责的第一线！”",
    link: "https://zf.cqnews.net/content/2022-07/20/content_999252000977752064.html",
  },
  {
    date: "2022.10.12",
    title: "重庆市公安局九龙坡区分局第三届“最美民警”系列报道⑥张豪：从“维和卫士”到“反诈群主”",
    link: "https://zf.cqnews.net/content/2022-10/12/content_1029759219640512512.html",
  },
];

const internshipExperiences = [
  {
    id: "iqiyi",
    company: "北京爱奇艺科技有限公司",
    companyShort: "爱奇艺",
    companyEn: "iQIYI",
    position: "海外事业部实习生",
    period: "2025.09—2025.12",
    categoryEn: "GLOBAL CONTENT OPERATIONS",
    summary:
      "独立负责五个 YouTube 细分频道的矩阵运营，在多语种、多片种与长短视频并行的业务环境中，平衡品牌传播、用户增长、商业变现和项目宣发目标。",
    meta: [
      ["Company / 公司", "北京爱奇艺科技有限公司"],
      ["Team / 部门", "海外事业部"],
      ["Role / 岗位", "内容运营实习生"],
      ["Period / 时间", "2025.09—2025.12"],
    ],
    metrics: [
      ["05", "独立运营频道 / Channels"],
      ["22", "数据周报 / Reports"],
      ["100%", "策略采纳率 / Adoption"],
    ],
    channels: [
      {
        id: "vietnam",
        name: "越站",
        nameEn: "VIETNAM VARIETY",
        objective: "播放增长与本地化",
        period: "过去 90 天",
        summary: "面向越南语综艺受众，同时运营短视频与长视频，以本地化选题、排播和 SEO 优化提升内容触达与观看效率。",
        action: "围绕区域热点调整内容排播，统一标题、标签与关键词逻辑，并根据单视频表现持续修正选题和发布时间。",
        result: "90 天获得 247.3 万次观看、7.4 万小时观看时长，并新增 2,440 名订阅者。",
        image: "assets/internship/iqiyi-vietnam.png",
        metrics: [["247.3W", "观看"], ["7.4W", "小时"], ["+2,440", "订阅"]],
      },
      {
        id: "shorts",
        name: "SHORTS",
        nameEn: "OFFICIAL SHORTS",
        objective: "爆款策划与用户增长",
        period: "过去 90 天",
        summary: "围绕剧集内容进行高频短视频运营，以热点结合、标题标签优化和社区互动建立稳定的增长入口。",
        action: "在 10 月 10 日至 11 月 13 日期间策划并发布系列短内容，累计产出 20 条 10 万播放以上视频，爆款率约 7%。",
        result: "90 天获得 3,051.7 万次观看，新增 1.9 万订阅者；订阅增长较此前 90 天提升 289%。",
        image: "assets/internship/iqiyi-shorts.png",
        metrics: [["3051.7W", "观看"], ["+1.9W", "订阅"], ["289%", "增长"]],
      },
      {
        id: "ranman",
        name: "燃漫",
        nameEn: "BLADE ANIME",
        objective: "内容变现",
        period: "过去 28 天",
        summary: "以收入为核心目标的动漫长视频频道，通过内容频率、发布时间与物料窗口的连续测试寻找更高效的变现组合。",
        action: "结合周度数据监控定位收入波动，测试排播频率与发布时间，并利用高关注物料窗口提升点击和观看。",
        result: "28 天获得 31.17 万次观看与 10.89 万小时观看时长，估算收入 1,562.13 美元，较前 28 天提升 96%。",
        image: "assets/internship/iqiyi-ranman.png",
        metrics: [["$1,562", "收入"], ["+96%", "环比"], ["10.89W", "小时"]],
      },
      {
        id: "xuanman",
        name: "玄漫",
        nameEn: "MYSTIC ANIME",
        objective: "稳定收入与长线运营",
        period: "过去 28 天",
        summary: "面向繁体中文动漫受众的长视频变现频道，通过差异化排播与广告配置维持观看时长和收入效率。",
        action: "针对频道内容结构实施差异化变现方案，并通过 A/B 测试优化片头、贴片与会员激励设置。",
        result: "28 天获得 68.6 万次观看、37.1 万小时观看时长及 4,656.44 美元估算收入。",
        image: "assets/internship/iqiyi-xuanman.png",
        metrics: [["$4,656", "收入"], ["68.6W", "观看"], ["37.1W", "小时"]],
      },
    ],
  },
  {
    id: "ufa",
    company: "中信证券 × Offer帮",
    companyShort: "UFA",
    companyEn: "UFA GLOBAL YOUTH FINANCE COMPETITION",
    position: "UFA 全球青年汇金融大赛项目运营",
    period: "时间待补充",
    categoryEn: "EVENT CONTENT OPERATIONS",
    summary:
      "负责 UFA 全球青年汇金融大赛微信公众号运营，以系列推文、直播宣发和赛程播报构建从赛事认知到报名转化的内容路径。",
    meta: [
      ["Project / 项目", "UFA 全球青年汇金融大赛"],
      ["Partners / 合作方", "中信证券 × Offer帮"],
      ["Role / 岗位", "新媒体运营"],
      ["Period / 时间", "待补充"],
    ],
    metrics: [
      ["5500+", "全球参赛者 / Participants"],
      ["1W+", "单篇最高阅读 / Peak reads"],
      ["18%", "顶尖院校选手 / Top schools"],
    ],
  },
  {
    id: "hualong",
    company: "重庆华龙网",
    companyShort: "华龙网",
    companyEn: "CQNEWS",
    position: "新闻采编实习生",
    period: "时间待补充",
    categoryEn: "REPORTING & NEWSROOM",
    summary:
      "独立完成线索挖掘、现场采访、新闻拍摄与文稿撰写，并参与融媒体专题协作；目前可核验九篇公开图文报道。",
    meta: [
      ["Company / 公司", "重庆华龙网"],
      ["Role / 岗位", "新闻采编实习生"],
      ["Published / 公开作品", "9 篇图文报道"],
      ["Period / 时间", "待补充；作品发表于 2022.07—10"],
    ],
    metrics: [
      ["09", "公开报道 / Reports"],
      ["04", "采编环节 / Workflow"],
      ["2022", "作品年份 / Year"],
    ],
  },
  {
    id: "waizui",
    company: "五粮液仙林生态酒业有限公司",
    companyShort: "歪嘴酒",
    companyEn: "WULIANGYE XIANLIN · WAIZUI",
    position: "渠道运营实习（策划／执行）",
    period: "2025.06—2025.09",
    categoryEn: "BRAND & CHANNEL OPERATIONS",
    summary:
      "围绕歪嘴酒品牌年轻化开展 KOL 资源开发、新品用户共创与校园渠道拓展，将平台达人、目标用户和校园资源连接为可执行的推广路径。",
    meta: [
      ["Company / 公司", "五粮液仙林生态酒业有限公司"],
      ["Brand / 品牌", "歪嘴酒"],
      ["Role / 岗位", "渠道运营实习（策划／执行）"],
      ["Period / 时间", "2025.06—2025.09"],
    ],
    metrics: [
      ["350W+", "签约 KOL 粉丝 / Reach"],
      ["11.8W+", "达人内容点赞 / Likes"],
      ["25", "共创用户 / Research"],
    ],
  },
];

const state = {
  currentIndex: 0,
  wheelLocked: false,
  touchStartY: null,
  rednoteScrollY: 0,
  internshipScrollY: 0,
  campusSection: null,
  activeHlsPlayers: [],
  designOrbitOffset: 0,
  designLightboxTrigger: null,
};

const stage = document.querySelector("#project-stage");
const dots = document.querySelector("#project-dots");
const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const caseDetailView = document.querySelector("#case-detail-view");
const experienceDetailView = document.querySelector("#experience-detail-view");
const projectGallery = document.querySelector("#project-gallery");
const caseGallery = document.querySelector("#case-gallery");
const experienceGallery = document.querySelector("#experience-gallery");
const currentNumber = document.querySelector("#current-number");
const totalNumber = document.querySelector("#total-number");
const designLightbox = document.querySelector("#design-lightbox");
const designLightboxClose = document.querySelector("#design-lightbox-close");
const designLightboxImage = document.querySelector("#design-lightbox-image");
const designLightboxTitle = document.querySelector("#design-lightbox-title");
const designLightboxSubtitle = document.querySelector("#design-lightbox-subtitle");
const backButton = document.querySelector("#back-button");
const backButtonLabel = backButton.querySelector("span");
const detailProgressTotal = document.querySelector("#detail-progress-total");

const pad = (number) => String(number).padStart(2, "0");

function renderHomeCards() {
  stage.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-card"
          type="button"
          data-index="${index}"
          data-project="${project.id}"
          aria-label="打开项目：${project.cardTitle || project.title}"
          style="
            --card-bg: ${project.palette.bg};
            --card-ink: ${project.palette.ink};
            --card-visual: ${project.palette.visual};
          "
        >
          <div class="card-top">
            <p class="card-kicker">${project.category}</p>
            <p class="card-year">${project.year}</p>
          </div>
          <div class="card-bottom">
            <h2 class="card-title">
              ${project.cardTitle || project.title}
              <span class="card-title-en">${project.cardTitleEn || project.titleEn}</span>
            </h2>
            <span class="card-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </span>
          </div>
        </button>
      `,
    )
    .join("");

  dots.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-dot"
          type="button"
          data-index="${index}"
          aria-label="选择项目 ${index + 1}：${project.cardTitle || project.title}"
        ></button>
      `,
    )
    .join("");

  totalNumber.textContent = pad(projects.length);
  updateCardPositions();
}

function updateCardPositions() {
  const cards = [...stage.querySelectorAll(".project-card")];
  const dotButtons = [...dots.querySelectorAll(".project-dot")];

  cards.forEach((card, index) => {
    let position = index - state.currentIndex;
    const half = Math.floor(projects.length / 2);
    if (position > half) position -= projects.length;
    if (position < -half) position += projects.length;

    const boundedPosition = Math.max(-2, Math.min(2, position));
    card.dataset.position = String(boundedPosition);
    card.dataset.hidden = Math.abs(position) > 2 ? "true" : "false";
    card.tabIndex = position === 0 ? 0 : -1;
    card.setAttribute("aria-hidden", position === 0 ? "false" : "true");
  });

  dotButtons.forEach((dot, index) => {
    dot.setAttribute("aria-current", index === state.currentIndex ? "true" : "false");
  });

  currentNumber.textContent = pad(state.currentIndex + 1);
}

function setCurrentProject(index) {
  state.currentIndex = (index + projects.length) % projects.length;
  updateCardPositions();
}

function navigateProject(direction) {
  setCurrentProject(state.currentIndex + direction);
}

function createMockWindow(project, panelIndex) {
  return `
    <div class="mock-window" style="--mock-rotate:${panelIndex % 2 ? "0.8deg" : "-0.7deg"}">
      <div class="mock-browser-bar"><i></i><i></i><i></i><span>SELECTED WORK</span></div>
      <div class="mock-content">
        <div class="mock-copy">
          <small>${project.category}</small>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div class="mock-media" style="--mock-media:${project.palette.image}"></div>
      </div>
    </div>
  `;
}

function createPhoneCluster(project) {
  return `
    <div class="phone-cluster" aria-label="移动端内容展示">
      ${[-4, 6, -1]
        .map(
          (rotation, index) => `
            <div class="phone-frame" style="--phone-r:${rotation}deg;--phone-y:${index === 1 ? "-22px" : "14px"}">
              <div class="phone-screen" style="--phone-screen:${
                index === 1 ? project.palette.image : project.palette.visual
              }">
                <div class="phone-ui"><i></i><i></i><i></i></div>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function createEditorialGrid(project, panelIndex) {
  return `
    <div class="editorial-grid" style="--grid-rotate:${panelIndex % 2 ? "0.4deg" : "-0.4deg"}">
      <article class="editorial-page">
        <small>NIYA / SELECTED WORK ${pad(panelIndex + 1)}</small>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </article>
      <article class="editorial-page has-image" style="--page-image:${project.palette.image}">
        <small>${project.titleEn}</small>
        <h3>Selected<br />Archive</h3>
      </article>
    </div>
  `;
}

function createResearchSheet(project) {
  return `
    <article class="research-sheet">
      <span class="timecode">00:24:16:08 / RESEARCH NOTES</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
    </article>
  `;
}

function rednotePanel(label, count, className, content) {
  return `
    <section class="gallery-panel rednote-panel ${className}" aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / 06</p>
    </section>
  `;
}

function createRednoteGallery() {
  const overview = rednotePanel(
    "ACCOUNT OVERVIEW",
    1,
    "rn-overview",
    `
      <div class="rn-overview-layout">
        <div class="rn-account-row">
          <img
            class="rn-avatar"
            src="assets/rednote/avatar.webp"
            alt="泥鸭呀 Niya 的小红书头像"
            width="900"
            height="506"
          />
          <div class="rn-account-copy">
            <strong>泥鸭呀Niya</strong>
            <span>小红书号 · xiao3863863836</span>
          </div>
          <a
            class="rn-round-link"
            href="https://xhslink.com/m/4iGDtDW0oiV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="访问泥鸭呀 Niya 的小红书主页"
          >↗</a>
        </div>

        <div class="rn-overview-copy">
          <p class="rn-overline">INDEPENDENT END-TO-END OPERATION · 2024.08—NOW</p>
          <h3><span>从用户洞察到商业交付，</span><span>独立完成内容全链路。</span></h3>
          <p>
            聚焦数码 3C、摄影、AI 科技与智能出行。负责定位、用户研究、选题、脚本、出镜、拍摄、剪辑、发布、评论区运营、数据复盘及商务沟通。
          </p>
        </div>

        <div class="rn-stat-grid" aria-label="账号关键数据">
          <div><strong>104K</strong><span>粉丝<br />FOLLOWERS</span></div>
          <div><strong>777K</strong><span>获赞与收藏<br />ENGAGEMENT</span></div>
          <div><strong>57</strong><span>可见笔记<br />VISIBLE POSTS</span></div>
        </div>
        <p class="rn-data-note">数据统计于 2026.08 · 商业合作范围：数码 3C</p>
      </div>
    `,
  );

  const profile = rednotePanel(
    "PROFILE & POSITIONING",
    2,
    "rn-profile",
    `
      <div class="rn-section-heading">
        <p>02 · 账号形象</p>
        <h3>稳定的人设识别，清晰的内容承诺。</h3>
        <span>电影学背景 × ENTP；用内容深度测评，用拍摄方法解释产品。</span>
      </div>
      <a
        class="rn-profile-frame"
        href="assets/rednote/profile.webp"
        target="_blank"
        aria-label="查看完整小红书主页截图"
      >
        <span class="rn-browser-bar"><i></i><i></i><i></i><em>点击查看完整主页 / OPEN FULL PROFILE</em></span>
        <img
          src="assets/rednote/profile.webp"
          alt="泥鸭呀 Niya 的小红书主页截图"
          loading="lazy"
          decoding="async"
          width="1238"
          height="1800"
        />
      </a>
    `,
  );

  const pillars = rednotePanel(
    "CONTENT PILLARS",
    3,
    "rn-pillars",
    `
      <div class="rn-section-heading rn-section-heading-light">
        <p>03 · 内容矩阵</p>
        <h3>四条内容线，共享同一套“产品 × 场景 × 方法”逻辑。</h3>
      </div>
      <div class="rn-pillar-grid">
        <article class="rn-pillar-card">
          <img src="assets/rednote/case-audio.webp" alt="拍摄方法代表作：用声音记住一座城市" loading="lazy" decoding="async" />
          <div><span>01 · CREATION</span><h4>拍摄方法</h4><p>声音、构图与镜头语言</p></div>
        </article>
        <article class="rn-pillar-card">
          <img src="assets/rednote/case-review.webp" alt="深度测评代表作：人山人海怎么拍" loading="lazy" decoding="async" />
          <div><span>02 · REVIEW</span><h4>深度测评</h4><p>从真实问题出发给出方法</p></div>
        </article>
        <article class="rn-pillar-card">
          <img src="assets/rednote/case-ai.webp" alt="AI 科技代表作：CES 2026 治愈产品清单" loading="lazy" decoding="async" />
          <div><span>03 · INSIGHT</span><h4>AI 科技</h4><p>把资讯整理成趋势判断</p></div>
        </article>
        <article class="rn-pillar-card">
          <img src="assets/rednote/case-mobility.webp" alt="智能出行代表作：数码博主挑车标准" loading="lazy" decoding="async" />
          <div><span>04 · MOBILITY</span><h4>智能出行</h4><p>用创作者生活验证产品</p></div>
        </article>
      </div>
    `,
  );

  const commercial = rednotePanel(
    "BRIEF TO DELIVERY",
    4,
    "rn-commercial",
    `
      <div class="rn-section-heading">
        <p>04 · 完整商业内容闭环</p>
        <h3>vivo X Fold6<br />从品牌任务到最终成片</h3>
        <span>新品前置传播 · 决策型种草 · 轻办公人群</span>
      </div>

      <div class="rn-commercial-intro">
        <div class="rn-idea-card">
          <span>CORE IDEA</span>
          <h4>折叠时空，<br />流动的美学</h4>
          <p>将折叠屏的物理开合，转译为对个人空间与时间效率的掌控。</p>
        </div>
        <div class="rn-idea-points">
          <div><b>01</b><p><strong>蓝洞配色</strong><span>情绪空间的建立</span></p></div>
          <div><b>02</b><p><strong>原子工作台</strong><span>多任务时间轴重构</span></p></div>
          <div><b>03</b><p><strong>折叠影像</strong><span>观察视角与仪式感</span></p></div>
        </div>
      </div>

      <ol class="rn-process" aria-label="商业内容生产流程">
        <li><span>01</span>品牌任务</li>
        <li><span>02</span>用户洞察</li>
        <li><span>03</span>选题创意</li>
        <li><span>04</span>脚本分镜</li>
        <li><span>05</span>拍摄剪辑</li>
        <li><span>06</span>发布复盘</li>
      </ol>

      <div class="rn-video-shell">
        <video controls preload="metadata" poster="assets/rednote/vivo-data.webp">
          <source src="assets/rednote/vivo-x-fold6.mp4" type="video/mp4" />
          你的浏览器暂不支持视频播放。
        </video>
        <div class="rn-video-caption"><span>FINAL CUT · 01:34</span><strong>潜入深蓝：在折叠开合间，重构移动时空的优雅秩序</strong></div>
      </div>

      <div class="rn-production-grid">
        <figure class="rn-production-item rn-production-script">
          <img src="assets/rednote/vivo-script.webp" alt="vivo X Fold6 商业视频脚本" loading="lazy" decoding="async" />
          <figcaption>脚本与分镜 / SCRIPT</figcaption>
        </figure>
        <figure class="rn-production-item">
          <img src="assets/rednote/vivo-bts-1.webp" alt="vivo X Fold6 产品拍摄现场" loading="lazy" decoding="async" />
          <figcaption>产品布光 / PRODUCT SET</figcaption>
        </figure>
        <figure class="rn-production-item">
          <img src="assets/rednote/vivo-bts-2.webp" alt="vivo X Fold6 产品静物拍摄" loading="lazy" decoding="async" />
          <figcaption>视觉执行 / VISUAL EXECUTION</figcaption>
        </figure>
        <figure class="rn-production-item rn-production-timeline">
          <img src="assets/rednote/vivo-timeline.webp" alt="vivo X Fold6 商业视频剪辑时间线" loading="lazy" decoding="async" />
          <figcaption>剪辑与声音设计 / EDITING TIMELINE</figcaption>
        </figure>
      </div>

      <div class="rn-result-grid">
        <div class="rn-result-proof">
          <img src="assets/rednote/vivo-data.webp" alt="vivo X Fold6 视频发布后的互动数据" loading="lazy" decoding="async" />
        </div>
        <div class="rn-result-copy">
          <p class="rn-overline">PUBLISHED RESULT</p>
          <div class="rn-result-numbers">
            <div><strong>1,561</strong><span>点赞</span></div>
            <div><strong>596</strong><span>收藏</span></div>
            <div><strong>25</strong><span>评论</span></div>
          </div>
          <h4>内容复盘</h4>
          <p>用“折叠时空”统一外观、办公与影像三个卖点，使内容保持完整叙事，而非参数堆叠；场景、服装与产品配色形成稳定的蓝绿色视觉系统。</p>
          <p>收藏/点赞比约 38.2%，显示较强的参考价值。后续可在结尾增加明确的场景选择题，进一步提升讨论。</p>
        </div>
      </div>
    `,
  );

  const storytelling = rednotePanel(
    "PRODUCT STORYTELLING SYSTEM",
    5,
    "rn-storytelling",
    `
      <div class="rn-section-heading rn-section-heading-light">
        <p>05 · 产品内容转译方法</p>
        <h3>同样是产品内容，用四种方式建立观看价值。</h3>
        <span>从用户问题开始，再决定产品应该以何种方式进入内容。</span>
      </div>

      <div class="rn-method-grid">
        <article class="rn-method-card">
          <img src="assets/rednote/case-review.webp" alt="Insta360 GO Ultra 深度测评封面" loading="lazy" decoding="async" />
          <div><span>01 · 功能教程化</span><h4>产品功能 → 可复制的方法</h4><p>先解决“人多怎么拍”的真实问题，再让产品能力成为方法的实现工具。</p><small>1,332 赞 · 729 藏 · 11 评</small></div>
        </article>
        <article class="rn-method-card">
          <img src="assets/rednote/case-audio.webp" alt="DJI Mic Mini 拍摄方法封面" loading="lazy" decoding="async" />
          <div><span>02 · 卖点叙事化</span><h4>收音卖点 → 城市记忆</h4><p>以声音触发记忆为叙事线，把麦克风转化为保存城市感受的创作方法。</p><small>2.2W 赞 · 1.1W 藏 · 552 评</small></div>
        </article>
        <article class="rn-method-card">
          <img src="assets/rednote/case-ai.webp" alt="CES 2026 AI 科技内容封面" loading="lazy" decoding="async" />
          <div><span>03 · 资讯观点化</span><h4>产品集合 → 趋势判断</h4><p>用健康、家庭、陪伴与创作场景组织 CES 新品，让普通用户理解 AI 的生活价值。</p><small>834 赞 · 562 藏 · 21 评</small></div>
        </article>
        <article class="rn-method-card">
          <img src="assets/rednote/case-mobility.webp" alt="小鹏 MONA 智能出行内容封面" loading="lazy" decoding="async" />
          <div><span>04 · 产品场景化</span><h4>汽车能力 → 创作者的一天</h4><p>沿着移动工作室、氛围导演、贴心伙伴的路径，让功能进入真实人物生活。</p><small>754 赞 · 101 藏 · 9 评</small></div>
        </article>
      </div>
    `,
  );

  const dataPlaceholder = rednotePanel(
    "GROWTH & INSIGHTS",
    6,
    "rn-data-placeholder",
    `
      <div class="rn-data-stage">
        <div class="rn-data-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
        <p class="rn-overline">06 · GROWTH & INSIGHTS</p>
        <h3>后台增长数据<br />整理中</h3>
        <span>DATA IN PREPARATION</span>
      </div>
    `,
  );

  const capabilities = rednotePanel(
    "CAPABILITIES",
    7,
    "rn-capabilities",
    `
      <div class="rn-capability-layout">
        <div class="rn-capability-title">
          <p class="rn-overline">07 · CAPABILITIES</p>
          <h3>从策略到交付，<br />保持同一个内容判断。</h3>
          <a href="https://xhslink.com/m/4iGDtDW0oiV" target="_blank" rel="noopener noreferrer">
            访问小红书主页 <span>↗</span>
          </a>
        </div>
        <ol class="rn-capability-list">
          <li><span>01</span>账号定位与用户研究</li>
          <li><span>02</span>选题策划与内容结构</li>
          <li><span>03</span>脚本撰写与出镜表达</li>
          <li><span>04</span>拍摄剪辑与视觉包装</li>
          <li><span>05</span>评论区运营与数据复盘</li>
          <li><span>06</span>商务沟通与品牌共创</li>
        </ol>
      </div>
    `,
  );

  const profileV2 = rednotePanel(
    "PROFILE & POSITIONING",
    2,
    "rn-profile rn-profile-v2",
    `
      <div class="rn-section-heading">
        <p>02 · 账号形象</p>
        <h3>稳定的人设识别，清晰的内容承诺。</h3>
        <span>在图框内部向下滚动即可查看完整内容。</span>
      </div>
      <figure class="rn-media-block">
        <div class="media-frame media-frame--long rn-profile-scroll" tabindex="0" aria-label="可滚动查看的完整小红书主页截图">
          <span class="media-scroll-hint">框内滚动 / SCROLL ↓</span>
          <img
            src="assets/rednote/profile.webp"
            alt="泥鸭呀 Niya 的完整小红书主页截图"
            loading="lazy"
            decoding="async"
            width="1238"
            height="1800"
          />
        </div>
        <figcaption>
          <span>账号主页 / PROFILE</span>
          <a href="assets/rednote/profile.webp" target="_blank">打开原图 ↗</a>
        </figcaption>
      </figure>
    `,
  );

  const caseCards = rednoteCases
    .map(
      (caseStudy, index) => `
        <button class="rn-case-tile" type="button" data-rednote-case="${caseStudy.id}" aria-label="查看案例：${caseStudy.title}">
          <span class="media-frame media-frame--portrait rn-case-cover-frame">
            <img src="${caseStudy.cover}" alt="${caseStudy.title}案例封面" loading="lazy" decoding="async" />
          </span>
          <span class="rn-case-tile-copy">
            <small>${pad(index + 1)} · ${caseStudy.categoryEn}</small>
            <strong>${caseStudy.category}</strong>
            <em>${caseStudy.method}</em>
            <span class="rn-case-open">查看案例 <b>↗</b></span>
          </span>
        </button>
      `,
    )
    .join("");

  const caseHub = rednotePanel(
    "CONTENT PILLARS & CASES",
    3,
    "rn-pillars rn-case-hub",
    `
      <div class="rn-section-heading rn-section-heading-light">
        <p>03 · 内容矩阵与代表案例</p>
        <h3 class="rn-balanced-title"><span>四条内容线，</span><span>四种产品内容转译方法。</span></h3>
        <span>点击任一封面，进入该案例的独立分析页。</span>
      </div>
      <div class="rn-case-hub-grid">${caseCards}</div>
    `,
  );

  const commercialFlow = rednotePanel(
    "BRIEF TO DELIVERY",
    4,
    "rn-commercial rn-commercial-flow",
    `
      <div class="rn-section-heading">
        <p>04 · 完整商业内容闭环</p>
        <h3>vivo X Fold6<br />从品牌任务到最终交付</h3>
      </div>

      <div class="rn-commercial-summary">
        <div>
          <span>BRAND TASK</span>
          <h4>新品前置传播</h4>
          <p>面向轻办公人群与高级白领，建立“AI 轻办公生产力工具”的认知，同时表达科技与艺术结合的视觉气质。</p>
        </div>
        <div>
          <span>CORE IDEA</span>
          <h4 class="rn-balanced-title"><span>折叠时空，</span><span>流动的美学</span></h4>
          <p>以折叠屏的物理开合统一外观、办公与影像卖点，转译为对个人空间和时间效率的掌控。</p>
        </div>
      </div>

      <div class="rn-workflow">
        <article class="rn-workflow-step">
          <header><span>01</span><div><h4>选题与内容策略</h4><p>STRATEGY & CONCEPT</p></div></header>
          <div class="rn-strategy-sheet">
            <div><b>蓝洞配色</b><span>情绪空间的建立</span></div>
            <div><b>原子工作台</b><span>多任务时间轴重构</span></div>
            <div><b>折叠影像</b><span>观察视角与拍摄仪式感</span></div>
          </div>
          <p class="rn-workflow-note">含义：先用统一创意概念整理品牌卖点，确定视频的视觉语言和三段式内容结构。</p>
        </article>

        <article class="rn-workflow-step">
          <header><span>02</span><div><h4>脚本与分镜</h4><p>SCRIPT & STORYBOARD</p></div></header>
          <figure class="rn-workflow-media">
            <div class="media-frame media-frame--long" tabindex="0" aria-label="可滚动查看的 vivo X Fold6 完整脚本截图">
              <span class="media-scroll-hint">框内滚动 / SCROLL ↓</span>
              <img src="assets/rednote/vivo-script.webp" alt="vivo X Fold6 商业视频脚本与分镜表" loading="lazy" decoding="async" />
            </div>
            <figcaption><strong>视频脚本表</strong><span>逐镜明确时长、参考画面、口播文案、花字和拍摄备注。</span></figcaption>
          </figure>
        </article>

        <article class="rn-workflow-step">
          <header><span>03</span><div><h4>场景、布光与产品拍摄</h4><p>PRODUCTION</p></div></header>
          <div class="rn-workflow-pair">
            <figure class="rn-workflow-media">
              <div class="media-frame media-frame--portrait"><img src="assets/rednote/vivo-bts-1.webp" alt="相机、灯光和蓝色背景构成的产品拍摄现场" loading="lazy" decoding="async" /></div>
              <figcaption><strong>拍摄现场</strong><span>相机、灯光与背景材质的实际搭建，确保画面质感可控。</span></figcaption>
            </figure>
            <figure class="rn-workflow-media">
              <div class="media-frame media-frame--portrait"><img src="assets/rednote/vivo-bts-2.webp" alt="vivo X Fold6 蓝色产品静物布景" loading="lazy" decoding="async" /></div>
              <figcaption><strong>产品视觉执行</strong><span>以蓝绿半透明材质呼应“深海蓝洞”，统一产品色彩和视觉氛围。</span></figcaption>
            </figure>
          </div>
        </article>

        <article class="rn-workflow-step">
          <header><span>04</span><div><h4>剪辑与声音设计</h4><p>EDITING & SOUND</p></div></header>
          <figure class="rn-workflow-media">
            <div class="media-frame media-frame--landscape"><img src="assets/rednote/vivo-timeline.webp" alt="vivo X Fold6 视频剪辑时间线" loading="lazy" decoding="async" /></div>
            <figcaption><strong>剪辑时间线</strong><span>展示画面、字幕、调色、转场和多轨声音的组合关系。</span></figcaption>
          </figure>
        </article>

        <article class="rn-workflow-step">
          <header><span>05</span><div><h4>成片交付</h4><p>FINAL DELIVERY</p></div></header>
          <figure class="rn-workflow-media">
            <div class="media-frame media-frame--landscape media-frame--video">
              <video controls preload="metadata" poster="assets/rednote/vivo-data.webp">
                <source src="assets/rednote/vivo-x-fold6.mp4" type="video/mp4" />
                你的浏览器暂不支持视频播放。
              </video>
            </div>
            <figcaption><strong>发布版高清视频 · 01:34</strong><span>《潜入深蓝：在折叠开合间，重构移动时空的优雅秩序》</span></figcaption>
          </figure>
        </article>

        <article class="rn-workflow-step">
          <header><span>06</span><div><h4>发布结果与复盘</h4><p>PUBLISH & REVIEW</p></div></header>
          <div class="rn-flow-result">
            <div class="rn-result-numbers">
              <div><strong>1,561</strong><span>点赞</span></div>
              <div><strong>596</strong><span>收藏</span></div>
              <div><strong>25</strong><span>评论</span></div>
            </div>
            <div><h5>内容复盘</h5><p>“折叠时空”使三个卖点保持在同一叙事中；收藏/点赞比约 38.2%，体现较强的参考价值。后续可在结尾增加明确的场景选择题，进一步提升讨论。</p></div>
          </div>
        </article>
      </div>
    `,
  );

  const dataPlaceholderV2 = rednotePanel(
    "GROWTH & INSIGHTS",
    5,
    "rn-data-placeholder",
    `
      <div class="rn-data-stage">
        <div class="rn-data-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
        <p class="rn-overline">05 · GROWTH & INSIGHTS</p>
        <h3>后台增长数据<br />整理中</h3>
        <span>DATA IN PREPARATION</span>
      </div>
    `,
  );

  const capabilitiesV2 = rednotePanel(
    "CAPABILITIES",
    6,
    "rn-capabilities",
    `
      <div class="rn-capability-layout">
        <div class="rn-capability-title">
          <p class="rn-overline">06 · CAPABILITIES</p>
          <h3>从策略到交付，<br />保持同一个内容判断。</h3>
          <a href="https://xhslink.com/m/4iGDtDW0oiV" target="_blank" rel="noopener noreferrer">访问小红书主页 <span>↗</span></a>
        </div>
        <ol class="rn-capability-list">
          <li><span>01</span>账号定位与用户研究</li>
          <li><span>02</span>选题策划与内容结构</li>
          <li><span>03</span>脚本撰写与出镜表达</li>
          <li><span>04</span>拍摄剪辑与视觉包装</li>
          <li><span>05</span>评论区运营与数据复盘</li>
          <li><span>06</span>商务沟通与品牌共创</li>
        </ol>
      </div>
    `,
  );

  return [overview, profileV2, caseHub, commercialFlow, dataPlaceholderV2, capabilitiesV2].join("");
}

function casePanel(label, count, className, content) {
  return `
    <section class="gallery-panel rednote-panel rn-case-panel ${className}" aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / 03</p>
    </section>
  `;
}

function renderRednoteCaseGallery(caseStudy) {
  const cover = casePanel(
    "SELECTED POST",
    1,
    "rn-case-cover-panel",
    `
      <div class="rn-case-cover-layout">
        <div class="media-frame media-frame--portrait rn-case-detail-cover">
          <img src="${caseStudy.cover}" alt="${caseStudy.title}完整封面" />
        </div>
        <div class="rn-case-cover-caption">
          <span>${caseStudy.categoryEn}</span>
          <h3>${caseStudy.title}</h3>
          <p>${caseStudy.method} · ${caseStudy.published}</p>
        </div>
      </div>
    `,
  );

  const analysis = casePanel(
    "CONTENT DECISION",
    2,
    "rn-case-analysis-panel",
    `
      <div class="rn-case-analysis">
        <div class="rn-case-analysis-copy">
          <p class="rn-overline">CONTENT CHALLENGE</p>
          <h3>从用户问题开始，决定产品如何进入内容。</h3>
          <div class="rn-analysis-block"><span>用户问题</span><p>${caseStudy.challenge}</p></div>
          <div class="rn-analysis-block"><span>内容策略</span><p>${caseStudy.strategy}</p></div>
        </div>
        <div class="rn-structure-card">
          <p class="rn-overline">CONTENT STRUCTURE</p>
          <ol>
            ${caseStudy.structure.map((step, index) => `<li><span>${pad(index + 1)}</span>${step}</li>`).join("")}
          </ol>
        </div>
      </div>
    `,
  );

  const results = casePanel(
    "RESULTS & HIGHLIGHTS",
    3,
    "rn-case-results-panel",
    `
      <div class="rn-case-results">
        <p class="rn-overline">CONTENT PERFORMANCE</p>
        <div class="rn-case-result-numbers">
          ${caseStudy.metrics
            .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
            .join("")}
        </div>
        <div class="rn-case-highlight-grid">
          <div>
            <p class="rn-overline">WHY IT WORKS</p>
            <h3>${caseStudy.method}</h3>
          </div>
          <ol>
            ${caseStudy.highlights.map((highlight, index) => `<li><span>${pad(index + 1)}</span><p>${highlight}</p></li>`).join("")}
          </ol>
        </div>
        <a class="rn-case-source" href="${caseStudy.link}" target="_blank" rel="noopener noreferrer">查看小红书原文 <span>↗</span></a>
      </div>
    `,
  );

  return [cover, analysis, results].join("");
}

function openRednoteCase(caseId, shouldUpdateHash = true) {
  const caseIndex = rednoteCases.findIndex((caseStudy) => caseStudy.id === caseId);
  if (caseIndex < 0) return;

  const caseStudy = rednoteCases[caseIndex];
  if (!projectGallery.querySelector(".rn-overview")) openProject("rednote", false);
  if (!detailView.hidden) state.rednoteScrollY = window.scrollY;

  document.querySelector("#case-detail-index").textContent = `${pad(caseIndex + 1)} / ${pad(
    rednoteCases.length,
  )} · ${caseStudy.categoryEn}`;
  document.querySelector("#case-detail-title").textContent = caseStudy.title;
  document.querySelector("#case-detail-title-en").textContent = caseStudy.titleEn;
  document.querySelector("#case-detail-summary").textContent = caseStudy.summary;
  document.querySelector("#case-progress-current").textContent = pad(caseIndex + 1);
  document.querySelector("#case-project-meta").innerHTML = [
    ["Category / 板块", caseStudy.category],
    ["Subject / 产品或议题", caseStudy.subject],
    ["Method / 转译方法", caseStudy.method],
    ["Published / 发布时间", caseStudy.published],
  ]
    .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
    .join("");
  document.querySelector("#case-metric-list").innerHTML = caseStudy.metrics
    .map(([value, label]) => `<div class="metric-chip"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  document.querySelector("#case-primary-link").href = caseStudy.link;
  caseGallery.innerHTML = renderRednoteCaseGallery(caseStudy);
  caseGallery.dataset.activeCase = caseStudy.id;

  homeView.hidden = true;
  detailView.hidden = true;
  experienceDetailView.hidden = true;
  caseDetailView.hidden = false;
  document.body.dataset.view = "case";
  document.body.dataset.project = "rednote";
  document.body.dataset.case = caseStudy.id;
  document.title = `${caseStudy.title} — 刘亚怡 Niya`;
  window.scrollTo({ top: 0, behavior: "instant" });

  if (shouldUpdateHash) {
    history.pushState({ projectId: "rednote", caseId }, "", `#project/rednote/case/${caseId}`);
  }
  window.setTimeout(() => document.querySelector("#case-back-button").focus(), 30);
}

function closeRednoteCase(shouldUpdateHash = true) {
  if (caseDetailView.contains(document.activeElement)) document.activeElement.blur();
  caseDetailView.hidden = true;
  homeView.hidden = true;
  detailView.hidden = false;
  document.body.dataset.view = "detail";
  document.body.dataset.project = "rednote";
  delete document.body.dataset.case;
  document.title = "小红书自媒体运营 — 刘亚怡 Niya";

  if (shouldUpdateHash) history.pushState({ projectId: "rednote" }, "", "#project/rednote");
  const restoreCaseHub = () => {
    const caseHub = projectGallery.querySelector(".rn-case-hub");
    if (caseHub) window.scrollTo({ top: caseHub.offsetTop, behavior: "instant" });
    projectGallery
      .querySelector(`[data-rednote-case="${caseGallery.dataset.activeCase || ""}"]`)
      ?.focus({ preventScroll: true });
  };
  restoreCaseHub();
  window.setTimeout(restoreCaseHub, 60);
}

function internshipPanel(label, count, total, className, content) {
  return `
    <section class="gallery-panel internship-panel ${className}" aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / ${pad(total)}</p>
    </section>
  `;
}

function createInternshipGallery() {
  const cards = internshipExperiences
    .map(
      (experience, index) => `
        <button
          class="internship-card"
          type="button"
          data-internship-experience="${experience.id}"
          aria-label="查看实习经历：${experience.company}，${experience.position}"
        >
          <span class="internship-card-number">${pad(index + 1)}</span>
          <span class="internship-card-period">${experience.period}</span>
          <strong>${experience.company}</strong>
          <span class="internship-card-position">${experience.position}</span>
          <span class="internship-card-arrow" aria-hidden="true">↗</span>
        </button>
      `,
    )
    .join("");

  return internshipPanel(
    "CAREER INDEX",
    1,
    1,
    "internship-index",
    `
      <div class="internship-index-heading">
        <p>SELECTED EXPERIENCE · 2022—2025</p>
        <h3>四段经历，<br />四种内容现场。</h3>
        <span>点击卡片查看完整经历。</span>
      </div>
      <div class="internship-card-grid">${cards}</div>
    `,
  );
}

function renderIqiyiExperience() {
  const channels = internshipExperiences[0].channels;
  const overview = internshipPanel(
    "CHANNEL MATRIX",
    1,
    5,
    "experience-iqiyi-overview",
    `
      <div class="experience-section-heading experience-section-heading--light">
        <p>01 · MATRIX STRATEGY</p>
        <h3>五个频道，<br />四种业务目标。</h3>
        <span>根据语言、片种、视频形态与业务目标分配内容，不用同一套运营逻辑覆盖所有频道。</span>
      </div>
      <ol class="iqiyi-matrix">
        <li><span>01</span><strong>越站</strong><em>播放增长 · 本地化</em></li>
        <li><span>02</span><strong>SHORTS</strong><em>爆款策划 · 用户增长</em></li>
        <li><span>03</span><strong>燃漫</strong><em>长视频 · 商业变现</em></li>
        <li><span>04</span><strong>玄漫</strong><em>长视频 · 稳定收入</em></li>
        <li><span>05</span><strong>发行</strong><em>预告物料 · 项目宣发</em></li>
      </ol>
      <div class="iqiyi-loop" aria-label="数据运营闭环">
        <span>分析</span><i>→</i><span>决策</span><i>→</i><span>执行</span><i>→</i><span>优化</span>
      </div>
    `,
  );

  const channelPanels = channels
    .map(
      (channel, index) => internshipPanel(
        `${channel.nameEn} · DATA EVIDENCE`,
        index + 2,
        5,
        `experience-iqiyi-channel experience-iqiyi-${channel.id}`,
        `
          <div class="iqiyi-channel-copy">
            <div>
              <p>${pad(index + 2)} · ${channel.period}</p>
              <h3>${channel.name}</h3>
              <span>${channel.nameEn}</span>
            </div>
            <div class="iqiyi-channel-brief">
              <strong>${channel.objective}</strong>
              <p>${channel.summary}</p>
            </div>
          </div>
          <figure class="iqiyi-evidence">
            <div class="iqiyi-analytics-frame">
              <img src="${channel.image}" alt="爱奇艺 ${channel.name} 频道后台数据截图" loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <div><span>策略动作</span><p>${channel.action}</p></div>
              <div><span>结果验证</span><p>${channel.result}</p></div>
            </figcaption>
          </figure>
          <div class="iqiyi-channel-metrics">
            ${channel.metrics.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
          </div>
        `,
      ),
    )
    .join("");

  return overview + channelPanels;
}

function renderUfaExperience() {
  const funnel = internshipPanel(
    "CONTENT TO CONVERSION",
    1,
    2,
    "experience-ufa-funnel",
    `
      <div class="experience-section-heading experience-section-heading--light">
        <p>01 · COMMUNICATION PATH</p>
        <h3>让内容成为<br />赛事报名入口。</h3>
        <span>围绕不同阶段的信息需求搭建公众号内容矩阵，将赛事认知、信任建立与报名行动连接起来。</span>
      </div>
      <ol class="ufa-funnel">
        <li><span>01</span><strong>系列推文</strong><p>解释赛制、价值与参与方式，建立完整赛事认知。</p></li>
        <li><span>02</span><strong>直播宣发</strong><p>邀请全网 1,800 万粉丝博主“小Lin说”直播宣讲，形成核心报名入口。</p></li>
        <li><span>03</span><strong>赛程播报</strong><p>以节点内容维持关注度，让参赛者持续获得确定信息。</p></li>
        <li><span>04</span><strong>报名转化</strong><p>在不同内容触点嵌入明确行动路径，承接用户兴趣。</p></li>
      </ol>
    `,
  );

  const impact = internshipPanel(
    "PROJECT IMPACT",
    2,
    2,
    "experience-ufa-impact",
    `
      <div class="ufa-impact-grid">
        <div><strong>5500+</strong><span>全球华人选手参赛</span><p>内容传播与渠道推广共同扩大赛事参与规模。</p></div>
        <div><strong>1W+</strong><span>单篇最高阅读量</span><p>核心信息内容形成稳定的用户触达。</p></div>
        <div><strong>18%</strong><span>国际顶尖院校选手</span><p>超过 1,000 名参赛者来自国际顶尖院校。</p></div>
      </div>
      <div class="ufa-impact-note">
        <p>ROLE VALUE</p>
        <h3>把赛事信息整理为可理解、可传播、可行动的内容。</h3>
      </div>
    `,
  );

  return funnel + impact;
}

function renderHualongExperience() {
  const workflow = internshipPanel(
    "REPORTING WORKFLOW",
    1,
    2,
    "experience-hualong-workflow",
    `
      <div class="experience-section-heading">
        <p>01 · END-TO-END REPORTING</p>
        <h3>从现场走到稿件，<br />独立完成内容闭环。</h3>
        <span>在真实新闻场景中完成信息判断、人物采访、影像采集和文字组织，并参与 H5、长图、视频等融媒体专题协作。</span>
      </div>
      <ol class="reporting-workflow">
        <li><span>01</span><strong>线索挖掘</strong><p>确认新闻价值与人物切口</p></li>
        <li><span>02</span><strong>现场采访</strong><p>搭建事实与人物信息框架</p></li>
        <li><span>03</span><strong>新闻拍摄</strong><p>完成现场图片和人物素材</p></li>
        <li><span>04</span><strong>文稿发布</strong><p>组织长篇人物报道并上线</p></li>
      </ol>
      <div class="hualong-proof-note"><strong>9</strong><span>篇公开图文报道可在线核验</span></div>
    `,
  );

  const reports = internshipPanel(
    "PUBLISHED REPORTS",
    2,
    2,
    "experience-hualong-reports",
    `
      <div class="report-archive-heading">
        <p>02 · PUBLISHED WORKS</p>
        <h3>华龙网图文报道合集</h3>
        <span>点击标题可在新标签页打开原文。</span>
      </div>
      <ol class="report-archive">
        ${hualongReports
          .map(
            (report, index) => `
              <li>
                <a href="${report.link}" target="_blank" rel="noopener noreferrer">
                  <span>${pad(index + 1)}</span>
                  <time datetime="${report.date.replaceAll(".", "-")}">${report.date}</time>
                  <strong>${report.title}</strong>
                  <b aria-hidden="true">↗</b>
                </a>
              </li>
            `,
          )
          .join("")}
      </ol>
    `,
  );

  return workflow + reports;
}

function brandStagePanel(count, title, titleEn, metric, metricLabel, copy, details) {
  return internshipPanel(
    titleEn,
    count,
    3,
    `experience-waizui-stage experience-waizui-stage-${count}`,
    `
      <div class="waizui-stage-number">${pad(count)}</div>
      <div class="waizui-stage-copy">
        <p>${titleEn}</p>
        <h3>${title}</h3>
        <span>${copy}</span>
      </div>
      <div class="waizui-stage-result">
        <strong>${metric}</strong>
        <span>${metricLabel}</span>
        <p>${details}</p>
      </div>
    `,
  );
}

function renderWaizuiExperience() {
  return [
    brandStagePanel(
      1,
      "KOL 资源开发",
      "KOL OUTREACH",
      "350W+",
      "签约达人粉丝量级",
      "通过抖音、视频号和小红书筛选垂直领域达人，匹配品牌年轻化传播需求。",
      "成功签约抖音达人“美娜呀美La”；视频投流期间，达人内容累计获得 11.8 万以上点赞。",
    ),
    brandStagePanel(
      2,
      "新品用户共创",
      "USER CO-CREATION",
      "25",
      "目标用户参与",
      "在新品上市前组织盲品、问卷与定性讨论，让真实用户进入产品和传播决策。",
      "收集酒体口感与品名偏好，并共创包装方向、推广标语和目标客群画像，结果反馈至产品与市场部门。",
    ),
    brandStagePanel(
      3,
      "校园渠道拓展",
      "CAMPUS CHANNEL",
      "10+",
      "宣传片演员匹配",
      "挖掘高校资源、组织演员招募，并尝试建立可持续的校园达人孵化入口。",
      "为品牌宣传片完成十余名演员的遴选和匹配，以校园资源支撑品牌年轻化内容落地。",
    ),
  ].join("");
}

function renderInternshipExperienceGallery(experience) {
  const renderers = {
    iqiyi: renderIqiyiExperience,
    ufa: renderUfaExperience,
    hualong: renderHualongExperience,
    waizui: renderWaizuiExperience,
  };
  return renderers[experience.id]?.() || "";
}

function openInternshipExperience(experienceId, shouldUpdateHash = true) {
  const experienceIndex = internshipExperiences.findIndex((experience) => experience.id === experienceId);
  if (experienceIndex < 0) return;

  const experience = internshipExperiences[experienceIndex];
  if (!projectGallery.querySelector(".internship-index")) openProject("internships", false);
  if (!detailView.hidden) state.internshipScrollY = window.scrollY;

  document.querySelector("#experience-detail-index").textContent = `${pad(experienceIndex + 1)} / ${pad(
    internshipExperiences.length,
  )} · ${experience.categoryEn}`;
  document.querySelector("#experience-detail-title").textContent = experience.companyShort;
  document.querySelector("#experience-detail-title-en").textContent = experience.companyEn;
  document.querySelector("#experience-detail-summary").textContent = experience.summary;
  document.querySelector("#experience-progress-current").textContent = pad(experienceIndex + 1);
  document.querySelector("#experience-project-meta").innerHTML = experience.meta
    .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
    .join("");
  document.querySelector("#experience-metric-list").innerHTML = experience.metrics
    .map(([value, label]) => `<div class="metric-chip"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");

  experienceGallery.innerHTML = renderInternshipExperienceGallery(experience);
  experienceGallery.dataset.activeExperience = experience.id;
  homeView.hidden = true;
  detailView.hidden = true;
  caseDetailView.hidden = true;
  experienceDetailView.hidden = false;
  document.body.dataset.view = "experience";
  document.body.dataset.project = "internships";
  document.body.dataset.experience = experience.id;
  delete document.body.dataset.case;
  document.title = `${experience.companyShort}实习经历 — 刘亚怡 Niya`;
  window.scrollTo({ top: 0, behavior: "instant" });

  if (shouldUpdateHash) {
    history.pushState(
      { projectId: "internships", experienceId },
      "",
      `#project/internships/experience/${experienceId}`,
    );
  }
  window.setTimeout(() => document.querySelector("#experience-back-button").focus(), 30);
}

function closeInternshipExperience(shouldUpdateHash = true) {
  if (experienceDetailView.contains(document.activeElement)) document.activeElement.blur();
  experienceDetailView.hidden = true;
  homeView.hidden = true;
  caseDetailView.hidden = true;
  detailView.hidden = false;
  document.body.dataset.view = "detail";
  document.body.dataset.project = "internships";
  delete document.body.dataset.experience;
  document.title = "实习经历 — 刘亚怡 Niya";

  if (shouldUpdateHash) history.pushState({ projectId: "internships" }, "", "#project/internships");
  const restoreInternshipIndex = () => {
    const indexPanel = projectGallery.querySelector(".internship-index");
    if (indexPanel) window.scrollTo({ top: indexPanel.offsetTop, behavior: "instant" });
    projectGallery
      .querySelector(`[data-internship-experience="${experienceGallery.dataset.activeExperience || ""}"]`)
      ?.focus({ preventScroll: true });
  };
  restoreInternshipIndex();
  window.setTimeout(restoreInternshipIndex, 60);
}

function campusPanel(label, count, total, className, content, id = "") {
  return `
    <section class="gallery-panel campus-panel ${className}" ${id ? `id="${id}"` : ""} aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / ${pad(total)}</p>
    </section>
  `;
}

function createCampusGallery() {
  const panelTotal = campusCases.length + 3;

  const overview = campusPanel(
    "IMPACT OVERVIEW",
    1,
    panelTotal,
    "campus-overview",
    `
      <div class="campus-hero-copy">
        <p>01 · OFFICIAL MEDIA OPERATIONS</p>
        <h3>从内容生产者，<br />到平台运营负责人。</h3>
        <span>三年校园媒体实践，其中两年以副编辑身份参与双微矩阵运营；工作覆盖热点响应、创意策划、内容生产、组织协同与团队培养。</span>
      </div>
      <div class="campus-impact-grid" aria-label="校园新媒体运营成果">
        <article><strong>6W+</strong><span>账号总粉丝净增长</span><small>任职两年内</small></article>
        <article><strong>50+</strong><span>微信推文产出</span><small>平均阅读量 4,000+</small></article>
        <article><strong>4×</strong><span>同城热搜 Top 3</span><small>微博热点策划</small></article>
        <article><strong>25+</strong><span>部员培训与督导</span><small>建立持续运营梯队</small></article>
      </div>
    `,
  );

  const operatingSystem = campusPanel(
    "OPERATING SYSTEM",
    2,
    panelTotal,
    "campus-system",
    `
      <div class="campus-section-heading">
        <p>02 · OPERATING SYSTEM</p>
        <h3>把单篇内容，放进一套可持续的运营机制。</h3>
        <span>“常设栏目 + 热点追踪”保障稳定更新，跨部门协同扩大内容能力，培训与复盘让方法继续留在团队中。</span>
      </div>
      <div class="campus-system-grid">
        <article>
          <span>01</span><small>CONTENT</small>
          <h4>内容体系建设</h4>
          <p>围绕微博、微信双平台规划常设栏目，同时捕捉节日、考试、返校与校园事件等高相关节点。</p>
        </article>
        <article>
          <span>02</span><small>COLLABORATION</small>
          <h4>传播矩阵协同</h4>
          <p>联动影像、设计、采编、视频、主播等内部部门，并协同招生办、校友会和团委共同生产与分发。</p>
        </article>
        <article>
          <span>03</span><small>TEAM</small>
          <h4>团队与人才培养</h4>
          <p>参与制定选拔与培训机制，主导技能分享，督导选题、生产、视觉与复盘的完整工作流程。</p>
        </article>
      </div>
      <div class="campus-workflow" aria-label="内容运营流程">
        <span>热点监测</span><i>→</i><span>创意切口</span><i>→</i><span>内容生产</span><i>→</i><span>矩阵发布</span><i>→</i><span>数据复盘</span>
      </div>
    `,
  );

  const caseTiles = campusCases
    .map(
      (caseStudy, index) => `
        <button class="campus-index-card" type="button" data-campus-target="${caseStudy.id}">
          <span class="campus-index-preview ${caseStudy.video ? "is-video" : ""}">
            ${
              caseStudy.video
                ? `<img src="assets/campus/gaokao-journal-poster.jpg" alt="高考手账视频封面" loading="eager" decoding="async" /><b aria-hidden="true">▶</b>`
                : `<img src="${caseStudy.asset.replace(".jpg", "-thumb.jpg")}" alt="${caseStudy.title}推文预览" loading="eager" decoding="async" />`
            }
          </span>
          <span class="campus-index-meta"><small>${pad(index + 1)} · ${caseStudy.categoryEn}</small><em>${caseStudy.date}</em></span>
          <strong>${caseStudy.title}</strong>
          <span class="campus-index-open">查看完整案例 <b aria-hidden="true">↘</b></span>
        </button>
      `,
    )
    .join("");

  const archive = campusPanel(
    "SELECTED CONTENT",
    3,
    panelTotal,
    "campus-archive",
    `
      <div class="campus-section-heading campus-section-heading--light">
        <p>03 · SELECTED CONTENT</p>
        <h3>七个案例，七种校园内容切口。</h3>
        <span>从节日互动、热点响应到毕业叙事与视频表达。点击目录卡片可直接定位至完整作品。</span>
      </div>
      <div class="campus-index-grid">${caseTiles}</div>
    `,
    "campus-case-index",
  );

  const casePanels = campusCases
    .map((caseStudy, index) =>
      campusPanel(
        `${caseStudy.categoryEn} · ${caseStudy.date}`,
        index + 4,
        panelTotal,
        `campus-case-panel ${caseStudy.video ? "campus-video-panel" : "campus-image-panel"}`,
        `
          <div class="campus-case-layout">
            <header class="campus-case-copy">
              <p>${pad(index + 1)} · ${caseStudy.category}</p>
              <h3>${caseStudy.title}</h3>
              <span>${caseStudy.titleEn}</span>
              <div class="campus-case-rule"></div>
              <p class="campus-case-description">${caseStudy.description}</p>
              ${
                caseStudy.video
                  ? `<small>VIDEO DEMONSTRATION</small>`
                  : `<a href="${caseStudy.asset}" target="_blank" rel="noopener noreferrer">打开完整长图 <b>↗</b></a>`
              }
            </header>
            <figure class="campus-case-proof">
              ${
                caseStudy.video
                  ? `
                    <div class="campus-video-frame">
                      <video controls playsinline preload="metadata" poster="assets/campus/gaokao-journal-poster.jpg">
                        <source src="${caseStudy.asset}" type="video/mp4" />
                        你的浏览器暂不支持视频播放。
                      </video>
                    </div>
                  `
                  : `
                    <div class="campus-long-frame" tabindex="0" aria-label="可滚动查看${caseStudy.title}完整推文长图">
                      <span class="campus-scroll-hint">框内滚动 / SCROLL ↓</span>
                      <img src="${caseStudy.asset}" alt="${caseStudy.title}完整公众号推文长截图" loading="lazy" decoding="async" width="${caseStudy.width}" height="${caseStudy.height}" />
                    </div>
                  `
              }
              <figcaption>
                <strong>${caseStudy.video ? "原始视频演示" : "完整推文长截图"}</strong>
                <span>${caseStudy.video ? "点击播放并使用播放器控制进度" : "在图框内向下滚动查看完整内容"}</span>
              </figcaption>
            </figure>
          </div>
        `,
        `campus-case-${caseStudy.id}`,
      ),
    )
    .join("");

  return overview + operatingSystem + archive + casePanels;
}

function createCampusHub() {
  const sections = [
    {
      id: "official",
      number: "01",
      eyebrow: "UNIVERSITY OFFICIAL MEDIA",
      title: "校园官媒运营",
      description: "三年校园媒体实践，从内容生产、热点响应走向双微矩阵运营、跨部门协同与团队培养。",
      image: "assets/campus/draw-spring-thumb.jpg",
      meta: "3 YEARS · 50+ FEATURES",
    },
    {
      id: "public-good",
      number: "02",
      eyebrow: "PUBLIC COMMUNICATION",
      title: "大型公益宣传",
      description: "重庆大学×重庆市血液中心70周年公益宣传项目，以电影短片与舞台展演连接公益议题、公众传播和线下活动。",
      image: "assets/campus-public/niliu-poster.webp",
      meta: "2 WORKS · FILM + THEATRE",
    },
  ];

  return campusPanel(
    "CAMPUS EXPERIENCE",
    1,
    1,
    "campus-hub",
    `
      <div class="campus-hub-heading">
        <p>SELECT A SECTION</p>
        <h3>两段校园实践，两种内容现场。</h3>
        <span>选择一个板块，查看完整项目、作品与过程证据。</span>
      </div>
      <div class="campus-section-grid">
        ${sections
          .map(
            (section) => `
              <button class="campus-section-card" type="button" data-campus-section="${section.id}">
                <span class="campus-section-image"><img src="${section.image}" alt="" loading="eager" decoding="async" /></span>
                <span class="campus-section-number">${section.number}</span>
                <span class="campus-section-copy">
                  <small>${section.eyebrow}</small>
                  <strong>${section.title}</strong>
                  <p>${section.description}</p>
                  <em>${section.meta}</em>
                </span>
                <span class="campus-section-arrow" aria-hidden="true">↗</span>
              </button>
            `,
          )
          .join("")}
      </div>
    `,
  );
}

function publicGoodPanel(label, count, className, content) {
  return campusPanel(label, count, 5, `public-good-panel ${className}`, content);
}

function renderPublicGoodWork(work, count) {
  return publicGoodPanel(
    `${work.kindEn} · ${work.date}`,
    count,
    `public-good-work public-good-work-${work.id}`,
    `
      <div class="public-good-work-header">
        <div>
          <p>${pad(count - 2)} · ${work.kind}</p>
          <h3>${work.title}</h3>
          <span>${work.kindEn}</span>
        </div>
        <dl>
          <div><dt>ROLE / 职责</dt><dd>${work.role}</dd></div>
          <div><dt>YEAR / 时间</dt><dd>${work.date}</dd></div>
        </dl>
      </div>
      <div class="public-good-media-grid">
        <figure class="public-good-poster">
          <img src="${work.poster}" alt="${work.title}${work.kind}海报" loading="lazy" decoding="async" />
          <figcaption>OFFICIAL POSTER</figcaption>
        </figure>
        <div class="public-good-work-copy">
          <p>${work.description}</p>
          <ul>${work.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
          <div class="public-good-links">
            ${work.links
              .map(
                ([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span>↗</span></a>`,
              )
              .join("")}
          </div>
        </div>
      </div>
      <figure class="public-good-video-shell">
        <video controls playsinline preload="metadata" poster="${work.videoPoster || work.poster}" data-hls-src="${work.stream}">
          你的浏览器暂不支持视频播放。
        </video>
        <figcaption>
          <strong>${work.title}完整视频</strong>
          <span class="hls-status">点击播放；视频将按网络情况分段加载。</span>
        </figcaption>
      </figure>
    `,
  );
}

function createPublicGoodGallery() {
  const overview = publicGoodPanel(
    "PROJECT OVERVIEW",
    1,
    "public-good-overview",
    `
      <div class="public-good-hero">
        <p>CHONGQING UNIVERSITY × CHONGQING BLOOD CENTER</p>
        <h3>用影像与舞台，<br />完成一次公益品牌事件。</h3>
        <span>围绕重庆市血液中心70周年，以电影短片《逆流》和小戏小品《热血真情》构成跨媒介内容组合，将无偿献血议题带入剧情表达、舞台展演与公共传播。</span>
      </div>
      <div class="public-good-impact" aria-label="项目成果">
        <article><strong>02</strong><span>公益作品</span><small>电影短片 + 舞台作品</small></article>
        <article><strong>03</strong><span>执行角色</span><small>制片 / 舞台音效 / 舞台监督</small></article>
        <article><strong>02</strong><span>市级扶持</span><small>主题创作 + 渝艺银光</small></article>
        <article><strong>央媒</strong><span>传播触达</span><small>央视频、新华网等平台</small></article>
      </div>
    `,
  );

  const process = publicGoodPanel(
    "PROJECT DELIVERY",
    2,
    "public-good-process",
    `
      <div class="campus-section-heading">
        <p>02 · END-TO-END DELIVERY</p>
        <h3>从创意策划，<br />到制作与展演落地。</h3>
        <span>项目同时面对影像生产、舞台执行和品牌传播三条工作线，以多重角色贯穿完整链路。</span>
      </div>
      <ol class="public-good-process-grid">
        <li><span>01</span><small>PLANNING</small><strong>创意与项目策划</strong><p>围绕无偿献血主题建立“电影短片 + 舞台展演”的内容组合，协调校地资源与项目节奏。</p></li>
        <li><span>02</span><small>PRODUCTION</small><strong>制作与现场执行</strong><p>承担制片、舞台音效和舞台监督工作，衔接前期筹备、拍摄制作、排演与现场执行。</p></li>
        <li><span>03</span><small>COMMUNICATION</small><strong>展演与公共传播</strong><p>推动作品进入毕业展演、青年戏剧演出季与媒体报道，让内容从作品转化为公共事件。</p></li>
      </ol>
    `,
  );

  const works = publicGoodWorks.map((work, index) => renderPublicGoodWork(work, index + 3)).join("");

  const coverage = publicGoodPanel(
    "MEDIA & RECOGNITION",
    5,
    "public-good-coverage",
    `
      <div class="public-good-coverage-copy">
        <p>05 · PROJECT OUTCOME</p>
        <h3>让作品进入展演、<br />扶持与公共传播链路。</h3>
        <span>项目实现市级文艺资源、校园资源与公共传播平台的联动，并通过多场线下展演继续触达观众。</span>
      </div>
      <div class="public-good-coverage-list">
        <article><time>2025.06</time><strong>《逆流》获重庆市文联主题文艺创作扶持</strong><span>市级创作资源支持</span></article>
        <article><time>2025.09</time><strong>《逆流》入选“渝艺银光”短片扶持计划</strong><span>短片制作与传播支持</span></article>
        <article><time>2025.10</time><strong>《热血真情》入围重庆青年戏剧演出季集中展演</strong><span>由毕业展演走向市级舞台</span></article>
        <article><time>2025.11</time><strong>《重庆日报》刊发专题报道</strong><span>公益议题进入城市公共传播</span></article>
      </div>
    `,
  );

  return overview + process + works + coverage;
}

function destroyHlsPlayers() {
  state.activeHlsPlayers.forEach((player) => player.destroy());
  state.activeHlsPlayers = [];
}

function setupHlsPlayers() {
  destroyHlsPlayers();
  projectGallery.querySelectorAll("video[data-hls-src]").forEach((video) => {
    const source = video.dataset.hlsSrc;
    const status = video.closest("figure")?.querySelector(".hls-status");
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      return;
    }
    if (window.Hls?.isSupported()) {
      const player = new window.Hls({ enableWorker: true });
      player.loadSource(source);
      player.attachMedia(video);
      player.on(window.Hls.Events.ERROR, (_event, data) => {
        if (data.fatal && status) status.textContent = "视频加载暂时失败，请刷新页面后重试。";
      });
      state.activeHlsPlayers.push(player);
      return;
    }
    if (status) status.textContent = "当前浏览器暂不支持该视频格式，建议使用最新版浏览器。";
  });
}

function designPanel(label, count, total, className, content) {
  return `
    <section class="gallery-panel design-panel ${className}" aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / ${pad(total)}</p>
    </section>
  `;
}

function createDesignGallery() {
  const orbitWorks = Array.from({ length: posterWorks.length * 2 }, (_, index) => posterWorks[index % posterWorks.length]);
  const orbitItems = orbitWorks
    .map(
      (work, index) => `
        <button
          class="poster-orbit-item"
          type="button"
          data-orbit-index="${index}"
          data-design-lightbox-src="${work.src}"
          data-design-lightbox-title="${work.title}"
          data-design-lightbox-subtitle="${work.titleEn} · POSTER DESIGN"
          aria-label="全屏查看海报：${work.title}"
        >
          <span class="poster-orbit-card-inner">
            <img src="${work.src}" alt="${work.title}海报设计" loading="eager" decoding="async" />
            <span class="poster-orbit-caption"><strong>${work.title}</strong><small>${work.titleEn}</small></span>
          </span>
        </button>
      `,
    )
    .join("");

  const posterPanel = designPanel(
    "POSTER DESIGN · INFINITE ORBIT",
    1,
    2,
    "design-poster-panel",
    `
      <header class="design-poster-intro">
        <h3>海报设计</h3>
        <p>围绕中国传统文化主题而展开的图像、字体与信息层级实验</p>
      </header>
      <div class="poster-orbit-shell">
        <div class="poster-orbit-stage" data-poster-carousel tabindex="0" aria-label="可循环浏览的海报半圆画廊">
          ${orbitItems}
        </div>
        <div class="poster-orbit-controls">
          <button type="button" data-orbit-step="-1" aria-label="上一张海报">←</button>
          <span>SCROLL / SWIPE</span>
          <button type="button" data-orbit-step="1" aria-label="下一张海报">→</button>
        </div>
        <button class="design-more-button" type="button" data-design-scroll>
          <span>查看更多</span>
          <small>VIEW MORE</small>
          <b aria-hidden="true">↓</b>
        </button>
      </div>
    `,
  );

  const magazineCards = magazineWorks
    .map(
      (work, index) => `
        <button
          class="magazine-work"
          type="button"
          data-design-lightbox-src="${work.src}"
          data-design-lightbox-title="${work.title}"
          data-design-lightbox-subtitle="${work.titleEn} · EDITORIAL LAYOUT"
          aria-label="全屏查看杂志内页：${work.title}"
        >
          <img src="${work.src}" alt="${work.title}杂志内页设计" loading="lazy" decoding="async" />
          <span><small>${pad(index + 1)} / 04 · ${work.titleEn}</small><strong>${work.title}</strong></span>
        </button>
      `,
    )
    .join("");

  const magazinePanel = designPanel(
    "EDITORIAL LAYOUT · FOUR STUDIES",
    2,
    2,
    "design-magazine-panel",
    `
      <header class="design-magazine-intro">
        <p>02 / 02 · EDITORIAL LAYOUT</p>
        <h3>杂志内页设计</h3>
      </header>
      <div class="magazine-strip">${magazineCards}</div>
    `,
  );

  return posterPanel + magazinePanel;
}

function researchPanel(label, count, total, className, content) {
  return `
    <section class="gallery-panel research-panel ${className}" aria-label="${label}">
      <p class="panel-label">${label}</p>
      ${content}
      <p class="panel-count">${pad(count)} / ${pad(total)}</p>
    </section>
  `;
}

function createFilmResearchGallery() {
  const overview = researchPanel(
    "CREATION × RESEARCH",
    1,
    4,
    "research-overview",
    `
      <div class="research-overview-copy">
        <p>01 · DUAL PRACTICE</p>
        <h3>在故事内部创作，<br />也从作品之外研究。</h3>
        <span>原创剧本训练人物、场景和意象的组织能力；学术论文则从类型史、媒介技术与社会文化的关系中建立影视判断。</span>
      </div>
      <div class="research-dual-grid">
        <article><span>CREATION</span><strong>《徜徉在黄昏》</strong><p>现实题材原创剧本<br />作者：刘亚怡</p><b>35 PAGES</b></article>
        <article><span>RESEARCH</span><strong>单元式刑侦剧创作流变</strong><p>期刊论文<br />作者：黄鹏、刘亚怡</p><b>09 PAGES</b></article>
      </div>
    `,
  );

  const screenplay = researchPanel(
    "ORIGINAL SCREENPLAY",
    2,
    4,
    "research-screenplay",
    `
      <div class="research-artifact-layout">
        <div class="research-artifact-copy">
          <p>02 · ORIGINAL SCREENPLAY</p>
          <h3>《徜徉在黄昏》</h3>
          <span>WANDERING AT DUSK</span>
          <p class="research-artifact-summary">封闭乡村中的两位女性因阅读结为忘年知己，并在家庭暴力、代际压迫与人生选择中成为彼此的救赎。故事以一次犯罪为转折，最终指向女性教育、觉醒与新生。</p>
          <div class="research-tags"><span>农村女性</span><span>家庭暴力</span><span>女性觉醒</span><span>现实题材</span></div>
          <a href="assets/research/screenplay-wandering-at-dusk.pdf" target="_blank" rel="noopener noreferrer">阅读完整剧本 PDF <b>↗</b></a>
        </div>
        <div class="screenplay-pages" aria-label="剧本封面与故事梗概预览">
          <button type="button" class="screenplay-page screenplay-page--cover" data-design-lightbox-src="assets/research/screenplay-cover.jpg" data-design-lightbox-title="《徜徉在黄昏》" data-design-lightbox-subtitle="剧本封面 · SCREENPLAY COVER">
            <img src="assets/research/screenplay-cover.jpg" alt="剧本《徜徉在黄昏》封面" loading="lazy" decoding="async" />
          </button>
          <button type="button" class="screenplay-page screenplay-page--inside" data-design-lightbox-src="assets/research/screenplay-synopsis.jpg" data-design-lightbox-title="《徜徉在黄昏》故事梗概" data-design-lightbox-subtitle="第 1 页 · STORY SYNOPSIS">
            <img src="assets/research/screenplay-synopsis.jpg" alt="剧本《徜徉在黄昏》故事梗概页面" loading="lazy" decoding="async" />
          </button>
        </div>
      </div>
    `,
  );

  const scriptMethod = researchPanel(
    "NARRATIVE SYSTEM",
    3,
    4,
    "research-script-method",
    `
      <div class="research-method-heading"><p>03 · SCREENWRITING METHOD</p><h3>用结构与意象，<br />让人物处境变得可见。</h3></div>
      <div class="narrative-track" aria-label="剧本叙事结构">
        <span>书信</span><i>×</i><span>回忆</span><i>×</i><span>梦境</span><i>×</i><span>超现实</span><i>×</i><span>现实</span>
      </div>
      <div class="script-method-grid">
        <article><small>STRUCTURE</small><strong>封闭式倒叙</strong><p>多重时间和现实层次交叉推进，在信息逐步回收中完成命运揭示。</p></article>
        <article><small>MOTIF 01</small><strong>黄昏</strong><p>作为光明与黑暗之间的临界时刻，映照女主角持续下沉又仍存希望的处境。</p></article>
        <article><small>MOTIF 02</small><strong>蓝色蜂鸟</strong><p>从被囚禁到飞离的运动轨迹，承载人物对自由和新生的隐秘愿望。</p></article>
        <article><small>CHARACTERS</small><strong>李萍 × 赵娣</strong><p>以教育机会和人生选择的错位建立关系，使两代女性在彼此身上完成觉醒。</p></article>
      </div>
    `,
  );

  const paper = researchPanel(
    "PUBLISHED RESEARCH",
    4,
    4,
    "research-paper",
    `
      <div class="paper-heading">
        <p>04 · PUBLISHED RESEARCH</p>
        <h3>技术、类型与社会互动：<br />21世纪以来内地单元式刑侦剧的创作流变</h3>
        <span>黄鹏、刘亚怡 · 2026年第3期 · 期刊论文</span>
      </div>
      <div class="paper-layout">
        <button type="button" class="paper-preview" data-design-lightbox-src="assets/research/paper-cover.jpg" data-design-lightbox-title="单元式刑侦剧的创作流变" data-design-lightbox-subtitle="论文首页 · PUBLISHED PAPER">
          <img src="assets/research/paper-cover.jpg" alt="论文《技术、类型与社会互动：21世纪以来内地单元式刑侦剧的创作流变》首页" loading="lazy" decoding="async" />
        </button>
        <div class="paper-analysis">
          <p>以2000—2025年的代表性剧集为样本，从结构、题材、叙事、角色、技术与美学六个维度考察类型演变，并把影视文本放回技术条件、产业资源与社会互动构成的生产生态中。</p>
          <ol>
            <li><span>2000—2010</span><strong>统一传播格局</strong><small>叙事收束与纪实表达</small></li>
            <li><span>2011—2016</span><strong>网络冲击</strong><small>类型位移与“网感”内化</small></li>
            <li><span>2017—2025</span><strong>行业资源重构</strong><small>以美学竞逐为核心</small></li>
          </ol>
          <a href="assets/research/paper-detective-drama-evolution.pdf" target="_blank" rel="noopener noreferrer">阅读全文 PDF <b>↗</b></a>
        </div>
      </div>
    `,
  );

  return overview + screenplay + scriptMethod + paper;
}

function updatePosterOrbit() {
  const carousel = projectGallery.querySelector("[data-poster-carousel]");
  if (!carousel) return;
  const items = [...carousel.querySelectorAll(".poster-orbit-item")];
  const total = items.length;
  const width = carousel.clientWidth;
  const height = carousel.clientHeight;
  const mobile = width < 560;
  const radius = mobile
    ? Math.min(width * 0.78, height * 0.74)
    : Math.min(720, width * 0.47, height * 0.94);
  const angleStep = mobile ? 28 : 22;
  const originY = height - (mobile ? 18 : 30);

  items.forEach((item, index) => {
    let relative = index - state.designOrbitOffset;
    relative = ((relative + total / 2) % total + total) % total - total / 2;
    const angle = relative * angleStep;
    const radians = (angle * Math.PI) / 180;
    const visible = Math.abs(angle) <= (mobile ? 90 : 112);
    const x = Math.sin(radians) * radius;
    const y = originY - Math.cos(radians) * radius;
    item.style.setProperty("--orbit-x", `${x}px`);
    item.style.setProperty("--orbit-y", `${y}px`);
    item.style.setProperty("--orbit-rotate", `${angle * 0.68}deg`);
    item.style.setProperty("--orbit-opacity", visible ? "1" : "0");
    item.style.setProperty("--orbit-z", String(100 - Math.round(Math.abs(angle))));
    item.toggleAttribute("inert", !visible);
    item.tabIndex = visible ? 0 : -1;
  });
}

function setupPosterOrbit() {
  const carousel = projectGallery.querySelector("[data-poster-carousel]");
  if (!carousel) return;
  state.designOrbitOffset = 0;
  updatePosterOrbit();

  carousel.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      state.designOrbitOffset += Math.max(-1.25, Math.min(1.25, delta / 110));
      updatePosterOrbit();
    },
    { passive: false },
  );

  let dragStartX = null;
  let dragStartOffset = 0;
  let dragPointerId = null;
  let dragMoved = false;
  let suppressNextClick = false;
  carousel.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragStartX = event.clientX;
    dragStartOffset = state.designOrbitOffset;
    dragPointerId = event.pointerId;
    dragMoved = false;
  });
  carousel.addEventListener("pointermove", (event) => {
    if (dragStartX === null) return;
    if (Math.abs(dragStartX - event.clientX) < 5 && !dragMoved) return;
    if (!dragMoved) {
      dragMoved = true;
      carousel.setPointerCapture(event.pointerId);
      carousel.classList.add("is-dragging");
    }
    state.designOrbitOffset = dragStartOffset + (dragStartX - event.clientX) / (carousel.clientWidth < 560 ? 64 : 92);
    updatePosterOrbit();
  });
  const stopDragging = () => {
    if (dragMoved) suppressNextClick = true;
    if (dragPointerId !== null && carousel.hasPointerCapture(dragPointerId)) {
      carousel.releasePointerCapture(dragPointerId);
    }
    dragStartX = null;
    dragPointerId = null;
    dragMoved = false;
    carousel.classList.remove("is-dragging");
  };
  carousel.addEventListener("pointerup", stopDragging);
  carousel.addEventListener("pointercancel", stopDragging);
  carousel.addEventListener("click", (event) => {
    if (!suppressNextClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressNextClick = false;
  });
  carousel.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    state.designOrbitOffset += event.key === "ArrowRight" ? 1 : -1;
    updatePosterOrbit();
  });

  projectGallery.querySelectorAll("[data-orbit-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.designOrbitOffset += Number(button.dataset.orbitStep);
      updatePosterOrbit();
    });
  });
}

function openDesignLightbox(trigger) {
  if (!trigger?.dataset.designLightboxSrc) return;
  state.designLightboxTrigger = trigger;
  designLightboxImage.src = trigger.dataset.designLightboxSrc;
  designLightboxImage.alt = `${trigger.dataset.designLightboxTitle || "作品"}放大预览`;
  designLightboxTitle.textContent = trigger.dataset.designLightboxTitle || "作品预览";
  designLightboxSubtitle.textContent = trigger.dataset.designLightboxSubtitle || "";
  designLightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  window.setTimeout(() => designLightboxClose.focus(), 30);
}

function closeDesignLightbox() {
  if (designLightbox.hidden) return;
  designLightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  designLightboxImage.removeAttribute("src");
  state.designLightboxTrigger?.focus({ preventScroll: true });
  state.designLightboxTrigger = null;
}

function renderGallery(project) {
  if (project.id === "rednote") return createRednoteGallery();
  if (project.id === "internships") return createInternshipGallery();
  if (project.id === "campus-media") return createCampusHub();
  if (project.id === "visual-design") return createDesignGallery();
  if (project.id === "film-research") return createFilmResearchGallery();

  const creators = {
    cover: createMockWindow,
    phones: createPhoneCluster,
    editorial: createEditorialGrid,
    research: createResearchSheet,
  };

  return project.gallery
    .map((type, panelIndex) => {
      const createVisual = creators[type] || createMockWindow;
      return `
        <section
          class="gallery-panel"
          data-type="${type}"
          style="
            --panel-bg:${project.palette.bg};
            --panel-ink:${project.palette.ink};
            --panel-visual:${panelIndex % 2 ? project.palette.image : project.palette.visual};
          "
          aria-label="${project.title}作品展示 ${panelIndex + 1}"
        >
          <p class="panel-label">${project.titleEn}</p>
          ${createVisual(project, panelIndex)}
          <p class="panel-count">${pad(panelIndex + 1)} / ${pad(project.gallery.length)}</p>
        </section>
      `;
    })
    .join("");
}

function openProject(projectId, shouldUpdateHash = true) {
  const index = projects.findIndex((project) => project.id === projectId);
  if (index < 0) return;

  destroyHlsPlayers();
  const project = projects[index];
  state.currentIndex = index;
  state.campusSection = null;
  backButtonLabel.textContent = "返回 / Back";

  document.querySelector("#detail-index").textContent = `${pad(index + 1)} / ${pad(
    projects.length,
  )} · ${project.category}`;
  document.querySelector("#detail-title").textContent = project.title;
  document.querySelector("#detail-title-en").textContent = project.titleEn;
  document.querySelector("#detail-summary").textContent = project.summary;
  document.querySelector("#detail-progress-current").textContent = pad(index + 1);
  detailProgressTotal.textContent = pad(projects.length);

  document.querySelector("#project-meta").innerHTML = [
    ["Role / 职责", project.role],
    ["Output / 产出", project.output],
    ["Status / 类型", project.status],
    ["Year / 时间", project.year],
  ]
    .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
    .join("");

  document.querySelector("#metric-list").innerHTML = project.metrics
    .map(
      ([value, label]) => `
        <div class="metric-chip"><strong>${value}</strong><span>${label}</span></div>
      `,
    )
    .join("");

  const primaryLink = document.querySelector("#detail-primary-link");
  const linkNote = document.querySelector("#detail-link-note");
  const detailActions = primaryLink.closest(".detail-actions");
  if (project.link) {
    detailActions.hidden = false;
    primaryLink.href = project.link;
    primaryLink.target = "_blank";
    primaryLink.rel = "noopener noreferrer";
    primaryLink.classList.remove("is-disabled");
    primaryLink.innerHTML = `
      ${project.linkLabel || "查看原作 / View work"}
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
    `;
    linkNote.textContent = "外部链接将在新标签页打开";
  } else {
    detailActions.hidden = true;
    primaryLink.href = "#";
    primaryLink.removeAttribute("target");
    primaryLink.removeAttribute("rel");
    primaryLink.classList.add("is-disabled");
    primaryLink.innerHTML = `
      查看原作 / View work
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
    `;
    linkNote.textContent = "";
  }

  projectGallery.innerHTML = renderGallery(project);
  homeView.hidden = true;
  caseDetailView.hidden = true;
  experienceDetailView.hidden = true;
  detailView.hidden = false;
  document.body.dataset.view = "detail";
  document.body.dataset.project = project.id;
  delete document.body.dataset.case;
  delete document.body.dataset.campusSection;
  document.title = `${project.title} — 刘亚怡 Niya`;
  window.scrollTo({ top: 0, behavior: "auto" });
  if (project.id === "visual-design") {
    window.requestAnimationFrame(() => window.requestAnimationFrame(setupPosterOrbit));
  }

  if (shouldUpdateHash) history.pushState({ projectId }, "", `#project/${projectId}`);
  window.setTimeout(() => document.querySelector("#back-button").focus(), 30);
}

function openCampusSection(sectionId, shouldUpdateHash = true) {
  const section = campusSectionDetails[sectionId];
  if (!section) return;
  const campusIndex = projects.findIndex((project) => project.id === "campus-media");
  if (campusIndex < 0) return;

  if (homeView.hidden === false || detailView.hidden) openProject("campus-media", false);
  destroyHlsPlayers();
  state.currentIndex = campusIndex;
  state.campusSection = sectionId;

  document.querySelector("#detail-index").textContent = `${sectionId === "official" ? "01" : "02"} / 02 · ${section.category}`;
  document.querySelector("#detail-title").textContent = section.title;
  document.querySelector("#detail-title-en").textContent = section.titleEn;
  document.querySelector("#detail-summary").textContent = section.summary;
  document.querySelector("#detail-progress-current").textContent = sectionId === "official" ? "01" : "02";
  detailProgressTotal.textContent = "02";
  document.querySelector("#project-meta").innerHTML = [
    ["Role / 职责", section.role],
    ["Output / 产出", section.output],
    ["Status / 类型", section.status],
    ["Year / 时间", section.year],
  ]
    .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
    .join("");
  document.querySelector("#metric-list").innerHTML = section.metrics
    .map(([value, label]) => `<div class="metric-chip"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  document.querySelector("#detail-primary-link").closest(".detail-actions").hidden = true;

  projectGallery.innerHTML = sectionId === "official" ? createCampusGallery() : createPublicGoodGallery();
  homeView.hidden = true;
  caseDetailView.hidden = true;
  experienceDetailView.hidden = true;
  detailView.hidden = false;
  document.body.dataset.view = "detail";
  document.body.dataset.project = "campus-media";
  document.body.dataset.campusSection = sectionId;
  backButtonLabel.textContent = "返回校园经历 / Back";
  document.title = `${section.title} — 刘亚怡 Niya`;
  window.scrollTo({ top: 0, behavior: "auto" });
  if (sectionId === "public-good") window.requestAnimationFrame(setupHlsPlayers);

  if (shouldUpdateHash) {
    history.pushState(
      { projectId: "campus-media", campusSection: sectionId },
      "",
      `#project/campus-media/section/${sectionId}`,
    );
  }
  window.setTimeout(() => backButton.focus(), 30);
}

function closeCampusSection(shouldUpdateHash = true) {
  const previousSection = state.campusSection;
  openProject("campus-media", false);
  if (shouldUpdateHash) history.pushState({ projectId: "campus-media" }, "", "#project/campus-media");
  window.setTimeout(() => {
    projectGallery.querySelector(`[data-campus-section="${previousSection || "official"}"]`)?.focus();
  }, 30);
}

function closeProject(shouldUpdateHash = true) {
  destroyHlsPlayers();
  closeDesignLightbox();
  state.campusSection = null;
  backButtonLabel.textContent = "返回 / Back";
  caseDetailView.hidden = true;
  experienceDetailView.hidden = true;
  detailView.hidden = true;
  homeView.hidden = false;
  delete document.body.dataset.view;
  delete document.body.dataset.project;
  delete document.body.dataset.case;
  delete document.body.dataset.experience;
  delete document.body.dataset.campusSection;
  document.title = "刘亚怡 Niya — Portfolio";
  updateCardPositions();
  window.scrollTo({ top: 0, behavior: "auto" });

  if (shouldUpdateHash) history.pushState({}, "", window.location.pathname);
  window.setTimeout(() => {
    stage.querySelector(`[data-index="${state.currentIndex}"]`)?.focus();
  }, 30);
}

function handleHashRoute() {
  const campusSectionMatch = window.location.hash.match(/^#project\/campus-media\/section\/([^/]+)$/);
  if (campusSectionMatch) {
    openCampusSection(campusSectionMatch[1], false);
    return;
  }

  const experienceMatch = window.location.hash.match(/^#project\/internships\/experience\/([^/]+)$/);
  if (experienceMatch) {
    openInternshipExperience(experienceMatch[1], false);
    return;
  }

  const projectMatch = window.location.hash.match(/^#project\/([^/]+)$/);
  if (projectMatch) {
    if (state.campusSection && projectMatch[1] === "campus-media") {
      closeCampusSection(false);
    } else if (!experienceDetailView.hidden && projectMatch[1] === "internships") {
      closeInternshipExperience(false);
    } else {
      openProject(projectMatch[1], false);
    }
    return;
  }

  if (!caseDetailView.hidden) {
    caseDetailView.hidden = true;
    detailView.hidden = false;
  }
  if (!experienceDetailView.hidden) {
    experienceDetailView.hidden = true;
    detailView.hidden = false;
  }
  if (!detailView.hidden) closeProject(false);
}

renderHomeCards();

stage.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;
  const index = Number(card.dataset.index);
  if (index === state.currentIndex) {
    openProject(projects[index].id);
  } else {
    setCurrentProject(index);
  }
});

dots.addEventListener("click", (event) => {
  const dot = event.target.closest(".project-dot");
  if (dot) setCurrentProject(Number(dot.dataset.index));
});

document.querySelector("#previous-project").addEventListener("click", () => navigateProject(-1));
document.querySelector("#next-project").addEventListener("click", () => navigateProject(1));
document.querySelector("#back-button").addEventListener("click", () => {
  if (state.campusSection) closeCampusSection();
  else closeProject();
});
document.querySelector("#case-back-button").addEventListener("click", () => closeRednoteCase());
document.querySelector("#experience-back-button").addEventListener("click", () => closeInternshipExperience());

projectGallery.addEventListener("click", (event) => {
  const lightboxTrigger = event.target.closest("[data-design-lightbox-src]");
  if (lightboxTrigger) openDesignLightbox(lightboxTrigger);

  const designScrollButton = event.target.closest("[data-design-scroll]");
  if (designScrollButton) {
    projectGallery.querySelector(".design-magazine-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const caseButton = event.target.closest("[data-rednote-case]");
  if (caseButton) openRednoteCase(caseButton.dataset.rednoteCase);

  const experienceButton = event.target.closest("[data-internship-experience]");
  if (experienceButton) openInternshipExperience(experienceButton.dataset.internshipExperience);

  const campusSectionButton = event.target.closest("[data-campus-section]");
  if (campusSectionButton) openCampusSection(campusSectionButton.dataset.campusSection);

  const campusTarget = event.target.closest("[data-campus-target]");
  if (campusTarget) {
    document
      .querySelector(`#campus-case-${campusTarget.dataset.campusTarget}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

designLightboxClose.addEventListener("click", closeDesignLightbox);
designLightbox.addEventListener("click", (event) => {
  if (event.target === designLightbox) closeDesignLightbox();
});

const contactDisclosure = document.querySelector("#contact-disclosure");
const contactToggle = document.querySelector("#contact-toggle");
const contactOptions = document.querySelector("#contact-options");

function setContactMenu(open) {
  contactDisclosure.classList.toggle("is-open", open);
  contactToggle.setAttribute("aria-expanded", String(open));
  contactOptions.setAttribute("aria-hidden", String(!open));
}

contactToggle.addEventListener("click", () => {
  setContactMenu(!contactDisclosure.classList.contains("is-open"));
});

document.addEventListener("click", (event) => {
  if (!contactDisclosure.contains(event.target)) setContactMenu(false);
});

stage.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (state.wheelLocked || Math.abs(event.deltaY) < 12) return;
    state.wheelLocked = true;
    navigateProject(event.deltaY > 0 ? 1 : -1);
    window.setTimeout(() => {
      state.wheelLocked = false;
    }, 520);
  },
  { passive: false },
);

stage.addEventListener("touchstart", (event) => {
  state.touchStartY = event.changedTouches[0].clientY;
});

stage.addEventListener("touchend", (event) => {
  if (state.touchStartY === null) return;
  const distance = state.touchStartY - event.changedTouches[0].clientY;
  if (Math.abs(distance) > 36) navigateProject(distance > 0 ? 1 : -1);
  state.touchStartY = null;
});

window.addEventListener("keydown", (event) => {
  if (!designLightbox.hidden && event.key === "Escape") {
    closeDesignLightbox();
    return;
  }

  if (event.key === "Escape" && contactDisclosure.classList.contains("is-open")) {
    setContactMenu(false);
    contactToggle.focus();
    return;
  }

  if (!caseDetailView.hidden && event.key === "Escape") {
    closeRednoteCase();
    return;
  }

  if (!experienceDetailView.hidden && event.key === "Escape") {
    closeInternshipExperience();
    return;
  }

  if (state.campusSection && event.key === "Escape") {
    closeCampusSection();
    return;
  }

  if (!detailView.hidden && event.key === "Escape") {
    closeProject();
    return;
  }

  if (!homeView.hidden) {
    if (["ArrowDown", "ArrowRight"].includes(event.key)) {
      event.preventDefault();
      navigateProject(1);
    }
    if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
      event.preventDefault();
      navigateProject(-1);
    }
    if (event.key === "Enter" && document.activeElement === document.body) {
      openProject(projects[state.currentIndex].id);
    }
  }
});

window.addEventListener("resize", updatePosterOrbit);

window.addEventListener("popstate", handleHashRoute);
handleHashRoute();
