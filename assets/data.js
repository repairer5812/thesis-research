// 학교별 통계 + 추천 논문 데이터
const SCHOOLS = [
  {
    id: '01-korea-special',
    name: '고려대 SW·AI 융합대학원',
    type: '특수대학원',
    count: 91,
    color: '#8b1538',
    departments: ['빅데이터융합학과', '인공지능융합학과', '소프트웨어보안학과'],
    tags: ['LLM 응용', 'AI Security', '금융/제조 도메인'],
    note: '사용자 본교 — LLM/NLP 30%, AI Security 19%',
    reports: ['01a_SW_AI융합대학원_특수_논문목록.md', '01b_SW_AI융합대학원_주제분류_통계.md']
  },
  {
    id: '02-korea-general',
    name: '고려대 일반대학원 인공지능학과',
    type: '일반대학원',
    count: 118,
    color: '#8b1538',
    departments: ['정보대학 인공지능학과 (dept_id 003575)'],
    tags: ['Speech/Voice', '3D/Pose', 'Medical AI', 'Robotics'],
    note: '학술 paper급 모델 자체 연구 — 박사진학 적합',
    reports: ['01c_일반대학원_인공지능학과_조사메모.md', '01d_일반대학원_인공지능학과_논문목록.md']
  },
  {
    id: '03-snu',
    name: '서울대',
    type: '협동AI/GSDS/컴공',
    count: 302,
    color: '#003a70',
    departments: ['협동과정 인공지능전공', '데이터사이언스대학원 (GSDS)', '컴퓨터공학부'],
    tags: ['학술 중심', 'RL 강세', 'AI4Science'],
    note: '가장 큰 데이터셋 — LLM/NLP 64, CV 59, AI4Sci 40, RL 29',
    reports: ['02_서울대_논문조사.md']
  },
  {
    id: '04-yonsei',
    name: '연세대',
    type: '일반/정보대학원',
    count: 233,
    color: '#00205b',
    departments: ['인공지능학과', '컴퓨터과학과', '산업공학과', '정보대학원'],
    tags: ['NLP/LLM', 'Healthcare', 'AI Security'],
    note: 'RL 매우 약함(3건). 이경호/여진영 LLM 라인 강세',
    reports: ['03_연세대_논문조사.md']
  },
  {
    id: '05-hanyang',
    name: '한양대',
    type: '일반/특수',
    count: 155,
    color: '#0e4d92',
    departments: ['인공지능학과', '인공지능융합학과', 'GSAI 인공지능시스템', '컴퓨터·소프트웨어학과'],
    tags: ['Vision-heavy', '시스템 효율화', '의료AI'],
    note: '김상욱 KDD 2025 Best Paper Mention. Vision 22.6%',
    reports: ['04_한양대_논문조사.md']
  },
  {
    id: '06-skku',
    name: '성균관대',
    type: '일반대학원',
    count: 52,
    color: '#00563f',
    departments: ['인공지능학과', '데이터사이언스융합', '소프트웨어융합'],
    tags: ['추천시스템', 'NLP', '딥페이크 탐지'],
    note: 'DIAL Lab(SIGIR 정기게재), CSI Lab Offline RL',
    reports: ['05_성균관대_논문조사.md']
  },
  {
    id: '07-sogang',
    name: '서강대',
    type: 'AI·SW대학원/정통',
    count: 133,
    color: '#6a1b9a',
    departments: ['AI·SW대학원', '정보통신대학원', '메타버스대학원'],
    tags: ['LLM Agent', 'RAG', 'Self-Improving'],
    note: '2026: Speculative RAG, Self-Improving Agent, Context Eng',
    reports: ['06_서강대_논문조사.md']
  },
  {
    id: '08-cau',
    name: '중앙대',
    type: '일반/영상대학원',
    count: 272,
    color: '#002855',
    departments: ['AI학과', '컴퓨터공학과', '첨단영상대학원'],
    tags: ['CV/이미지', 'XAI', '연합학습'],
    note: 'CV 32.4% (영상대학원 영향). RL은 1.8%로 약함',
    reports: ['07_중앙대_논문조사.md']
  },
  {
    id: '09-khu',
    name: '경희대',
    type: '일반/특수',
    count: 67,
    color: '#8b0000',
    departments: ['컴퓨터공학과', '소프트웨어융합학과', 'GSAI'],
    tags: ['로보틱스', 'EEG', '6G 통신지능'],
    note: '양팔 로봇 long-horizon 시리즈 4편. 오지헌(2026 LLM+RL+MM)',
    reports: ['08_경희대_논문조사.md']
  },
  {
    id: '10-uos',
    name: '서울시립대',
    type: '일반대학원',
    count: 50,
    color: '#1d3557',
    departments: ['인공지능학과', '도시빅데이터융합', '컴퓨터과학과'],
    tags: ['도시·교통 AI', '환경 AI4Sci', 'LLM 응용'],
    note: '서울시 빅데이터 + LLM 조합 강세. 인공지능학과 신생',
    reports: ['09_시립대_논문조사.md']
  }
];

