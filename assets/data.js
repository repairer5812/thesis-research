// 학교별 통계 + 추천 논문 데이터
const SCHOOLS = [
  {
    id: '01-korea-special', name: '고려대 SW·AI 융합대학원', type: '특수대학원', count: 91, color: '#8b1538',
    departments: ['빅데이터융합학과', '인공지능융합학과', '소프트웨어보안학과'],
    tags: ['LLM 응용', 'AI Security', '금융/제조 도메인'],
    note: '사용자 본교 — LLM/NLP 30%, AI Security 19%',
    reports: ['01a_SW_AI융합대학원_특수_논문목록.md', '01b_SW_AI융합대학원_주제분류_통계.md']
  },
  {
    id: '02-korea-general', name: '고려대 일반대학원 인공지능학과', type: '일반대학원', count: 118, color: '#8b1538',
    departments: ['정보대학 인공지능학과 (dept_id 003575)'],
    tags: ['Speech/Voice', '3D/Pose', 'Medical AI', 'Robotics'],
    note: '학술 paper급 모델 자체 연구 — 박사진학 적합',
    reports: ['01c_일반대학원_인공지능학과_조사메모.md', '01d_일반대학원_인공지능학과_논문목록.md']
  },
  {
    id: '03-snu', name: '서울대', type: '협동AI/GSDS/컴공', count: 302, color: '#003a70',
    departments: ['협동과정 인공지능전공', '데이터사이언스대학원 (GSDS)', '컴퓨터공학부'],
    tags: ['학술 중심', 'RL 강세', 'AI4Science'],
    note: '가장 큰 데이터셋 — LLM/NLP 64, CV 59, AI4Sci 40, RL 29',
    reports: ['02_서울대_논문조사.md']
  },
  {
    id: '04-yonsei', name: '연세대', type: '일반/정보대학원', count: 233, color: '#00205b',
    departments: ['인공지능학과', '컴퓨터과학과', '산업공학과', '정보대학원'],
    tags: ['NLP/LLM', 'Healthcare', 'AI Security'],
    note: 'RL 매우 약함(3건). 이경호/여진영 LLM 라인 강세',
    reports: ['03_연세대_논문조사.md']
  },
  {
    id: '05-hanyang', name: '한양대', type: '일반/특수', count: 155, color: '#0e4d92',
    departments: ['인공지능학과', '인공지능융합학과', 'GSAI 인공지능시스템', '컴퓨터·소프트웨어학과'],
    tags: ['Vision-heavy', '시스템 효율화', '의료AI'],
    note: '김상욱 KDD 2025 Best Paper Mention. Vision 22.6%',
    reports: ['04_한양대_논문조사.md']
  },
  {
    id: '06-skku', name: '성균관대', type: '일반대학원', count: 52, color: '#00563f',
    departments: ['인공지능학과', '데이터사이언스융합', '소프트웨어융합'],
    tags: ['추천시스템', 'NLP', '딥페이크 탐지'],
    note: 'DIAL Lab(SIGIR 정기게재), CSI Lab Offline RL',
    reports: ['05_성균관대_논문조사.md']
  },
  {
    id: '07-sogang', name: '서강대', type: 'AI·SW대학원/정통', count: 133, color: '#6a1b9a',
    departments: ['AI·SW대학원', '정보통신대학원', '메타버스대학원'],
    tags: ['LLM Agent', 'RAG', 'Self-Improving'],
    note: '2026: Speculative RAG, Self-Improving Agent, Context Eng',
    reports: ['06_서강대_논문조사.md']
  },
  {
    id: '08-cau', name: '중앙대', type: '일반/영상대학원', count: 272, color: '#002855',
    departments: ['AI학과', '컴퓨터공학과', '첨단영상대학원'],
    tags: ['CV/이미지', 'XAI', '연합학습'],
    note: 'CV 32.4% (영상대학원 영향). RL은 1.8%로 약함',
    reports: ['07_중앙대_논문조사.md']
  },
  {
    id: '09-khu', name: '경희대', type: '일반/특수', count: 67, color: '#8b0000',
    departments: ['컴퓨터공학과', '소프트웨어융합학과', 'GSAI'],
    tags: ['로보틱스', 'EEG', '6G 통신지능'],
    note: '양팔 로봇 long-horizon 시리즈 4편. 오지헌(2026 LLM+RL+MM)',
    reports: ['08_경희대_논문조사.md']
  },
  {
    id: '10-uos', name: '서울시립대', type: '일반대학원', count: 50, color: '#1d3557',
    departments: ['인공지능학과', '도시빅데이터융합', '컴퓨터과학과'],
    tags: ['도시·교통 AI', '환경 AI4Sci', 'LLM 응용'],
    note: '서울시 빅데이터 + LLM 조합 강세. 인공지능학과 신생',
    reports: ['09_시립대_논문조사.md']
  }
];

