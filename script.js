"use strict";

const I18N = {
  en: {
    pageTitle: "From Text to a Token | Language Model Field Guide",
    skip: "Skip to the guide",
    brandKicker: "Interactive field guide",
    brandTitle: "Language models, step by step",
    nameLabel: "Name",
    studentLabel: "Student no.",
    namePlaceholder: "Add your name",
    studentPlaceholder: "Add your number",
    navTokens: "Tokens",
    navEmbeddings: "Embeddings",
    navAttention: "Attention",
    navFeedForward: "Feed-forward",
    navTraining: "Training",
    navSampling: "Sampling",
    heroEyebrow: "Language model mechanics · 6-step visual guide",
    heroTitleOne: "From text",
    heroTitleTwo: "to one chosen token.",
    heroLead: "A language model does not retrieve a finished paragraph. It transforms context through a stack of learned operations, predicts a probability for every possible next token, then samples one.",
    beginWalkthrough: "Begin the walkthrough",
    viewPromptLog: "View the prompt log ↗",
    oneForwardPass: "One forward pass",
    live: "LIVE",
    heroVisualNote: "A simplified next-token distribution. Chapter 06 lets you adjust it.",
    overviewKicker: "THE WHOLE STACK",
    overviewTitle: "Six operations turn context into a choice.",
    overviewLead: "The diagram is linear for clarity. Inside a modern transformer, attention and feed-forward layers repeat many times, with residual connections preserving information along the way.",
    stageTokens: "Tokenise",
    stageTokensBody: "Split text into addressable pieces.",
    stageEmbeddings: "Embed",
    stageEmbeddingsBody: "Map IDs to learned vectors.",
    stageAttention: "Attend",
    stageAttentionBody: "Mix context by relevance.",
    stageFeedForward: "Transform",
    stageFeedForwardBody: "Expand, filter, and recombine features.",
    stageTraining: "Learn",
    stageTrainingBody: "Reduce next-token prediction loss.",
    stageSampling: "Sample",
    stageSamplingBody: "Choose one token and repeat.",
    overviewFootnote: "Every interactive below uses illustrative numbers. They teach the mechanism, not the internals of a specific commercial model.",
    tokensKicker: "TOKENISATION",
    tokensTitle: "Text becomes a list of integers.",
    tokensLead: "A token is the model’s basic unit of text. A tokeniser breaks the prompt into pieces, maps each piece to an integer ID, and passes that sequence forward. Pieces are often smaller than words.",
    tokensLeadLine: "The key idea: models calculate with token IDs, not characters.",
    tokensP1: "Common words may be one token; rare words may split into several. Spaces and punctuation can belong to tokens too, which is why token counts do not equal word counts.",
    tokensFactOneLabel: "Input",
    tokensFactOneValue: "raw text and conversation history",
    tokensFactTwoLabel: "Output",
    tokensFactTwoValue: "a sequence such as [464, 3290, 318, 13]",
    tokensFactThreeLabel: "Why it matters",
    tokensFactThreeValue: "context limits and API usage are measured in tokens",
    tryIt: "TRY IT",
    tokenDemoLabel: "Teaching tokeniser",
    tokenInputLabel: "Type a sentence",
    tokeniseButton: "Tokenise",
    useSample: "Use sample",
    tokenDemoCaption: "This demo approximates word and punctuation chunks. Production models learn subword boundaries from data using methods such as byte-pair encoding.",
    embeddingsKicker: "EMBEDDINGS",
    embeddingsTitle: "Each token ID becomes a learned vector.",
    embeddingsLead: "The embedding layer gives every token a long list of numbers. Training moves related tokens toward useful regions in this high-dimensional space. Position information is added, so word order is not lost.",
    embeddingsLeadLine: "The key idea: geometry carries learned associations.",
    embeddingsP1: "An embedding is not a dictionary definition. It is a parameter vector shaped by many prediction tasks. Contextual models then keep changing each token’s representation through later layers, so one word can mean different things in different sentences.",
    explore: "EXPLORE",
    embeddingDemoLabel: "Neighbourhoods",
    vectorFor: "Illustrative vector for",
    vectorEllipsis: "…hundreds or thousands more dimensions",
    embeddingDemoCaption: "Similarity scores and vectors here are synthetic teaching values, not extracted from a real model.",
    attentionKicker: "SELF-ATTENTION",
    attentionTitle: "Tokens gather context from other tokens.",
    attentionLead: "Attention compares each token with earlier tokens. The model produces a query, key, and value for every position; their interactions determine how much information each token takes from the others.",
    attentionLeadLine: "The key idea: attention is a weighted exchange of information.",
    attentionP1: "For one attention head, query-key similarity becomes a set of weights. Values are mixed using those weights. Multiple heads can track different relationships, such as subject–verb links, nearby phrases, or repeated names.",
    queryMeaning: "what this token is looking for",
    keyMeaning: "what each token can offer",
    valueMeaning: "the information that gets passed",
    interact: "INTERACT",
    attentionDemoLabel: "Illustrative attention",
    attentionPrompt: "Choose a token to inspect the row it uses to gather context.",
    attentionRows: "ROWS: FOCUS TOKEN",
    attentionDemoCaption: "Weights are normalised separately for each row. The values are designed to teach how a heatmap is read.",
    feedForwardKicker: "FEED-FORWARD BLOCK",
    feedForwardTitle: "A private transformation at every position.",
    feedForwardLead: "After attention mixes information across tokens, the feed-forward network processes each token vector independently. It expands the vector, applies a nonlinearity, then projects it back to the model width.",
    feedForwardLeadLine: "The key idea: attention exchanges, the feed-forward block transforms.",
    feedForwardP1: "You can think of the expanded layer as a bank of learned detectors. They respond to combinations of features, and the return projection writes useful signals back into the token’s shared representation.",
    attentionTag: "Attention",
    attentionMixCopy: "mixes information between positions",
    feedForwardTag: "Feed-forward",
    positionCopy: "recombines features within each position",
    test: "TEST",
    feedForwardDemoLabel: "Feature workshop",
    tokenVector: "TOKEN VECTOR",
    expandedFeatures: "EXPANDED FEATURES",
    updatedSignal: "UPDATED SIGNAL",
    mixFeatures: "Mix features again",
    feedForwardDemoCaption: "The labelled detectors are metaphors for learned dimensions. Real feed-forward activations have no human-readable labels.",
    trainingKicker: "TRAINING OBJECTIVE",
    trainingTitle: "Learning means predicting the next token.",
    trainingLead: "A decoder-only language model is trained on many sequences to assign high probability to the token that actually appears next. Cross-entropy loss penalises confident mistakes; gradients adjust the weights.",
    trainingLeadLine: "The key idea: one objective repeated at every position.",
    trainingP1: "Each prefix supplies a prediction target. During training the loss is computed from the model’s entire next-token distribution, not only from the top guess. Better predictions lower the loss.",
    objectiveLabel: "OBJECTIVE",
    objectiveText: "Predict the next token given all earlier tokens in the sequence.",
    simulate: "SIMULATE",
    trainingDemoLabel: "Loss reduction",
    targetProbability: "Probability of “mat”",
    lossLabel: "Cross-entropy loss",
    trainingStepZero: "update 0",
    trainingStep: "update {n}",
    updateWeights: "Update weights",
    trainingDemoCaption: "This is a simulated gradient step. A real training run updates millions or billions of parameters across many batches.",
    samplingKicker: "TOKEN SAMPLING",
    samplingTitle: "The next token is a choice, not a secret answer.",
    samplingLead: "The model outputs a score for every vocabulary item. Softmax turns those scores into probabilities. A decoding rule chooses one token, appends it to the context, and starts the next forward pass.",
    samplingLeadLine: "The key idea: temperature reshapes the distribution before random sampling.",
    greedy: "Greedy",
    greedyCopy: "Always take the highest-probability token.",
    temperature: "Temperature",
    temperatureCopy: "Lower values sharpen the distribution; higher values flatten it.",
    topK: "Top-k / top-p",
    topKCopy: "Restrict the draw to a shortlist or a cumulative probability mass.",
    adjust: "ADJUST",
    samplingDemoLabel: "Sampling console",
    contextLabel: "CONTEXT",
    temperatureLabel: "Temperature",
    sharper: "sharper",
    flatter: "flatter",
    sampleToken: "Sample the next token",
    chosenToken: "CHOSEN TOKEN",
    samplingDemoCaption: "Logits are fixed teaching values. Sampling is random, so repeating the draw can produce a different token.",
    takeawayEyebrow: "THE COMPLETE LOOP",
    takeawayTitle: "Predict one token. Append it. Predict again.",
    loopContext: "context",
    loopModel: "model",
    loopProbability: "probabilities",
    loopChoice: "sample",
    loopRepeat: "append + repeat",
    takeawayBody: "A convincing answer is assembled one token at a time. The architecture supplies useful probability estimates, but it does not contain a separate database lookup that hands over the full reply.",
    sessionLogKicker: "AGENT SESSION LOG",
    sessionLogTitle: "One failed prompt, and the revision that fixed it.",
    sessionLogLead: "Strong prompts define the audience, the required concepts, the interaction, and a way to verify the result. The first attempt below was too open-ended.",
    logged: "LOGGED",
    firstAttempt: "FIRST ATTEMPT · FAILED",
    failedPrompt: "“Make a polished one-page explainer of how a language model works. Cover the main stages and add a few visuals.”",
    whatWentWrong: "What went wrong:",
    failedReason: "The result was a generic article. It named the stages but did not demonstrate them, and the bilingual switch and required author fields were easy to miss.",
    revisedAttempt: "REVISED PROMPT · SUCCESSFUL",
    fixedPrompt: "“Build a single static bilingual explainer. Cover tokenisation, embeddings, attention, the feed-forward block, the next-token training objective, and sampling. Give each concept its own accurate interaction, provide a complete Chinese/English toggle, keep visible blank fields for the student’s name and number, and record one failed prompt plus its repair.”",
    whyItWorked: "Why it worked:",
    fixedReason: "It specified the deliverable, six required concepts, interaction pattern, language coverage, personal fields, and the session log. Each requirement became directly testable.",
    verificationPass: "VERIFICATION PASS",
    auditOne: "All six concepts have explanatory text and an interaction.",
    auditTwo: "Language switching updates navigation, body copy, labels, placeholders, and dynamic messages.",
    auditThree: "Name and student number remain visibly blank for the author to complete.",
    auditFour: "The page works as a static site with no external runtime dependency.",
    footerTitle: "From text to a token, one operation at a time.",
    footerNote: "Static bilingual interactive page · No tracking",
    backToTop: "Back to top ↑",
    sampleSentence: "Language models turn text into tokens.",
    tokenCount: "{n} tokens",
    emptyTokens: "Enter some text to see tokens.",
    attentionFocus: "{token} gives most of its attention to “{target}” ({weight}).",
    ffmOutputs: {
      cat: "pet-like · small · soft",
      plane: "vehicle-like · large · fast",
      idea: "abstract-like · new · memorable"
    },
    ffnFeatures: {
      cat: ["animal", "small", "soft", "noun"],
      plane: ["vehicle", "metal", "fast", "noun"],
      idea: ["abstract", "new", "mental", "noun"]
    },
    sampleOutput: "The little cat sat on the {word}.",
    probabilityAria: "{word}: {probability} probability",
    selectedLanguage: "English"
  },
  zh: {
    pageTitle: "从文本到一个 token｜语言模型互动指南",
    skip: "跳到正文",
    brandKicker: "互动式学习指南",
    brandTitle: "逐层拆解语言模型",
    nameLabel: "姓名",
    studentLabel: "学号",
    namePlaceholder: "请填写姓名",
    studentPlaceholder: "请填写学号",
    navTokens: "分词",
    navEmbeddings: "嵌入",
    navAttention: "注意力",
    navFeedForward: "前馈网络",
    navTraining: "训练",
    navSampling: "采样",
    heroEyebrow: "语言模型原理 · 六步可视化指南",
    heroTitleOne: "从一段文本",
    heroTitleTwo: "到选中的 token。",
    heroLead: "语言模型并不会调取一段写好的答案。它通过多层学习到的运算变换上下文，为每一个可能的下一个 token 计算概率，然后采样出一个。",
    beginWalkthrough: "开始逐层查看",
    viewPromptLog: "查看提示词记录 ↗",
    oneForwardPass: "一次前向传播",
    live: "实时",
    heroVisualNote: "这是简化的下一 token 概率分布，第 06 节可自行调节。",
    overviewKicker: "完整流程",
    overviewTitle: "六种运算，把上下文变成一个选择。",
    overviewLead: "为了讲清楚，图中使用线性顺序。在现代 Transformer 内部，注意力和前馈层会重复许多次，残差连接则让信息沿网络持续传递。",
    stageTokens: "分词",
    stageTokensBody: "把文本拆成可处理的片段。",
    stageEmbeddings: "嵌入",
    stageEmbeddingsBody: "把 ID 映射为学习到的向量。",
    stageAttention: "注意力",
    stageAttentionBody: "按相关性混合上下文。",
    stageFeedForward: "变换",
    stageFeedForwardBody: "扩展、筛选并重组特征。",
    stageTraining: "学习",
    stageTrainingBody: "降低下一 token 预测损失。",
    stageSampling: "采样",
    stageSamplingBody: "选出一个 token，然后重复。",
    overviewFootnote: "下方每个互动演示都使用教学用的示意数值，用来解释机制，并不代表某个商业模型的真实内部数据。",
    tokensKicker: "分词",
    tokensTitle: "文本首先变成一串整数。",
    tokensLead: "token 是模型处理文本的基本单位。分词器把提示词切成片段，将每个片段映射为整数 ID，再把 ID 序列送入后续层。一个 token 常常小于一个完整单词。",
    tokensLeadLine: "核心思想：模型用 token ID 计算，而不是直接用字符计算。",
    tokensP1: "常见单词可能是一个 token，罕见词可能拆成多个。空格和标点也可能属于 token，因此 token 数通常不等于单词数。",
    tokensFactOneLabel: "输入",
    tokensFactOneValue: "原始文本与对话历史",
    tokensFactTwoLabel: "输出",
    tokensFactTwoValue: "例如 [464, 3290, 318, 13] 这样的序列",
    tokensFactThreeLabel: "为什么重要",
    tokensFactThreeValue: "上下文长度和 API 用量都以 token 计量",
    tryIt: "动手试试",
    tokenDemoLabel: "教学分词器",
    tokenInputLabel: "输入一句话",
    tokeniseButton: "开始分词",
    useSample: "使用示例",
    tokenDemoCaption: "这个演示近似展示单词与标点片段。真实模型通常通过字节对编码（BPE）等方法，从数据中学习子词边界。",
    embeddingsKicker: "嵌入",
    embeddingsTitle: "每个 token ID 变成一条学习到的向量。",
    embeddingsLead: "嵌入层为每个 token 分配一长串数字。训练会把相关 token 推向空间中更有用的区域。位置信息也会被加入，因此词序不会丢失。",
    embeddingsLeadLine: "核心思想：向量空间中的几何关系承载了学习到的关联。",
    embeddingsP1: "嵌入不是词典释义，而是由大量预测任务塑造出的参数向量。上下文模型还会在后续层中不断修改每个 token 的表示，所以同一个词在不同句子里可以有不同含义。",
    explore: "探索",
    embeddingDemoLabel: "词的邻域",
    vectorFor: "示意向量：",
    vectorEllipsis: "……还有数百或数千个维度",
    embeddingDemoCaption: "这里的相似度与向量均为合成的教学数值，并非从真实模型中提取。",
    attentionKicker: "自注意力",
    attentionTitle: "注意力让 token 互相读取上下文。",
    attentionLead: "注意力会比较当前 token 与前面各个 token。模型为每个位置生成 query、key 和 value，它们的相互作用决定每个 token 从其他位置获取多少信息。",
    attentionLeadLine: "核心思想：注意力是一次带权重的信息交换。",
    attentionP1: "在单个注意力头中，query 与 key 的相似度会变成一组权重，value 再按这些权重混合。多个注意力头可以分别追踪不同关系，例如主语与谓语、邻近短语或重复出现的人名。",
    queryMeaning: "这个 token 正在寻找什么",
    keyMeaning: "每个 token 能提供什么",
    valueMeaning: "真正被传递的信息",
    interact: "互动",
    attentionDemoLabel: "示意注意力",
    attentionPrompt: "选择一个 token，查看它收集上下文时使用的权重行。",
    attentionRows: "行：当前关注的 token",
    attentionDemoCaption: "每一行的权重单独归一化。这些数值用于帮助理解如何阅读热力图。",
    feedForwardKicker: "前馈网络",
    feedForwardTitle: "每个位置完成一次独立的特征变换。",
    feedForwardLead: "注意力先在不同 token 之间混合信息，随后前馈网络独立处理每个 token 向量。它先把向量扩展到更宽的空间，应用非线性，再投影回模型宽度。",
    feedForwardLeadLine: "核心思想：注意力负责交换，前馈网络负责变换。",
    feedForwardP1: "可以把扩展层想成一组学习到的特征探测器。它们会响应多种特征组合，返回投影再把这些有用信号写回 token 的共享表示。",
    attentionTag: "注意力",
    attentionMixCopy: "在不同位置之间混合信息",
    feedForwardTag: "前馈网络",
    positionCopy: "在每个位置内部重新组合特征",
    test: "测试",
    feedForwardDemoLabel: "特征工作台",
    tokenVector: "token 向量",
    expandedFeatures: "扩展后的特征",
    updatedSignal: "更新后的信号",
    mixFeatures: "重新混合特征",
    feedForwardDemoCaption: "这些带标签的探测器是对学习维度的比喻。真实前馈网络的激活值并没有人类可读的标签。",
    trainingKicker: "训练目标",
    trainingTitle: "学习的核心任务，是预测下一个 token。",
    trainingLead: "仅解码器语言模型会在大量序列上训练，让真实出现的下一个 token 获得较高概率。交叉熵损失会惩罚过度自信的错误，梯度再用来调整权重。",
    trainingLeadLine: "核心思想：在每个位置重复同一个预测目标。",
    trainingP1: "每个前缀都会提供一个预测目标。训练时，损失来自模型完整的下一 token 概率分布，而不只看概率最高的猜测。预测越准确，损失越低。",
    objectiveLabel: "训练目标",
    objectiveText: "给定序列中此前出现的所有 token，预测下一个 token。",
    simulate: "模拟",
    trainingDemoLabel: "损失下降",
    targetProbability: "“mat”的概率",
    lossLabel: "交叉熵损失",
    trainingStepZero: "第 0 次更新",
    trainingStep: "第 {n} 次更新",
    updateWeights: "更新权重",
    trainingDemoCaption: "这里是模拟的梯度步骤。真实训练会在大量批次上更新数百万乃至数十亿个参数。",
    samplingKicker: "token 采样",
    samplingTitle: "下一个 token 是一个选择，不是藏在模型里的答案。",
    samplingLead: "模型会为词表中的每个项目输出分数。Softmax 把分数转换成概率。解码规则选出其中一个 token，把它追加到上下文，再开始下一次前向传播。",
    samplingLeadLine: "核心思想：温度会在随机采样前改变概率分布的形状。",
    greedy: "贪心解码",
    greedyCopy: "始终选择概率最高的 token。",
    temperature: "温度",
    temperatureCopy: "温度越低，分布越尖锐；温度越高，分布越平坦。",
    topK: "Top-k / Top-p",
    topKCopy: "只在候选短名单或累计概率范围内抽取。",
    adjust: "调节",
    samplingDemoLabel: "采样控制台",
    contextLabel: "上下文",
    temperatureLabel: "温度",
    sharper: "更尖锐",
    flatter: "更平坦",
    sampleToken: "采样下一个 token",
    chosenToken: "选中的 token",
    samplingDemoCaption: "这里的 logits 是固定教学值。采样具有随机性，因此重复抽取可能得到不同 token。",
    takeawayEyebrow: "完整循环",
    takeawayTitle: "预测一个 token，追加它，再预测下一个。",
    loopContext: "上下文",
    loopModel: "模型",
    loopProbability: "概率",
    loopChoice: "采样",
    loopRepeat: "追加并重复",
    takeawayBody: "一段看似完整的回答，是逐个 token 组装出来的。模型提供有用的概率估计，但并没有另一个独立数据库直接把整段回复交给你。",
    sessionLogKicker: "智能体会话记录",
    sessionLogTitle: "一次失败提示词，以及修复它的改写。",
    sessionLogLead: "有效的提示词会明确受众、必须覆盖的概念、互动方式和验收标准。下面第一次尝试过于开放。",
    logged: "已记录",
    firstAttempt: "第一次尝试 · 失败",
    failedPrompt: "“做一个精致的一页式语言模型介绍，覆盖主要阶段，并加一些图形。”",
    whatWentWrong: "问题出在哪里：",
    failedReason: "结果更像一篇泛泛的文章：它列出了各个阶段，却没有真正演示；双语切换和作者信息要求也容易被遗漏。",
    revisedAttempt: "改写提示词 · 成功",
    fixedPrompt: "“制作一个静态中英双语解释网页，覆盖分词、嵌入、注意力、前馈网络、下一 token 训练目标和采样。为每个概念设计准确且独立的互动，提供完整的中英文切换，保留可见但空白的姓名与学号输入框，并记录一次失败提示词及其修正。”",
    whyItWorked: "为什么有效：",
    fixedReason: "它明确了交付形式、六个必需概念、互动方式、语言覆盖、个人信息字段以及会话记录，因此每一项要求都可以直接验收。",
    verificationPass: "验收检查",
    auditOne: "六个概念都同时具备解释文字和互动演示。",
    auditTwo: "语言切换会同步更新导航、正文、标签、占位文字和动态提示。",
    auditThree: "姓名和学号保持可见且空白，留给作者填写。",
    auditFour: "页面可作为静态网站运行，不依赖外部运行时。",
    footerTitle: "从文本到 token，一次理解一个步骤。",
    footerNote: "静态双语互动页面 · 不追踪访问",
    backToTop: "返回顶部 ↑",
    sampleSentence: "语言模型把文本转换为 token。",
    tokenCount: "{n} 个 token",
    emptyTokens: "请输入一些文字以查看 token。",
    attentionFocus: "{token} 把最多注意力给了“{target}”（{weight}）。",
    ffmOutputs: {
      cat: "宠物类 · 小型 · 柔软",
      plane: "载具类 · 大型 · 快速",
      idea: "抽象类 · 新颖 · 易记"
    },
    ffnFeatures: {
      cat: ["动物", "小型", "柔软", "名词"],
      plane: ["载具", "金属", "快速", "名词"],
      idea: ["抽象", "新颖", "心理", "名词"]
    },
    sampleOutput: "那只小猫坐在{word}上。",
    probabilityAria: "{word}：概率 {probability}",
    selectedLanguage: "中文"
  }
};

