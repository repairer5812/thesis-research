# AI 대학원 석사논문 인텔리전스

국내 17개 학교, 대학원의 AI 관련 학과 석사 학위논문 5,408건(2023~2026)을 모아 분석한 정적 웹사이트입니다.
사이트: https://repairer5812.github.io/thesis-research/

## 무엇을 다루나
- 학교별 프로파일: 학과별 건수, 강세 분야, 추천 논문, 2026년 11월 갱신으로 더한 논문 목록
- 분야별 분포: LLM, 컴퓨터비전, AI4Science, 강화학습, 멀티모달, AI 보안, 추천/GNN
- 추천 논문 253편: 학회 게재, 인용수, 코드 공개, 수상, 최신성으로 점수를 매긴 목록(채점 기준은 `methodology.html`)

## 갱신 이력
- 2026-04-28: 처음 수집(4,620건, 추천 192편)
- 2026-11-05: 4월 뒤 새로 등록된 석사논문 788건 추가, 추천 192편의 인용수와 GitHub 별점 재집계, 새 추천 61편 추가

## 자료 출처
각 학교 공식 학위논문 시스템(dCollection, S-Space, KOASAS, OASIS, ScholarWorks@UNIST, GIST Scholar, DGIST Scholar)과 RISS.
인용수와 학회 게재는 Semantic Scholar, 코드 별점은 GitHub API로 확인했습니다.
연세대, 한양대, 경희대는 2026-11 갱신 때 학교 시스템에 접속되지 않아 RISS에서 찾았습니다.

## 구조
```
index.html            개요(분포 차트, 갱신 요약, 학교 카드, 추천 Top)
schools.html          학교 목록
school.html?id=...    학교 상세(학과, 추천 논문, 갱신으로 더한 논문)
recommendations.html  추천 논문 필터
methodology.html      채점 기준과 한계
report.html?file=...  마크다운 보고서 보기
reports/              학교별 조사 보고서
assets/data.js        학교, 분류, 추천 데이터
assets/recent.js      2026-11 갱신으로 더한 논문 목록
assets/cards.js       추천 카드 그리기
assets/style.css      디자인
```

## 데이터 다시 만들기
원자료와 스크립트는 사이트 저장소 밖(작성자의 Nextcloud `졸업논문_리서치/업데이트_20261105/`)에 있습니다.
`tools/build_site.sh`가 4월 원본(커밋 0e329ca의 data.js)에서 시작해 지표 재집계, 새 논문, 새 추천을 차례로 반영합니다.

## 한계
- 일부 학교는 학교 시스템 대신 RISS 메타데이터를 썼습니다.
- 분야 분류는 제목, 주제어 키워드 규칙이라 정확하지 않을 수 있습니다.
- 등록일을 알 수 없는 2025년, 2026년 2월 논문은 4월 집계와 겹칠 수 있어 이번 갱신에 더하지 않았습니다.

## 라이선스
학술 비영리 용도. 메타데이터 출처는 각 학교 공식 시스템입니다.

---

작성: SW AI 융합정보대학원 61기 최경찬. Built with Claude Code.
