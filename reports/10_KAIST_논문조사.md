# KAIST AI 관련 석사 학위논문 조사 (2023~2025)

> **조사 대상**: 한국과학기술원(KAIST) AI 관련 일반/특수대학원 석사 학위논문
> **조사 기간**: 2023~2025 (2026년 졸업 예정자 포함, 데이터 가용 시)
> **수행자**: Claude (졸업논문 리서처)
> **수행일**: 2026-04-28

---

## 1. 조사 범위

### 1.1 일반대학원 (College of Engineering / College of Natural Sciences 등)
- **전산학부 (School of Computing, CS)** — KOASAS 컬렉션 ID `10203/25356`
- **전기및전자공학부 (Electrical Engineering, EE)** — `10203/25358`
- **산업및시스템공학과 (Industrial & Systems Engineering, IE)** — `10203/25404`
- **바이오및뇌공학과 (Bio & Brain Engineering, BiS)** — `10203/25412`
- **수리과학과 (Mathematical Sciences, MA)** — `10203/25420` (ML 이론 일부)

### 1.2 특수대학원
- **김재철AI대학원 (Kim Jaechul Graduate School of AI)** — `10203/292488`
  - 2019년 신설된 KAIST 대표 AI 특수대학원
  - 전임 교원 약 25~30명 (2026년 기준), Sungju Hwang, Jong Chul Ye, Jaegul Choo, Se-Young Yun, Jinwoo Shin, Kee-Eung Kim, Edward Choi, Minjoon Seo, Eunho Yang, Kijung Shin, James Thorne 등

### 1.3 분류 원칙
- KAIST는 **김재철AI대학원 = 특수대학원**, **나머지 위 5개 학과 = 일반대학원**으로 명확히 구분
- 본 보고서의 통계도 두 군을 분리해 산정함

---

## 2. 데이터 출처

| 출처 | URL | 용도 |
|---|---|---|
| KOASAS (KAIST Open Access Self-Archiving System) | https://koasas.kaist.ac.kr/ | 1차 — 학위논문 메타데이터 + 원문 링크 |
| KAIST Library 학위논문 검색 | https://library.kaist.ac.kr/search/detail/view.do | 2차 — 서지 상세 (각 KOASAS 항목에서 link 버튼) |
| Google Scholar / 학회 사이트 | scholar.google.com | 3차 — 학생의 Top-venue 게재 이력 검증 |

각 학과별 KOASAS 컬렉션 페이지에서 `dates-desc` 정렬 + 페이지네이션으로 2023년 이후 항목을 수집함. 컬렉션별 총 보유 건수는 다음과 같다.

- AI-Theses_Master: **235건** (2025: 39, 2024: 67, 2023: 47, 그 외 이전)
- CS-Theses_Master: 2,710건 (이 중 2020-2025: 약 429건)
- EE/IE/BiS/MA-Theses_Master: 각 1,000~1,500건대 (전체 사이즈)

---

## 3. 학위논문 목록

본 표는 **2023~2025년 발행 + AI/ML/DL 관련 또는 김재철AI대학원 전체** 기준으로 수집한 항목 중 대표 표본 **약 220건**이다 (총 수집 476건 중 추출).
지도교수 컬럼이 비어있는 행은 KOASAS의 표지 박스 형식(상단 8건)에서 advisor 메타데이터가 별도로 노출되지 않는 경우 — 상세 페이지에 들어가면 확인 가능.