const tokenInput = document.querySelector("#token-input");
const tokenStrip = document.querySelector("#token-strip");
const tokenCount = document.querySelector("#token-count");
const tokeniseButton = document.querySelector("#tokenise-button");
const tokenSampleButton = document.querySelector("#token-sample-button");
const attentionTokens = document.querySelector("#attention-tokens");
const attentionGrid = document.querySelector("#attention-grid");
const attentionReadout = document.querySelector("#attention-readout");
const embeddingWord = document.querySelector("#embedding-word");
const vectorValues = document.querySelector("#vector-values");
const neighbourList = document.querySelector("#neighbour-list");
const featurePills = document.querySelector("#feature-pills");
const ffnWord = document.querySelector("#ffn-word");
const ffnOutput = document.querySelector("#ffn-output");
const ffnMix = document.querySelector("#ffn-mix");
const trainButton = document.querySelector("#train-button");
const targetProbability = document.querySelector("#target-probability");
const lossFill = document.querySelector("#loss-fill");
const lossValue = document.querySelector("#loss-value");
const trainingStep = document.querySelector("#training-step");
const temperature = document.querySelector("#temperature");
const temperatureValue = document.querySelector("#temperature-value");
const probabilityBars = document.querySelector("#probability-bars");
const sampleButton = document.querySelector("#sample-button");
const sampledToken = document.querySelector("#sampled-token");
const sampledSentence = document.querySelector("#sampled-sentence");

