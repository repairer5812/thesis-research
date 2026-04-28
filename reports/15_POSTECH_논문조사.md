# POSTECH(포항공과대학교) AI 관련 대학원 석사논문 조사 (2023~2026)

**조사일**: 2026-04-28
**조사자**: 고려대 SW·AI 융합대학원 석사과정 졸업논문 주제 선정 보조 리서치

---

## 1. 조사 범위

POSTECH은 연구중심대학으로 일반대학원 위주이며, 본 조사는 OASIS Repository의 학과별 `Theses_Master` 컬렉션 중 AI/ML 관련성이 있는 단위를 대상으로 2023~2026년(2026.2월 졸업 포함) 석사학위논문을 수집했다.

### 1-1. 일반대학원
| 단위 | 영문명 | 컬렉션 ID (OASIS) | 비고 |
|---|---|---|---|
| 인공지능대학원 | Graduate School of Artificial Intelligence | 2014.oak/110947 | 과기정통부 지정 AI대학원, 2020년 개원 |
| 컴퓨터공학과 | Department of Computer Science & Engineering | 2014.oak/426 | 시스템·HCI 등 비AI 일부 포함 |
| 전자전기공학과 | Department of Electrical Engineering | 2014.oak/421 | 통신·반도체 다수, 키워드 필터 적용 |
| 산업경영공학과 | Department of Industrial & Management Engineering | 2014.oak/416 | OR/제조·금융 중심, ML 응용 다수 |
| 수학과 | Department of Mathematics | 2014.oak/386 | ML 이론·PINN 등 일부 |

### 1-2. 특수대학원 (Special Graduate Schools)
POSTECH OASIS에는 메타 컬렉션 `Special Graduate School 특수대학원`(2014.oak/38897)이 존재하며, 산하 단위는 다음과 같다. 그러나 **2023~2026년 등록된 석사학위논문은 모두 0건**으로 확인되었다.

| 단위 | 영문명 | 컬렉션 ID | 마지막 등록 연도 | 2023~2026 등록 |
|---|---|---|---|---|
| 정보통신대학원 (GSIT) | Graduate School for Information Technology | 2014.oak/496 | 2010 | 0건 |
| 기술경영대학원과정 (TIM) | Technology Innovation & Management Graduate Program | 2014.oak/471 | 2014 | 0건 |
| 엔지니어링대학원 (GEM) | Graduate School of Engineering Mastership | 2014.oak/491 | 2020 | 0건 |
| 철강에너지대학원 (GIFT) | Graduate Institute of Ferrous Technology | 2014.oak/481 | (확인) | 0건 |
| 풍력특성화협동과정 (GWE) | Graduate School for Wind Energy | 2014.oak/476 | (확인) | 0건 |
| 해양대학원 (POSTI) | POSTECH Ocean Science and Technology | 2014.oak/486 | (확인) | 0건 |

POSTECH 특수대학원은 (a) 산학연계 전문교육 과정이고, (b) OASIS에 학위논문이 자체 보고되지 않거나 발표 시점이 시차가 큰 것으로 보인다. POSTECH은 KAIST·UNIST와 달리 「AI/SW 특수대학원」 별도 단위는 두지 않으며, AI 전문교육은 일반대학원 인공지능대학원이 전담한다.

### 1-3. 조사 대상에서 제외/주의
- 시스템생명공학부(I-BIO), 창의IT융합공학과 등 학제간 단위는 OASIS에 별도 컬렉션이 있으나 본 조사에선 AI 핵심 단위 5개에 집중했다.
- EE는 AI/ML 키워드 필터(deep/neural/learning/transformer/diffusion/GAN/vision/speech/RL/embedding/quantize/distill/federated 등)로 47% 만(147→46건) 채택했다. ECE 통신·소자/반도체 측정 논문 등은 제외.
- CSE의 비AI 시스템·블록체인·HCI·컴퓨터기하 일부도 카테고리상 ETC/SYS로 두되 포함했다(딥러닝 가속/PIM 등 AI 인접).
- Math는 ML/PDE-NN 관련만 카테고리에 들어가나, 11건 모두 표기.

## 2. 데이터 출처

- **주 출처: OASIS Repository@POSTECHLIBRARY** (DSpace 5.5) — https://oasis.postech.ac.kr
  - 인공지능대학원 석사: https://oasis.postech.ac.kr/handle/2014.oak/110947
  - 컴퓨터공학과 석사: https://oasis.postech.ac.kr/handle/2014.oak/426
  - 전자전기공학과 석사: https://oasis.postech.ac.kr/handle/2014.oak/421
  - 산업경영공학과 석사: https://oasis.postech.ac.kr/handle/2014.oak/416
  - 수학과 석사: https://oasis.postech.ac.kr/handle/2014.oak/386
  - 특수대학원(메타): https://oasis.postech.ac.kr/handle/2014.oak/38897
- **부가 출처**: POSTECH 도서관 (library.postech.ac.kr), 인공지능대학원 공식 사이트 (ai.postech.ac.kr) — 학과/교수 구성 검증용

수집 방법: 각 컬렉션을 `?type=dateissued&order=DESC&rpp=100`으로 페이징하여 발행연도 내림차순 수집. 2022년 이전 항목 도달 시 중단. 파싱 단위는 DSpace 브라우즈 페이지의 `class="a_l_box"` 단위(논문제목·연도·저자).

지도교수 정보는 OASIS 브라우즈 뷰에 표시되지 않으며, 개별 핸들 상세 페이지나 dCollection 원문에서만 확인 가능하므로 본 조사에선 수집하지 않았다.

## 3. 학위논문 목록

총 **267건** (2023~2026, AI 관련 필터링 후, 일반대학원만; 특수대학원 0건).

### 3-1. 학과별 건수
| 학과 | 2023 | 2024 | 2025 | 2026 | 합계 |
|---|---|---|---|---|---|
| AI대학원 | 20 | 28 | 46 | 19 | 113 |
| CSE | 9 | 11 | 20 | 8 | 48 |
| EE(AI 필터) | 10 | 13 | 16 | 7 | 46 |
| IME | 11 | 15 | 18 | 5 | 49 |
| Math | 1 | 4 | 5 | 1 | 11 |
| **합계** | **51** | **71** | **105** | **40** | **267** |

(주1) 2026년 7월까지 졸업 예정자 일부가 OASIS에 이미 등재됨(40건).
(주2) AI대학원 2025 데이터 중 임솔이 'Context-Phonetic Aware Named Entity Candidate Search...'와 CSE 2025 박건우 'Accelerating Regular Expression Matching with RISC-V Vector Extension'은 OASIS에 두 핸들로 중복 등록됨(원본/리포지터리 메타데이터 갱신 추정). 표에서는 별도 행으로 유지.

### 3-2. 전체 목록 (연도 DESC, 학과 ASC, 제목 ASC)

**주제분류 약어**: LLM=LLM/NLP, CV=Computer Vision/Graphics, RL=Reinforcement Learning, AI4S=AI4Science/Health/Bio, MM=Multimodal/VLM, GNN=Graph/GNN, REC=Recommendation, ROB=Robotics, SEC=AI Security/Privacy/Adversarial, THY=ML Theory/Optimization/Generalization, TS=Time Series, SYS=Systems/HW/Compression/Quantization, SPK=Speech/Audio, OR=Operations Research/Scheduling/Manufacturing, ETC=기타. 다중 분류 가능.

