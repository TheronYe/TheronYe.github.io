(function () {
  const demos = {
    photography: {
      title: "摄影工作室网站搭建流程",
      summary: "从影像风格、作品筛选、套餐展示到预约转化，拆解一个摄影工作室官网如何搭建。",
      demoUrl: "../demos/photography-studio.html",
      tags: ["影像作品", "预约转化", "移动端优先"],
      value: "客户能快速看到摄影风格、服务范围、价格区间和预约入口，减少反复询价，提高咨询质量。",
      deliverables: ["首页与作品展示", "套餐与流程模块", "客户评价与 FAQ", "预约咨询入口", "移动端适配"],
      steps: [
        ["定位风格", "明确工作室调性、目标客群和主推拍摄类型。", ["确认人像、婚礼、商业摄影优先级", "确定整体色调和作品比例", "梳理首屏转化动作"]],
        ["规划内容", "把客户最关心的信息排成清楚的浏览路径。", ["作品先行", "套餐透明", "流程和 FAQ 降低决策成本"]],
        ["设计视觉", "用大图、卡片和留白塑造高端影像感。", ["Hero 影像拼贴", "统一作品网格", "轻阴影与暖色纸感"]],
        ["开发页面", "实现响应式布局、菜单、滚动动画和 FAQ。", ["纯 HTML/CSS/JS", "手机端按钮友好", "图片区域可替换"]],
        ["优化转化", "强化预约入口和客户信任信息。", ["CTA 放在首屏和底部", "增加评价", "邮件入口可直接替换"]],
        ["部署交付", "整理单页文件，支持静态托管上线。", ["可放 GitHub Pages", "可部署 Vercel", "后续可接表单"]]
      ]
    },
    blog: {
      title: "个人博客主页搭建流程",
      summary: "从作者定位、栏目结构、阅读体验到订阅入口，展示一个内容型博客如何做得真实可用。",
      demoUrl: "../demos/personal-blog.html",
      tags: ["阅读体验", "内容沉淀", "个人品牌"],
      value: "让读者快速理解作者是谁、长期写什么、有哪些代表文章，并通过订阅入口建立持续联系。",
      deliverables: ["作者介绍", "精选文章", "文章列表", "专题分类", "订阅模块"],
      steps: [
        ["作者定位", "明确博客主题、读者对象和长期写作方向。", ["定义一句话介绍", "确定内容边界", "建立可信作者卡片"]],
        ["信息架构", "把文章、专题、短笔记和订阅串成自然阅读路径。", ["精选文章突出价值", "最新文章持续更新", "专题便于复访"]],
        ["阅读设计", "控制行宽、字号、段落和留白，让页面像真正的博客。", ["阅读宽度限制", "弱化装饰", "提升正文舒适度"]],
        ["内容组件", "搭建文章卡片、专题卡片、短笔记和订阅表单。", ["卡片可复制扩展", "封面使用统一比例", "订阅反馈可交互"]],
        ["移动适配", "保证手机端文章列表、导航和表单不拥挤。", ["单列排版", "按钮全宽", "菜单收纳"]],
        ["后续扩展", "预留文章详情、标签页、归档和 RSS。", ["可接 Markdown", "可接静态生成器", "可扩展博客系统"]]
      ]
    },
    company: {
      title: "企业官网展示站搭建流程",
      summary: "围绕企业客户最关心的解决方案、案例、指标和咨询转化，拆解公司官网的搭建路径。",
      demoUrl: "../demos/company-website.html",
      tags: ["企业官网", "案例可信度", "咨询转化"],
      value: "客户能在 30 秒内知道公司做什么、服务谁、有什么案例、如何开始合作。",
      deliverables: ["企业 Hero", "解决方案模块", "案例与指标", "合作流程", "咨询 CTA"],
      steps: [
        ["业务梳理", "提炼公司核心业务、服务对象和差异化表达。", ["确认主推服务", "整理客户痛点", "确定首屏文案"]],
        ["模块规划", "把官网拆成客户决策需要的几个区块。", ["解决方案", "案例证明", "流程说明", "FAQ 和 CTA"]],
        ["视觉建立", "用灰蓝科技感、看板预览和数据指标增强专业度。", ["浏览器 Mockup", "企业级卡片", "可信数据区"]],
        ["前端开发", "实现响应式布局、数字动画、FAQ 和滚动反馈。", ["轻量原生 JS", "卡片 hover", "移动端导航"]],
        ["转化优化", "让咨询入口在首屏、案例后和底部重复出现。", ["预约演示", "查看案例", "发送需求"]],
        ["上线维护", "交付静态文件，后续可接 CMS、表单和数据统计。", ["GitHub Pages", "Vercel", "Netlify"]]
      ]
    },
    ai: {
      title: "AI应用产品页搭建流程",
      summary: "展示 AI 产品的核心能力、使用场景、对话体验和开通入口，让客户理解产品能解决什么。",
      demoUrl: "../demos/ai-product.html",
      tags: ["AI 产品", "SaaS", "对话体验"],
      value: "把抽象 AI 能力转成可感知的界面、场景和收益，降低用户理解门槛。",
      deliverables: ["AI 产品首屏", "功能卡片", "对话 Mockup", "应用场景", "开通 CTA"],
      steps: [
        ["场景定义", "明确 AI 产品解决的具体业务问题。", ["文档问答", "智能客服", "流程助手"]],
        ["能力拆解", "把模型能力拆成用户看得懂的功能点。", ["上传资料", "回答追溯", "工作流触发"]],
        ["界面呈现", "用对话窗口和任务面板展示真实使用状态。", ["消息气泡", "引用来源", "操作建议"]],
        ["页面开发", "实现产品页的布局、动效、卡片和响应式。", ["首屏聚焦", "按钮明确", "性能轻量"]],
        ["信任补强", "增加安全、部署、权限和售后说明。", ["私有数据", "权限隔离", "持续维护"]],
        ["交付上线", "静态站可先上线获客，后续再接真实后端。", ["先验证转化", "再接 API", "再做账号系统"]]
      ]
    },
    report: {
      title: "Python报表工具页搭建流程",
      summary: "围绕 Excel 自动处理、数据清洗和报表生成，展示工具型服务如何被讲清楚。",
      demoUrl: "../demos/python-report-tool.html",
      tags: ["Python", "Excel", "自动报表"],
      value: "让非技术客户看懂脚本能节省什么时间、输入什么文件、输出什么结果。",
      deliverables: ["工具说明页", "流程演示", "效率对比", "交付清单", "咨询入口"],
      steps: [
        ["流程采集", "了解客户当前如何整理表格和生成报表。", ["收集样表", "确认字段", "记录人工步骤"]],
        ["规则确认", "把清洗、计算、合并、导出规则写清楚。", ["异常数据", "命名规则", "输出格式"]],
        ["页面表达", "用流程图和文件示意图讲清楚工具怎么工作。", ["上传 Excel", "自动处理", "导出报表"]],
        ["脚本开发", "用 Python 实现核心处理逻辑和错误提示。", ["pandas/openpyxl", "批处理", "日志输出"]],
        ["测试交付", "用真实样本跑通，补充使用说明。", ["测试文件", "操作文档", "常见错误"]],
        ["后续维护", "根据表格变化调整字段和模板。", ["模板升级", "功能追加", "定期维护"]]
      ]
    },
    automation: {
      title: "自动化工具控制台搭建流程",
      summary: "从任务配置、运行状态、日志反馈到异常处理，展示自动化工具界面如何设计。",
      demoUrl: "../demos/automation-dashboard.html",
      tags: ["自动化", "控制台", "任务日志"],
      value: "让客户看到工具不是黑盒，而是可以配置、查看状态、追踪日志和持续维护的系统。",
      deliverables: ["控制台界面", "任务卡片", "运行日志", "状态统计", "异常提示"],
      steps: [
        ["任务拆解", "把自动化需求拆成可配置的任务单元。", ["采集任务", "文件任务", "发送任务"]],
        ["状态设计", "定义等待、运行、完成、失败等状态。", ["进度条", "状态标签", "错误信息"]],
        ["界面布局", "用控制台结构展示任务、日志和统计。", ["侧边栏", "任务列表", "实时日志"]],
        ["交互开发", "实现筛选、启动、暂停、日志刷新等前端交互。", ["按钮状态", "局部更新", "清晰反馈"]],
        ["稳定性说明", "展示异常处理、重试和运行记录。", ["失败原因", "重试策略", "日志留存"]],
        ["部署交付", "前端控制台可接真实脚本服务或本地工具。", ["本地运行", "服务器部署", "后续接 API"]]
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const demoKey = params.get("demo") || "photography";
  const mode = params.get("type") === "dynamic" ? "dynamic" : "interactive";
  const demo = demos[demoKey] || demos.photography;

  const selectors = {
    title: document.querySelector("[data-title]"),
    summary: document.querySelector("[data-summary]"),
    tags: document.querySelector("[data-tags]"),
    modeLabel: document.querySelector("[data-mode-label]"),
    flowHeading: document.querySelector("[data-flow-heading]"),
    flowIntro: document.querySelector("[data-flow-intro]"),
    status: document.querySelector("[data-status]"),
    statusCopy: document.querySelector("[data-status-copy]"),
    flowShell: document.querySelector("[data-flow-shell]"),
    flowMap: document.querySelector("[data-flow-map]"),
    stepIndex: document.querySelector("[data-step-index]"),
    stepTitle: document.querySelector("[data-step-title]"),
    stepCopy: document.querySelector("[data-step-copy]"),
    stepPoints: document.querySelector("[data-step-points]"),
    deliverables: document.querySelector("[data-deliverables]"),
    value: document.querySelector("[data-value]"),
    progress: document.querySelector("[data-progress]"),
    header: document.querySelector("[data-header]")
  };

  let activeIndex = 0;
  let timer = null;

  function renderStaticContent() {
    document.title = `${demo.title}｜搭建流程图`;
    selectors.title.textContent = demo.title;
    selectors.summary.textContent = demo.summary;
    selectors.value.textContent = demo.value;
    selectors.modeLabel.textContent = mode === "dynamic" ? "Dynamic Build Flow" : "Interactive Build Flow";
    selectors.flowHeading.textContent = mode === "dynamic" ? "动态的搭建流程图" : "搭建该 Demo 的可交互式流程图";
    selectors.flowIntro.textContent = mode === "dynamic"
      ? "流程会自动播放，展示从需求到交付的搭建节奏。"
      : "点击任意节点，查看该阶段的目标、产出和客户能看到的结果。";
    selectors.status.textContent = mode === "dynamic" ? "Auto" : "Click";
    selectors.statusCopy.textContent = mode === "dynamic" ? "自动播放每个搭建阶段，适合给客户快速讲方案。" : "点击流程节点查看每一步的交付重点。";
    selectors.flowShell.classList.toggle("is-dynamic", mode === "dynamic");
    selectors.tags.innerHTML = demo.tags.map((tag) => `<span>${tag}</span>`).join("");
    selectors.deliverables.innerHTML = demo.deliverables.map((item) => `<li>${item}</li>`).join("");
    document.querySelectorAll("[data-demo-link], [data-demo-link-bottom]").forEach((link) => {
      link.setAttribute("href", demo.demoUrl);
    });
  }

  function renderSteps() {
    selectors.flowMap.innerHTML = demo.steps.map((step, index) => `
      <button class="flow-step" type="button" data-step="${index}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${step[0]}</h3>
        <p>${step[1]}</p>
      </button>
    `).join("");

    selectors.flowMap.addEventListener("click", (event) => {
      const button = event.target.closest("[data-step]");
      if (!button || mode === "dynamic") return;
      setActiveStep(Number(button.dataset.step));
    });
  }

  function setActiveStep(index) {
    activeIndex = index % demo.steps.length;
    const step = demo.steps[activeIndex];
    document.querySelectorAll(".flow-step").forEach((item, itemIndex) => {
      item.classList.toggle("is-active", itemIndex === activeIndex);
    });
    selectors.stepIndex.textContent = String(activeIndex + 1).padStart(2, "0");
    selectors.stepTitle.textContent = step[0];
    selectors.stepCopy.textContent = step[1];
    selectors.stepPoints.innerHTML = step[2].map((point) => `<li>${point}</li>`).join("");
  }

  function startDynamicFlow() {
    if (mode !== "dynamic") return;
    timer = window.setInterval(() => {
      setActiveStep(activeIndex + 1);
    }, 1700);
  }

  function updateChrome() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    selectors.header.classList.toggle("is-scrolled", window.scrollY > 8);
    selectors.progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
  }

  renderStaticContent();
  renderSteps();
  setActiveStep(0);
  startDynamicFlow();
  updateChrome();
  window.addEventListener("scroll", updateChrome, { passive: true });
  window.addEventListener("beforeunload", () => {
    if (timer) window.clearInterval(timer);
  });
})();