let currentLanguage = "en";
let currentAttention = 3;
let currentWord = "cat";
let currentFeature = "cat";
let featureRotation = 0;
let trainingState = 0;
let chosenSample = "mat";

function t(key) {
  return I18N[currentLanguage][key] ?? I18N.en[key] ?? key;
}

function interpolate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

function applyLanguage(language, remember = true) {
  currentLanguage = language;
  const strings = I18N[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = strings.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(strings, key)) {
      element.textContent = strings[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (Object.prototype.hasOwnProperty.call(strings, key)) {
      element.placeholder = strings[key];
    }
  });

  const home = document.querySelector(".brand");
  home.setAttribute("aria-label", language === "zh" ? "语言模型互动指南首页" : "Language model field guide home");
  document.querySelector(".identity").setAttribute("aria-label", language === "zh" ? "学生信息" : "Student details");
  document.querySelector(".language-switch").setAttribute("aria-label", language === "zh" ? "语言选择" : "Language");
  document.querySelector(".progress-nav").setAttribute("aria-label", language === "zh" ? "章节导航" : "Chapter navigation");

  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderAttention();
  renderEmbedding(currentWord);
  renderFeatures(currentFeature);
  renderTraining();
  renderProbabilities();
  tokenise();

  if (remember) {
    localStorage.setItem("lm-guide-language", language);
  }
}