| # | 제목 | 저자 | 연도 | 학과 | 주제분류 | URL |
|---|---|---|---|---|---|---|
| 1 | A Study on Benchmarking LLM Scene Graph Reasoning and Designing Scene Graph Derived Rewards for Controllable Image Captioning | 김태영 | 2026 | AI대학원 | LLM/CV/GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/134252) |
| 2 | A Study on Enforcing Flat Minima to Improve Neural Network Sparsification | 이동엽 | 2026 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/134254) |
| 3 | AdaBoosting Text Prompts for Vision-Language Models | 진석희 | 2026 | AI대학원 | LLM/CV/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134235) |
| 4 | Automated Mixed-Precision Quantization for Large Language Models | 이상준 | 2026 | AI대학원 | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134261) |
| 5 | Beyond Deletion: Improving LLM Reasoning Efficiency via Information-Theoretic Compression and Pruning | 이대엽 | 2026 | AI대학원 | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134264) |
| 6 | Controllable Emotional Voice Conversion with Explicit Prosody Modeling | 정우열 | 2026 | AI대학원 | SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/134270) |
| 7 | DC-VSR: Spatially and Temporally Consistent Video Super-Resolution with Video Diffusion Prior | 한장혁 | 2026 | AI대학원 | CV/TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134271) |
| 8 | Do Reasoning Vision-Language Models Inversely Scale in Test-Time Compute? A Distractor-centric Empirical Analysis | 배지윤 | 2026 | AI대학원 | LLM/CV/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134289) |
| 9 | Enhancing Perceptual Accuracy of Lip Motion in Speech-Driven 3D Talking Head Generation | 이채연 | 2026 | AI대학원 | CV/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/134306) |
| 10 | Evaluating the Safety of Vision-Language Models against Meme Images | 이동건 | 2026 | AI대학원 | LLM/CV/MM/SEC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134308) |
| 11 | Generalizable Turn-Taking in Multi-party Spoken Dialogue with Dialogue History Memory | 이재환 | 2026 | AI대학원 | LLM/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/134318) |
| 12 | HiMix : Hierarchical Visual-Textual Mixing for Lesion Segmentation | 황수진 | 2026 | AI대학원 | CV/AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/134327) |
| 13 | Learning Robust Robotic Manipulation via Grasp Correction and Vision-based Mass Estimation | 이성재 | 2026 | AI대학원 | CV/ROB | [link](https://oasis.postech.ac.kr/handle/2014.oak/134342) |
| 14 | Leveraging What’s Overfixed: Post-Correction via LLM Grammatical Error Overcorrection | 박태희 | 2026 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134346) |
| 15 | OAIG: Object-Centric Visual Prompting for Vision–Language Models | 정재현 | 2026 | AI대학원 | LLM/CV/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134370) |
| 16 | Selective Replanning Strategies for Generative Behavior Cloning | 이치웅 | 2026 | AI대학원 | RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/134386) |
| 17 | Spectral Autoregressive Feature Synthesis for Conditional Brain Network Augmentation | 안하영 | 2026 | AI대학원 | AI4S/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/134391) |
| 18 | Topic Maintenance in Dialogue Systems Using Entropy-Scaled Steering Vectors | 서희재 | 2026 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134416) |
| 19 | Training-Free 2D Affordance Prediction: Inference-Time Refinement via VLM Feedback | 홍연주 | 2026 | AI대학원 | MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134420) |
| 20 | 2D Interpolation Based Enhancement for DASH Point Cloud Streaming System | 조하성 | 2026 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134228) |
| 21 | A Novel Sparse Matrix Format for SpMV on Processing-in-Memory DRAM | 이정호 | 2026 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134247) |
| 22 | Do language models really listen? Understanding feedback acceptance in multi-turn user-assistant conversations | 고예송 | 2026 | CSE | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134288) |
| 23 | GEN3R : Generative RGB-Only Pipeline for Indoor 3D Scene Completion | 박건수 | 2026 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134317) |
| 24 | Generating Gaze-Adaptive Semantic Cinematic Haptic Effects | 김현욱 | 2026 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134319) |
| 25 | Improving the Utilization of Large Language Models for Database Tuning | 석정음 | 2026 | CSE | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134334) |
| 26 | Rewriting Logic Semantics of WebAssembly Programs in Maude using WASM-DSL | 장혁순 | 2026 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134383) |
| 27 | UDirEar: Heading Direction Tracking with Commercial UWB Earbud | 김민석 | 2026 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134423) |
| 28 | A Comprehensive Study on Datacenter Total Cost of Ownership for Large Language Model Inference with FP8 Precision | 김지우 | 2026 | EE(AI) | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134231) |
| 29 | A Cost-Efficient PSCMS LDPC Decoder with Layer-Skip Scheduling | 김승준 | 2026 | EE(AI) | SYS/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/134232) |
| 30 | Attention-Aware Image Compression for Collaborative Inference | 이서빈 | 2026 | EE(AI) | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134260) |
| 31 | Fusing Action Semantics and Grounding Supervision for Egocentric Video Object Segmentation | 이지훈 | 2026 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134315) |
| 32 | HAGSizer: A Heterogeneous Graph-based Gate Sizer Integrating Graph Attention Network and Transformer | 안진모 | 2026 | EE(AI) | GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/134323) |
| 33 | Physically-Informed Atmospheric Complex Refractivity Modeling from Numerical Weather Prediction Data and Inhomogeneous Plane Wave-based Ray-tracing for LEO Satellite Link Analysis | 장보우 | 2026 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134375) |
| 34 | Ultra-Low-Power Real-Time On-Chip Thermal prediction via FEM-ML Co-Design and FPGA Deployment | 이준호 | 2026 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134426) |
| 35 | Diagrammatic Modeling of Task and Data Flows in a Manufacturing Workcell for Visual Control Programming | 김창현 | 2026 | IME | CV/AI4S/ROB/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/134286) |
| 36 | Effects of Reference Presentation Frequency on Magnitude Estimation of Tactile Roughness | 황희태 | 2026 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134295) |
| 37 | Effects of Response Formats on User Experience by Age Group under Large Language Model Environment | 김한결 | 2026 | IME | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/134296) |
| 38 | Guided Reinforcement Learning for Deviation-Aware Signal Routing in Semiconductor Packaging | 박준모 | 2026 | IME | RL/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/134322) |
| 39 | The Rich Roll-on Roll-off Vehicle Routing Problem and Its Solution Method | 한상일 | 2026 | IME | OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/134411) |
| 40 | Ulrich Bundles on Fano threefolds V22 | 최우혁 | 2026 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134424) |
| 41 | A domain-agnostic continual multi-task model for generalized glucose level and hypoglycemia event prediction | 황민주 | 2025 | AI대학원 | AI4S/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128864) |
| 42 | Advancing Legal Passage Retrieval and Multi-hop Question Answering via Generative Query Reformulation | 김대희 | 2025 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/128729) |
| 43 | An Analysis of Concept Bottleneck Models: Measuring, Understanding, and Mitigating the Impact of Noisy Annotations | 박성환 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128766) |
| 44 | Code Generation with Self-Correction | 조정훈 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128842) |
| 45 | Conservative Reinforcement Learning for Environments with Random Delays | 이종수 | 2025 | AI대학원 | RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/128809) |
| 46 | Context-Phonetic Aware Named Entity Candidate Search for LLM-based Speech Recognition Error Correction | 임솔이 | 2025 | AI대학원 | LLM/CV/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/127590) |
| 47 | Context-Phonetic Aware Named Entity Candidate Search for LLM-based Speech Recognition Error Correction | 임솔이 | 2025 | AI대학원 | LLM/CV/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/134529) |
| 48 | Development and Validation of AI-Powered Personalized Blood Glucose Management Solution | 정가원 | 2025 | AI대학원 | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/128828) |
| 49 | Dialogue Synthesis Framework for Depression-Diagnosis Emotional Support Conversation | 서승연 | 2025 | AI대학원 | LLM/AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/127516) |
| 50 | DiffGEBD: Diversity-aware Diffusion model for Generic Event Boundary Detection | 황재준 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127640) |
| 51 | Difficulty-Controllable Cloze Question Distractor Generation | 강석훈 | 2025 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/127427) |
| 52 | Efficient Method for Linguistic Representation in Multi-lingual and Low-Resource Text-to-Speech | 김영재 | 2025 | AI대학원 | LLM/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/127457) |
| 53 | Enhancing 3D Talking Head Generation with Lip Reading Expert | 한은기 | 2025 | AI대학원 | CV/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/128857) |
| 54 | Enhancing Computational Efficiency in Diffusion Models | 이중원 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127577) |
| 55 | Enhancing Ligand-Protein Validity and Binding Affinity in Structure-Based Drug Design with Multi-Reward Optimization | 조문선 | 2025 | AI대학원 | RL/AI4S/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127608) |
| 56 | Enhancing Linear Layer-based Time Series Forecasting Performance through Mitigation of Local Pattern Influence | 강병우 | 2025 | AI대학원 | TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127425) |
| 57 | FINEX Process: Coal Briquette Quality Prediction and Automatic Control using CNN-LSTM and YOLOv11 | 김인동 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128743) |
| 58 | Gaussian Plane-wave Neural Operator for Electron Density Estimation | 김성수 | 2025 | AI대학원 | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/128738) |
| 59 | Generalizing High-Fidelity Metric Depth Reconstruction via Geneartive Prior | 이효석 | 2025 | AI대학원 | CV/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128820) |
| 60 | Generating 3D Hair Strips from Partial Strands Using Diffusion Models | 이경민 | 2025 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/128800) |
| 61 | Graph Diffusion Model with Topological Awareness via Persistent Homology | 이동현 | 2025 | AI대학원 | GNN/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128804) |
| 62 | Guided Embedding Adjustment for Time Series Anomaly Detection with Noisy Data | 류지호 | 2025 | AI대학원 | TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127486) |
| 63 | Hybrid Neural Representations for Spherical Data with Learnable Positional Features | 김효민 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127477) |
| 64 | Image coding for machine with robustness under group shifts | 김민규 | 2025 | AI대학원 | CV/SEC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128733) |
| 65 | In Search of Effective Table Retrieval Methods for Large-Scale Databases | 김규민 | 2025 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/128727) |
| 66 | KD-GS: Knowledge Distillation for Lightweight 3D Gaussian Splatting | 이동건 | 2025 | AI대학원 | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127560) |
| 67 | Learning Class-Conditioned Invariance for Debiased Training | 박진수 | 2025 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128770) |
| 68 | Leveraging Code-Switched Data to Improve Multi-Vector Retrievers for Cross-Language Information Retrieval | 김종휘 | 2025 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/127465) |
| 69 | Mitigating Semantic Bias of Large Language Model in In-Context Learning | 장준원 | 2025 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/127595) |
| 70 | Mixed-precision Weight Quantization for Enhancing Efficiency and Acceleration of Large Language Models | 진준규 | 2025 | AI대학원 | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128848) |
| 71 | Multi-Objective Reinforcement Learning for Improving Neural Machine Translation | 권수진 | 2025 | AI대학원 | LLM/RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/127435) |
| 72 | Multi-modality Ultrasound Fusion Network for Breast Lesion Segmentation and Diagnosis | 조윤재 | 2025 | AI대학원 | CV/AI4S/MM/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/127611) |
| 73 | Multimodal Cognitive Support Conversation: Enhancing Cognitive Reframing Therapy via Multimodal Psychotherapy Framework | 김수빈 | 2025 | AI대학원 | LLM/AI4S/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/127453) |
| 74 | Multimodal Depression Counseling Dialogue System | 박연수 | 2025 | AI대학원 | LLM/AI4S/MM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127503) |
| 75 | One-Shot Voice Conversion by K-Means Quantization with Self-Supervised Speech Representations | 심영준 | 2025 | AI대학원 | SYS/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/127528) |
| 76 | Post-training Quantization for Selective State Space Models | 조영현 | 2025 | AI대학원 | TS/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127609) |
| 77 | Provably efficient combinatorial bandit algorithm for evolving systems | 송석빈 | 2025 | AI대학원 | RL/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127523) |
| 78 | Q-Align: Alleviating Attention Leakage in Zero-Shot Appearance Transfer via Query-Query Alignment | 김남우 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127441) |
| 79 | Revisiting Early Detection of Sexual Predators via Turn-level Optimization | 안진명 | 2025 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127532) |
| 80 | SASSHA: Sharpness-aware Adaptive Second-order Optimization with Stable Hessian Approximation | 신다훈 | 2025 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128786) |
| 81 | Semi-supervised Learning Framework for Paratope and Epitope Prediction | 손정우 | 2025 | AI대학원 | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/128783) |
| 82 | Star Partition of a Simple Polygon | 안효정 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127533) |
| 83 | Video Editing with ROI-based Neural Atlas | 이재경 | 2025 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/127569) |
| 84 | 라디언스 필드 복원을 위한 디블러링 네트워크 도입 | 최해윤 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127624) |
| 85 | 생성적 흐름 모델에서의 신용 할당 개선 연구 | 장효순 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128827) |
| 86 | 신경상미분방정식을사용한분리된표시 시간점프로세스 | 송유지 | 2025 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127525) |
| 87 | A Novel Structure-Preservation Loss for Diffusion-based Image Editing | 공민수 | 2025 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/128718) |
| 88 | Accelerating Regular Expression Matching with RISC-V Vector Extension | 박건우 | 2025 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127491) |
| 89 | Accelerating Regular Expression Matching with RISC-V Vector Extension | 박건우 | 2025 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134498) |
| 90 | Combinative Matching for Geometric Assembly | 이나혁 | 2025 | CSE | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127558) |
| 91 | Efficient DRAM-PIM Design for LLM Group-wise Quantization | 김벼리 | 2025 | CSE | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128734) |
| 92 | Electronically-controllable Polarized Illuminations for Mueller Matrix Imaging | 이희우 | 2025 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128822) |
| 93 | Evaluating LLMs as Macromanagement Agents via Auto Battler Games | 황주원 | 2025 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128866) |
| 94 | Exploiting Temporal Dynamics for Accurate Time Series Forecasting and Efficient Video Processing | 석민상 | 2025 | CSE | CV/TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128780) |
| 95 | High-Quality Geometry and Texture Editing of Neural Radiance Field | 김승진 | 2025 | CSE | CV/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127454) |
| 96 | Implementation and Design Space Exploration of FPGA-based General-purpose Near-data Processing Architecture | 배진훈 | 2025 | CSE | CV/RL/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134576) |
| 97 | Knowledge Distillation for Multi-step Retrieval Augmented Language Models | 이규민 | 2025 | CSE | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128801) |
| 98 | MindLink: Subject-agnostic Cross-Subject Brain Decoding Framework | 정성윤 | 2025 | CSE | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/128829) |
| 99 | Multi-objective Design Space Exploration to Optimize NoC Router Parameters in ReRAM-based ACiM Architectures | 김보석 | 2025 | CSE | RL/THY/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128735) |
| 100 | Multi-source Dataset Distillation for Domain Generalization | 윤영석 | 2025 | CSE | THY/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128797) |
| 101 | Physics-Guided Unified Framework for Multi-Material Loose Garment Animation | 손채원 | 2025 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128784) |
| 102 | Reducing over-squashing in graph neural networks with non-backtracking | 박성현 | 2025 | CSE | CV/GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/127497) |
| 103 | Revisiting Prompt Initialization: Generalizable Meta-Prompt Learning for Vision-Language Model | 김정진 | 2025 | CSE | LLM/CV/MM/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128745) |
| 104 | Succinct Data Structures for Baxter Permutation and Related Families | 김근호 | 2025 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127438) |
| 105 | Template Matching and Regression for Few-Shot Pattern Detection | 조은찬 | 2025 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128840) |
| 106 | Toward High-Performance Blockchain System by Blurring the Line between Ordering and Execution | 유동현 | 2025 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127540) |
| 107 | Artificial Structure Detection Based on MSER in SAR Images | 박종우 | 2025 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/127510) |
| 108 | DNN-based Hotspot Prediction of 2.5D Heterogeneous Package | 김제규 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128746) |
| 109 | Energy-efficient Transformer Training Hardware using Encoderwise Learning | 김준석 | 2025 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127466) |
| 110 | Hard-Decision SCL Polar Decoder with Weighted Pruning Operation for Storage Applications | 박다인 | 2025 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127492) |
| 111 | Importance-based Retransmission for Deep Joint Source Channel Coding | 홍은혜 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128862) |
| 112 | Improved Target Detection Performance in MIMO FMCW Radar System | 이정민 | 2025 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127571) |
| 113 | Multi-Corner Static Timing Analysis Prediction Using Graph Neural Networks | 허준석 | 2025 | EE(AI) | GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/127631) |
| 114 | Neural Normalized Min-Sum Decoding Algorithm with Ordered Statistics Post-Processing | 이희성 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127589) |
| 115 | Proactive Voltage Droop Mitigation Using Deep Reinforcement Learning with On Chip Neural Network and PC-aligned Power Cache in Capless-DLDO for RISC Processor | 이종민 | 2025 | EE(AI) | RL/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134613) |
| 116 | Prompt-based Depth Pruning of Large Language Models | 위주연 | 2025 | EE(AI) | LLM/CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/128792) |
| 117 | SPECTRE 모델링 및 레이아웃 생성기법을 활용한 FeFET 기반 메모리 Readout 회로의 효율적인 설계 방법 | 허예준 | 2025 | EE(AI) | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/127629) |
| 118 | Semantic Communications via Patch Selection for Collaborative Inference | 권나영 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128721) |
| 119 | Transformer-Aided Collaborative Inference with Attention-Aware Patch Selection and Entropy-Aware Image Transmission | 임지웅 | 2025 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/128823) |
| 120 | Uncertainty-Aware Model-Based Policy Optimization via Loss Weighting | 정지석 | 2025 | EE(AI) | RL/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128833) |
| 121 | Virtual Reality-Based Educational Tool for Exploring Artificial Neural Network | 이승헌 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127563) |
| 122 | 하이브리드 에너지 저장 시스템을 위한 공격 복원력 모델 예측 제어 | 장유석 | 2025 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127594) |
| 123 | A Method for Screening Suspicious Chips for Latent Defect Testing Utilizing Both Good and Defective Adjacent Chips | 박예원 | 2025 | IME | OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/127506) |
| 124 | Development of a Cycle Time Accumulation Method for Wafer Yield Prediction Using Tree Model-Based Feature Importance | 장찬영 | 2025 | IME | SYS/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/127596) |
| 125 | Development of a Usability Testing System Based on Extended Reality for Ergonomic Product Design | 박종배 | 2025 | IME | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127509) |
| 126 | Efficient Nurse Rostering via Feasibility Restoration and Lexicographical Optimization | 김준 | 2025 | IME | THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/128748) |
| 127 | Evaluation Metric for Image Generation Models via Sliced Wasserstein Distance | 양재승 | 2025 | IME | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/127535) |
| 128 | Insertion-based Repair Operator using Reinforcement Learning for Capacitated Vehicle Routing Problem | 이범희 | 2025 | IME | RL/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/127561) |
| 129 | Multi-Stage Optimization and Automated Scheduling for T-Beam Welding in Shipbuilding | 강연호 | 2025 | IME | THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/128714) |
| 130 | Optimal Bidding Strategies for Virtual Power Plants in the Jeju Electricity Market with Negative Prices | 이종혁 | 2025 | IME | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128810) |
| 131 | Real-Time Personalized Fashion Recommendations with Contextual Bandits and Enhanced Context Representations | 고혜영 | 2025 | IME | RL/REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127432) |
| 132 | Semantic Conditioning for Ill-Posed Color Recipe Generation with Diffusion Models | 조윤재 | 2025 | IME | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/128839) |
| 133 | Semiconductor Manufacturing Process Analysis and Visualization: Focusing on Process Attributes with Critical Effect on Yield | 도경근 | 2025 | IME | CV/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/128761) |
| 134 | Systemic Cyber Risks and Insurance Regulatory Capital | 배기웅 | 2025 | IME | SEC/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/128777) |
| 135 | Time series dataset representation for foundation model by using graph | 박주호 | 2025 | IME | GNN/TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/127511) |
| 136 | Traffic Signal Optimzation Based on Traffic Volume Prediction Models Using Autonomous Vehicle Data: A Simulation-Based Evaluation | 이원재 | 2025 | IME | THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/128807) |
| 137 | Vision-based Workpiece Tracking System for Extreme Temperature Manufacturing: A Process-aware Approach in Special Steel Industry | 박태주 | 2025 | IME | CV/ROB/SYS/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/127514) |
| 138 | 동적 코퓰라 기반 꼬리 의존성을 고려한 계층적 리스크 패리티 모형을 활용한 포트폴리오 선택 방법 연구 | 김태겸 | 2025 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128753) |
| 139 | 딥러닝 기반 제주 전력시장의 출력제어량 예측 모델 | 김상원 | 2025 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128736) |
| 140 | 시계열 파운데이션 모델을 위한 패치 기반 메모리 게이트 모델 | 윤사무엘 | 2025 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128795) |
| 141 | Abrupt change detection of dynamic brain connectivity using Lomax distribution | 김정운 | 2025 | Math | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/127461) |
| 142 | Counting Integral Matrices with a fixed Characteristic Polynomial | 전성수 | 2025 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/127598) |
| 143 | HiFAR: High-Frequency-Aware Regularization for Domain Generalization in Convolutional Neural Networks | 이지호 | 2025 | Math | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/128814) |
| 144 | On the Neural Network approach to the Kinetic Model for the Semiconductor Thin Film Deposition | 선봉석 | 2025 | Math | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/127520) |
| 145 | Semi-Supervised Mutual Learning for Operators (SSMO) | 박근서 | 2025 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/128765) |
| 146 | A Two-Stage Approach for Fault Detection and Diagnosis Based on Prototype Learning | 이일규 | 2024 | AI대학원 | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/134516) |
| 147 | Activity guided industrial anomalous sound detection combined with source separation | 이윤주 | 2024 | AI대학원 | SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/124056) |
| 148 | Bridging Sub-Tasks to Long-Horizon Task in Hierarchical Goal-Based Reinforcement Learning | 이강복 | 2024 | AI대학원 | RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/123372) |
| 149 | CLIPtone: Unsupervised Learning for Text-based Image Tone Adjustment | 이형민 | 2024 | AI대학원 | LLM/CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/124063) |
| 150 | Classification Matters: Improving Video Action Detection with Class-specific Attention | 이진성 | 2024 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123402) |
| 151 | Collaborative Knowledge Distillation for Continual Learning in Recommender System | 이규석 | 2024 | AI대학원 | REC/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123374) |
| 152 | Controlling Diversity at Inference | 한광석 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124095) |
| 153 | DiffGEBD : Denoising Diffusion for Generic Event Boundary Detection | 황재준 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124105) |
| 154 | Enhancing Uniformity Loss via Popularity Weighting | 박진혁 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123332) |
| 155 | Explicitly Relevant Example-based Grammatical Feedback Generation for Language Learners | 김훈래 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123310) |
| 156 | Exploring Public Data Vulnerabilities in Semi-Supervised Learning Models through Gray-box Adversarial Attack | 조준형 | 2024 | AI대학원 | SEC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134561) |
| 157 | Extreme Point Supervised Instance Segmentation | 이현준 | 2024 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134562) |
| 158 | Fast Performance Prediction and Expansion of 3D Parallelism for Distributed DNN Training | 윤유경 | 2024 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123368) |
| 159 | Gene-to-Image: Decoding Brain Images from Genetics via Latent Diffusion Models | 전수연 | 2024 | AI대학원 | CV/AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/124071) |
| 160 | Graph Implicit Neural Representations Using Spatial Graph Embeddings | 박진호 | 2024 | AI대학원 | GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/123333) |
| 161 | HECATE: Hierarchicy-Efficient Copy Attention using T5 Encoder | 정찬영 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123430) |
| 162 | High-Level Semantic-Aware Visual Reinforcement Learning through Cluster Centroids Contrastive Learning | 문효식 | 2024 | AI대학원 | CV/RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/134572) |
| 163 | Inductive Dialogue System for Multi-Aspect Depression Severity Assessment | 이채빈 | 2024 | AI대학원 | LLM/AI4S/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134579) |
| 164 | Leveraging Stereo Prior for Generalizable Novel-View Synthesis | 이해찬 | 2024 | AI대학원 | CV/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/123405) |
| 165 | Multiview Transformer for Multiway Point Cloud Registration | 유동민 | 2024 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123362) |
| 166 | Neural Spectro-polarimetric Fields | 김영찬 | 2024 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/123291) |
| 167 | Next Basket Recommendation with Hypergraph Neural Network | 정은아 | 2024 | AI대학원 | GNN/REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124078) |
| 168 | Optimizing Convolution Neural Network Embedding Space: Utilizing Statistical Loss Function | 한유빈 | 2024 | AI대학원 | THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/124102) |
| 169 | Overcoming Challenges in Applying Reinforcement Learning to Real Physical System | 김장원 | 2024 | AI대학원 | RL/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/134609) |
| 170 | Real-Time Classification of Sinter Flame Layer Using Computer Vision and CNN | 김영현 | 2024 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123292) |
| 171 | Safe Molecular Graph Augmentation via SafeSmooth and SafeEmbed | 고해지 | 2024 | AI대학원 | AI4S/GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/123271) |
| 172 | Video Summarization with Large Language Models | 이민정 | 2024 | AI대학원 | LLM/CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/124048) |
| 173 | 다양한 극한 환경에서 강인한 의미론적 분할을 위한 소수의 추가 레이어에 관한 연구 | 김정우 | 2024 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123990) |
| 174 | A Fast, Detailed Simulation Methodology for Designing AI Accelerators | 양원혁 | 2024 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/124033) |
| 175 | Adaptive Sample Selection Strategy for Training Object Trackers | 이승호 | 2024 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123389) |
| 176 | Address Mapping Compression of NAND Flash-based Storage Devices Based on General Lossless Compression Algorithms | 김태훈 | 2024 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123304) |
| 177 | Composition-aware Video Cropping Using Multi-Camera | 이명희 | 2024 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/134526) |
| 178 | Disentangling Image Features using Laplacian Pyramid in Hierarchical Vector Quantized-Variational Autoencoder Engineering | 김현성 | 2024 | CSE | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123305) |
| 179 | Extending CLIP’s Image-Text Alignment to Referring Image Segmentation | 김서연 | 2024 | CSE | LLM/CV/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/123981) |
| 180 | Improving Robustness and Accuracy in Classification Models through Retrospective Online Adversarial Distillation | 김중수 | 2024 | CSE | SEC/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123299) |
| 181 | Learning Visual Correspondence | 민주홍 | 2024 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123317) |
| 182 | Parameterized Algorithms for Computing r-Scattered Sets and r-Dominating Sets on Unit Disk Graphs | 신지훈 | 2024 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123351) |
| 183 | Texel Discovery for Repetitive Pattern Detection | 최윤선 | 2024 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124090) |
| 184 | Topology-Aware Service Function Chain Scheduling using DRL | 정의동 | 2024 | CSE | THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/124079) |
| 185 | A Bidirectional Ka-band Transceiver Front-End with Tunable Transformer-based T/R switch | 김홍주 | 2024 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134497) |
| 186 | An I/Q Imbalance Detection and Calibration Scheme for mm-Wave Direct-Conversion Transmitter | 김성범 | 2024 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123289) |
| 187 | Applications of Weights in Deep Learning-Based LDPC Decoders | 권용민 | 2024 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123969) |
| 188 | Cross-Modality Knowledge Distillation and Ensemble Fusion in Foggy Weather | 이동건 | 2024 | EE(AI) | MM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123377) |
| 189 | Deep learning-based Ultra-Wideband indoor positioning for integration of real and virtual spaces | 김태윤 | 2024 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123303) |
| 190 | Efficient Architectures for Voice Activity Detection and Keyword Spotting on Mobile Devices | 채화병 | 2024 | EE(AI) | SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/123438) |
| 191 | In Search of a Data Transformation That Accelerates Neural Field Training | 서준원 | 2024 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/123343) |
| 192 | Neural Image Compression with Text-guided Encoding for both Pixel-level and Perceptual Fidelity | 이하경 | 2024 | EE(AI) | LLM/CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/124062) |
| 193 | Privacy-aware Differentiable Architecture Search for ML-Based ECG Classification | 박은빈 | 2024 | EE(AI) | AI4S/SEC | [link](https://oasis.postech.ac.kr/handle/2014.oak/134612) |
| 194 | Research on Maritime Target Radar Detection Network | 박성렬 | 2024 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124011) |
| 195 | The Role of Masking for Efficient Supervised Knowledge Distillation of Vision Transformers | 손승우 | 2024 | EE(AI) | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/124022) |
| 196 | 그룹화된 토큰 제거방식을 가지는 Vision Transformer | 이승주 | 2024 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/123387) |
| 197 | 혼합 길이 벡터 프루닝을 이용한 희소성 인식 Transformer 가속기 | 류은지 | 2024 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123313) |
| 198 | A Consensus-Bottleneck Asset Pricing Model | 김창은 | 2024 | IME | OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/123995) |
| 199 | A Quantization Error Compensator for Fine Tuning LLM | 명우성 | 2024 | IME | LLM/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/124008) |
| 200 | Active transmission time analysis of a sensor in a mobile wireless sensor network | 손민규 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124021) |
| 201 | Auto-generation of Urban Traffic Digital Twins through Lane Connection and Traffic Light Mapping | 고민섭 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123966) |
| 202 | Customer Journey Prediction with Context-based Penalty under Imbalanced and Unlabeled Data | 박은비 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123327) |
| 203 | Democracy Orientation of News Recommender Systems: A Case Study in U.S. News Platform | 김지은 | 2024 | IME | REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123994) |
| 204 | Group Fair Guidance: Mitigating the Bias Amplification Phenomenon in Diffusion Model | 김명수 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123978) |
| 205 | Markov Chain Monte Carlo-based Manufacturing Process Control Algorithm: An Application to Steel Plate Production | 김경민 | 2024 | IME | OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/123278) |
| 206 | Optimization of berth allocation with learning working practices | 이동현 | 2024 | IME | LLM/THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/123379) |
| 207 | Personalized Outfit Recommendation using Style Vector Extraction | 김정현 | 2024 | IME | REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123991) |
| 208 | Rapid Training Strategies for Fault Detection in Similar Electromechanical Systems | 이기홍 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123375) |
| 209 | Rider Scheduling in Last-Mile Food Delivery: Incorporating the Fluctuating Demand and Show-Up Rate Dynamics | 문유인 | 2024 | IME | TS/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/123316) |
| 210 | Robust Portfolio Optimization using Sentiment-based Uncertainty Sets | Nguyen,&#x20;Phuc&#x20;Tran&#x20;Hong | 2024 | IME | LLM/THY/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/123260) |
| 211 | User Experience with Conversational Agents that Understand Conversation Contexts | 정범영 | 2024 | IME | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/123425) |
| 212 | 제강-연주 공정 스케줄링을 위한 제약 프로그래밍 기반 반복 그리디 알고리즘 | 김동윤 | 2024 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123977) |
| 213 | A convolution estimate in Lorentz space for some surfaces of revolution | 손형진 | 2024 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124025) |
| 214 | Diffusion model for unknown Pinax generation of Arca Musarithmica | 박정수 | 2024 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/124014) |
| 215 | On the denseness of norm attaining operators | 이정민 | 2024 | Math | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/123398) |
| 216 | ViT-Fourier Layer DeepONet: Effective Thermal Prediction Using Enhanced Deep Operator Networks with Fourier Layers and Vision Transformers | 전예린 | 2024 | Math | CV/AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/124072) |
| 217 | Auto Scaling of Service Function Chain based on the predicted network traffic using Temporal Fusion Transformer | 최민지 | 2023 | AI대학원 | TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118492) |
| 218 | Binary Radiance Fields for Storage-Efficient Scene Representation | 신승주 | 2023 | AI대학원 | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118449) |
| 219 | Blendshape-based 3D Lip Animation from Speech with Generative Adversarial Networks | 김영인 | 2023 | AI대학원 | CV/SEC/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/118249) |
| 220 | Elastic Geometric Shape Matching Algorithms for Neighborhood Trees and Cycles under Translations | 박지우 | 2023 | AI대학원 | LLM/THY | [link](https://oasis.postech.ac.kr/handle/2014.oak/118288) |
| 221 | Enhancing the Error Endurance of a Neural Network for Efficient Computation | 박세인 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118280) |
| 222 | Incremental Dialogue Classification with Early Risk Detection | 백성빈 | 2023 | AI대학원 | LLM | [link](https://oasis.postech.ac.kr/handle/2014.oak/118296) |
| 223 | Instance-Aware Image Completion | 조진오 | 2023 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118360) |
| 224 | Learning to Register Unbalanced Point Pairs | 이강희 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118321) |
| 225 | Motion estimation and Keypoint extraction using inter-frame information from monocular video | 금형철 | 2023 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118228) |
| 226 | Object Discovery via Contrastive Learning for Object Detection under Image-Level Information | 서진환 | 2023 | AI대학원 | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118298) |
| 227 | RESToring Clarity: Unpaired Retina Image Enhancement using Scattering Transform | 오지은 | 2023 | AI대학원 | CV/AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/118456) |
| 228 | Reinforcement Learning Framework for Extractive Summarization of Long Document | 이준영 | 2023 | AI대학원 | LLM/RL | [link](https://oasis.postech.ac.kr/handle/2014.oak/118335) |
| 229 | Substructure-Atom Cross Attention for Molecular Representation Learning | 김지예 | 2023 | AI대학원 | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/118261) |
| 230 | Test Time Embedding Normalization for Popularity Bias Mitigation | 김다인 | 2023 | AI대학원 | REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118407) |
| 231 | Training Masking Network to Different Domains for Bloom Number Identification | 정원석 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118355) |
| 232 | Unsupervised Joint Retrieval Augmentation of Knowledge Graph and Textual Passage for Non-goal-oriented Dialogue Response Generation | 김병주 | 2023 | AI대학원 | LLM/GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/118238) |
| 233 | 딥러닝 기반의 컨베이어 벨트 수명 예측 모델 개발 | 김재우 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118255) |
| 234 | 에지 디바이스에서 실시간 고장 진단을 위한 가벼운 합성곱 신경망 모델 | 박도겸 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118277) |
| 235 | 인기도 편향 문제 해결을 위한 임베딩 전이 기법 | 곽창수 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118223) |
| 236 | 행렬 완성 개선을 위한 점진적 메시지 패싱 기법 | 이재현 | 2023 | AI대학원 | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118471) |
| 237 | Algorithms for Computing Maximum Cliques in Hyperbolic Random Graphs | 오승혁 | 2023 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118454) |
| 238 | Efficient Scheduling and Code Generation for DL Model Training on Near-Data Processing Memory | 박주언 | 2023 | CSE | SYS/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/118287) |
| 239 | Group-Equivariant Transformer Without Positional Encoding | 김병진 | 2023 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118239) |
| 240 | Memory Access-Triggered Near-Data Processing for Accelerating DNN Training on GPUs | 조현욱 | 2023 | CSE | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118361) |
| 241 | Neural Contrast Enhancement of CT Image | 서민교 | 2023 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118446) |
| 242 | Performance Improvement Techniques in BFT Consensus Blockchain | 오하늘 | 2023 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118314) |
| 243 | PointActor: Animatable Human Radiance Field from Monocular Video | 도승욱 | 2023 | CSE | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118430) |
| 244 | 디지털 증강을 통한 전시물 업사이클링: 과학관에서의 사례 연구 | 남대현 | 2023 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118270) |
| 245 | 신경망의 양자화 오차를 최소화 하기 위한 데이터 분포의 극단치 처리 | 장영상 | 2023 | CSE | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118345) |
| 246 | A Study on High-k Based Capacitor for Passivation Layer of CMOS Image Sensor | 박종서 | 2023 | EE(AI) | CV/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118286) |
| 247 | Adaptive Convolutional Neural Networks Architecture Search with Filter Shape Pruning | 김애리 | 2023 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118248) |
| 248 | Communication-Efficient Federated Learning via Quantized Compressed Sensing | 오용정 | 2023 | EE(AI) | SEC/SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118312) |
| 249 | Crossbar-grain Pruning for an RRAM-based CNN Accelerator with Coordinate-based Weight Mapping | 박지혜 | 2023 | EE(AI) | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118290) |
| 250 | Deep Neural Network Training Strategies Leveraging Data Augmentation Methods | 허영준 | 2023 | EE(AI) | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118376) |
| 251 | Energy-Efficient Image Processing using Binary Neural Networks with Hadamard Transforms | 박재윤 | 2023 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118282) |
| 252 | High-Resolution Image Generation using Quantum Generative Adversarial Networks and Quantum Autoencoders | 김도훈 | 2023 | EE(AI) | CV/SEC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118409) |
| 253 | Learning to Generate Visual Scene and Text Description from Sound | 김성빈 | 2023 | EE(AI) | LLM/CV/SPK | [link](https://oasis.postech.ac.kr/handle/2014.oak/118241) |
| 254 | Multimodal Image Processing: from Conventional to Deep Learning Approach | 윤치호 | 2023 | EE(AI) | CV/MM | [link](https://oasis.postech.ac.kr/handle/2014.oak/118460) |
| 255 | Target Identification of Low-Resolution SAR Image via Super-Resolution | 최한영 | 2023 | EE(AI) | CV | [link](https://oasis.postech.ac.kr/handle/2014.oak/118369) |
| 256 | A Taxonomy for Business Models of Data-driven Healthcare Services | 조은지 | 2023 | IME | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/118359) |
| 257 | Approach to Inductive Link Prediction in Graph Neural Network based Visual Compatibility Learning | 오은 | 2023 | IME | CV/GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/118313) |
| 258 | Churn prevention in casual game using survival analysis | 김예진 | 2023 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118250) |
| 259 | Compatibility Learning for Recommendation between Accessory and Clothing with Siamese Architecture | 김우찬 | 2023 | IME | REC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118418) |
| 260 | Development of a Missing Value Imputation Method for Semiconductor Wafer Test Data Considering Spatial Similarity among Observations and Correlation between Variables | 김주영 | 2023 | IME | SYS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118257) |
| 261 | GA 클러스터링 방법론을 활용한 분산 에너지 자원 그룹화 | 윤승렬 | 2023 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118319) |
| 262 | PIG: Multi-task learning of Prediction and Imputation using feature relation Graph learning | 허성우 | 2023 | IME | GNN | [link](https://oasis.postech.ac.kr/handle/2014.oak/118375) |
| 263 | The method for extracting player and ball coordinates using soccer tactical video | 구재관 | 2023 | IME | CV/OR | [link](https://oasis.postech.ac.kr/handle/2014.oak/118225) |
| 264 | Two-Phase Anomaly Detection and Confidence Analysis in Electromechanical Systems with Implicit Operating Condition | 조주현 | 2023 | IME | TS | [link](https://oasis.postech.ac.kr/handle/2014.oak/118488) |
| 265 | 딥러닝을 이용한 자율주행차와 일반차 혼재 상황에서의 단기 교통 흐름 예측 | 황윤태 | 2023 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118500) |
| 266 | 아르키메디안 코퓰라를 이용해 섹터간 변동성의 스마일 현상을 고려한 계층적 자산 배분 | 김민주 | 2023 | IME | ETC | [link](https://oasis.postech.ac.kr/handle/2014.oak/118236) |
| 267 | Modeling Chemical Reaction ODEs using PINNs | 권희재 | 2023 | Math | AI4S | [link](https://oasis.postech.ac.kr/handle/2014.oak/118402) |

## 4. 카테고리 분포

### 4-1. 일반대학원 전체 (267건, 다중 분류 합산)
| 카테고리 | 건수 | 비율(중복 포함) |
|---|---|---|
| CV | 71 | 26.6% |
| ETC | 70 | 26.2% |
| SYS (HW/가속/양자화/PIM 등) | 50 | 18.7% |
| LLM/NLP | 45 | 16.9% |
| THY (이론/최적화/일반화) | 30 | 11.2% |
| AI4S (의료/생명/물리) | 25 | 9.4% |
| OR (제조/스케줄링/금융) | 21 | 7.9% |
| RL | 16 | 6.0% |
| GNN | 12 | 4.5% |
| MM (VLM/멀티모달) | 12 | 4.5% |
| SPK (음성/오디오) | 12 | 4.5% |
| TS (시계열) | 9 | 3.4% |
| SEC | 9 | 3.4% |
| REC | 7 | 2.6% |
| ROB | 3 | 1.1% |

### 4-2. 학과별 카테고리 분포 (상위)

**AI대학원 (113건)**: CV 34 / LLM 30 / AI4S 17 / THY 15 / SYS 11 / SPK 10 / RL 9 / MM 8 / GNN 6 / TS 5 / SEC 4 / REC 3 / ROB 1 — *POSTECH AI대학원의 강점*: ML 이론(SASSHA·Flat Minima·Concept Bottleneck 등), CV/생성(NeRF·Gaussian Splatting·Diffusion), Speech/TTS, AI4Health(혈당·우울증·암 영상)에 고르게 분포. **CV+LLM이 절반 이상**.

**CSE (48건)**: SYS 17 / CV 15 / LLM 6 / THY 6 / ... — *시스템 강세*. PIM/DRAM-PIM, RISC-V, 블록체인, NAND 압축, AI 가속기 시뮬레이터 등 하드웨어/시스템과 CV(NeRF·Gaussian Splatting 편집·Pose) 양강.

**EE(AI 필터, 46건)**: SYS 17 / CV 14 / LLM 4 / SEC 3 — *AI 가속/통신/회로 응용*. LDPC 디코더 NN, GNN 기반 EDA(Static Timing/Gate Sizing), Vision Transformer 가속, Federated Learning 통신, Image/Semantic Communication.

**IME (49건)**: OR 18 / CV 7 / THY 6 / LLM 5 / SYS 5 / REC 4 — *제조·금융·교통 응용 중심*. 반도체 제조 공정/수율, 차량 라우팅, 에너지/포트폴리오, 추천(패션·뉴스), Diffusion 기반 색조합성, 시계열 파운데이션 모델 그래프 표현 등.

**Math (11건)**: AI4S 4 / ETC 6 / THY 1 / CV 1 — *PINN/Operator Network/PDE 기반 ML*. 작은 표본이지만 ViT-DeepONet, SSMO, HiFAR 등 연구는 ML이론·과학계산 융합.

### 4-3. 일반/특수 구분 요약
- **일반대학원**: 267건 (100%)
- **특수대학원** (GSIT/TIM/GEM/GIFT/GWE/POSTI): **0건** — OASIS에 2023~2026 석사논문 미등재. POSTECH은 AI 전용 특수대학원이 없으므로 본 조사 결과는 일반대학원으로 한정한다.

## 5. 추천 Top 10 (사용자 관심사 LLM/AI4Science/RL/Multimodal 부합)

선정 기준: (a) LLM/AI4S/RL/MM 핵심 4축에 직접 부합, (b) POSTECH AI대학원의 강점인 ML 이론·CV·Speech 결합 추세, (c) 고려대 SW·AI 융합대학원 석사 1~2년 호흡으로 재현/확장 가능, (d) 학회 출판 연계 가능성.

| 순위 | 제목 | 학과/연도 | 카테고리 | 추천 사유 |
|---|---|---|---|---|
| 1 | Beyond Deletion: Improving LLM Reasoning Efficiency via Information-Theoretic Compression and Pruning (이대엽, 2026) | AI대학원 | LLM/SYS | LLM 추론 효율화 — 정보이론 기반 토큰/체인 압축. 2026년 가장 핫한 reasoning compression 주제. 고려대에서도 H100 1~2장 환경에서 충분히 재현 가능. |
| 2 | SASSHA: Sharpness-aware Adaptive Second-order Optimization with Stable Hessian Approximation (신다훈, 2025) | AI대학원 | THY | ML 이론·최적화 — 2차 정보 기반 SAM 변형. 이론·실험 균형 좋고 NeurIPS/ICML 라인. POSTECH AI대학원 이론 강세 사례. |
| 3 | Provably efficient combinatorial bandit algorithm for evolving systems (송석빈, 2025) | AI대학원 | RL/THY | 이론적 RL — 변화하는 환경에서의 combinatorial bandit. RL 이론 입문에 최적, 짧은 시계로 NeurIPS/ICML 가능. |
| 4 | Multi-Objective Reinforcement Learning for Improving Neural Machine Translation (권수진, 2025) | AI대학원 | LLM/RL | LLM+RL 결합 — RLHF 흐름 위에서 multi-objective. 사용자 관심 4축 중 LLM·RL 동시 충족, 한국어 MT로 확장 여지. |
| 5 | Enhancing Ligand-Protein Validity and Binding Affinity in Structure-Based Drug Design with Multi-Reward Optimization (조문선, 2025) | AI대학원 | RL/AI4S/THY | AI4Science (drug design) + multi-reward RL. 단백질 구조 기반 신약 설계는 AI4S 핫토픽이며 ICLR/NeurIPS AI4S 트랙 가능. |
| 6 | Multimodal Cognitive Support Conversation: Enhancing Cognitive Reframing Therapy via Multimodal Psychotherapy Framework (김수빈, 2025) | AI대학원 | LLM/AI4S/MM | LLM+멀티모달+의료(정신건강) 융합. 사용자 관심 3축이 만나는 흔치 않은 주제. 한국어 데이터 구축 가능. |
| 7 | A domain-agnostic continual multi-task model for generalized glucose level and hypoglycemia event prediction (황민주, 2025) | AI대학원 | AI4S/THY | AI4Health 시계열 + continual learning. 의료 시계열 멀티태스크 — POSTECH AI대학원-병원 협업 모델. 데이터셋(CGM) 공개 활용 가능. |
| 8 | DC-VSR: Spatially and Temporally Consistent Video Super-Resolution with Video Diffusion Prior (한장혁, 2026) | AI대학원 | CV/TS | 비디오 확산모델 — 시공간 일관성. ICCV/CVPR 2025~2026 트렌드. 단일 GPU 데모 가능. |
| 9 | Gaussian Plane-wave Neural Operator for Electron Density Estimation (김성수, 2025) | AI대학원 | AI4S | AI4Physics (DFT 대체 신경망 연산자). Neural Operator·Gaussian basis 결합 — POSTECH의 AI for materials/quantum 노선. 화학·재료 융합 졸논 가능. |
| 10 | Reducing over-squashing in graph neural networks with non-backtracking (박성현, 2025) | CSE | CV/GNN | GNN 이론 — over-squashing 완화. 졸논 분량(이론+실험)으로 적합하고 ICLR 라인. 사용자가 GNN을 후보로 두면 좋은 출발점. |

**추가 후보** (Top 10 외):
- A Study on Enforcing Flat Minima to Improve Neural Network Sparsification (이동엽, 2026, AI대학원, THY) — Pruning + Flat Minima.
- Conservative Reinforcement Learning for Environments with Random Delays (이종수, 2025, AI대학원, RL) — 지연이 있는 RL.
- Spectral Autoregressive Feature Synthesis for Conditional Brain Network Augmentation (안하영, 2026, AI대학원, AI4S/THY) — 뇌 네트워크 데이터 증강.
- Graph Diffusion Model with Topological Awareness via Persistent Homology (이동현, 2025, AI대학원, GNN/THY) — 위상수학+그래프 확산.
- Time series dataset representation for foundation model by using graph (박주호, 2025, IME, GNN/TS) — 시계열 파운데이션 모델 + 그래프.

## 6. 한계

1. **지도교수 정보 미수집**: OASIS 브라우즈 뷰는 제목·연도·저자만 표시. 지도교수는 개별 핸들(`/handle/.../...`) 또는 dCollection 원문 페이지 진입이 필요해, 본 조사 시간 예산 내 수집하지 못했다. 사용자가 특정 논문을 골라 contact할 경우 개별 페이지 또는 ai.postech.ac.kr/sub020101 (전임교수) 매칭 필요.

2. **EE/CSE의 AI 필터 정확도**: EE 147건 중 46건만 키워드 기반으로 채택. False negative(통신·반도체 ML 응용 중 키워드 미일치) 및 false positive(딥러닝 인용만 있는 측정 논문) 가능성 ±10%.

3. **OASIS 등재 지연/누락**: 2026.2월 졸업자 일부는 아직 등재 전일 수 있음. 또한 OASIS 메타데이터 정정으로 동일 논문이 두 핸들로 중복 등록된 사례 2건 확인(임솔이, 박건우) — 표에서 그대로 두되 실제 졸업자 수는 -2.

4. **특수대학원 0건의 의미**: POSTECH OASIS의 특수대학원 컬렉션이 GSIT(2010 마지막), TIM(2014), GEM(2020)으로 갱신 정체. 즉 **(a) 컬렉션 미갱신**일 가능성과 **(b) 특수대학원 자체가 학위논문 미요구 또는 산학과제 보고서로 대체**할 가능성 둘 다 있음. RISS·dCollection 교차 검증을 했더라도 추가 사례 발견은 어려울 가능성이 큼. 결론적으로 **POSTECH은 AI 졸업논문 비교군에서 일반대학원만 유효**하다.

5. **카테고리 분류는 제목 기반 휴리스틱**: 초록·키워드 미참조. 다중 분류로 보완했으나 ETC 26%는 제목만으로 판단 어려운 항목(예: "Group-Equivariant Transformer Without Positional Encoding"은 THY/CV 양쪽 가능). 정밀 분류는 후속 작업.

6. **수학과 표본 작음(11건)**: ML 이론 비교에는 KAIST/SNU 수학과/통계학과 결과와 합산 필요.

7. **국문/영문 혼재**: 일부 한국어 제목은 키워드 매칭률이 낮아 ETC로 분류된 경우 있음(예: '인기도 편향 문제 해결을 위한 임베딩 전이 기법' → REC 매칭 누락 → ETC). 표 검수 시 보정 권장.

---

**조사 완료**: 일반대학원 5개 단위 267건, 특수대학원 0건 (확인 완료). 사용자 관심 4축(LLM/AI4S/RL/MM) 모두 POSTECH AI대학원에서 충분한 사례 확보.
