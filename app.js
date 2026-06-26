/* ═══════════════════════════════════════════════
   AI Morning Brief — app.js
   ═══════════════════════════════════════════════ */

// ── 데모 데이터 ──────────────────────────────────

const DEMO_VERSES = [
  {
    text: "내가 네게 명령한 것이 아니냐? 강하고 담대하라. 두려워하지 말며 놀라지 말라. 네 하나님 여호와가 네가 어디로 가든지 너와 함께 하느니라.",
    ref: "여호수아 1:9",
    reflection: "오늘도 AI 기술의 미지 영역으로 나아가는 당신에게 — 불확실함 앞에서도 담대히 한 걸음을 내딛을 용기를 얻으세요."
  },
  {
    text: "여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다.",
    ref: "이사야 40:31",
    reflection: "매일 새벽 데이터와 씨름하는 당신에게 — 새 힘으로 오늘의 도전을 마주하세요."
  },
  {
    text: "모든 것이 내게 가하나 내가 무엇에든지 얽매이지 아니하리라.",
    ref: "고린도전서 6:12",
    reflection: "AI 도구의 홍수 속에서도 — 도구를 통제하는 사람이 되고, 도구에 지배당하지 않는 하루 되세요."
  },
  {
    text: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라. 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라.",
    ref: "잠언 3:5-6",
    reflection: "수많은 AI 모델과 데이터 속에서도 — 지혜의 근원을 신뢰하며 올바른 방향을 찾아가세요."
  },
  {
    text: "무슨 일을 하든지 마음을 다하여 주께 하듯 하고 사람에게 하듯 하지 말라.",
    ref: "골로새서 3:23",
    reflection: "오늘 작성하는 코드 한 줄, 리뷰하는 모델 하나에도 — 최선의 마음으로 임하는 하루가 되길 바랍니다."
  },
  {
    text: "지혜 있는 자는 강하고 지식 있는 자는 힘을 더하나니.",
    ref: "잠언 24:5",
    reflection: "AI 지식을 쌓는 오늘 — 그 지식이 지혜가 되고, 지혜가 힘이 되기를 소망합니다."
  },
  {
    text: "내가 심었고 아볼로는 물을 주었으되 오직 하나님께서 자라나게 하셨나니.",
    ref: "고린도전서 3:6",
    reflection: "모델을 설계하고, 데이터를 정제하는 당신의 노력 — 그 위에 더 큰 섭리가 함께합니다."
  },
];

const DEMO_NEWS = [
  {
    tag: "연구",
    title: "Google DeepMind, 단백질 구조 예측 AI 'AlphaFold 3' 신약 개발에 돌파구 열어",
    summary: "신약 후보 물질 발굴 시간을 기존 대비 10배 단축 가능한 것으로 알려져, 제약·바이오 업계의 주목을 받고 있습니다.",
    source: "MIT Technology Review",
    url: "#",
    time: "2시간 전"
  },
  {
    tag: "산업",
    title: "국내 스타트업 '뤼튼', 기업용 AI 어시스턴트 출시 — 월 100만 사용자 돌파",
    summary: "한국어 특화 LLM을 앞세워 법률·의료·금융 버티컬 시장 공략. 시리즈 B 200억 유치.",
    source: "테크크런치 코리아",
    url: "#",
    time: "4시간 전"
  },
  {
    tag: "정책",
    title: "EU AI Act 하위 규정 확정 — 고위험 AI 시스템 인증 절차 의무화",
    summary: "2026년부터 의료·교육·채용에 사용되는 AI는 사전 적합성 평가 필수. 국내 기업도 영향권.",
    source: "블룸버그",
    url: "#",
    time: "6시간 전"
  },
  {
    tag: "기술",
    title: "Anthropic, Claude 3.5 Sonnet 코딩 벤치마크 GPT-4o 전 부문 앞서",
    summary: "HumanEval 기준 92.3% 달성. 특히 멀티파일 리팩토링과 테스트 코드 생성에서 압도적 성능.",
    source: "The Verge",
    url: "#",
    time: "8시간 전"
  },
  {
    tag: "오픈소스",
    title: "Meta Llama 3.2 공개 — 멀티모달 90B 모델, 무게·속도 균형 잡혀",
    summary: "비전-언어 통합 모델을 오픈소스로 공개. 엣지 디바이스 최적화 1B/3B 버전도 함께 배포.",
    source: "Hugging Face Blog",
    url: "#",
    time: "12시간 전"
  },
  {
    tag: "투자",
    title: "AI 인프라 투자 급증 — 2025 상반기 글로벌 AI 스타트업 투자 3조 달러 돌파",
    summary: "GPU 클러스터·에너지 인프라·AI 에이전트 분야가 투자 상위 3위. 한국 AI 펀드도 역대 최고.",
    source: "파이낸셜 타임즈",
    url: "#",
    time: "어제"
  },
];