function splitTokens(text) {
  const matches = text.match(/[\u3400-\u9fff]|[A-Za-z]+(?:['’][A-Za-z]+)?|\d+|[^\sA-Za-z\u3400-\u9fff\d]/g) || [];
  return matches.slice(0, 80);
}

function tokenise() {
  const text = tokenInput.value;
  const tokens = splitTokens(text);
  tokenStrip.replaceChildren();

  if (!tokens.length) {
    const empty = document.createElement("span");
    empty.className = "demo-caption";
    empty.textContent = t("emptyTokens");
    tokenStrip.append(empty);
    tokenCount.value = interpolate(t("tokenCount"), { n: 0 });
    return;
  }

  tokens.forEach((token, index) => {
    const chip = document.createElement("span");
    chip.className = "token-chip";
    chip.style.animationDelay = `${Math.min(index * 25, 420)}ms`;
    const value = document.createElement("b");
    value.textContent = token;
    const meta = document.createElement("small");
    meta.textContent = `#${index + 1}`;
    chip.append(value, meta);
    tokenStrip.append(chip);
  });
  tokenCount.value = interpolate(t("tokenCount"), { n: tokens.length });
}

const attentionExampleTokens = ["The", "small", "model", "predicts", "the", "next", "token", "."];
const attentionWeights = [
  [0.05, 0.08, 0.12, 0.58, 0.05, 0.05, 0.05, 0.02],
  [0.08, 0.16, 0.41, 0.13, 0.05, 0.08, 0.07, 0.02],
  [0.05, 0.18, 0.30, 0.27, 0.05, 0.07, 0.06, 0.02],
  [0.04, 0.08, 0.34, 0.16, 0.05, 0.18, 0.13, 0.02],
  [0.03, 0.04, 0.12, 0.22, 0.15, 0.30, 0.12, 0.02],
  [0.02, 0.03, 0.09, 0.18, 0.08, 0.28, 0.30, 0.02],
  [0.03, 0.04, 0.08, 0.15, 0.06, 0.21, 0.39, 0.04],
  [0.06, 0.06, 0.17, 0.24, 0.06, 0.13, 0.22, 0.06]
];

function renderAttention() {
  attentionTokens.replaceChildren();
  attentionExampleTokens.forEach((token, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `attention-token${index === currentAttention ? " is-active" : ""}`;
    button.textContent = token;
    button.setAttribute("aria-pressed", String(index === currentAttention));
    button.addEventListener("click", () => {
      currentAttention = index;
      renderAttention();
    });
    attentionTokens.append(button);
  });

  attentionGrid.replaceChildren();
  const weights = attentionWeights[currentAttention];
  weights.forEach((weight, index) => {
    const cell = document.createElement("span");
    cell.className = `attention-cell${index === currentAttention ? " is-row" : ""}`;
    cell.style.background = `rgba(239, 106, 58, ${0.08 + weight * 1.8})`;
    cell.style.color = weight > 0.24 ? "#171b1b" : "rgba(242, 238, 229, .75)";
    cell.textContent = weight.toFixed(2);
    cell.title = `${attentionExampleTokens[currentAttention]} → ${attentionExampleTokens[index]}: ${weight.toFixed(2)}`;
    attentionGrid.append(cell);
  });

  const strongest = weights.reduce((best, weight, index) => weight > weights[best] ? index : best, 0);
  attentionReadout.textContent = interpolate(t("attentionFocus"), {
    token: attentionExampleTokens[currentAttention],
    target: attentionExampleTokens[strongest],
    weight: weights[strongest].toFixed(2)
  });
}

const embeddings = {
  cat: {
    vector: [0.82, -0.31, 0.44, 0.12, -0.67, 0.29],
    neighbours: [
      ["kitten", 0.86],
      ["pet", 0.79],
      ["carpet", 0.58],
      ["model", 0.31]
    ]
  },
  model: {
    vector: [-0.22, 0.71, 0.18, 0.56, 0.09, -0.47],
    neighbours: [
      ["system", 0.74],
      ["model", 1.0],
      ["predictor", 0.68],
      ["network", 0.64]
    ]
  },
  river: {
    vector: [0.31, -0.58, 0.77, -0.12, 0.38, 0.21],
    neighbours: [
      ["stream", 0.88],
      ["water", 0.81],
      ["bank", 0.63],
      ["engine", 0.28]
    ]
  }
};

function renderEmbedding(word) {
  currentWord = word;
  embeddingWord.textContent = word;
  vectorValues.replaceChildren();
  embeddings[word].vector.forEach((value) => {
    const cell = document.createElement("span");
    cell.textContent = value.toFixed(2);
    vectorValues.append(cell);
  });

  neighbourList.replaceChildren();
  embeddings[word].neighbours.forEach(([label, score]) => {
    const row = document.createElement("div");
    row.className = "neighbour";
    const wordLabel = document.createElement("span");
    wordLabel.textContent = label;
    const bar = document.createElement("span");
    bar.className = "neighbour-bar";
    const fill = document.createElement("span");
    fill.style.width = `${score * 100}%`;
    bar.append(fill);
    const scoreLabel = document.createElement("span");
    scoreLabel.className = "neighbour-score";
    scoreLabel.textContent = score.toFixed(2);
    row.append(wordLabel, bar, scoreLabel);
    neighbourList.append(row);
  });

  document.querySelectorAll("[data-word]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.word === word));
  });
}

function renderFeatures(feature) {
  currentFeature = feature;
  ffnWord.textContent = feature;
  ffnOutput.textContent = t("ffmOutputs")[feature];
  featurePills.replaceChildren();
  t("ffnFeatures")[feature].forEach((label) => {
    const pill = document.createElement("span");
    pill.textContent = label;
    featurePills.append(pill);
  });
  document.querySelectorAll("[data-feature]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.feature === feature));
  });
}

const trainingSteps = [
  { probability: 0.21, loss: 1.56, step: 0 },
  { probability: 0.31, loss: 1.17, step: 1 },
  { probability: 0.48, loss: 0.73, step: 2 },
  { probability: 0.67, loss: 0.40, step: 3 }
];

function renderTraining() {
  const state = trainingSteps[trainingState];
  targetProbability.textContent = state.probability.toFixed(2);
  lossValue.textContent = state.loss.toFixed(2);
  lossFill.style.width = `${state.probability * 100}%`;
  trainingStep.textContent = state.step === 0
    ? t("trainingStepZero")
    : interpolate(t("trainingStep"), { n: state.step });
}

const logits = [
  { word: "mat", score: 2.65 },
  { word: "floor", score: 1.9 },
  { word: "sofa", score: 1.35 },
  { word: "table", score: 0.92 },
  { word: "sun", score: 0.15 }
];

function softmax(items, temp) {
  const max = Math.max(...items.map((item) => item.score / temp));
  const exponents = items.map((item) => Math.exp(item.score / temp - max));
  const sum = exponents.reduce((total, value) => total + value, 0);
  return exponents.map((value) => value / sum);
}

function renderProbabilities() {
  const temp = Number(temperature.value);
  const probabilities = softmax(logits, temp);
  temperatureValue.value = temp.toFixed(2);
  probabilityBars.replaceChildren();

  logits.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = `probability-row${item.word === chosenSample ? " is-choice" : ""}`;
    row.setAttribute("aria-label", interpolate(t("probabilityAria"), {
      word: item.word,
      probability: probabilities[index].toFixed(2)
    }));
    const label = document.createElement("span");
    label.className = "prob-word";
    label.textContent = item.word;
    const track = document.createElement("span");
    track.className = "bar-track";
    const fill = document.createElement("span");
    fill.className = "bar-fill";
    fill.style.width = `${Math.max(probabilities[index] * 100, 1)}%`;
    track.append(fill);
    const value = document.createElement("output");
    value.textContent = probabilities[index].toFixed(2);
    row.append(label, track, value);
    probabilityBars.append(row);
  });
}