// 카테고리별 분포 (학교별 추정)
const CATEGORIES = {
  'LLM/NLP/RAG': { 'KU SW·AI': 27, 'KU 일반대': 10, 'SNU': 64, 'Yonsei': 40, 'Hanyang': 23, 'SKKU': 11, 'Sogang': 35, 'CAU': 37, 'KHU': 14, 'UoS': 12 },
  'Computer Vision': { 'KU SW·AI': 8, 'KU 일반대': 25, 'SNU': 59, 'Yonsei': 26, 'Hanyang': 35, 'SKKU': 7, 'Sogang': 18, 'CAU': 88, 'KHU': 8, 'UoS': 11 },
  'AI4Science/Health': { 'KU SW·AI': 3, 'KU 일반대': 17, 'SNU': 40, 'Yonsei': 16, 'Hanyang': 11, 'SKKU': 2, 'Sogang': 5, 'CAU': 16, 'KHU': 3, 'UoS': 7 },
  'Reinforcement Learning': { 'KU SW·AI': 1, 'KU 일반대': 4, 'SNU': 29, 'Yonsei': 3, 'Hanyang': 8, 'SKKU': 3, 'Sogang': 4, 'CAU': 5, 'KHU': 5, 'UoS': 3 },
  'Multimodal/VLM': { 'KU SW·AI': 5, 'KU 일반대': 8, 'SNU': 16, 'Yonsei': 13, 'Hanyang': 6, 'SKKU': 2, 'Sogang': 5, 'CAU': 6, 'KHU': 4, 'UoS': 4 },
  'AI Security': { 'KU SW·AI': 17, 'KU 일반대': 2, 'SNU': 10, 'Yonsei': 8, 'Hanyang': 3, 'SKKU': 8, 'Sogang': 4, 'CAU': 23, 'KHU': 2, 'UoS': 1 },
  'Recommendation/GNN': { 'KU SW·AI': 4, 'KU 일반대': 1, 'SNU': 22, 'Yonsei': 12, 'Hanyang': 7, 'SKKU': 12, 'Sogang': 6, 'CAU': 21, 'KHU': 3, 'UoS': 2 }
};