const DEMO_JOBS = [
  { company: "카카오브레인", title: "Large Language Model Researcher", tags: ["PyTorch", "분산학습", "RLHF"], location: "판교", type: "llm", url: "#" },
  { company: "네이버 CLOVA", title: "AI 서비스 Product Manager", tags: ["LLM", "AI Product", "B2B"], location: "분당 / 하이브리드", type: "product", url: "#" },
  { company: "삼성 SDS", title: "MLOps Engineer (LLMOps)", tags: ["Kubernetes", "MLflow", "LangChain"], location: "서울", type: "ml", url: "#" },
  { company: "당근마켓", title: "Data Scientist — Recommendation", tags: ["Spark", "A/B테스트", "Python"], location: "서울 / 원격", type: "data", url: "#" },
  { company: "뤼튼 테크놀로지스", title: "AI Research Engineer", tags: ["Fine-tuning", "RAG", "벡터DB"], location: "서울", type: "llm", url: "#" },
  { company: "현대자동차 AI Lab", title: "Computer Vision Engineer", tags: ["YOLO", "자율주행", "C++"], location: "의왕", type: "ml", url: "#" },
  { company: "LG AI Research", title: "NLP / LLM Scientist", tags: ["논문연구", "EXAONE", "한국어"], location: "마곡", type: "llm", url: "#" },
  { company: "토스뱅크", title: "ML Platform Engineer", tags: ["Feast", "Airflow", "Feature Store"], location: "서울 / 원격", type: "ml", url: "#" },
];

const DEMO_TOOLS = [
  { icon: "🔍", name: "Perplexity AI", desc: "실시간 웹 검색 + LLM 결합. AI 뉴스 리서치에 최적.", category: "검색·리서치" },
  { icon: "🤖", name: "Claude.ai", desc: "긴 문서 분석, 코드 리뷰, 프롬프트 엔지니어링.", category: "LLM 플랫폼" },
  { icon: "📊", name: "Weights & Biases", desc: "실험 추적, 모델 비교, 협업 대시보드.", category: "ML Ops" },
  { icon: "🗂️", name: "Notion AI", desc: "회의록 요약, 문서 초안 작성, 지식 베이스 관리.", category: "생산성" },
];

// ── 초기화 ────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  setDateInfo();
  loadVerse();
  loadAINews();
  loadJobs();
  loadTools();
  startClock();
});

// ── 날짜 / 시간 ──────────────────────────────────

function setDateInfo() {
  const now = new Date();
  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

  document.getElementById("dateBig").textContent = now.getDate();
  document.getElementById("dateDetail").textContent =
    `${now.getFullYear()}년 ${months[now.getMonth()]} ${days[now.getDay()]}`;

  const issueNo = Math.floor((now - new Date("2025-01-01")) / 86400000) + 1;
  document.getElementById("issueDate").textContent =
    `Vol. 1 · No. ${issueNo} · ${now.getFullYear()}년 ${months[now.getMonth()]} ${now.getDate()}일`;
}

function startClock() {
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    const el = document.getElementById("footerTime");
    if (el) el.textContent = `${h}:${m}:${s} KST`;
  }
  tick();
  setInterval(tick, 1000);
}

// ── 성경 말씀 ─────────────────────────────────────