function sampleToken() {
  const temp = Number(temperature.value);
  const probabilities = softmax(logits, temp);
  let draw = Math.random();
  chosenSample = logits[logits.length - 1].word;
  for (let index = 0; index < probabilities.length; index += 1) {
    draw -= probabilities[index];
    if (draw <= 0) {
      chosenSample = logits[index].word;
      break;
    }
  }
  sampledToken.textContent = chosenSample;
  const word = currentLanguage === "zh"
    ? { mat: "垫子", floor: "地板", sofa: "沙发", table: "桌子", sun: "阳光" }[chosenSample]
    : chosenSample;
  sampledSentence.textContent = interpolate(t("sampleOutput"), { word });
  renderProbabilities();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-word]").forEach((button) => {
  button.addEventListener("click", () => renderEmbedding(button.dataset.word));
});

document.querySelectorAll("[data-feature]").forEach((button) => {
  button.addEventListener("click", () => {
    featureRotation = 0;
    renderFeatures(button.dataset.feature);
  });
});

tokeniseButton.addEventListener("click", tokenise);
tokenInput.addEventListener("input", tokenise);
tokenSampleButton.addEventListener("click", () => {
  tokenInput.value = t("sampleSentence");
  tokenise();
  tokenInput.focus();
});

ffnMix.addEventListener("click", () => {
  featureRotation += 1;
  const featureOrder = ["cat", "plane", "idea"];
  currentFeature = featureOrder[(featureOrder.indexOf(currentFeature) + 1) % featureOrder.length];
  renderFeatures(currentFeature);
  featurePills.animate(
    [
      { opacity: 0.4, transform: "translateY(8px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 280, easing: "ease-out" }
  );
});

trainButton.addEventListener("click", () => {
  trainingState = (trainingState + 1) % trainingSteps.length;
  renderTraining();
  if (trainingState === 0) {
    trainButton.blur();
  }
});

temperature.addEventListener("input", renderProbabilities);
sampleButton.addEventListener("click", sampleToken);

const sectionIds = ["tokens", "embeddings", "attention", "feed-forward", "training", "sampling"];
const progressLinks = [...document.querySelectorAll("[data-progress]")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    progressLinks.forEach((link) => {
      link.classList.toggle("is-current", link.dataset.progress === entry.target.id);
    });
  });
}, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

const queryLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("lm-guide-language");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
const initialLanguage = queryLanguage === "zh" || queryLanguage === "en"
  ? queryLanguage
  : (savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : browserLanguage);
applyLanguage(initialLanguage, false);
renderTraining();
renderProbabilities();
sampleToken();

