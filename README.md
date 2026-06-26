# 🤖 AI Morning Brief

AI 전문가를 위한 아침 뉴스레터 스타일 대시보드.
매일 아침 성경 말씀 + AI 뉴스 + AI 채용 + Google 캘린더를 한눈에.

## 파일 구조

```
ai-morning-brief/
├── index.html      # 메인 대시보드
├── settings.html   # API 키 설정 페이지
├── style.css       # 뉴스레터 스타일 CSS
├── config.js       # API 키 & 설정값
├── app.js          # 데이터 로딩 & 렌더링 로직
└── README.md
```

## 빠른 시작 (데모 모드)

config.js의 API 키 없이도 데모 데이터로 바로 실행됩니다.
`index.html`을 브라우저에서 열면 됩니다.

## API 연동 설정

### 1. 성경 말씀 (무료)
1. https://scripture.api.bible 에서 회원가입
2. API Key 발급
3. `config.js`의 `BIBLE_API_KEY`에 입력

### 2. AI 뉴스 (무료 100req/일)
1. https://newsapi.org/register 에서 회원가입
2. API Key 발급
3. `config.js`의 `NEWS_API_KEY`에 입력

> ⚠️ NewsAPI 무료 플랜은 localhost에서만 CORS 허용.
> 배포 시에는 서버사이드 프록시 필요 (Netlify Functions, Vercel API Routes 등)

### 3. Google 캘린더
1. https://console.cloud.google.com 접속
2. 새 프로젝트 생성
3. "Google Calendar API" 활성화
4. "OAuth 2.0 클라이언트 ID" 생성 (웹 애플리케이션)
5. 승인된 JavaScript 원본에 사이트 도메인 추가
6. `config.js`의 `GOOGLE_CLIENT_ID`에 입력

## 배포 방법

### GitHub Pages (무료)
```bash
# 1. GitHub 저장소 생성
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOUR/ai-morning-brief.git
git push -u origin main

# 2. 저장소 Settings → Pages → Branch: main 선택 → Save
# 3. https://YOUR.github.io/ai-morning-brief 접속
```

### Netlify (무료, 추천)
```bash
# Netlify CLI 사용
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

또는 Netlify 웹사이트에서 폴더를 드래그 앤 드롭.

### 로컬 서버로 실행
```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

## 뉴스 API 서버사이드 프록시 (배포 시 필요)

`netlify/functions/news.js` 생성:

```javascript
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { q, language } = event.queryStringParameters;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=publishedAt&pageSize=7&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
};
```

`netlify.toml` 생성:
```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/news"
  to = "/.netlify/functions/news"
  status = 200
```

Netlify 환경 변수에 `NEWS_API_KEY` 추가.

## 자동 새로고침 (크론 탭 / 아침 알림)

브라우저 시작 시 자동 열기 + 30분마다 새로고침이 기본 설정.
Windows 작업 스케줄러 또는 macOS launchd로 아침 7시 자동 실행 가능.