// 추천 논문 (38편 + RISS 페이지로 안내할 5개 학교 추천)
// pdfUrl: 원본 메타데이터/원문 페이지 URL (사용자 학내 IP 또는 RISS 로그인 후 다운로드)
const RECOMMENDATIONS = [
  // === LLM 카테고리 ===
  { school: '서울대', schoolId: '03-snu', title: 'Future Policy Aware Preference Learning for Mathematical Reasoning', author: '오민제', year: 2026, category: ['llm', 'rl'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/233010', reason: 'RLHF + Math Reasoning. LLM-RL 결합 최신 연구', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Scaffolding Deliberation: Human-in-the-Loop Framework for LLM Reasoning', author: '손민규', year: 2026, category: ['llm'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/233465', reason: 'LLM 추론 향상의 구조화된 접근. Agent 트렌드 정면', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'SimuHome: Smart Home LLM Agents Benchmark', author: '서규현', year: 2026, category: ['llm'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/233492', reason: 'LLM Agent 벤치마크 — 실용 응용 + 평가 방법론', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Adaptive Language Models for Efficient NLP', author: 'Yeachan Kim', year: 2025, category: ['llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000305004', reason: 'LLM 효율화 — 본교 학술 기준', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Cost-Efficient Cascades for Black-Box LLMs', author: 'Woo-Chan Kim', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307917', reason: 'LLM 추론 비용 최적화. 산업 응용성', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Multi-stage Prompt Refinement for Mitigating Hallucinations', author: 'Jungwoo Shim', year: 2025, category: ['llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000290150', reason: 'Hallucination 완화 — 실용 LLM 안전성', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Noise-Robust Abstractive Compression in RAG', author: 'Singon Kim', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000308370', reason: 'RAG 시스템의 견고성 — 실무에 직결', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'A Gradient-Based Multi-Domain Knowledge Unlearning for LLMs', author: 'Kun-Woo Kim', year: 2025, category: ['llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000304767', reason: 'LLM 언러닝 — 프라이버시·안전성 새 트렌드', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: '대규모 언어모델 기반 멀티세션 대화시스템', author: '나요한', year: 2024, category: ['llm'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188376', reason: '채동규 그룹 — 학술 NLP/LLM', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: 'Methods to Enhance Data Labeling Efficiency Using LLMs', author: '김민우', year: 2024, category: ['llm'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188846', reason: 'LLM을 데이터 라벨링에 활용 — 데이터 중심 연구', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '국소적 시간 문맥을 활용한 RAG 검색 단위 증강', author: '김병정', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247057', reason: 'RAG 검색 단위 시간-컨텍스트 통합', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '단일 레이어 전이: 동결 LLM 레이어로 소형 LM 성능 향상', author: '김경현', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247390', reason: 'LLM 단일레이어 전이학습 — 효율성', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '적응형 프롬프트를 활용한 LLM 기반 게임 플레이어 지원', author: '송지성', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247195', reason: 'LLM 게임 에이전트 — Agent + 적응형 프롬프트', hasLocal: true },

  // === AI4Science 카테고리 ===
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'AI for Science: RL/Model-based Optimization for Discovery', author: 'Dong-Hee Shin', year: 2026, category: ['ai4sci', 'rl'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307102', reason: 'RL × AI4Science — 사용자 두 관심사 결합. 박사 수준', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Enhancing Materials Tokenization with Domain Knowledge', author: 'Yerim Oh', year: 2026, category: ['ai4sci', 'llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306661', reason: 'LLM × Materials Science. AI4Sci 진입점', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Materials-aware LM Data Selection', author: 'Sangyun Kim', year: 2026, category: ['ai4sci', 'llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306210', reason: 'Materials 도메인 LM 데이터 선별', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Scientific Factuality Data Aug for Materials Science', author: 'Suho Kim', year: 2025, category: ['ai4sci'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000303783', reason: '과학 사실성 데이터 증강', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Hybrid Global-Local Attention Transformers for Neural Operators', author: 'Min-Su Koh', year: 2025, category: ['ai4sci'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000305022', reason: 'Neural Operators — PDE/물리 시뮬레이션', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Weekast: Subseasonal-to-Seasonal Prediction with Physics-Informed AI', author: '김예림', year: 2026, category: ['ai4sci'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/234130', reason: '기상 예측 + Physics-Informed. AI4Sci 정점', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: 'Improving protein side-chain accuracy using torsion angle loss', author: '전성광', year: 2024, category: ['ai4sci'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/187434', reason: '단백질 비틀림각 예측 — 의료/생명', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: 'EEG 기반 신경퇴행성 질환 탐지 - 마스크드 오토인코더', author: '조해준', year: 2025, category: ['ai4sci'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000243624', reason: 'EEG + 신경퇴행성 질환 진단', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '확산 모델 기반 시계열 예측 및 이상탐지', author: '나다경', year: 2026, category: ['ai4sci'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000246241', reason: 'Diffusion 모델 시계열 응용', hasLocal: true },

  // === RL 카테고리 ===
  { school: '서울대', schoolId: '03-snu', title: 'Continuous GFlowNets as Maximum Entropy RL via SAC', author: '방신근', year: 2026, category: ['rl'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/232723', reason: 'GFlowNets — RL 이론 최첨단', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Follow-the-Perturbed-Leader for Decoupled Bandits', author: '김채원', year: 2026, category: ['rl'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/232993', reason: 'Bandit 알고리즘 이론 연구', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'RL from Implicit Neural Feedback for Robot Control', author: 'Suzie Kim', year: 2026, category: ['rl'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000308340', reason: 'RLHF × Robotics — 응용 RL', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: '심층 강화학습 기반 모바일 로봇 자율주행', author: '최승범', year: 2024, category: ['rl'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188856', reason: 'DRL × 모바일 로봇', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: 'Automated stock trading using transformer and RL', author: '이남영', year: 2023, category: ['rl'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/187245', reason: 'RL × 금융 — 도메인 응용', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '지능형 반사 표면 셀 프리 시스템의 DRL 에너지 효율 최대화', author: '송치현', year: 2025, category: ['rl'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000243114', reason: 'DRL × 통신 최적화 (셀-프리 네트워크)', hasLocal: true },

  // === Multimodal 카테고리 ===
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'Multimodal Foundation Model for Robot Behavior', author: 'Jeongeun Park', year: 2026, category: ['mm', 'rl'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000307206', reason: 'VLA (Vision-Language-Action) — 핫 트렌드', hasLocal: true },
  { school: '고려대 일반대', schoolId: '02-korea-general', title: 'MCoT-RE: Multi-Faceted CoT and Re-Ranking for Composed Image Retrieval', author: 'Jeong-Woo Park', year: 2026, category: ['mm', 'llm'], pdfUrl: 'https://dcollection.korea.ac.kr/srch/srchDetail/000000306485', reason: 'Multimodal Retrieval + CoT', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Semantic Anchoring for T2I Diffusion Personalization', author: '양서윤', year: 2026, category: ['mm', 'cv'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/233481', reason: 'Diffusion 개인화 — Personalization 트렌드', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Sinkhorn Graph Enhancement for Multimodal Recommendation', author: '김주영', year: 2026, category: ['mm'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/233497', reason: 'Multimodal × GNN × 추천', hasLocal: true },
  { school: '서울대', schoolId: '03-snu', title: 'Eyetoon: Webtoon Reader Engagement via Eye-Tracking + Multimodal AI', author: 'Guangjing Yan', year: 2026, category: ['mm'], pdfUrl: 'https://s-space.snu.ac.kr/handle/10371/232974', reason: '한국 웹툰 + 멀티모달 — 도메인 매력적', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: '자연어 명령 수행 시각-언어 모델 기반 로봇의 물체 파지', author: '윤동민', year: 2024, category: ['mm'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/193528', reason: 'VLM × Robotics — 윤동민 사례', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '멀티모달 LLM의 시각적 인식 성능 향상', author: '정우준', year: 2026, category: ['mm', 'llm'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000247257', reason: 'MLLM 시각 인식', hasLocal: true },
  { school: '중앙대', schoolId: '08-cau', title: '보조 헤드 기반 OOD 1인칭 멀티모달 지속학습', author: '임혜정', year: 2026, category: ['mm'], pdfUrl: 'https://dcollection.cau.ac.kr/srch/srchDetail/000000246733', reason: 'Egocentric Vision + 멀티모달 + OOD', hasLocal: true },

  // === 기타 ===
  { school: '한양대', schoolId: '05-hanyang', title: 'THOR: Self-Supervised Temporal Knowledge Graph Embedding', author: '이재현', year: 2023, category: ['other'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/179817', reason: 'KDD 2025 Best Paper Mention 라인 (김상욱 그룹)', hasLocal: true },
  { school: '한양대', schoolId: '05-hanyang', title: 'Improving Autotuner By Fixing Configurations Using Interpretable ML', author: '최유철', year: 2024, category: ['other'], pdfUrl: 'https://repository.hanyang.ac.kr/handle/20.500.11754/188869', reason: '서지원 그룹 — 시스템 효율화', hasLocal: true },

  // === RISS 인증 후 다운로드 가능 (메타데이터만) ===
  { school: '연세대', schoolId: '04-yonsei', title: 'Web Agents with World Models', author: 'Chae, Hyungjoo', year: 2025, category: ['llm'], pdfUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=d6f060e7c1c8b746ffe0bdc3ef48d419', reason: 'LLM Agent + World Model — 여진영 그룹', hasLocal: false },
  { school: '연세대', schoolId: '04-yonsei', title: 'Cactus: Psychological Counseling using CBT', author: 'Lee, Suyeon', year: 2026, category: ['llm'], pdfUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=e73993f9fe207bf8ffe0bdc3ef48d419', reason: 'LLM × 심리상담 (CBT) — 응용 도메인 매력적', hasLocal: false },
  { school: '연세대', schoolId: '04-yonsei', title: 'PlanQA: Plan-Execute-Reason for KGQA Using LLMs', author: 'Park, Jongwon', year: 2025, category: ['llm', 'other'], pdfUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=e8006ad8dd045152ffe0bdc3ef48d419', reason: 'KG QA + Plan-Execute-Reason', hasLocal: false },
  { school: '연세대', schoolId: '04-yonsei', title: 'Coffee: Code LLMs by Fixing Bugs with Feedback', author: 'Moon, Seungjun', year: 2025, category: ['llm'], pdfUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=c6315d317231f0c8ffe0bdc3ef48d419', reason: 'Code LLM + Feedback', hasLocal: false },
  { school: '연세대', schoolId: '04-yonsei', title: 'Domain-Guided Dense Captioning for Protein Function', author: '장민주', year: 2026, category: ['ai4sci', 'llm'], pdfUrl: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=786eec6fe1fbb1cfffe0bdc3ef48d419', reason: 'AI4Science × LLM — 단백질 기능 캡셔닝', hasLocal: false },
  { school: '서강대', schoolId: '07-sogang', title: '효율적 통합형 멀티에이전트 RAG 프레임워크', author: '김준호', year: 2026, category: ['llm'], pdfUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EB%A9%80%ED%8B%B0%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8+RAG', reason: 'Multi-Agent RAG 시스템', hasLocal: false },
  { school: '서강대', schoolId: '07-sogang', title: '과거 경험 검색을 통한 자기 개선 LLM 에이전트', author: '윤승현', year: 2025, category: ['llm'], pdfUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EC%9E%90%EA%B8%B0%EA%B0%9C%EC%84%A0+LLM', reason: 'Self-Improving Agent — 핫한 트렌드', hasLocal: false },
  { school: '서강대', schoolId: '07-sogang', title: 'Speculative RAG 효율 초안 생성', author: '안규원', year: 2025, category: ['llm'], pdfUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=Speculative+RAG', reason: 'Speculative RAG — 추론 가속', hasLocal: false },
  { school: '서강대', schoolId: '07-sogang', title: '초전도체 임계온도 예측 (Chemical Composition Embeddings)', author: '김송이', year: 2025, category: ['ai4sci'], pdfUrl: 'https://dcollection.sogang.ac.kr/dcollection/srch/srchSearch?query=%EC%B4%88%EC%A0%84%EB%8F%84%EC%B2%B4', reason: 'AI4Science — 재료 물성', hasLocal: false },
  { school: '경희대', schoolId: '09-khu', title: 'Bimanual Manipulation w/ LLM Planner + RL', author: '오지헌', year: 2026, category: ['llm', 'rl', 'mm'], pdfUrl: 'https://www.riss.kr/search/Search.do?queryText=%EC%9D%B4%EC%A4%91%ED%8C%94+%EC%9C%A1+LLM+RL&searchGubun=true&colName=bib_t', reason: '사용자 3중 관심사(LLM+RL+MM) 매칭. 박사 수준', hasLocal: false },
  { school: '경희대', schoolId: '09-khu', title: 'EEG Transformer Emotion Recognition', author: '김태성', year: 2024, category: ['ai4sci', 'mm'], pdfUrl: 'https://www.riss.kr/search/Search.do?queryText=EEG+Transformer+Emotion&searchGubun=true&colName=bib_t', reason: 'EEG 신호 + Transformer', hasLocal: false },
  { school: '시립대', schoolId: '10-uos', title: 'TutorAgent: BKTransformer + GraphRAG 교육 LLM', author: '손준호', year: 2026, category: ['llm'], pdfUrl: 'https://www.riss.kr/search/Search.do?queryText=TutorAgent+BKTransformer&searchGubun=true&colName=bib_t', reason: 'LLM × 교육 + Knowledge Tracing', hasLocal: false },
  { school: '시립대', schoolId: '10-uos', title: 'LLM 독성 예측 (Toxicity Prediction)', author: '고재현', year: 2026, category: ['ai4sci', 'llm'], pdfUrl: 'https://www.riss.kr/search/Search.do?queryText=LLM+%EB%8F%85%EC%84%B1+%EC%98%88%EC%B8%A1&searchGubun=true&colName=bib_t', reason: 'LLM × 화학 독성', hasLocal: false }
];

const CATEGORY_LABELS = {
  llm: 'LLM/NLP',
  ai4sci: 'AI4Science',
  rl: 'RL',
  mm: 'Multimodal',
  cv: 'Computer Vision',
  sec: 'AI Security',
  other: '기타'
};

const TOTAL_PAPERS = SCHOOLS.reduce((sum, s) => sum + s.count, 0);