// 카테고리별 분포
const CATEGORIES = {
  'LLM/NLP/RAG': { 'KU SW·AI': 27, 'KU 일반대': 10, 'SNU': 64, 'Yonsei': 40, 'Hanyang': 23, 'SKKU': 11, 'Sogang': 35, 'CAU': 37, 'KHU': 14, 'UoS': 12 },
  'Computer Vision': { 'KU SW·AI': 8, 'KU 일반대': 25, 'SNU': 59, 'Yonsei': 26, 'Hanyang': 35, 'SKKU': 7, 'Sogang': 18, 'CAU': 88, 'KHU': 8, 'UoS': 11 },
  'AI4Science/Health': { 'KU SW·AI': 3, 'KU 일반대': 17, 'SNU': 40, 'Yonsei': 16, 'Hanyang': 11, 'SKKU': 2, 'Sogang': 5, 'CAU': 16, 'KHU': 3, 'UoS': 7 },
  'Reinforcement Learning': { 'KU SW·AI': 1, 'KU 일반대': 4, 'SNU': 29, 'Yonsei': 3, 'Hanyang': 8, 'SKKU': 3, 'Sogang': 4, 'CAU': 5, 'KHU': 5, 'UoS': 3 },
  'Multimodal/VLM': { 'KU SW·AI': 5, 'KU 일반대': 8, 'SNU': 16, 'Yonsei': 13, 'Hanyang': 6, 'SKKU': 2, 'Sogang': 5, 'CAU': 6, 'KHU': 4, 'UoS': 4 },
  'AI Security': { 'KU SW·AI': 17, 'KU 일반대': 2, 'SNU': 10, 'Yonsei': 8, 'Hanyang': 3, 'SKKU': 8, 'Sogang': 4, 'CAU': 23, 'KHU': 2, 'UoS': 1 },
  'Recommendation/GNN': { 'KU SW·AI': 4, 'KU 일반대': 1, 'SNU': 22, 'Yonsei': 12, 'Hanyang': 7, 'SKKU': 12, 'Sogang': 6, 'CAU': 21, 'KHU': 3, 'UoS': 2 }
};

// === 클라우드(Nextcloud) 다운로드 베이스 URL ===
// OpenClaw가 Nextcloud share link를 만들면 여기 채워넣기.
// 예: 'https://kcai-b650m-d3hp.tail7ec92f.ts.net/s/AbCdEf123/download?path=/&files='
// 비어있으면 클라우드 버튼은 "준비 중" 안내로 표시됨.
const CLOUD_BASE_URL = '';
const CLOUD_REQUIRES_PASSWORD = true;  // 비번 보호 표시