async function loadVerse() {
  const textEl = document.getElementById("verseText");
  const refEl  = document.getElementById("verseRef");
  const reflEl = document.getElementById("verseReflection");

  if (DEMO_MODE || !CONFIG.BIBLE_API_KEY) {
    // 날짜 기반으로 매일 다른 말씀
    const idx = new Date().getDay() % DEMO_VERSES.length;
    const v = DEMO_VERSES[idx];
    textEl.innerHTML = `"${v.text}"`;
    refEl.textContent  = `— ${v.ref}`;
    reflEl.textContent = v.reflection;
    return;
  }

  // scripture.api.bible API 연동
  // 요일별 구절 배열 (KJV 구절 ID 예시)
  const verseIds = [
    "JOS.1.9", "ISA.40.31", "PHP.4.13", "PRO.3.5-6",
    "COL.3.23", "PSA.23.1", "JER.29.11"
  ];
  const todayId = verseIds[new Date().getDay()];

  try {
    const res = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${CONFIG.BIBLE_ID}/passages/${todayId}?content-type=text&include-notes=false`,
      { headers: { "api-key": CONFIG.BIBLE_API_KEY } }
    );
    const data = await res.json();
    const passage = data.data;
    textEl.innerHTML = `"${passage.content.trim()}"`;
    refEl.textContent  = `— ${passage.reference}`;
    reflEl.textContent = "오늘 하루도 이 말씀과 함께 나아가세요.";
  } catch (e) {
    const idx = new Date().getDay() % DEMO_VERSES.length;
    const v = DEMO_VERSES[idx];
    textEl.innerHTML = `"${v.text}"`;
    refEl.textContent  = `— ${v.ref}`;
    reflEl.textContent = v.reflection;
  }
}

// ── AI 뉴스 ──────────────────────────────────────

async function loadAINews() {
  const heroEl = document.getElementById("newsHero");
  const gridEl = document.getElementById("newsGrid");

  heroEl.innerHTML = `<div class="news-skeleton">뉴스를 불러오는 중...</div>`;
  gridEl.innerHTML = "";

  if (DEMO_MODE || !CONFIG.NEWS_API_KEY) {
    renderNews(DEMO_NEWS);
    return;
  }

  try {
    // NewsAPI - AI 뉴스 (cors-proxy 또는 서버사이드 필요 시 프록시 사용)
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(CONFIG.NEWS_KEYWORDS)}&language=ko&sortBy=publishedAt&pageSize=${CONFIG.MAX_NEWS_ITEMS + 1}&apiKey=${CONFIG.NEWS_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "ok" || !data.articles?.length) throw new Error("No articles");

    const articles = data.articles.map(a => ({
      tag: extractTag(a.title || ""),
      title: a.title,
      summary: a.description || "",
      source: a.source.name,
      url: a.url,
      time: timeAgo(new Date(a.publishedAt))
    }));

    renderNews(articles);
  } catch (e) {
    renderNews(DEMO_NEWS);
  }
}

function renderNews(articles) {
  const heroEl = document.getElementById("newsHero");
  const gridEl = document.getElementById("newsGrid");
  const [hero, ...rest] = articles;

  // 히어로
  heroEl.innerHTML = `
    <div class="news-hero-eyebrow">✦ 오늘의 주요 뉴스</div>
    <h2>${hero.title}</h2>
    <p>${hero.summary}</p>
    <div class="news-hero-meta">
      <span>${hero.source}</span>
      <span>${hero.time}</span>
    </div>
    <a class="read-more" href="${hero.url}" target="_blank">전문 읽기 →</a>
  `;

  // 서브 카드
  gridEl.innerHTML = rest.slice(0, 6).map(a => `
    <article class="news-card">
      <div class="news-card-tag">${a.tag}</div>
      <h3>${a.title}</h3>
      <p>${a.summary}</p>
      <div class="news-card-footer">
        <span class="news-card-source">${a.source}</span>
        <a class="news-card-link" href="${a.url}" target="_blank">읽기 →</a>
      </div>
    </article>
  `).join("");
}

function extractTag(title) {
  const map = {
    "GPT|OpenAI|ChatGPT": "OpenAI",
    "Claude|Anthropic": "Anthropic",
    "Gemini|Google|DeepMind": "Google",
    "Llama|Meta": "Meta",
    "규제|법안|정책|EU|AI Act": "정책",
    "투자|펀드|시리즈": "투자",
    "오픈소스|공개|릴리스": "오픈소스",
    "채용|인력|고용": "채용",
  };
  for (const [pattern, label] of Object.entries(map)) {
    if (new RegExp(pattern, "i").test(title)) return label;
  }
  return "AI";
}

function timeAgo(date) {
  const diff = (Date.now() - date) / 1000;
  if (diff < 3600)  return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return "어제";
}

// ── 채용 정보 ─────────────────────────────────────

let allJobs = [];
let currentFilter = "all";

async function loadJobs() {
  allJobs = DEMO_JOBS; // 실제 API 연동 시 여기서 fetch
  renderJobs();
}

function renderJobs() {
  const grid = document.getElementById("jobsGrid");
  const filtered = currentFilter === "all"
    ? allJobs
    : allJobs.filter(j => j.type === currentFilter);

  const badgeClass = { ml: "badge-ml", llm: "badge-llm", data: "badge-data", product: "badge-product" };
  const badgeLabel = { ml: "ML/CV", llm: "LLM/NLP", data: "Data", product: "AI Product" };

  grid.innerHTML = filtered.map(j => `
    <div class="job-card">
      <div class="job-card-top">
        <span class="job-company">${j.company}</span>
        <span class="job-type-badge ${badgeClass[j.type]}">${badgeLabel[j.type]}</span>
      </div>
      <div class="job-title">${j.title}</div>
      <div class="job-meta">
        ${j.tags.map(t => `<span class="job-tag">${t}</span>`).join("")}
      </div>
      <div class="job-footer">
        <span class="job-location">📍 ${j.location}</span>
        <a class="job-link" href="${j.url}" target="_blank">지원하기 →</a>
      </div>
    </div>
  `).join("") || `<p style="color:var(--ink-mute);font-size:14px;padding:20px 0;">해당 카테고리 공고가 없습니다.</p>`;
}

function filterJobs(type, btn) {
  currentFilter = type;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderJobs();
}

// ── 추천 도구 ─────────────────────────────────────

function loadTools() {
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = DEMO_TOOLS.map(t => `
    <div class="tool-card">
      <div class="tool-icon">${t.icon}</div>
      <div class="tool-name">${t.name}</div>
      <div class="tool-desc">${t.desc}</div>
      <div class="tool-category">${t.category}</div>
    </div>
  `).join("");
}

// ── Google Calendar OAuth ─────────────────────────

let gisLoaded = false;
let tokenClient = null;

function connectCalendar() {
  if (!CONFIG.GOOGLE_CLIENT_ID) {
    openModal();
    return;
  }

  if (!gisLoaded) {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = () => {
      gisLoaded = true;
      initGoogleCalendar();
    };
    document.head.appendChild(script);
  } else {
    initGoogleCalendar();
  }
}

function initGoogleCalendar() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CONFIG.GOOGLE_CLIENT_ID,
    scope: CONFIG.GOOGLE_SCOPES,
    callback: (resp) => {
      if (resp.error) return;
      fetchCalendarEvents(resp.access_token);
    },
  });
  tokenClient.requestAccessToken();
}

async function fetchCalendarEvents(token) {
  const btn = document.getElementById("calBtn");
  btn.textContent = "불러오는 중...";

  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const endOfDay   = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).toISOString();

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${startOfDay}&timeMax=${endOfDay}&singleEvents=true&orderBy=startTime`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    renderCalendarEvents(data.items || []);
    btn.textContent = "✓ 캘린더 연결됨";
    btn.style.background = "#1A7A32";
  } catch (e) {
    btn.textContent = "연결 실패 — 재시도";
  }
}

function renderCalendarEvents(events) {
  const list = document.getElementById("eventsList");
  if (!events.length) {
    list.innerHTML = `<p style="font-size:13px;color:var(--ink-mute);padding:12px 0;">오늘 일정이 없습니다 🎉</p>`;
    return;
  }
  list.innerHTML = events.map(e => {
    const start = e.start.dateTime ? new Date(e.start.dateTime) : null;
    const time  = start ? `${String(start.getHours()).padStart(2,"0")}:${String(start.getMinutes()).padStart(2,"0")}` : "종일";
    const loc   = e.location || e.conferenceData?.entryPoints?.[0]?.uri || "";
    return `
      <div class="event-item">
        <span class="event-time">${time}</span>
        <div class="event-detail">
          <span class="event-title">${e.summary || "(제목 없음)"}</span>
          ${loc ? `<span class="event-loc">${loc.replace("https://","").split("/")[0]}</span>` : ""}
        </div>
        <span class="event-badge meeting">일정</span>
      </div>
    `;
  }).join("");
}

// ── 모달 ─────────────────────────────────────────

function openModal()  { document.getElementById("calModal").classList.add("open"); }
function closeModal() { document.getElementById("calModal").classList.remove("open"); }