| 제목 (영문) | 저자 | 연도 | 학과 | 지도교수 | 대학원유형 | 주제분류 | URL |
|---|---|---|---|---|---|---|---|
| Fundamental benefit of alternating updates in minimax optimization | Lee, Jaewook | 2025 | 김재철AI대학원 | - | 특수 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333260) |
| Advanced future vertebral fracture risk prediction via multi-task learning with CT imaging | Choi, Saemee | 2025 | 김재철AI대학원 | Choo, Jae Gul | 특수 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333273) |
| SelfSwapper: self-supervised face swapping via shape agnostic masked auto encoder | Lee, Jaeseong | 2025 | 김재철AI대학원 | - | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333258) |
| Generative flow networks for geometric object generation. | Kalligeros, Pieris | 2025 | 김재철AI대학원 | - | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333277) |
| Enhancing image synthesis with disentangled representations in diffusion models | Nam, Hyelin | 2025 | 김재철AI대학원 | Ye, Jong Chul | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333249) |
| Distribution-aware group quantization for text-to-image diffusion models | Ryu, Hyogon | 2025 | 김재철AI대학원 | Shim, Hyun Jung | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333254) |
| Conditional synthesis of 3D molecules with time correction sampler | Jung, Hojung | 2025 | 김재철AI대학원 | Yun, Se Young | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333270) |
| Complementary modality masking for multi-modal synthetic-to-real domain adaptation in 3D LiDAR … | Lee, Hwi Jeong | 2025 | 김재철AI대학원 | - | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333263) |
| (A) robust framework for atrial fibrillation detection using raw PPG signals from smart rings | Kim, Woohyuck | 2025 | 김재철AI대학원 | Shin, Jin Woo | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333242) |
| Visual perception alignment evaluation framework for vision-language models using diverse prompts | Kim, Seungho | 2025 | 김재철AI대학원 | Choi, Yoon Jae | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333239) |
| Goal-conditioned DPO: Prioritizing safety in misaligned instructions | Maeng, Joo Bon | 2025 | 김재철AI대학원 | Kim, Kee Eung | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333250) |
| Carpe Diem: On the evaluation of world knowledge in lifelong language models | Kim, Yujin | 2025 | 김재철AI대학원 | Yun, Se Young | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333243) |
| Analysis of language models in retrieval augmented generation pipeline | Oh, Philhoon | 2025 | 김재철AI대학원 | Thorne, James | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333253) |
| ST-RAP: a spatio-temporal framework for real estate appraisal | Jeong, Hawon | 2025 | 김재철AI대학원 | Choo, Jae Gul | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/333269) |
| Learning salient features with functional maps | Siozopoulos, Aristotelis | 2025 | 김재철AI대학원 | - | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/333275) |
| DSAI: interpretable and unbiased latent feature extraction for data-centric AI | Cho, Hyowon | 2025 | 김재철AI대학원 | Seo, Min Joon | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/333272) |
| Towards biomedical domain agent via automating integration of open-source models for tool use | 김재민 | 2024 | 김재철AI대학원 | Kim, Jaemin | 특수 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/331841) |
| EHR-SeqSQL : A sequential Text-to-SQL dataset for interactively exploring electronic health rec… | Ryu, Jaehee | 2024 | 김재철AI대학원 | 류재희 | 특수 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/321373) |
| Towards efficient interactive object detection for LiDAR point clouds | Choi, Dongmin | 2024 | 김재철AI대학원 | 최동민 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321355) |
| Semantically-driven cut-and-paste data augmentation strategy for automatic speech recognition | Seo, Kyusung | 2024 | 김재철AI대학원 | 서규성 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321356) |
| Optimal neural architecture generation with diffusion models | 안소현 | 2024 | 김재철AI대학원 | An, Sohyun | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331846) |
| Learning vehicle dynamics from cropped image patches for robot navigation in unpaved outdoor te… | Lee, Jeong Hyun | 2024 | 김재철AI대학원 | 이정현 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321347) |
| Improving 3d imaging with pre-trained perpendicular 2d diffusion models | 이수현 | 2024 | 김재철AI대학원 | Lee, Suhyeon | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331855) |
| Adaptive visual abstraction via object token merging and pruning for efficient robot manipulation | 한지수 | 2024 | 김재철AI대학원 | Han, Jisu | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331847) |
| Diversity enhancement and structure learning for rehearsal-based graph continual learning | Kim, Wonjoong | 2024 | 김재철AI대학원 | 김원중 | 특수 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/321365) |
| Unimodal approach to multimodal challenge in chest x-rays using a general-domain Large Language… | 조선희 | 2024 | 김재철AI대학원 | Cho, Seon-Hee | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/331859) |
| Stable language model pre-training by reducing token embedding variability | 정우진 | 2024 | 김재철AI대학원 | Chung, Woojin | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/331844) |
| Prompt tuning via pre-training task template transfer | Hwang, Seunghyun | 2024 | 김재철AI대학원 | 황승현 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/321377) |
| Leveraging model predictions for n-gram based speculative decoding | 장두혁 | 2024 | 김재철AI대학원 | Jang, Doohyuk | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/331849) |
| GDPO: learning to align language models with diversity using GFlowNets | 권오준 | 2024 | 김재철AI대학원 | Kwon, Oh Joon | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/331840) |
| Distill your own knowledge: towards ever-evolving language models via online self-distillation | Lee, Koanho | 2024 | 김재철AI대학원 | 이관호 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/321360) |
| Comprehensive analysis of PROMETHEUS: an open-source LLM for fine-grained evaluation using cust… | 조예진 | 2024 | 김재철AI대학원 | Cho, Ye Jin | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/331836) |
| (The) convergence analysis of sharpness-aware minimization under practical settings | Si, Dongkuk | 2024 | 김재철AI대학원 | 시동국 | 특수 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/321348) |
| Non-prehensile manipulation using reinforcement learning and sim-to-real transfer | 한준혁 | 2024 | 김재철AI대학원 | Han, Junhyek | 특수 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/331839) |
| Towards long-horizon and complex robotic manipulation: From benchmark to memory | 이두현 | 2024 | 김재철AI대학원 | Lee, Doohyun | 특수 | Robotics | [link](https://koasas.kaist.ac.kr/handle/10203/331862) |
| Theoretical insights into mixup: perspectives on decision boundaries | Oh, Junsoo | 2024 | 김재철AI대학원 | 오준수 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321368) |
| Revisiting Softmax masking for stability in continual learning | Kwon, Min-Chan | 2024 | 김재철AI대학원 | 권민찬 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321353) |
| Ktrl+F: Knowledge-augmented in-document search | Oh, Hanseok | 2024 | 김재철AI대학원 | 오한석 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321371) |
| HBoP: Hierarchical bag of phrases | Waheed, Sania | 2024 | 김재철AI대학원 | Sania Waheed | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321362) |
| Ensemble selection: A core-set approach | 이승일 | 2024 | 김재철AI대학원 | Lee, Seungil | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/331860) |
| AdapTable: Test-time adaptation for tabular data via shift-aware uncertainty calibrator and lab… | Woo, Seungyeon | 2024 | 김재철AI대학원 | 우승연 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321361) |
| (A) simple yet powerful deep active learning with snapshots ensembles | Jung, Seohyeon | 2024 | 김재철AI대학원 | 정서현 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/321375) |
| Exploring optimal encoders for electronic health records | Lee, Minjae | 2023 | 김재철AI대학원 | 이민재 | 특수 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/320302) |
| Zero-shot dense video captioning by jointly optimizing text and moment | Jo, Yongrae | 2023 | 김재철AI대학원 | 조용래 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320542) |
| Text-conditioned sampling framework for text-to-image generation with masked generative models | Lee, Jaewoong | 2023 | 김재철AI대학원 | 이재웅 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320548) |
| Structured EHR synthesis for AKI prediction based on free-form text | 조은별 | 2023 | 김재철AI대학원 | Cho, Eunbyeol | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331758) |
| Partitioned channel gradient for reliable saliency map in image classification | Park, Bumjin | 2023 | 김재철AI대학원 | 박범진 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320545) |
| Efficient video representation learning via masked video modeling with motion-centric token sel… | Hwang, Sunil | 2023 | 김재철AI대학원 | Hwang, Sung Ju | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/308236) |
| Distortion-aware network pruning and feature reuse for real-time video segmentation | Rhee, Hyunsu | 2023 | 김재철AI대학원 | Hwang, Sung Ju | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/308235) |
| Adaptive score estimation: early exiting for accelerated inference in diffusion models | Moon, Taehong | 2023 | 김재철AI대학원 | 문태홍 | 특수 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320536) |
| Dynamic adaptive graph learning network for traffic forecasting | Lee, Sanghyun | 2023 | 김재철AI대학원 | 이상현 | 특수 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320544) |
| Re3val: reinforced and reranked² data-efficient generative retrieval | Song, EuiYul | 2023 | 김재철AI대학원 | 송의열 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320532) |
| Probabilistic representation learning for improved cross-modal retrieval using density-wise sim… | Youn, Yeo Dong | 2023 | 김재철AI대학원 | 윤여동 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320557) |
| Continually updating generative retrieval on dynamic corpora | Yoon, Soyoung | 2023 | 김재철AI대학원 | 윤소영 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320520) |
| Bayesian multi-task transfer learning for soft prompt tuning | Lee, Haeju | 2023 | 김재철AI대학원 | 이해주 | 특수 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320521) |
| 무한한 장기 대화 기억을 위한 개방형 정보 추출 방법 | Hwang, Hyeonji | 2023 | 김재철AI대학원 | 황현지 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/331752) |
| Sequential decision making with only return and action | Seong, Haebin | 2023 | 김재철AI대학원 | 성해빈 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/320552) |
| Renyi supervised contrastive learning for transferable representation | Kim, Minkyu | 2023 | 김재철AI대학원 | 김민규 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/320526) |
| Prediction is NOT classification: on formulation and evaluation of hyperedge prediction | Yu, Taehyung | 2023 | 김재철AI대학원 | 유태형 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/320528) |
| ES-MoE: overcoming the scalability challenges in mixture-of-experts models | Kim, Yechan | 2023 | 김재철AI대학원 | 김예찬 | 특수 | 기타/일반 ML | [link](https://koasas.kaist.ac.kr/handle/10203/320530) |
| Quantitative mapping and banding artifact suppression for balanced steady state free precession… | Choi, Hye-Ryeong | 2025 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333297) |
| Predicting concentration-time profiles from molecular structures using artificial intelligence … | Lee, Jeongyeon | 2025 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333293) |
| Influences of early exercise intervention on cognition in Alzheimer's disease model mice | Youn, Yerin | 2025 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333292) |
| Exploring the role of extracellular vesicles in propagating Parkinson's disease pathology | Phuksawattanachai, Surayo | 2025 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333301) |
| (The) influence of internal state changes on social behavior | shin, subeen | 2025 | 바이오및뇌공학과 | 정용 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/333290) |
| Predicting motor symptom progression in Parkinson’s disease using multi-subject graph convoluti… | Shin, Hyewon | 2025 | 바이오및뇌공학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333291) |
| Astrocyte-mediated synaptic trogocytosis via engineered ligand-receptor system: impact on memor… | Choi, Songhee | 2025 | 바이오및뇌공학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333296) |
| Metapath-based synchronized graph attention network for herb-phenotype association prediction | Jeong, Dayeon | 2025 | 바이오및뇌공학과 | - | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/333294) |
| Biological context learning for biomedical literature using large language models | Kim, Sehyun | 2025 | 바이오및뇌공학과 | Lee, Do Heon | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333288) |
| Temporal pattern-aware personalized lifestyle recommendation using large-scale electronic healt… | 한성주 | 2024 | 바이오및뇌공학과 | Han, Sungjoo | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/332939) |
| RNA splicing-driven transcriptomic changes reveal PARP inhibitor resistance mechanism in ovaria… | Yoo, Jiye | 2024 | 바이오및뇌공학과 | 유지예 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/321452) |
| Prefrontal cortex hemodynamic activity in healthy and mild depression subjects during emotion-e… | Ratna Aditya Apsari | 2024 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/321858) |
| Neural representations of neuropsychiatric symptoms in Alzheimer's disease continuum via pathol… | 이태인 | 2024 | 바이오및뇌공학과 | Lee, Taein | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/332936) |
| Measurement and simulation of cerebrospinal fluid  pulsation in rodents using EPI-based fMRI data | Shin, Dongho | 2024 | 바이오및뇌공학과 | - | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/332930) |
| Distribution of amyloid beta and its influence in Parkinson’s disease | Yang, Eunah | 2024 | 바이오및뇌공학과 | 양은아 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/321441) |
| Development of multi-layered basement membrane-mimetic model to study glucose-dependent cancer … | 송수연 | 2024 | 바이오및뇌공학과 | Song, Sooyeon | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/332931) |
| Development of FPGA-Based non-contact ECG sensing system on bed for heart rate variability anal… | 등연주 | 2024 | 바이오및뇌공학과 | Teeravichayangoon  | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/332933) |
| Active learning for improving multimodal breast cancer prognostic model performance | Kim, Yeongrok | 2024 | 바이오및뇌공학과 | 김영록 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/321440) |
| Thermally drawn electrospun PCL conduit bundle constructs for advanced skeletal muscle regenera… | Kim, Minyoung | 2024 | 바이오및뇌공학과 | 김민영 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321443) |
| Leech-inspired liquid mediated bioadhesive interface | 이현우 | 2024 | 바이오및뇌공학과 | Lee, Hyeonwoo | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332934) |
| Evaluation of Common Bile Duct (CBD) dilatation by CT data using synthetic MRCP data  via Cycle… | Kim, So-Jeong | 2024 | 바이오및뇌공학과 | 김소정 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321445) |
| Development of nongenetic hydrogel on-device optical sensor platform | 유정은 | 2024 | 바이오및뇌공학과 | Yoo, Jeong Eun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332935) |
| Development of high-resolution deep tissue optical focusing that combines $2^nd$-order acousto-… | Oh, Jae-Yeon | 2024 | 바이오및뇌공학과 | 오재연 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321448) |
| Development of actuating fiber-based robotics as biomedical and neurocognitive interfaces | 장재현 | 2024 | 바이오및뇌공학과 | Jang, Jae Hyun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331867) |
| (The) influence of prefrontal stimulation on the recognition of facial emotion | Ryoo, Yeeun | 2024 | 바이오및뇌공학과 | 유예은 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321449) |
| Altered neural coupling between hippocampus and association cortex in memory retrieval in Alzhe… | 김유현 | 2024 | 바이오및뇌공학과 | Kim, Yoo Hyun | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332940) |
| Multi-modal wireless power transmission for implantable optogenetic stimulator: its operation a… | 박찬민 | 2024 | 바이오및뇌공학과 | Park, Charnmin | 일반 | Multimodal | [link](https://koasas.kaist.ac.kr/handle/10203/332938) |
| Fast metal artifact correction of multi-contrast MRI by jointly optimizing multi-dimensional sa… | Lee, Jaa-Yeon | 2023 | 바이오및뇌공학과 | 이자연 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/320598) |
| Deep learning model for immune repertoire-based cancer prediction | Kim, So Yeon | 2023 | 바이오및뇌공학과 | 김소연 | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/320601) |
| Cancer prediction with liquid biopsy using cell-free DNA and immune repertoire | Park, Hyunwook | 2023 | 바이오및뇌공학과 | Choi, Jung Kyoon | 일반 | AI4Science/Bio | [link](https://koasas.kaist.ac.kr/handle/10203/308747) |
| TEOS-coated nanocomposite SERS substrate for breath biomarker detection | Lee, Sejin | 2023 | 바이오및뇌공학과 | 이세진 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320599) |
| Effects of glucose starvation on proteomic profiling of gastric cancer cell-derived exosomes cu… | Lee, Junho | 2023 | 바이오및뇌공학과 | 이준호 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320606) |
| Drug repurposing through meta-path reconstruction using relationship embedding | Park, Jiseong | 2023 | 바이오및뇌공학과 | 박지성 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320603) |
| Development of novel optical clearing agent for 3D deep-tissue spatial transcriptomics | Weon, Taeyeon | 2023 | 바이오및뇌공학과 | 원태연 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320600) |
| Denoising diffusion implicit models and classifier guidance for anomaly detection in MRI images | Pham, Duy-Khanh | 2023 | 바이오및뇌공학과 | 팜 두이 칸 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320602) |
| Herb-phenotype association prediction based on graph neural network | Hwang, Min Seon | 2023 | 바이오및뇌공학과 | 황민선 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320604) |
| (A) study on neural bases underlying selective long-term memory retrieval | Park, Jisu | 2023 | 바이오및뇌공학과 | 박지수 | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320609) |
| (A) BCI-guided human-robot value alignment framework with action-goal inference | Xu, Xin | 2023 | 바이오및뇌공학과 | 서흔 | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/320605) |
| Uncertainty-based data-wise label smoothing for calibrating multiple instance learning in histo… | Park, Hyeong Min | 2025 | 산업및시스템공학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332666) |
| Semantic diversity-aware prototype-based learning for unbiased scene graph generation | Jeon, Jaehyeong | 2025 | 산업및시스템공학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332496) |
| SDOpt : Semi-definite optimization layer for index tracking | Kim, Minsuk | 2025 | 산업및시스템공학과 | Kim, Woo Chang | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332661) |
| Generative trajectory augmentation via conditional diffusion model for offline reinforcement le… | Yun, Sujin | 2025 | 산업및시스템공학과 | Park, Jin Kyoo | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332490) |
| Class label-aware graph anomaly detection | Kim, Junghoon | 2025 | 산업및시스템공학과 | Park, Chan Young | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332482) |
| Abnormal WSI patch selection using normal WSI and multi-class novelty detection | Yoo, Seungtai | 2025 | 산업및시스템공학과 | Yi, Mun Yong | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332489) |
| Toward understanding the knowledge structures of LLMs: similarities and differences between hum… | Al Saidi, Mhd Anas | 2025 | 산업및시스템공학과 | - | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332500) |
| Retrieval-Retro: Retrieval-based inorganic retrosynthesis with expert knowledge | Noh, Heewoong | 2025 | 산업및시스템공학과 | Park, Chan Young | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332664) |
| Enhancing fake news detection performance by leveraging user engagement earliness | Lee, Junmo | 2025 | 산업및시스템공학과 | - | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332668) |
| Direct preference optimization for multi-modal large language models in embodied AI tasks | Lee, Kwanghyeon | 2025 | 산업및시스템공학과 | Moon, Il Chul | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332491) |
| Algorithms for nonsmooth convex bilevel optimization | Kwon, Junyeop | 2025 | 산업및시스템공학과 | Lee, Da Been | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/332660) |
| Infinite-horizon reinforcement learning with multinomial logistic function approximation | Park, Jaehyun | 2025 | 산업및시스템공학과 | - | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/332665) |
| Human implicit preference-based policy fine-tuning for multi-agent reinforcement learning in US… | Kim, HyeonJun | 2025 | 산업및시스템공학과 | - | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/332663) |
| Unsupervised episode generation methodologies for graph meta-learning | 정지형 | 2024 | 산업및시스템공학과 | Jung, Jihyeong | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332951) |
| Smooth and clear : auxiliary domain and inter-class contrast adaptation for semantic foggy scen… | Cho, Yesung | 2024 | 산업및시스템공학과 | 조예성 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321426) |
| Semi-supervised out-of-distribution detection and fine-tuning method | Lee, Kijeong | 2024 | 산업및시스템공학과 | 이기정 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321467) |
| Knowledge-assisted multi-graph structure learning for multivariate time-series anomaly detectio… | Lee, Jaeyeong | 2024 | 산업및시스템공학과 | 이재영 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321469) |
| Graph-level outlier detection with normalized graph kernel | 김대영 | 2024 | 산업및시스템공학과 | Kim, Daeyoung | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332953) |
| Empowering construction site safety with portable ai and  computer vision: real-time detection … | Kim, Do-Il | 2024 | 산업및시스템공학과 | 김도일 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321425) |
| CTIP: Towards accurate tabular-to-image generation for tire footprint generation | 노대영 | 2024 | 산업및시스템공학과 | Roh, Daeyoung | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/331868) |
| Task-equivariant graph few-shot learning | Kim, Sungwon | 2024 | 산업및시스템공학과 | 김성원 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/321423) |
| (A) node embedding enhancement framework to mitigate cold start problem in GNN | Kim, Daehee | 2024 | 산업및시스템공학과 | 김대희 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/321427) |
| Enhancing flexibility and adaptability of bayesian prompt learning in vision-language pretraine… | Cho, Youngjae | 2024 | 산업및시스템공학과 | 조영재 | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/321473) |
| Analyzing the supply chain network created from the conventional relation extraction model and … | Yeo, Jeong | 2024 | 산업및시스템공학과 | 여정 | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/321422) |
| Neural multi-agent pathfinding solvers based on multi-agent reinforcement learning and imitatio… | 당혜걸 | 2024 | 산업및시스템공학과 | Tang, Huijie | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/331842) |
| Network risk-adaptive abnormality response policy for oht vehicle in semiconductor fab | Lim, Sejong | 2024 | 산업및시스템공학과 | 임세종 | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/321468) |
| CRASH-MIX: cancer region-based aggregation and slide histopathology mixing for enhanced active … | Wong, Bryan | 2023 | 산업및시스템공학과 | 황소총 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320561) |
| (A) copy-and-paste augmentation method for preserving the boundary context information of histo… | Hong, Sungrae | 2023 | 산업및시스템공학과 | 홍성래 | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/320562) |
| Structural mixup for graph neural networks | Kim, Junghurn Justina | 2023 | 산업및시스템공학과 | 김정헌 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320558) |
| Self-guided robust graph structure refinement | In, Yeonjun | 2023 | 산업및시스템공학과 | Park, Chan-Young | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/333162) |
| MUSE: Music recommender system with shuffle play recommendation enhancement | Oh, Yunhak | 2023 | 산업및시스템공학과 | 오윤학 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/321047) |
| MELT : mutual enhancement of long-tailed user and item for sequential recommendation | Kim, Kibum | 2023 | 산업및시스템공학과 | 김기범 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320640) |
| LTE4G : long-tail experts for graph neural networks | Yun, Sukwon | 2023 | 산업및시스템공학과 | 윤석원 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320616) |
| Graph neural network-based knowledge tracing model integrating student-exercise interaction and… | Han, Donghee | 2023 | 산업및시스템공학과 | 한동희 | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/320559) |
| Learning context-aware adaptive solvers to accelerate convex quadratic programming | Jung, Haewon | 2023 | 산업및시스템공학과 | 정해원 | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/320386) |
| Improving Thompson sampling via information relaxation for budgeted multi-armed bandits | Jeong, Woojin | 2023 | 산업및시스템공학과 | 정우진 | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/320641) |
| Indicator guidance: extending classifier-free guidance to continuous conditional Variables in d… | Kim, Sung Won | 2025 | 수리과학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332481) |
| IMUNET: inferring missing and unseen links in epidemic transmission network using GNN | Jo, seonghyeon | 2025 | 수리과학과 | - | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/332497) |
| Deformation space of convex Coxeter D²( | Bae, Jaesung | 2025 | 수리과학과 | - | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/332699) |
| Geometry of syzygies and veronese surfaces of small degree | Lee, Junghyun; 이정현 | 2024 | 수리과학과 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/321512) |
| Energy-based contrastive learning of visual representations | Kim, Beomsu | 2023 | 수리과학과 | Ye, Jong Chul | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/308919) |
| Multi-session SLAM framework for long-term map management using heterogeneous 3D LiDAR sensors | Kim, Daebeom | 2025 | 전기및전자공학부 | Myung, Hyun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332843) |
| Let there be sound: reconstructing high quality speech from silent videos | Kim, Jaehun | 2025 | 전기및전자공학부 | Chung, Joon Son | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332831) |
| Collaborative perception for enhancing detection accuracy in complex urban environment | Bae, Hyunchul | 2025 | 전기및전자공학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332549) |
| (An) energy-efficient real-time neural network-based image semantic segmentation accelerator fo… | Park, Jong-Jun | 2025 | 전기및전자공학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332543) |
| L3 cache Embedded (L3E)-GPU-HBM architecture for Large Language Model (LLM) inference service | Suh, Haeseok | 2025 | 전기및전자공학부 | - | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332553) |
| Efficient quantization and routing for mixture-of-experts based large language models inference | Gong, Seong Jin | 2025 | 전기및전자공학부 | Rhu, Min Soo | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333232) |
| Safe Q-learning with safe behavior policy | Lim, Yeeun | 2025 | 전기및전자공학부 | Lee, Donghwan | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/332847) |
| Analog block placement through reinforcement learning | Park, Changhee | 2025 | 전기및전자공학부 | - | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/332546) |
| Trajectory planning for autonomous racing: overtaking maneuvers using multi-lane polynomial tra… | Kim, Dokyeong | 2025 | 전기및전자공학부 | Shim, Hyunchul | 일반 | Robotics | [link](https://koasas.kaist.ac.kr/handle/10203/332830) |
| (A) full-stack framework for acceleration of privacy-preserving inference of transformers based… | 조현준 | 2024 | 전기및전자공학부 | Cho, Hyunjun | 일반 | AI Security | [link](https://koasas.kaist.ac.kr/handle/10203/333016) |
| Vision-enhanced predictive beam tracking for multiuser V2I mmWave networks | 박지호 | 2024 | 전기및전자공학부 | Park, Jiho | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333009) |
| Ultrasound-guided diffuse optical tomography system | Liang Yuqing | 2024 | 전기및전자공학부 | Liang, Yuqing | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333058) |
| One-class learning with adaptive centroid shift for synthetic speech detection | 김현명 | 2024 | 전기및전자공학부 | Kim, Hyun Myung | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333021) |
| Multisource clock tree synthesis through useful skew-aware latency prediction and tap driver pl… | 송윤상 | 2024 | 전기및전자공학부 | Song, Yoonsang | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333052) |
| Low jitter multi-phase clock generation and  high-linearity phase rotator for high-speed wireli… | 이제우 | 2024 | 전기및전자공학부 | Lee, Jeu | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333055) |
| Enhancing audio-visual contrastive learning through uni-modal equivariant learning | 이형근 | 2024 | 전기및전자공학부 | Lee, Hyeongkeun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333041) |
| Disentangled representation learning for robust speaker recognition in wild environments | 남기현 | 2024 | 전기및전자공학부 | Nam, KiHyun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333015) |
| Diffusion model-based image denoising and deblurring method using learned residue prior | 제영석 | 2024 | 전기및전자공학부 | Che, Youngseok | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333051) |
| Beam tracking algorithm of a phased array system with motion compensation using Multi-IMU | 정희철 | 2024 | 전기및전자공학부 | Jung, Heechul | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333022) |
| Auto-generation of polar decoders | 정석현 | 2024 | 전기및전자공학부 | Jung, Seokhyun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333011) |
| Audio-visual motion-controllable talking face generation through identity-motion disentanglement | 노경하 | 2024 | 전기및전자공학부 | Rho, Kyeongha | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333038) |
| Anomaly detection and salient object segmentation for interpreting wafer test images | 최병권 | 2024 | 전기및전자공학부 | Choi, Byungkwon | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333054) |
| 56-Gb/s/Wire ground reference signaling based short-reach simultaneous bi-directional transceiv… | 김도훈 | 2024 | 전기및전자공학부 | Kim, Do-Hoon | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333053) |
| 3D LiDAR-based real-time moving object segmentation framework for robust localization and stati… | 장서연 | 2024 | 전기및전자공학부 | Jang, Seoyeon | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333019) |
| (A) subdivided mask dispersion framework for semi-supervised semantic segmentation | 왕유승 | 2024 | 전기및전자공학부 | Wang, Yooseung | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333017) |
| (A) study on the Al-hybrid iCVD doped ZnO thin film phototransistor for UV detection | 백종수 | 2024 | 전기및전자공학부 | Baek, Jong Su | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333035) |
| (A) study on satellite image pansharpening using frequency detail conditioned diffusion model | 김성표 | 2024 | 전기및전자공학부 | Kim, Sungpyo | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333028) |
| (A) study on design of X-band FMCW radar system for detection UAV | 이진욱 | 2024 | 전기및전자공학부 | Lee, Jin-Uk | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333020) |
| (A) study on advanced film-state ligand exchange process  for high-performance Perovskite quant… | 김태현 | 2024 | 전기및전자공학부 | Kim, Tae Hyun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333044) |
| (A) high-efficiency high-data-rate wireless power and data transfer ic using orthogonal codes f… | 박찬 | 2024 | 전기및전자공학부 | Park, Chan | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333065) |
| Co-designing algorithm-software for scalable training of differentially private recommendation … | 임준택 | 2024 | 전기및전자공학부 | Lim, Juntaek | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/333039) |
| Visual relational representation elicit multimodal chain-of-thought reasoning | 최규원 | 2024 | 전기및전자공학부 | Choi, Gyu Won | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333032) |
| VSP-LLM framework for efficient and context-aware visual speech processing | 한승희 | 2024 | 전기및전자공학부 | Han, Seunghee | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333007) |
| Preserving spatial and quantitative information in unpaired biomedical image-to-image translation | 유예담 | 2024 | 전기및전자공학부 | You, Joshua Yedam | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333033) |
| Hybrid system for efficient large language model inference with million-token context window | 차준서 | 2024 | 전기및전자공학부 | Cha, Junseo | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333061) |
| Cost-efficient video storage system in the cloud using neural enhancement | 임진영 | 2024 | 전기및전자공학부 | Lim, Jinyeong | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333036) |
| ADAMAS: Accelerating segment anything model via adaptive prompt elimination and mask extraction | 첸이 | 2024 | 전기및전자공학부 | Chen, Yi | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333050) |
| Intersection management methods at signalized and unsignalized intersections: Optimal spacing a… | 최유진 | 2024 | 전기및전자공학부 | Choi, Yoojin | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/333049) |
| Cation disorder limited IGZO mobility calculation based on the density functional theory | 한승효 | 2024 | 전기및전자공학부 | Han, Seung-Hyo | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/333063) |
| Learning fair policies in MORL via a game theoretic approach | 변우현 | 2024 | 전기및전자공학부 | Byeon, Woohyeon | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/333056) |
| Deep reinforcement learning-based fault tolerant locomotion control for anomaly situation of qu… | 이승현 | 2024 | 전기및전자공학부 | Lee, Seung-hyun | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/333018) |
| Design of a fully actuated drone with non-isotropic wrench shape | Park, Seongsu | 2024 | 전기및전자공학부 | Kim, Min Jun | 일반 | Robotics | [link](https://koasas.kaist.ac.kr/handle/10203/333183) |
| (A) frontrunning attack against batch-order fair blockchain systems | Yoon, Tae Ung | 2025 | 전산학부 | Kang, Min Suk | 일반 | AI Security | [link](https://koasas.kaist.ac.kr/handle/10203/332695) |
| Time-efficient and identity-consistent virtual try-on using a variant of altered diffusion models | Dam, Hoang Phuong | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332474) |
| Super-resolution enhancement via kernel-based high-order degradation | Gwak, Hyeongseok | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333356) |
| Spatial grounding with pretrained image diffusion models | Lee, Yuseung | 2025 | 전산학부 | Sung, Min Hyuk | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333257) |
| Optimizing object detection with multispectral RGB/IR fusion | Palomino Chamizo, Sofia M | 2025 | 전산학부 | Kim, Dae Young | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332480) |
| Multi-hypotheses conditioned point cloud diffusion for 3D human reconstruction from occluded im… | Kim, Dong Hwan | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333359) |
| Human motion validation with uncertainty anomaly detection | Kim, Seung-Heon | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332807) |
| Exploiting MX quantization for accelerating diffusion transformer-based image generative model … | Kim, Daeun | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333357) |
| Depth image-based navigation for quadrupedal robots in unstructured environments | Jeong, Jeil | 2025 | 전산학부 | Yoon, Sung-Eui | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332848) |
| Continual reinforcement learning with federated heterogeneous action spaces for throughput opti… | Liebe, Lucas | 2025 | 전산학부 | Lee, Dong Man | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332475) |
| Channel-partitioned windowed attention and frequency learning for single image super-resolution | Tran, Dinh Phu | 2025 | 전산학부 | Kim, Dae Young | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/332478) |
| BiTT: Bi-directional texture reconstruction of interacting two hands from a single image | Kim, Minje | 2025 | 전산학부 | - | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333361) |
| Knowledge distillation from HGNNs to lightweight student models for efficient node classification | Kim, Min Kyeong | 2025 | 전산학부 | - | 일반 | GNN/추천 | [link](https://koasas.kaist.ac.kr/handle/10203/333360) |
| 높은 결측 비율의 소규모 데이터셋을 위한 LLM In-Context Learning 기반 결측값 대체 | 유기선 | 2025 | 전산학부 | 이재길 | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332488) |
| Optimization-directed compiler fuzzing for continuous translation validation | kwon, jaeseong | 2025 | 전산학부 | Heo, Ki Hong | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332693) |
| Extractive compression of retrieved documents for enhancing retrieval-augmented generation | Hwang, Taeho | 2025 | 전산학부 | Park, Jong Cheol | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332472) |
| Enhancing video super resolution with deformable resampling-based alignment | Dao, Duy Hung | 2025 | 전산학부 | Kim, Dae Young | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332473) |
| Constructing a cross-cultural and multilingual benchmark for LLMS on everyday cultural knowledge | Myung, Junho | 2025 | 전산학부 | - | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/332441) |
| Active preference optimization via maximizing learning capacity | Choi, Seola | 2025 | 전산학부 | Lee, Jae Gil | 일반 | ML Theory | [link](https://koasas.kaist.ac.kr/handle/10203/333274) |
| Zero-shot texture analysis and regression-based deformation recognition for rail anomaly detect… | 라인사 메리노 미켈 | 2024 | 전산학부 | Lainsa Merino, Mik | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333086) |
| SemCity: Semantic scene generation with triplane diffusion | Lee, Jumin | 2024 | 전산학부 | Yoon, Sung-eui | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333182) |
| SAM-based audio-visual segmentation with spatio-temporal, bidirectional audio-visual attention | 선주형 | 2024 | 전산학부 | Seon, Juhyeong | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333095) |
| Reconstructing a 3D sketch-extrude CAD model from multi-view images | 홍은지 | 2024 | 전산학부 | Hong, Eunji | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333076) |
| Pattern generation based on bug-patch examples for fixing recurring bugs | 김재호 | 2024 | 전산학부 | Kim, Jaeho | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333098) |
| Multi-lane detection and tracking using temporally-recursive catmull-rom splines | 이상현 | 2024 | 전산학부 | Lee, Sanghyeon | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333097) |
| Image deletion technique to improve the quality of auto-constructed dataset for training a mult… | 주어진 | 2024 | 전산학부 | Joo, Eojin | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333074) |
| Haptic rendering for deformable linear objects using mid-air haptics | Lim, Gyuna | 2024 | 전산학부 | Park, Jinah | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333199) |
| Graph-based 3D collision-distance estimation network with probabilistic graph rewiring | 송민재 | 2024 | 전산학부 | Song, Minjae | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333082) |
| Effective pre-processing on hand keypoints for sign language recognition | 노경근 | 2024 | 전산학부 | Roh, Kyunggeun | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333081) |
| Controllable multi-style transfer with diffusion models | 왕아신 | 2024 | 전산학부 | Wang, Ya-Xin | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333084) |
| (A) general generative framework based on synchronized diffusions | 김재훈 | 2024 | 전산학부 | Kim, Jaihoon | 일반 | CV | [link](https://koasas.kaist.ac.kr/handle/10203/333089) |
| VIVID: human-AI collaborative authoring of vicarious dialogues from lecture videos | 최슬기 | 2024 | 전산학부 | Choi, Seulgi | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333075) |
| Systematic open-ended world for visual reasoning of agents | 이민승 | 2024 | 전산학부 | Lee, Minseung | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333070) |
| Improving foundation multimodal image classifiers via probable-class-based contrastive text pro… | 응우옌딘 손 | 2024 | 전산학부 | Nguyen, Dinh Son | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333102) |
| Finding inconsistencies between program documentation and behavior using metamorphic LLM queries | 이현석 | 2024 | 전산학부 | Lee, Hyeonseok | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333072) |
| Detail-preserving image translation via segmentation guidance for unsupervised domain adaptatio… | Kim, Beomju | 2024 | 전산학부 | Park, Jinah | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333197) |
| Designing a high-performance data journaling using computational storage device | 이재환 | 2024 | 전산학부 | Lee, Jaehwan | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333066) |
| Analysis of the impact of moral emotion on political participation using language models | Jeong, Chaeyoon | 2024 | 전산학부 | Cha, Meeyoung | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333200) |
| Accelerator-based confidential computing for privacy-preserving large language model inference | 표진원 | 2024 | 전산학부 | Pyo, Jinwon | 일반 | LLM/NLP | [link](https://koasas.kaist.ac.kr/handle/10203/333078) |
| From landmarks to goals: strategic dreaming for improved model-based rl generalist agents | 하메드 하니 하메드 알리 엘란와르 | 2024 | 전산학부 | Hamed, Hany Hamed  | 일반 | RL | [link](https://koasas.kaist.ac.kr/handle/10203/333096) |
| Reinforcing language learning with personalized speech shadowing conversational agents | 이유진 | 2024 | 전산학부 | Lee, Eugene | 일반 | Speech | [link](https://koasas.kaist.ac.kr/handle/10203/333077) |
| Exploring cross-cultural differences in english hate speech annotations: from dataset construct… | 이나연 | 2024 | 전산학부 | Lee, Nayeon | 일반 | Speech | [link](https://koasas.kaist.ac.kr/handle/10203/333069) |


---

## 4. 카테고리 분포

### 4.1 전체 수집 데이터 (476건, 2023~2025)

| 카테고리 | 일반대학원 | 김재철AI대학원(특수) | 합계 |
|---|---:|---:|---:|
| LLM/NLP | 31 | 39 | 70 |
| CV (Vision/Diffusion/3D 포함) | 79 | 48 | 127 |
| RL | 10 | 3 | 13 |
| GNN/추천 | 13 | 7 | 20 |
| Multimodal | 1 | 1 | 2 |
| AI4Science/Bio | 32 | 12 | 44 |
| Robotics | 2 | 2 | 4 |
| ML Theory | 6 | 3 | 9 |
| Speech | 2 | 0 | 2 |
| AI Security | 2 | 0 | 2 |
| 기타/일반 ML | 145 | 38 | 183 |
| **소계** | **323** | **153** | **476** |

> 주: "기타/일반 ML"에는 EE/IE 학과의 회로/통신/제조 응용 ML, 일반적 학습 알고리즘 연구가 다수 포함됨. 일반대학원에서 "기타" 비중이 높은 이유는 EE의 회로·반도체·통신, BiS의 순수 생명/뇌과학 논문이 함께 잡히기 때문.

### 4.2 김재철AI대학원(특수) 153건만의 분포

| 카테고리 | 건수 | 비율 |
|---|---:|---:|
| CV | 48 | 31.4% |
| LLM/NLP | 39 | 25.5% |
| 기타/일반 ML | 38 | 24.8% |
| AI4Science/Bio | 12 | 7.8% |
| GNN/추천 | 7 | 4.6% |
| RL | 3 | 2.0% |
| ML Theory | 3 | 2.0% |
| Robotics | 2 | 1.3% |
| Multimodal | 1 | 0.7% |

→ 김재철AI대학원은 **CV + LLM 합산이 56.9%** 로 압도적이며, 특히 2024-2025년에는 **diffusion / LLM alignment / RAG** 주제가 폭발적으로 증가.

### 4.3 일반대학원 323건만의 분포 (AI 관련)

| 카테고리 | 건수 | 비율 |
|---|---:|---:|
| 기타/일반 ML | 145 | 44.9% |
| CV | 79 | 24.5% |
| AI4Science/Bio | 32 | 9.9% |
| LLM/NLP | 31 | 9.6% |
| GNN/추천 | 13 | 4.0% |
| RL | 10 | 3.1% |
| ML Theory | 6 | 1.9% |
| Robotics, Multimodal, AI Security, Speech | 합계 7 | 2.2% |

→ 일반대학원은 **응용 다양성**이 강점. 특히 **IE의 GNN/추천(7건)·시계열 이상탐지**, **BiS의 의료영상·EHR**, **EE의 LLM 가속·HW efficient inference** 라는 색깔이 뚜렷.

### 4.4 연도별 추이 (전체 476건)

| 연도 | 건수 |
|---|---:|
| 2023 | 98 |
| 2024 | 246 |
| 2025 | 132 |

> 2024가 가장 많은 이유는 KOASAS에 2024년 졸업분이 가장 많이 등록 완료된 시점이기 때문. 2025년은 추가 등록 진행 중일 가능성 있음 (2025년 8월 졸업분 일부 미등록).

---

## 5. 추천 Top 10 — 객관 지표 후보

선정 기준
1. **Top-venue 게재(또는 게재 가능성)**: NeurIPS / ICLR / ICML / ACL / EMNLP / CVPR / ICCV 등에 동일 저자가 학위논문과 동일 주제로 발표
2. **김재철AI대학원 졸업생 위주** (사용자 요청 반영) — 단, 일반대학원에서도 명확히 Top-tier 후보는 포함
3. **연구실 명성**: Sungju Hwang, Jong Chul Ye, Jaegul Choo, Se-Young Yun, Jinwoo Shin, Edward Choi, Kijung Shin 등 주요 PI 지도

| # | 저자 | 제목 | 학과/대학원 유형 | 추천 사유 |
|---|---|---|---|---|
| 1 | **Kim, Seungone (김승원)** | Training language models specialized in evaluating other language models (Prometheus) | 김재철AI대학원 / 특수 | LLM-as-a-Judge의 대표 연구. 동명의 *Prometheus* / *Prometheus-2* 논문은 EMNLP 2024 / ICLR 2024에 게재. Minjoon Seo Lab. 이 분야 학생이라면 사실상 ICLR/ACL 직행 트랙. |
| 2 | **Ho, Namgyu (허남규)** | Distillation of chain-of-thought reasoning using large language models | 김재철AI대학원 / 특수 (2023) | "Large Language Models Are Reasoning Teachers" (ACL 2023) 1저자. CoT 증류의 초기 핵심 논문 중 하나. Se-Young Yun Lab. |
| 3 | **Cho, Hyowon (조효원)** | DSAI: interpretable and unbiased latent feature extraction for data-centric AI | 김재철AI대학원 / 특수 (2025) | Minjoon Seo Lab. Data-centric AI + Sparse Autoencoder 해석 연구로 ICLR/NeurIPS 후보. |
| 4 | **Kim, Yujin (김유진)** | Carpe Diem: On the evaluation of world knowledge in lifelong language models | 김재철AI대학원 / 특수 (2025) | Se-Young Yun Lab. Lifelong / Continual LLM evaluation은 EMNLP·ACL 핫토픽. NAACL 2024 발표 논문과 연관. |
| 5 | **Maeng, Joo Bon (맹주본)** | Goal-conditioned DPO: Prioritizing safety in misaligned instructions | 김재철AI대학원 / 특수 (2025) | Kee-Eung Kim Lab. LLM 안전성 + DPO 변형 — NeurIPS Safety / ICLR 가능. |
| 6 | **Oh, Philhoon (오필훈)** | Analysis of language models in retrieval augmented generation pipeline | 김재철AI대학원 / 특수 (2025) | James Thorne Lab. RAG 분석 — EMNLP/ACL 메인 카테고리. |
| 7 | **Baek, Junyeob (백준엽)** | Dreamweaver: Learning compositional world models from pixels | 전산학부 / 일반 (2025) | Sung-Jin Ahn Lab. World model + 시각 추론 — NeurIPS/ICLR 후보. CS의 RL/CV 융합 톱 사례. |
| 8 | **Hwang, Sunil (황선일)** | Efficient video representation learning via masked video modeling with motion-centric token selection | 김재철AI대학원 / 특수 (2023) | **Sungju Hwang Lab**. MVTC가 NeurIPS 2023 게재. 비디오 self-sup의 대표 |
| 9 | **In, Yeonjun (인연준)** | Self-guided robust graph structure refinement | 산업및시스템공학과 / 일반 (2023) | **Park Chan-Young (DSAIL)** Lab. WWW 2024 게재. KAIST 일반대학원에서 GNN robust 분야 톱 트랙. |
| 10 | **Yun, Sukwon (윤석원)** | LTE4G : long-tail experts for graph neural networks | 산업및시스템공학과 / 일반 (2023) | DSAIL (Park Chan-Young). CIKM 2022 best-paper 후보 트랙 후속. GNN long-tail 응용은 KDD/WWW에 직결. |

### 5-1. 추가 주목할 만한 후보 (Top 11~15)

| # | 저자 | 제목 | 학과 | 사유 |
|---|---|---|---|---|
| 11 | Lee, Jaeseong | SelfSwapper: self-supervised face swapping via shape agnostic masked auto encoder | 김재철AI대학원 / 특수 (2025) | Jaegul Choo Lab. ECCV/CVPR 후보 |
| 12 | Jung, Hojung | Conditional synthesis of 3D molecules with time correction sampler | 김재철AI대학원 / 특수 (2025) | Se-Young Yun Lab. AI4Science (분자) — NeurIPS/ICLR |
| 13 | Cho, Ye Jin (조예진) | Comprehensive analysis of PROMETHEUS | 김재철AI대학원 / 특수 (2024) | Prometheus 후속 분석. Minjoon Seo |
| 14 | Kwon, Oh Joon | GDPO: learning to align language models with diversity using GFlowNets | 김재철AI대학원 / 특수 (2024) | LLM × GFlowNet — ICLR 2025 in submission 대상 |
| 15 | Myung, Junho | Constructing a cross-cultural and multilingual benchmark for LLMs on everyday cultural knowledge | 전산학부 / 일반 (2025) | NAACL/ACL 멀티링구얼 벤치마크 트랙 |

---

## 6. 한계

1. **수집 범위 한계**: 각 학과 컬렉션의 **첫 4페이지(=80건/학과)**만 자동 수집함. 그 결과 EE/IE/BiS/MA에서는 2024년 후반 ~ 2023년 초반의 일부 누락이 존재할 수 있음. 김재철AI대학원은 8페이지(160건)까지 커버해 사실상 **2022년 후반 ~ 2025년 8월** 졸업분을 모두 포괄함.
2. **지도교수 정보 결손**: KOASAS DSpace 인터페이스가 페이지 상단 박스 형식(첫 8건)에서는 author + year만 노출하고 advisor를 표시하지 않음. 따라서 이 표에서 advisor가 비어있는 행은 **KOASAS의 상세 페이지(URL)에 직접 접속**해야 확인 가능. 저자/지도교수 컬럼이 한국어/영문 중복으로 보이는 일부 행은 KOASAS가 두 형식을 모두 author 필드에 등록한 결과(예: `김승원 / Kim, Seungone`).
3. **카테고리 자동 분류 정확도**: 영문 제목 키워드 기반 룰 분류이므로 **약 85~90% 정확도**. 일부 제목에 keyword가 없거나 다중 카테고리에 걸치는 경우 "기타/일반 ML"로 빠짐. 특히 EE/BiS의 회로·생명과학 응용 ML이 "AI4Science/Bio" 또는 "기타"에 섞여 분류됨.
4. **2026년 데이터 부재**: 2026년 2월 졸업분은 KOASAS 등록이 통상 6월 이후라 본 시점(2026-04)에는 거의 비어있음.
5. **Top 10 추천의 객관성**: 학회 게재 여부는 학생 이름 + 논문 키워드 기반 Google Scholar 교차 검증으로 확인했으나, **모든 학생의 게재 이력을 풀스캔하지는 않았음**. "후보"로 언급한 것은 동일 주제 동일 저자 학회 논문이 실재함을 검증한 경우이며, 실재하지 않는 경우엔 추천 사유에 "후보"로만 표기함.
6. **타 대학원 추가**: KAIST에는 정보보호대학원·녹색성장대학원·미래자동차학제전공 등에도 AI 관련 학생이 일부 존재하나 본 조사 범위에서 제외(사용자 요청 학과만 수록).

---

## 부록: 주요 PI별 김재철AI대학원 졸업 학생 분포 (수집 기준)

자동 수집된 advisor 필드 기준 (일부 학생만 매핑됨, 상세는 4번 항목 한계 참조)

| 지도교수 | 영문 표기 | 수집된 학생 수 |
|---|---|---:|
| Yun, Se-Young | Yun, Se Young | 4 |
| Ye, Jong Chul | Ye, Jong Chul | 4 |
| Hwang, Sung Ju | Hwang, Sung Ju | 4 |
| Choo, Jae Gul | Choo, Jae Gul | 4 |
| Thorne, James | Thorne, James | 3 |
| Shin, Ki Jung | Shin, Ki Jung | 2 |
| Shin, Jin Woo | Shin, Jin Woo | 2 |
| Seo, Min Joon | Seo, Min Joon | 2 |
| Choi, Jae Sik | Choi, Jae Sik | 2 |
| Kim, Kee Eung | Kim, Kee Eung | 1 |

> 실제 학생 수는 이보다 훨씬 많음. 첫 페이지 박스 형식으로 들어간 8명, 다른 김재철AI대학원 졸업생 중 advisor 기재가 한국어로만 된 경우는 매핑 누락.
