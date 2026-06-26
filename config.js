/**
 * AI Morning Brief - 설정 파일
 * 
 * 사용하기 전에 아래 API 키들을 입력하세요.
 * 각 서비스의 무료 플랜으로도 충분히 사용 가능합니다.
 * 
 * ─────────────────────────────────────────────
 * 1. BIBLE API: https://scripture.api.bible (무료)
 *    - 회원가입 후 API Key 발급
 * 
 * 2. NEWS API: https://newsapi.org (무료 100req/day)
 *    - 회원가입 후 API Key 발급
 * 
 * 3. GOOGLE CALENDAR:
 *    - https://console.cloud.google.com
 *    - Google Calendar API 활성화
 *    - OAuth 2.0 클라이언트 ID 생성
 * ─────────────────────────────────────────────
 */

const CONFIG = {
  // ── 성경 API (scripture.api.bible) ──
  BIBLE_API_KEY: "",          // 예: "abc123def456..."
  BIBLE_ID: "de4e12af7fb5a05f-01",  // 한국어 성경 (개역개정) ID

  // ── 뉴스 API (newsapi.org) ──
  NEWS_API_KEY: "",           // 예: "xyz789..."
  // 주요 AI 뉴스 검색 키워드
  NEWS_KEYWORDS: "artificial intelligence OR ChatGPT OR Claude AI OR LLM OR machine learning",
  NEWS_LANG: "ko",            // 언어 (ko: 한국어, en: 영어)

  // ── Google Calendar ──
  GOOGLE_CLIENT_ID: "",       // 예: "1234567890-abc.apps.googleusercontent.com"
  GOOGLE_SCOPES: "https://www.googleapis.com/auth/calendar.readonly",

  // ── 표시 설정 ──
  MAX_NEWS_ITEMS: 6,          // 서브 뉴스 최대 개수
  MAX_JOBS: 8,                // 채용 정보 최대 개수
  REFRESH_INTERVAL_MIN: 30,   // 자동 새로고침 간격 (분)

  // ── 채용 정보 RSS 피드 (실제 사용 시 입력) ──
  JOB_FEEDS: [
    // "https://www.wanted.co.kr/api/v4/jobs?job_sort=company.popularity&years=-1&limit=20&tag_type_ids=87",
  ],
};

// 개발/테스트 모드 (API 키 없이 데모 데이터 사용)
const DEMO_MODE = !CONFIG.BIBLE_API_KEY && !CONFIG.NEWS_API_KEY;
