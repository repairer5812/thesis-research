# AI 대학원 석사논문 인텔리전스

10개 한국 AI 대학원의 2023~2026 석사 학위논문 1,473건을 통합 분석한 정적 웹사이트.

## 무엇을 다루나
- **고려대** SW·AI 융합대학원 91건 + 일반대학원 인공지능학과 118건
- **서울대** 협동과정 AI / GSDS / 컴공부 302건
- **연세대·한양대·성균관대·서강대·중앙대·경희대·시립대** AI 관련 학과 902건
- 카테고리별 트렌드 (LLM·CV·AI4Science·RL·Multimodal·AI Security)
- 우수/추천 논문 큐레이션 50편 (이중 38편 PDF 다운로드 완료)
- 사용자 관심분야별 진로 매칭 가이드

## 자료 출처
각 학교 공식 학위논문 시스템:
- 고려대 dCollection (`dcollection.korea.ac.kr`)
- 서울대 S-Space (`s-space.snu.ac.kr`)
- 한양대 repository (`repository.hanyang.ac.kr`)
- 중앙대 dCollection (`dcollection.cau.ac.kr`)
- 연세대·서강대·성균관대·경희대·시립대: RISS 인증 후 메타데이터

## 구조

```
site/
├── index.html              # 대시보드 (통계·차트·Top 9)
├── schools.html            # 학교별 프로파일 그리드
├── school.html?id=...      # 학교 상세 페이지
├── recommendations.html    # 카테고리·검색 필터 추천 논문
├── pdfs.html               # 38편 PDF 인덱스
├── report.html?file=...    # 마크다운 보고서 렌더러
├── reports/                # 14개 마크다운 보고서
└── assets/
    ├── style.css           # 디자인 시스템 (Trust × Academic)
    └── data.js             # 학교·카테고리·추천 데이터
```

## 디자인
- **컬러**: 학술 네이비(`#1e2a4a`) + KU 크림슨(`#8b1538`) 액센트
- **타이포**: Pretendard Variable (한글 최적화)
- **차트**: Chart.js
- **마크다운**: marked.js + DOMPurify

## 한계
- 일부 학교(연세·서강·성균·경희·시립)는 RISS/학내 IP 인증 후 PDF 다운로드 가능
- 우수학위논문상 라벨은 모든 학교 미공개
- 카테고리는 키워드 기반 휴리스틱

## 라이선스
학술 비영리 용도. 메타데이터 출처는 각 학교 공식 시스템.

---

작성: 최경찬 (고려대 SW·AI 융합대학원), 2026-04-28. Built with Claude Code.