// === 추천 논문 ===
// summary    — 한 단락, 핵심 내용 (논문이 무엇을 하는지)
// reason     — 왜 추천하는지 (사용자 관심사 매칭)
// originalUrl — dCollection / S-Space 등 원본 메타데이터 페이지
// pdf        — 로컬 PDF 파일명 (없으면 클라우드 다운로드 미지원, RISS 메타만)
const RECOMMENDATIONS = [
  // === LLM ===
  { school: '서울대', schoolId: '03-snu', title: 'Future Policy Aware Preference Learning for Mathematical Reasoning', author: '오민제', year: 2026, category: ['llm', 'rl'],
    summary: 'LLM의 수학 추론 학습 시, 단발적 선호 신호 대신 "미래 정책의 가치"까지 함께 고려하는 선호 학습(Preference Learning) 알고리즘을 제안. RLHF 계열을 수학적 추론 도메인에 효과적으로 적용한 사례.',
    reason: 'LLM × RL의 최첨단. 사용자의 두 관심사가 동시에 매칭되며, 평가가 명확한 도메인이라 졸업논문 후속 연구로 적합.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/233010',
    pdf: '서울대_오민제_Future_Policy_Aware_Pref.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Scaffolding Deliberation: Human-in-the-Loop Framework for LLM Reasoning', author: '손민규', year: 2026, category: ['llm'],
    summary: 'LLM이 자체적으로 깊은 추론을 못 하는 한계를, 사람이 추론 단계마다 가벼운 힌트를 주는 "scaffolding" 구조로 보완. Human-in-the-Loop를 효율적으로 설계해 추론 정확도를 끌어올리는 프레임워크.',
    reason: 'Agent/Reasoning 트렌드의 정면 — 단순 자동화가 아닌 "협업형 LLM" 디자인. 인간 개입 비용을 최소화하는 방향.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/233465',
    pdf: '서울대_손민규_Scaffolding_Deliberation.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'SimuHome: Smart Home LLM Agents Benchmark', author: '서규현', year: 2026, category: ['llm'],
    summary: '시간·환경 변화를 반영하는 스마트홈 시뮬레이터를 만들어, LLM Agent가 일상 명령(예: "30분 후 거실 따뜻하게")을 시간·문맥에 맞게 수행하는지 평가하는 벤치마크. 정적 평가의 한계를 보완.',
    reason: 'LLM Agent 평가 방법론 — 학회 발표 가능성 높음. IoT/스마트홈은 한국 산업과도 잘 맞아 후속 연구 진로 명확.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/233492',
    pdf: '서울대_서규현_SimuHome_Smart_Home_LLM.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Adaptive Language Models for Efficient NLP', author: 'Yeachan Kim', year: 2025, category: ['llm'],
    summary: '입력의 난이도·도메인에 따라 LM의 깊이·폭을 동적으로 바꾸는 Adaptive 구조 제안. 한 모델이 다양한 NLP 작업을 효율적으로 처리하도록 학습 알고리즘과 inference 전략을 함께 설계.',
    reason: '고려대 본교(일반대학원) 학술 기준의 모델 자체 연구 — 박사진학 고려 시 reference로 적합. LLM 효율화는 산업·학계 양쪽 수요 큼.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000305004',
    pdf: '고려대_YeachanKim_Adaptive_Language_Models.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Cost-Efficient Cascades for Black-Box LLMs', author: 'Woo-Chan Kim', year: 2026, category: ['llm'],
    summary: '여러 LLM(작은→큰 순)을 cascade로 연결하고, 각 응답의 keyword 가중 신뢰도를 평가해 가능하면 작은 모델에서 끝내고 어려운 질의만 큰 모델로 넘기는 비용 최적화. Black-box API 환경에 적합.',
    reason: 'LLM 추론 비용 최적화는 가장 핫한 실용 주제. Black-box 가정이라 산업 응용성 매우 높음.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307917',
    pdf: '고려대_WooChanKim_Cost_Efficient_Cascades_LLM.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations in LLMs', author: 'Jungwoo Shim', year: 2025, category: ['llm'],
    summary: 'LLM의 환각(hallucination)을 줄이기 위해 프롬프트를 여러 단계로 정제(refine)하는 파이프라인을 제안. 각 단계에서 다른 관점의 검증을 끼워 환각률을 의미있게 감소.',
    reason: '환각 완화는 LLM 안전성·신뢰성의 핵심. 학회 발표 + 산업 적용 양쪽으로 풀 수 있음.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000290150',
    pdf: '고려대_JungwooShim_Multistage_Prompt_LLM.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Noise-Robust Abstractive Compression in Retrieval-Augmented LMs', author: 'Singon Kim', year: 2026, category: ['llm'],
    summary: 'RAG에서 검색된 문서가 노이즈(무관 문장 섞임)일 때 추상화 압축 단계가 흔들리는 문제를 다룸. 노이즈에 강건한 압축 학습 손실을 제안해 다운스트림 QA 정확도를 향상.',
    reason: 'RAG 시스템의 견고성 — 실무 RAG 운영의 가장 큰 고민. 사용자 본교 라인업과 잘 맞음.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000308370',
    pdf: '고려대_SingonKim_Noise_Robust_RAG.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'A Gradient-Based Multi-Domain Knowledge Unlearning Framework for LLMs', author: 'Kun-Woo Kim', year: 2025, category: ['llm'],
    summary: '학습된 LLM에서 특정 도메인 지식만 선택적으로 "잊게" 하는(unlearning) 기법. 그래디언트 기반 멀티 도메인 표현을 사용해 다른 능력은 유지하면서 타겟 지식만 제거.',
    reason: 'LLM 언러닝은 프라이버시·저작권 규제 대응으로 떠오르는 분야. 시의성 + 학술적 신선도 모두 높음.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000304767',
    pdf: '고려대_KunWooKim_LLM_Unlearning.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: '대규모 언어모델 기반 멀티세션 대화시스템', author: '나요한', year: 2024, category: ['llm'],
    summary: '여러 세션에 걸친 사용자와의 대화에서 일관된 페르소나·기억을 유지하는 멀티세션 대화 시스템. 세션 간 메모리 압축·검색 구조를 LLM과 결합.',
    reason: '채동규 그룹의 학술 NLP — 한국어 대화 응용에 직접 활용 가능. 대화형 Agent에 관심 있다면 후속.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188376',
    pdf: '한양대_나요한_LLM_MultiSession_Dialogue.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: 'Methods to Enhance Data Labeling Efficiency Using LLMs', author: '김민우', year: 2024, category: ['llm'],
    summary: '소량의 사람 라벨로 LLM이 자동 라벨을 생성·수정하는 능동학습 파이프라인. 라벨 신뢰도 평가 + 능동 sampling 결합으로 수동 라벨링 비용을 크게 감축.',
    reason: '데이터 중심 AI(Data-centric) 흐름에 맞고, 산업 데이터셋 구축 실무에 바로 적용 가능.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188846',
    pdf: '한양대_김민우_LLM_Data_Labeling.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '국소적 시간 문맥을 활용한 RAG 검색 단위 증강', author: '김병정', year: 2026, category: ['llm'],
    summary: 'RAG의 검색 단위(chunk)에 "주변 시간대 문서"라는 국소 시간 컨텍스트를 추가해, 시간 흐름이 있는 도메인(뉴스·로그)의 질의응답 정확도를 향상.',
    reason: '시간 인지 RAG 기법 — 한국어 뉴스/금융 도메인에 직접 활용 가능.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247057',
    pdf: '중앙대_김병정_RAG_Local_TimeContext.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '단일 레이어 전이: 동결된 LLM 레이어로 소형 LM 성능 향상', author: '김경현', year: 2026, category: ['llm'],
    summary: '거대 LLM의 단 한 레이어만 동결한 채 소형 LM에 이식했을 때, 어떤 레이어를 고르냐에 따라 성능이 달라진다는 분석. 효율적인 LM 전이 학습의 새 관점.',
    reason: '소형 LM에 거대 LLM 능력을 효율 이식 — 엣지·모바일에 적용 가능. 엔지니어링 가치 큼.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247390',
    pdf: '중앙대_김경현_LLM_Layer_Transfer.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '적응형 프롬프트를 활용한 LLM 기반 게임 플레이어 지원', author: '송지성', year: 2026, category: ['llm'],
    summary: '게임 상황(난이도·플레이어 수준)에 따라 LLM이 도움말/힌트 프롬프트를 동적으로 적응. NPC 또는 보조 에이전트로 활용 가능.',
    reason: 'LLM Agent의 게임 도메인 응용 — 한국 게임 산업과 잘 맞고, 평가가 직관적.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247195',
    pdf: '중앙대_송지성_LLM_Game_AdaptivePrompt.pdf' },

  // === AI4Science ===
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'AI for Science: Accelerating Scientific Discovery via RL and Model-based Optimization', author: 'Dong-Hee Shin', year: 2026, category: ['ai4sci', 'rl'],
    summary: '과학적 발견(분자·재료 등)을 가속하기 위해 RL과 모델 기반 최적화를 결합한 프레임워크. 시뮬레이션 비용을 줄이면서 탐색 효율을 높임.',
    reason: 'RL × AI4Science의 결합 — 사용자 두 관심사 동시 매칭. 박사 수준 연구라 학술 진로 추구 시 reference로 강력.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307102',
    pdf: '고려대_DongHee_AI_for_Science_RL.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Enhancing Materials Tokenization with Domain-Specific Knowledge', author: 'Yerim Oh', year: 2026, category: ['ai4sci', 'llm'],
    summary: '재료과학 도메인의 화학식·구조를 LM이 이해하도록 토크나이저를 도메인 지식 기반으로 재설계. 일반 BPE 대비 도메인 특화 작업에서 성능 향상.',
    reason: 'LLM × Materials Science — AI4Science 진입점으로 좋고, LM 토크나이저 자체에 손대는 본격 연구.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306661',
    pdf: '고려대_YerimOh_Materials_Tokenization.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Investigating Data Selection Scheme for Materials-aware Language Model', author: 'Sangyun Kim', year: 2026, category: ['ai4sci', 'llm'],
    summary: 'Materials 도메인 LM 학습 데이터의 어떤 부분이 다운스트림 성능에 기여하는지 정량 분석. 데이터 선별·큐레이션 방법론 제안.',
    reason: '도메인 LM 학습의 핵심 — "어떤 데이터를 넣어야 하나" 질문에 정량 답을 주는 연구.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306210',
    pdf: '고려대_SangyunKim_Materials_LM_Data.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Enhancing Scientific Factuality for Data Augmentation in Materials Science Domain', author: 'Suho Kim', year: 2025, category: ['ai4sci'],
    summary: '재료과학 데이터 증강 시 과학적 사실성(factuality)이 무너지는 문제를 다룸. LLM이 생성하는 합성 데이터의 과학적 정합성을 검증·필터하는 단계 추가.',
    reason: 'LLM 생성 데이터의 한계를 정면 다룸 — AI4Science의 합성 데이터 활용에 중요한 함의.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000303783',
    pdf: '고려대_SuhoKim_Materials_Science_DataAug.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Hybrid Global-Local Attention Transformers for Neural Operators on Complex Geometries', author: 'Min-Su Koh', year: 2025, category: ['ai4sci'],
    summary: '복잡한 기하(불규칙 메쉬) 위 PDE를 풀기 위한 Neural Operator를, 전역·국소 어텐션 결합 트랜스포머로 설계. 물리 시뮬레이션 가속에 활용.',
    reason: 'Physics-informed AI — 응용 분야 폭이 매우 넓음(유체·구조·전자기). 박사 후 연구 진로 다양.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000305022',
    pdf: '고려대_MinSuKoh_Neural_Operators.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Weekast: Subseasonal-to-Seasonal Prediction with Physics-Informed AI', author: '김예림', year: 2026, category: ['ai4sci'],
    summary: '기존 일기예보보다 길고 계절예보보다 짧은 "subseasonal-to-seasonal(S2S)" 예측을 Physics-Informed AI로 개선. 물리 보존 법칙을 손실에 통합.',
    reason: 'AI4Science의 정점 — 한국 기상청·재난 예측에 직접 활용 가능. 학술적으로도 주목받는 라인.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/234130',
    pdf: '서울대_김예림_Weekast_Physics_Informed.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: 'Improving Protein Side-chain Accuracy Using Conditioned Torsion Angle Loss', author: '전성광', year: 2024, category: ['ai4sci'],
    summary: '단백질 곁사슬 비틀림각 예측을 위해 조건부 토션각 손실 함수를 제안. AlphaFold 후속 작업에 해당하며, 곁사슬 정확도가 개선됨.',
    reason: '구조생물학 + AI — 의료/제약 진로 진출 시 reference로 적합.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/187434',
    pdf: '한양대_전성광_Protein_TorsionAngle.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: 'EEG 기반 신경퇴행성 질환 탐지 - 마스크드 오토인코더', author: '조해준', year: 2025, category: ['ai4sci'],
    summary: 'EEG(뇌파) 신호로 알츠하이머 등 신경퇴행성 질환을 조기 탐지. 마스크드 오토인코더 자기지도 학습으로 라벨 부족 문제 완화.',
    reason: '의료 AI + 자기지도 학습 — 임상 데이터 부족 환경에 효과적인 방법론.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000243624',
    pdf: '중앙대_조해준_EEG_NeuroDegen.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '확산 모델 기반 시계열 예측 및 이상탐지에 관한 생성적 접근', author: '나다경', year: 2026, category: ['ai4sci'],
    summary: 'Diffusion 모델을 시계열 예측·이상탐지에 적용. 시계열 분포 생성을 통해 예측 불확실성과 이상치 탐지를 동시 수행.',
    reason: 'Diffusion이 이미지 외 시계열·테이블에 확장되는 흐름의 사례 — 금융·헬스케어 응용 가능.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000246241',
    pdf: '중앙대_나다경_Diffusion_TimeSeries.pdf' },

  // === RL ===
  { school: '서울대', schoolId: '03-snu', title: 'Continuous GFlowNets as Maximum Entropy RL via Termination-Controlled SAC', author: '방신근', year: 2026, category: ['rl'],
    summary: '연속 행동공간 GFlowNets를, 종료 제어 SAC 형태의 최대 엔트로피 RL로 재해석. 두 패러다임의 통합적 시각 제공.',
    reason: 'RL 이론 최첨단 — GFlowNets는 분자생성·신약개발에서 핫. 학술 연구 추구 시 매력적.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/232723',
    pdf: '서울대_방신근_Continuous_GFlowNets.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Follow-the-Perturbed-Leader for Decoupled Bandits: Best-of-Both-Worlds and Practicality', author: '김채원', year: 2026, category: ['rl'],
    summary: '분리된(decoupled) bandit 환경에서 FTPL 알고리즘이 stochastic·adversarial 양쪽에서 최적 후회(regret) 보장을 동시 달성함을 증명.',
    reason: '온라인 학습 이론 — 광고·추천 시스템 이론적 기반에 직접 연결됨.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/232993',
    pdf: '서울대_김채원_FollowPerturbedLeader.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Reinforcement Learning from Implicit Neural Feedback for Human-Aligned Robot Control', author: 'Suzie Kim', year: 2026, category: ['rl'],
    summary: '명시적 보상 없이 인간의 암시적 신경 신호(EEG)를 RL의 보상으로 활용. 로봇 제어를 사람 의도에 정렬.',
    reason: 'RLHF의 BCI 확장판 — 멀티모달 + RL + Robot의 융합 사례.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000308340',
    pdf: '고려대_SuzieKim_RL_Implicit_Neural_Feedback.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: '동적 환경에서의 안정적인 주행을 위한 심층 강화학습 기반 모바일 로봇 자율주행', author: '최승범', year: 2024, category: ['rl'],
    summary: '동적 장애물이 있는 실내·외 환경에서 모바일 로봇 자율 항법을 DRL로 학습. 안전성·효율성을 함께 보장하는 보상 설계.',
    reason: 'DRL × Robotics — 자율주행/배달로봇 진로에 직접 매칭.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188856',
    pdf: '한양대_최승범_DRL_MobileRobot.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: 'Automated stock trading using transformer and reinforcement learning', author: '이남영', year: 2023, category: ['rl'],
    summary: 'Transformer로 시장 상태를 인코딩 + RL로 매매 정책 학습. 다중 자산 포트폴리오 자동 운용에 적용.',
    reason: 'RL × 금융 — 도메인 응용이 명확하고 평가 지표(Sharpe ratio 등) 객관적.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/187245',
    pdf: '한양대_이남영_Transformer_RL_Trading.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '지능형 반사 표면 셀 프리 시스템의 DRL 에너지 효율 최대화', author: '송치현', year: 2025, category: ['rl'],
    summary: 'IRS(Intelligent Reflecting Surface)를 통합한 cell-free 무선 통신에서 DRL로 빔포밍·전력 할당을 동시 최적화. 에너지 효율 극대화.',
    reason: 'DRL × 6G 통신 — 통신·하드웨어 응용에 관심이 있다면 reference.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000243114',
    pdf: '중앙대_송치현_RL_CellFree_Energy.pdf' },

  // === Multimodal ===
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Towards Multimodal Foundation Model for Human-Centered Robot Behavior', author: 'Jeongeun Park', year: 2026, category: ['mm', 'rl'],
    summary: '비전·언어·동작을 통합 학습한 멀티모달 Foundation Model을 인간 중심 로봇(예: HRI) 행동 생성에 적용. VLA(Vision-Language-Action) 트렌드의 사례.',
    reason: 'VLA는 2026 핫한 트렌드 — 박사 수준 연구이자 산업(보스턴 다이나믹스/PI 등) 응용.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307206',
    pdf: '고려대_JeongeunPark_Multimodal_Foundation_Robot.pdf' },

  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'MCoT-RE: Multi-Faceted Chain-of-Thought and Re-Ranking for Composed Image Retrieval', author: 'Jeong-Woo Park', year: 2026, category: ['mm', 'llm'],
    summary: '"이미지 + 텍스트 변형 명령"으로 검색하는 Composed Image Retrieval에서, 다면적 CoT 추론과 Re-ranking을 결합해 zero-shot 검색 정확도를 향상.',
    reason: '검색 도메인의 멀티모달 + LLM 결합 — 한국어 이커머스에 직접 응용 가능.',
    originalUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306485',
    pdf: '고려대_JeongWooPark_MCoT_RE_Composed_Image_Retrieval.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Semantic Anchoring for Robust Personalization in Text-to-Image Diffusion Models', author: '양서윤', year: 2026, category: ['mm', 'cv'],
    summary: 'T2I Diffusion의 personalization(예: 내 강아지 사진으로 학습)에서 의미 표류(semantic drift)를 방지. 텍스트-이미지 의미를 anchor로 고정.',
    reason: 'Diffusion 개인화는 핫한 응용 — Stable Diffusion 기반 서비스에 직결.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/233481',
    pdf: '서울대_양서윤_Semantic_Anchoring_T2I.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Sinkhorn based Graph Enhancement for Multimodal Recommendation', author: '김주영', year: 2026, category: ['mm'],
    summary: '멀티모달 추천에서 user-item-modality 그래프를 Sinkhorn 정규화로 재구성해 모달리티 간 노이즈를 줄이고 추천 성능을 개선.',
    reason: 'Multimodal × GNN × 추천 — 세 트랙 동시 충족, e-commerce 응용 직접.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/233497',
    pdf: '서울대_김주영_Sinkhorn_Multimodal_Rec.pdf' },

  { school: '서울대', schoolId: '03-snu', title: 'Eyetoon: Webtoon Reader Engagement through Eye-Tracking and Multimodal AI Explanations', author: 'Guangjing Yan', year: 2026, category: ['mm'],
    summary: '웹툰 독자의 시선(eye-tracking) 데이터와 이미지·대사를 결합해 어떤 컷에서 몰입이 높은지 분석. 멀티모달 AI가 그 이유를 자연어로 설명.',
    reason: '한국 웹툰 도메인 + 멀티모달 — 콘텐츠 산업 응용 매력적, 데이터셋 가치도 큼.',
    originalUrl: 'https://s-space.snu.ac.kr/handle/10371/232974',
    pdf: '서울대_GuangjingYan_Eyetoon_Webtoon.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: '자연어 명령 수행을 위한 시각-언어 모델 기반 로봇의 물체 찾기 및 파지 기술', author: '윤동민', year: 2024, category: ['mm'],
    summary: '"빨간 컵 가져와" 같은 자연어 명령을 VLM이 해석 + 로봇 매니퓰레이터가 해당 물체를 찾아 파지. VLM × Manipulation의 한국어 사례.',
    reason: 'VLA·Embodied AI의 한국어 응용 — 산업(스마트팩토리·서비스 로봇) 응용성 큼.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/193528',
    pdf: '한양대_윤동민_VLM_Robot_Grasping.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '멀티모달 대규모 언어 모델의 시각적 인식 성능 향상 및 정밀 평가', author: '정우준', year: 2026, category: ['mm', 'llm'],
    summary: 'MLLM(GPT-4V 등)의 시각 인식 한계를 정밀 평가하는 벤치마크 제안 + 시각 인코더 미세조정 방법으로 성능 향상.',
    reason: 'MLLM 평가 + 개선 양쪽 — 학술 발표성 높음.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247257',
    pdf: '중앙대_정우준_Multimodal_LLM_Visual.pdf' },

  { school: '중앙대', schoolId: '08-cau', title: '보조 헤드 기반 OOD 탐지를 위한 1인칭 멀티모달 지속 학습', author: '임혜정', year: 2026, category: ['mm'],
    summary: '1인칭(egocentric) 시점 멀티모달 데이터에서 분포 외(OOD) 입력을 탐지하면서 지속 학습. 보조 헤드 구조로 catastrophic forgetting 완화.',
    reason: 'AR/VR · 자율주행 1인칭 데이터의 미래 트렌드. 지속학습 + OOD 탐지 결합.',
    originalUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000246733',
    pdf: '중앙대_임혜정_Egocentric_Multimodal_OOD.pdf' },

  // === 기타 ===
  { school: '한양대', schoolId: '05-hanyang', title: 'THOR: Self-Supervised Temporal Knowledge Graph Embedding via Three-Tower GCNs', author: '이재현', year: 2023, category: ['other'],
    summary: '시간 정보가 있는 지식그래프(temporal KG)를 3개 GCN 타워로 임베딩하는 자기지도 학습. 김상욱 그룹의 KDD 2025 Best Paper Mention 라인.',
    reason: 'KDD Best Paper Mention 라인 — 학술 가치 입증된 주제.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/179817',
    pdf: '한양대_이재현_THOR_TemporalKG.pdf' },

  { school: '한양대', schoolId: '05-hanyang', title: 'Improving Autotuner By Fixing Configurations Using Interpretable Machine Learning', author: '최유철', year: 2024, category: ['other'],
    summary: '시스템 autotuner(DB·컴파일러 파라미터)에서 SHAP 기반 해석 가능한 ML로 안정 성능을 내는 설정을 자동 탐색.',
    reason: '시스템 효율화 + XAI 결합 — 인프라 ML 진로에 적합.',
    originalUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188869',
    pdf: '한양대_최유철_Autotuner_InterpretableML.pdf' },

  // === RISS 인증 후 다운로드 가능 (메타데이터만, 로컬 PDF 없음) ===
  { school: '연세대', schoolId: '04-yonsei', title: 'Web Agents with World Models', author: 'Chae, Hyungjoo', year: 2025, category: ['llm'],
    summary: '웹 브라우징 LLM Agent가 단순 액션 실행을 넘어, 페이지 변화의 "world model"을 학습해 미래 상태를 예측. 더 똑똑한 클릭 의사결정.',
    reason: 'LLM Agent + World Model — 여진영 그룹의 학술 라인.',
    originalUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=d6f060e7c1c8b746ffe0bdc3ef48d419' },

  { school: '연세대', schoolId: '04-yonsei', title: 'Cactus: Psychological Counseling Conversations using Cognitive Behavioral Therapy', author: 'Lee, Suyeon', year: 2026, category: ['llm'],
    summary: '인지행동치료(CBT) 프로토콜을 따르는 LLM 심리상담 시스템. 한국어 데이터셋과 함께 발표.',
    reason: 'LLM × 심리상담 — 응용 도메인 매력적, 한국어 NLP에도 기여.',
    originalUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=e73993f9fe207bf8ffe0bdc3ef48d419' },

  { school: '연세대', schoolId: '04-yonsei', title: 'PlanQA: Plan-Execute-Reason for KGQA Using LLMs', author: 'Park, Jongwon', year: 2025, category: ['llm', 'other'],
    summary: '지식그래프 QA에서 LLM이 계획→실행→추론 단계를 분리해 수행하는 Plan-Execute-Reason 패턴. 복잡한 다중 홉 질의에 강함.',
    reason: 'KG × LLM Reasoning — 도메인 QA 시스템 연구에 reference.',
    originalUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=e8006ad8dd045152ffe0bdc3ef48d419' },

  { school: '연세대', schoolId: '04-yonsei', title: 'Coffee: Code LLMs by Fixing Bugs with Feedback', author: 'Moon, Seungjun', year: 2025, category: ['llm'],
    summary: '코드 LLM이 자체 생성 코드의 버그를 실행 피드백으로 자기 수정하는 학습 방법. 디버깅 능력을 모델 내재화.',
    reason: 'Code LLM + Self-Correction — Devin/Cursor 류 응용에 직결.',
    originalUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=c6315d317231f0c8ffe0bdc3ef48d419' },

  { school: '연세대', schoolId: '04-yonsei', title: 'Domain-Guided Dense Captioning for Protein Function Description', author: '장민주', year: 2026, category: ['ai4sci', 'llm'],
    summary: '단백질 구조에 대한 기능 설명을 자연어로 생성. 도메인 지식을 가이드로 사용해 기존 단순 캡셔닝 대비 정확도 향상.',
    reason: 'AI4Science × LLM Captioning — 신약개발 응용 가능.',
    originalUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=786eec6fe1fbb1cfffe0bdc3ef48d419' },

  { school: '서강대', schoolId: '07-sogang', title: '효율적인 통합형 멀티에이전트 RAG 프레임워크', author: '김준호', year: 2026, category: ['llm'],
    summary: '여러 도메인 특화 RAG 에이전트를 하나의 통합 컨트롤러로 묶어, 질의에 따라 자동 라우팅. 기업 환경의 실용 RAG 시스템.',
    reason: 'Multi-Agent RAG는 산업에서 가장 핫한 패턴.',
    originalUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EB%A9%80%ED%8B%B0%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8+RAG' },

  { school: '서강대', schoolId: '07-sogang', title: '과거 경험의 검색을 통한 자기 개선 LLM 에이전트', author: '윤승현', year: 2025, category: ['llm'],
    summary: 'LLM Agent가 과거 작업 결과를 메모리로 저장하고, 새로운 질의에 유사 사례를 검색해 자기 개선. Self-Improving Agent의 한국어 사례.',
    reason: 'Self-Improving Agent — 메모리·학습 결합의 핫한 트렌드.',
    originalUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EC%9E%90%EA%B8%B0%EA%B0%9C%EC%84%A0+LLM' },

  { school: '서강대', schoolId: '07-sogang', title: 'Speculative RAG: 효율적 초안 생성', author: '안규원', year: 2025, category: ['llm'],
    summary: 'Speculative decoding을 RAG에 적용 — 작은 LM이 초안을 빠르게 생성하고 큰 LM이 검증. RAG 추론 지연을 크게 단축.',
    reason: 'RAG 가속 + Speculative — 추론 효율화 트렌드.',
    originalUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=Speculative+RAG' },

  { school: '서강대', schoolId: '07-sogang', title: '초전도체 임계온도 예측 (Chemical Composition Embeddings)', author: '김송이', year: 2025, category: ['ai4sci'],
    summary: '화학 조성을 임베딩으로 표현해 초전도체 임계온도를 예측. 머티리얼 인포매틱스의 전형적 응용.',
    reason: 'AI4Science × 재료 — 응용 분야 명확, 도메인 진입에 좋음.',
    originalUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EC%B4%88%EC%A0%84%EB%8F%84%EC%B2%B4' },

  { school: '경희대', schoolId: '09-khu', title: 'Bimanual Manipulation with LLM Planner + RL', author: '오지헌', year: 2026, category: ['llm', 'rl', 'mm'],
    summary: '양팔 로봇의 long-horizon 조작 작업을 LLM이 sub-goal로 계획 + RL이 각 sub-goal 실행. 계획·제어 분리 구조.',
    reason: 'LLM + RL + Multimodal 3중 결합 — 사용자 관심사가 모두 매칭. 박사 수준 라인.',
    originalUrl: 'https://www.riss.kr/search/Search.do?queryText=%EC%9D%B4%EC%A4%91%ED%8C%94+%EC%9C%A1+LLM+RL&searchGubun=true&colName=bib_t' },

  { school: '경희대', schoolId: '09-khu', title: 'EEG Transformer Emotion Recognition', author: '김태성', year: 2024, category: ['ai4sci', 'mm'],
    summary: '뇌파(EEG) 신호를 Transformer로 인코딩해 감정 분류. 여러 채널 시계열의 전역 어텐션 활용.',
    reason: 'EEG × Transformer — BCI · 디지털 헬스 진로에 reference.',
    originalUrl: 'https://www.riss.kr/search/Search.do?queryText=EEG+Transformer+Emotion&searchGubun=true&colName=bib_t' },

  { school: '시립대', schoolId: '10-uos', title: 'TutorAgent: BKTransformer + GraphRAG 교육 LLM', author: '손준호', year: 2026, category: ['llm'],
    summary: '학습자 지식상태(BKT)를 Transformer로 추적 + GraphRAG로 관련 학습자료 검색. 개인화 LLM 튜터 시스템.',
    reason: 'LLM × 교육 + Knowledge Tracing — EdTech 진로에 적합.',
    originalUrl: 'https://www.riss.kr/search/Search.do?queryText=TutorAgent+BKTransformer&searchGubun=true&colName=bib_t' },

  { school: '시립대', schoolId: '10-uos', title: 'LLM 기반 화학 독성 예측', author: '고재현', year: 2026, category: ['ai4sci', 'llm'],
    summary: '화학구조(SMILES)를 LLM에 넣어 독성 endpoint를 예측. 약물 개발 초기 스크리닝 활용.',
    reason: 'LLM × 화학 — AI4Sci 응용, 약학 진로에 매칭.',
    originalUrl: 'https://www.riss.kr/search/Search.do?queryText=LLM+%EB%8F%85%EC%84%B1+%EC%98%88%EC%B8%A1&searchGubun=true&colName=bib_t' }
];

const CATEGORY_LABELS = {
  llm: 'LLM/NLP', ai4sci: 'AI4Science', rl: 'RL', mm: 'Multimodal',
  cv: 'Computer Vision', sec: 'AI Security', other: '기타'
};

const TOTAL_PAPERS = SCHOOLS.reduce((sum, s) => sum + s.count, 0);

// Cloud URL builder
function buildCloudUrl(pdfFilename) {
  if (!CLOUD_BASE_URL || !pdfFilename) return null;
  return CLOUD_BASE_URL + encodeURIComponent(pdfFilename);
}
