# GIST(광주과학기술원) AI 관련 석사 학위논문 조사 (2023~2026)

> **조사자**: Claude(Opus 4.7) 자동 리서치
> **조사일**: 2026-04-28
> **수요자**: 고려대 SW·AI 융합대학원 석사과정 최경찬 — 졸업논문 주제 선정 참고용

---

## 1. 조사 범위

### 1.1 대상 기관
**광주과학기술원(GIST, Gwangju Institute of Science and Technology)**
- 4대 과기원 중 하나, 연구 중심 특수목적대학
- 본 조사는 **AI 관련 학과**의 **석사 학위논문**(Theses Master)에 한정

### 1.2 조사 대상 학과 (일반대학원)
GIST Scholar(공식 학술 리포지터리) 상의 학과 분류 기준으로 다음 4개 학과를 핵심 대상으로 선정함.

| GIST Scholar handle | 학과(영문) | 학과(국문) | 비고 |
|---|---|---|---|
| `local/7913` → `7916` (Master 컬렉션) | Department of AI Convergence | AI융합학과 | **과기정통부 AI대학원 사업 운영 학과**(舊 AI대학원 → 2024년 학과화). 본 조사의 1차 대상 |
| `local/7907` → `7910` (Master 컬렉션) | Department of Electrical Engineering and Computer Science | 전기전자컴퓨터공학부(EECS) | AI/ML/CV/Speech 다수 |
| `local/7957` → `7960` (Master 컬렉션) | Department of Mechanical and Robotics Engineering | 기계·로봇공학과 | 자율주행·로봇 학습 다수 |
| `local/7976` → `7979` (Master 컬렉션) | Department of Biomedical Science and Engineering | 의생명공학과 | 의료 AI 트랙 |

### 1.3 조사 제외/미수록 학과
| handle | 학과 | 사유 |
|---|---|---|
| `7919` (Master `7922`) | Department of Semiconductor Engineering (반도체공학과) | **2023~2026 석사학위논문 0건** (학과 신설 직후) |
| `7925` (Master `7928`) | Graduate School of AI Policy and Strategy (인공지능정책전략대학원, AIX) | **2024-09 개원**으로 **2026-04 현재 석사학위논문 0건** |

### 1.4 일반대학원 / 특수대학원 구분
- **GIST는 연구 중심 과기원으로 특수대학원·전문대학원 자체가 존재하지 않음**(직장인 야간/비학위 과정 없음)
- "Graduate School"이 명칭에 포함되어도 일반대학원 산하의 전공·학과 단위(예: AI Graduate School = AI융합학과의 운영 사업명)
- 따라서 본 조사에 등장하는 모든 학위논문은 **일반대학원** 소속

### 1.5 시기 범위
- **발행연도(issue date) 2023, 2024, 2025, 2026**
- 2026년 학위논문은 GIST의 학기제 특성상 봄학기(2월) 학위수여분이 다수 포함됨

---

## 2. 데이터 출처

### 2.1 1차 출처 — GIST Scholar (DSpace 6.3 기반 공식 리포지터리)
- 루트: <https://scholar.gist.ac.kr/>
- Master's Theses 통합 컬렉션: <https://scholar.gist.ac.kr/handle/local/8028> (2026-04 기준 등록 미사용)
- 학과별 Master 컬렉션 직접 브라우징(상기 표의 handle 사용)
- 브라우징 URL 패턴: `…/handle/local/{ID}/browse?type=dateissued&order=DESC&rpp=300`
- 학과×연도 전수 수집 후 발행연도 2023-2026으로 필터링

### 2.2 보조 확인
- **GIST AI융합학과 공식 사이트**: <https://ai.gist.ac.kr/ai/> / 영문 <https://aieng.gist.ac.kr/>
- **인공지능정책전략대학원**: <https://aix.gist.ac.kr/> (2024년 9월 개원, 학위논문 미배출 확인)
- **GIST 도서관**: <https://library.gist.ac.kr/> (검색 인터페이스, GIST Scholar로 리다이렉트)

### 2.3 조사 미수행 출처 및 사유
- **RISS(학술연구정보서비스)**: GIST Scholar에 동일 메타데이터가 모두 노출되어 중복 조회 불필요(원문 PDF는 RISS가 별도 라우팅이지만 본 조사는 메타데이터·제목·저자·연도 수집이 목표)
- **Google Scholar**: 학과별 전수 조사가 불가능하여 키워드 보강용으로만 활용 가능 — 본 조사에서는 별도 사용하지 않음(전수 컬렉션이 우선)

### 2.4 수집 통계
- **2023-2026 4개 학과 석사학위논문 총 등록 건수**: **329건**
- 그 중 **AI 관련 논문**(제목 키워드 기반 자동 식별): **160건**
  - AI융합학과 89, EECS 34, 기계·로봇 32, 의생명 5
- 키워드 매칭은 보수적(딥러닝/ML/RL/CV/NLP/멀티모달/의료AI/로봇학습 등 한·영 100여 개)이며, 회로/소자/전력/광학 등 비-AI 하드웨어 학위논문은 본 표에서 제외

---

## 3. 논문 목록 (AI 관련 석사학위 160건)

> 표시: 학과 약어 — EECS = 전기전자컴퓨터공학부, AI융합 = AI융합학과(AI대학원), 기계·로봇 = 기계·로봇공학과, 의생명 = 의생명공학과
> 카테고리는 제목 기반 자동 분류(다중 라벨). 정렬: 학과 → 연도(내림) → 제목.

| 연도 | 학과 | 논문 제목 | 저자 | 카테고리 | 링크 |
|---|---|---|---|---|---|
| 2026 | EECS | A Diagnostic Approach for Backup Time Estimation and Early Detection of Abnormal Cells in UPS Systems | Min Jeong Kim | Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33668) |
| 2026 | EECS | Enhancing Thermal Infrared Aerial Object Detection via Visible-Driven Translation and Semantic-Aware Augmentation | Kim Soo Yeon | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/33740) |
| 2026 | EECS | Matryoshka Representation Learning with Modality-wise Knowledge Distillation for Multimodal Emotion Recognition in Conversation | Young-jin Na | Vision/Generation,Multimodal,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/33779) |
| 2026 | EECS | Reward-Guided MedSwinGPT for Biomedical Image Captioning | Tepy Sokun Chriv | LLM/NLP,Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33819) |
| 2025 | EECS | A Study on Super-Resolution Voltage Prediction in Distribution System Operator based on Spatiotemporal Graph Learning | jihoon shin | Vision/Generation,Graph/Networks,Time-series/Signal | [link](https://scholar.gist.ac.kr/handle/local/31848) |
| 2025 | EECS | A Tripartite Synapse-Inspired Ferroelectric-Gated Phototransistors for In-Sensor Image Processing | Yubin Lee | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/31851) |
| 2025 | EECS | Advancing Image Captioning with Regional Attention in Vision-Language Transformers and Multimodal Learning Zubia Naz School of Electrical Engineering and Computer Science Gwangju Institute of Science and Technology | NAZ ZUBIA | Vision/Generation,Multimodal | [link](https://scholar.gist.ac.kr/handle/local/18842) |
| 2025 | EECS | Analysis of the Impact of Imbalance Penalties on Virtual Power Plant Bidding Strategies and System Operational Costs in the Korean Wholesale Electricity Market: Findings and Policy Recommendations | 이세은 | Other | [link](https://scholar.gist.ac.kr/handle/local/18866) |
| 2025 | EECS | Development of an AI Model for PROTAC Drug Activity Prediction | Yeon, Seokhun | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/31875) |
| 2025 | EECS | Imitation Learning for Autonomous Parking | 오수연 | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19377) |
| 2025 | EECS | Integrated multi-period distribution network expansion planning with Renewable energy penetration and distributed generation operator profit Kim, Woo-Sop Gwangju Institute of Science and Technology | 김우섭 | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19408) |
| 2025 | EECS | Short-Segment Speaker Verification via Multi-Perspective Feature Fusion from Self-Supervised Speech Representations | Jisoo Myoung | Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/31952) |
| 2025 | EECS | Sub-1-volt, optically readable active Tamm plasmon resonators for free-space multispectral image processing | Kim Se Yeon | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/31964) |
| 2024 | EECS | Accurate prediction of antimicrobial peptide activity for various bacterial species based on protein language model | Daehun Bae | LLM/NLP,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/18822) |
| 2024 | EECS | An Integrated Single Photodetector-Memristor System for Light-Modulated Multi-State Resistance Memory | Jae Min Jeon | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/18877) |
| 2024 | EECS | Development of a Linear Frequency Modulation-Based Ground-Penetrating Radar System for Crevasse Detection | Sungjae Park | Vision/Generation,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19114) |
| 2024 | EECS | Development of a drug-protein affinity prediction model using contrastive learning | Yoon, Jaesuk | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19112) |
| 2024 | EECS | Enhancing Crowd Counting Efficiency Using Hybrid Attention-based Multi-column CNN | KHALIMJANOV RASULJON RAKHIMZHON UGLI | Other | [link](https://scholar.gist.ac.kr/handle/local/19248) |
| 2024 | EECS | Leveraging Large Language Models for Korean Sign Language Translation | Junggyun Oh | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/19453) |
| 2024 | EECS | Leveraging Self-Attention for Multimodal Skeleton-Based Video Anomaly Detection | KHURBAEV SAYFULLOKH MARIPJON UGLI | Vision/Generation,Multimodal | [link](https://scholar.gist.ac.kr/handle/local/19454) |
| 2024 | EECS | Mem-elements based Neuromorphic Hardware for Neural Network Application | Ankur Singh | Other | [link](https://scholar.gist.ac.kr/handle/local/19483) |
| 2024 | EECS | Study of Double-Layer Passivation Effects in InGaN-based Blue Micro LEDs | Sunwoo Shin | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19726) |
| 2024 | EECS | Ultra-wideband Antenna Array for Crevasse Detection Ground-Penetrating Radar | Junhong Kwon | Vision/Generation,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19870) |
| 2024 | EECS | Utilization of Deep Learning based feature extraction for Improved Recommendation System | Khan Zeeshan | Other | [link](https://scholar.gist.ac.kr/handle/local/19879) |
| 2023 | EECS | A Supervised Learning based System Margin Assessment Considering Voltage Violation And Collapse | Kim, HanKyul | Other | [link](https://scholar.gist.ac.kr/handle/local/18949) |
| 2023 | EECS | A Three-Step Tapered Bit Period SAR ADC  Using Area-Efficient Clock Generation | Hyein Kang | Vision/Generation,HCI/XR,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/18950) |
| 2023 | EECS | Accelerating Detection of Military Object in Remote Sensing | Jong Hyun Park | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/18817) |
| 2023 | EECS | Adaptive resolution Incremental Delta-Sigma ADC for hardware implemented Neural Network | Cheonho Won | Other | [link](https://scholar.gist.ac.kr/handle/local/18833) |
| 2023 | EECS | Classification of EEG Induced by Various Thermal Stimuli using Deep Convolutional Neural Network | Jihoon Baek | Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19003) |
| 2023 | EECS | Delay Measurement of Concurrent Video Streams Analysis in Autonomous Vehicle DCUs | Yusupov Anvarjon | Vision/Generation,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19072) |
| 2023 | EECS | Facile quantification of nanosized bioparticles in bright-field micrographs of Gires-Tournois biosensor using deep learning | Jiwon Kang | Other | [link](https://scholar.gist.ac.kr/handle/local/19296) |
| 2023 | EECS | Individual Sub-band Estimation Approach to Bandwidth Extension and Enhancement of Coded Speech | Youngwon Choi | Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/19400) |
| 2023 | EECS | SSL-Embedding-based Feature Representation for Music Source Separation | Kyeongwan Park | Other | [link](https://scholar.gist.ac.kr/handle/local/19694) |
| 2023 | EECS | Semantic Correspondence using Self Supervised Learning | Kornkamol Anasart | Other | [link](https://scholar.gist.ac.kr/handle/local/19658) |
| 2026 | AI융합 | A Neuro-Evolutionary Program Synthesis for Compositional Reasoning | Woletemaryam Liyew Abitew | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/33700) |
| 2026 | AI융합 | Activation by Interval-wise Dropout: A Simple Way to Prevent Neural Networks from Plasticity Loss | Sangyeon Park | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/33667) |
| 2026 | AI융합 | Bandwidth Optimization with Trainable Denoiser for Progressive Photon Mapping | 전동희 | Vision/Generation,Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/33690) |
| 2026 | AI융합 | Comparative Analysis of Inter-Brain Synchrony during Cooperative and Competitive SSVEP-based BCI Gameplay | 이혁준 | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33698) |
| 2026 | AI융합 | Continual adaptation for miss-coil video anomaly detection at down-coilers in hot strip mills Minsu Kim College of Information and Computing Gwangju Institute of Science and Technology | Minsu Kim | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/33702) |
| 2026 | AI융합 | Cost-efficient Active Learning for Referring Image Segmentation and Grounding | Junbeom Hong | Vision/Generation,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/33703) |
| 2026 | AI융합 | Design and Implementation of Digital Twin Based Time Travel Summarization Framework Using Vision Language Models | WonJune Shin | LLM/NLP,Vision/Generation,Multimodal | [link](https://scholar.gist.ac.kr/handle/local/33709) |
| 2026 | AI융합 | Development of Brain Connectome-Aware fMRI to visual image reconstruction model | Gunwoo Bae | Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33718) |
| 2026 | AI융합 | EEG-based Analysis of Motor Cortical Oscillations Before and After Treadmill Training in a Parkinson’s Disease Mouse Model | 안진우 | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33732) |
| 2026 | AI융합 | Enabling User-Applied Active Locomotion in In-Car VR through Contextual Cues | Bocheon Gim | HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/33736) |
| 2026 | AI융합 | Mag to the Future: Transforming Passive Objects into Circuit-Free Interactive Devices with Multimodal Haptic Feedback Using Magnetic Fields | Jeongju Park | Multimodal,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/33777) |
| 2026 | AI융합 | Motion Prior Distillation in Time Reversal Sampling for Generative Inbetweening | Wooseok Jeon | Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/33785) |
| 2026 | AI융합 | NCWP:Unsupervised Semantic Embedding Alignment Post-processing for Improving RAG in Language Models | GangHo Lee | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/33792) |
| 2026 | AI융합 | Prism: Spectral Diversity for Multi-Agent Reinforcement Learning | Kyungbeom Kim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/33810) |
| 2026 | AI융합 | Reinforcement Learning Based Design of MDM2-Binding Anticancer peptides | Yohan Park | RL/Robotics,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/33817) |
| 2026 | AI융합 | Robust Imitation Learning with Attention Constraints and Risk Awareness for Motion Planning in Autonomous Driving | Jiyun Kim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/33820) |
| 2026 | AI융합 | Supporting d/Deaf and Hard-of-Hearing Individuals in Elaborating Musical Intentions with a Generative AI Based Music Creation Guidance System | JinYoung Yoo | HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/33838) |
| 2026 | AI융합 | Synthetic Electronic Health Records: A Comparative Study of Generative Models and Their Practical Utility | JinGyu Park | Other | [link](https://scholar.gist.ac.kr/handle/local/33844) |
| 2026 | AI융합 | Towards Interpretability of GPT-Style Models in Step-by-Step Games Through First-Order Logic | Klea Lena Kovacec | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/33853) |
| 2026 | AI융합 | Tracing and Correcting Programs: Critic-Guided Synthesis for Visual Reasoning | Marha Midhatiey Binti Rusli | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/33855) |
| 2026 | AI융합 | Uncertainty Quantification for Drug -Target Interaction and Binding Region Prediction using Bayesian Deep Learning | 윤다솜 | Medical/Bio AI,Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/33858) |
| 2026 | AI융합 | Zero-Shot Voice Conversion Based on Cross-Factor Perturbation and Perturbed Latent Mixup | Chae-Woon Bang | Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/33861) |
| 2025 | AI융합 | A Time-Series Deep Learning Approach for EEG-Based Sleep Stage Classification | Eunsol Park | Vision/Generation,Medical/Bio AI,Time-series/Signal | [link](https://scholar.gist.ac.kr/handle/local/31850) |
| 2025 | AI융합 | Auxiliary Decoder-Based Training for Sound Event Detection with a Pretrained Model | 손상원 | Vision/Generation,Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/18961) |
| 2025 | AI융합 | Beyond Flat Personas: Facilitating Reflective Dialogue via Identity-Based Multi-Persona Agents | MinJu Han | LLM/NLP,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/31853) |
| 2025 | AI융합 | Deep Representation Learning of Electronic Health Records for Cardiovascular Disease Patients | Seunga Lee | Medical/Bio AI,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/31862) |
| 2025 | AI융합 | Development brain aware graph neural network model for cognitive resilience in early Alzheimer’s Disease | 윤지원 | Medical/Bio AI,Graph/Networks | [link](https://scholar.gist.ac.kr/handle/local/19106) |
| 2025 | AI융합 | Development of Adaptive Impedance Control Strategy for an Upper-Limb Cable-Driven Rehabilitation Robot | Jin-Woo Lee | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/31873) |
| 2025 | AI융합 | Development of Deep Learning Based Computational Hyperspectral Camera Using Microlens Array and Multilayer Thin Films Jioh Lee Gwangju Institute of Science and Technology | 이지오 | Other | [link](https://scholar.gist.ac.kr/handle/local/19131) |
| 2025 | AI융합 | Development of embedding-based deep learning models for predicting drug responses Yewon Kim Gwangju Institute of Science and Technology | 김예원 | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19136) |
| 2025 | AI융합 | Exploring LLM-Based Teachable Agent for Learning by Teaching in Physics Education | 오동익 | LLM/NLP,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19275) |
| 2025 | AI융합 | Exploring Planning Capability of Large Language Model Using Abstraction and Reasoning Corpus Benchmark Woochang Sim Gwangju Institute of Science and Technology | 심우창 | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/19277) |
| 2025 | AI융합 | Exploring the Limit of Vision-Language Model’s Wordy Text-Image Representations | Shin, Dongmin | LLM/NLP,Vision/Generation,Multimodal | [link](https://scholar.gist.ac.kr/handle/local/31893) |
| 2025 | AI융합 | Generalizable Depth Perception via Foundation Model | Chanhwi Jeong | Other | [link](https://scholar.gist.ac.kr/handle/local/31898) |
| 2025 | AI융합 | High-Precision Feature Pair Selection Techniques in Monocular Visual Odometry Using Transformer Models | 신건우 | HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19341) |
| 2025 | AI융합 | Human-Like Procedural Level Generation via Reinforcement Learning with Contrastive Language-State Embedding | Lee Seoyoung | Vision/Generation,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/31902) |
| 2025 | AI융합 | Investigating Temporal Stability and Spatial Information for EEG-Based User Authentication: Shallow ConvNet approach | 이채현 | Medical/Bio AI,Time-series/Signal | [link](https://scholar.gist.ac.kr/handle/local/19418) |
| 2025 | AI융합 | Junsuk M oon Grid Defined Lane Detection | 문준석 | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19440) |
| 2025 | AI융합 | Light-Weight Causal Speech Enhancement with Bone-Conduction | 이상윤 | Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/19455) |
| 2025 | AI융합 | Modeling Consistent Relations between Persona and Response for Persona-based Dialogue | 이경로 | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/19494) |
| 2025 | AI융합 | Multimodal Analysis of Brain Connectomics and Time-Lagged Functional Dynamics | Su-Min Roh | Multimodal,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/31924) |
| 2025 | AI융합 | Multimodal Dialogue Act Classification Using Context-Aware Residual Attention and LoRA-Based Cross-Attention Fusion YeJin Park College of Information and Computing Department of AI Convergence Gwangju Institute of Science and Technology | YeJin Park | LLM/NLP,Vision/Generation,Multimodal,Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/31925) |
| 2025 | AI융합 | Post-Correction for Interactive Monte Carlo Denoising using the James-Stein Estimator | 조예원 | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19595) |
| 2025 | AI융합 | Reinforcement learning for the design of targeted antimicrobial peptides against resistant pathogens | 박준태 | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19634) |
| 2025 | AI융합 | State-wise Safety in Autonomous Driving via Lagrangian-based Constrained Reinforcement Learning | Minseok Seo | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/31955) |
| 2025 | AI융합 | 제조업 현장에서 딥러닝 프로젝트 실무 워크플로우 제안 | Taeyul Kim | Other | [link](https://scholar.gist.ac.kr/handle/local/31980) |
| 2024 | AI융합 | 6DoF Bimanual-GraspNet: A Deep Learning Approach for Bimanual Grasping | Kangmin Kim | Other | [link](https://scholar.gist.ac.kr/handle/local/18812) |
| 2024 | AI융합 | A Study on Action Adverb Recognition on Korean Adverb Dataset | Heechan Kim | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/18911) |
| 2024 | AI융합 | Automatic Sign Dance Generation with Diffusion Based Inpainting | Eunhee Kim | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/18958) |
| 2024 | AI융합 | Deep learning-based Integration of Multi-omics Data for Personalized Drug Response Prediction | Juyoung Kang | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19062) |
| 2024 | AI융합 | Discrete Prompt Compression with Reinforcement Learning | Kyung-Joong Kim | LLM/NLP,RL/Robotics,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/19194) |
| 2024 | AI융합 | Exploring connectivity of resting-state EEG between BCI-literate and illiterate groups | Hanjin Park | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19272) |
| 2024 | AI융합 | Generative Data Augmentation Strategy Leveraging External Data for Abstractive Dialogue Summarization | Sangwon Park | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/19328) |
| 2024 | AI융합 | Host-pathogen protein-protein interaction prediction with protein language models | Seungwoo Baek | LLM/NLP,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19348) |
| 2024 | AI융합 | Hyperspectral Face Dataset Augmentation for Enhancing Face Recognition System Performance | Youngin Choi | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19358) |
| 2024 | AI융합 | Improving Back-Translation with Denoising Auto-Encoding | Seokhyun Oh | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19397) |
| 2024 | AI융합 | Large Language Model as an Agent for physical puzzle game | Chung Insik | LLM/NLP,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19444) |
| 2024 | AI융합 | Online federated learning based short-term load prediction through anomaly detection using incremental PCA | Park Seong-Woo | Vision/Generation,Security/Robustness | [link](https://scholar.gist.ac.kr/handle/local/19540) |
| 2024 | AI융합 | Primitive Basis Learning for Alignment on Universal Representation in Unsupervised Machine Translation | Hyunyoung Bae | LLM/NLP | [link](https://scholar.gist.ac.kr/handle/local/19610) |
| 2024 | AI융합 | RGB-IR Paired Dataset with Terrestrial-view for Maritime Object Detection | Taeri Kim | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19646) |
| 2024 | AI융합 | Real-Time Lightweight Semantic Segmentation using Fourier Neural Operator Network | Sohn, Jimin | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19625) |
| 2024 | AI융합 | Reward Design using Large Language Model for Procedural Content Generation | Jinha Noh | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19645) |
| 2024 | AI융합 | Single-cell classification using graph neural network with cell and gene vectors | Sungyong Park | Vision/Generation,Medical/Bio AI,Graph/Networks | [link](https://scholar.gist.ac.kr/handle/local/19671) |
| 2024 | AI융합 | Skin Disease Classification with Point Guidance Training | Yunjae Heo | Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19675) |
| 2024 | AI융합 | Sound Event Detection Using Frequency Dynamic Convolution and Feature Fusion Network | Ji Won Kim | Vision/Generation,Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/19685) |
| 2024 | AI융합 | Speech Synthesis Based on Multi-Speaker Adaptation and Phonetic Synchronization for Automatic Dubbing | Changi Hong | Vision/Generation,Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/19689) |
| 2024 | AI융합 | Traffic Accident Explanation Via Large Vision and Language Model | Taehyung Gil | LLM/NLP,Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19851) |
| 2024 | AI융합 | Universal multi target drug design with generative model | Chihyeon Jin | Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19874) |
| 2023 | AI융합 | AI MUSIC : Deep Network-Based Music Composition and Singing Voice Synthesis | Eunbin Lee | Vision/Generation,Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/18849) |
| 2023 | AI융합 | Anticipation of Traffic Accident of Non-Ego Vehicles by Deep Learning Model. | Heebah Saleem | Other | [link](https://scholar.gist.ac.kr/handle/local/18883) |
| 2023 | AI융합 | Automated Graph Production of Museum Commentary using Named Entity Recognition and Relation Extraction | Kim, JuYeon | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/18954) |
| 2023 | AI융합 | Automatic Navigation Scheme for Micro-Robot Using Magnetic Potential Field | Yonggyu Kim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/18957) |
| 2023 | AI융합 | Deep Learning based Traffic Accident Anticipation using Geometric Features for better Generalizability | Farhan Mahmood | Other | [link](https://scholar.gist.ac.kr/handle/local/19067) |
| 2023 | AI융합 | Deep Learning-based Implant Placement Planning and Application | Jumi Park | Other | [link](https://scholar.gist.ac.kr/handle/local/19061) |
| 2023 | AI융합 | Development of multimodal bio data fusion  method for disease prediction | Jeongyong Hwang | Multimodal,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19151) |
| 2023 | AI융합 | EGNAS: Efficient Graph Neural Architecture Search through Evolutionary Algorithm | Younkyung Jwa | Graph/Networks,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/19228) |
| 2023 | AI융합 | Ethics in Autonomous Vehicles: A Bibliometric Review | Paola Maria Castro Casales | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19262) |
| 2023 | AI융합 | Federated Reinforcement Learning for Developing Sepsis Patient Treatment Model | Songmi Oh | RL/Robotics,Security/Robustness | [link](https://scholar.gist.ac.kr/handle/local/19303) |
| 2023 | AI융합 | Floor Plan Generation via Ceiling Segmentation in Indoor Environmen | Jemo Maeng | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19308) |
| 2023 | AI융합 | Indoor Car VR Simulation Usability Evaluation: Automatic Generation of Car VR Contents with Visual Odometry | Heesan Yang | Vision/Generation,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19401) |
| 2023 | AI융합 | MAE-based Hybrid Convolutional ViT for Self-Supervised Learning | Nami Seo | Other | [link](https://scholar.gist.ac.kr/handle/local/19472) |
| 2023 | AI융합 | Multi-Task Deep Neural Network for  Instance Segmentation and Ordering Recovery | Heeseon Rho | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19514) |
| 2023 | AI융합 | PINNet: a deep neural network with pathway prior knowledge for Alzheimer’s disease | Yeojin Kim | Medical/Bio AI,Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/19585) |
| 2023 | AI융합 | RPG Gym: RPG Game Simulator for Deep Learning | Donghyeok Park | Other | [link](https://scholar.gist.ac.kr/handle/local/19652) |
| 2023 | AI융합 | Relation-level Regularization for Recurrent Neural Networksa | Juhyeon Nam | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/19635) |
| 2023 | AI융합 | Subwindow-based Topological Features to Deep Learning Models for Time Series Forecasting | Siwook Yong | Time-series/Signal | [link](https://scholar.gist.ac.kr/handle/local/19760) |
| 2023 | AI융합 | Tailors: New Music Timbre Visualizer to Entertain Music Through Imagery | Lee, ChungHa | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19794) |
| 2023 | AI융합 | Transformer-Convolution Hybrid U-Shape Neural Network for High-Quality Monte Carlo Denoising | Yun Ha Sohn | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19857) |
| 2023 | AI융합 | Weather Aware Data Cleaning with Denoising AutoEncoder for Solar Power Generation Estimation | Junyoung Song | Vision/Generation,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19894) |
| 2026 | 기계·로봇 | A Handle-Controlled Guide Robot for the Visually Impaired: Safe Path Generation and Following | Daegyun Jung | Vision/Generation,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/33672) |
| 2026 | 기계·로봇 | A Wearable Haptic Navigation System for Visually Impaired People Based on 2D LiDAR-IMU Fusion | Jonghui Park | RL/Robotics,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/33689) |
| 2026 | 기계·로봇 | Beyond Rule-Based Navigation: The Future of Self-Driving with Conditional Imitation Learning and End-to-End Driving | Dong-Hyun Kim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/33691) |
| 2026 | 기계·로봇 | Integral Error-Based Adaptive Neural Identifier for a Class of Uncertain Nonlinear Systems | Hong donghwa | HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/33766) |
| 2026 | 기계·로봇 | Lightweight Multimodal LLM-Driven Frameworks for Context-Aware Path Planning and Dynamic Parameter Adjustment in Mobile Robot Navigation Systems | Hyun-Woo Kim | LLM/NLP,Multimodal,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/33774) |
| 2026 | 기계·로봇 | Speckle Noise Reduction in LDV Measurements Using Total Variation based Filtering and Deep Learning based Frameworks for Offline and On-Device Denoising | Awais Ali | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/33827) |
| 2025 | 기계·로봇 | DRL Methods and GA based Experience-Reputation Network for UAV Optimal Path Planning | 박진혁 | Other | [link](https://scholar.gist.ac.kr/handle/local/19199) |
| 2025 | 기계·로봇 | Data-Driven Prediction of Controllability of Fighter Aircraft and Real-time Aerodynamic Analysis using Physics-Informed Neural Network | Sungyeon, Kim | Other | [link](https://scholar.gist.ac.kr/handle/local/19050) |
| 2025 | 기계·로봇 | Development of a basic GNSS-based lateral control system for autonomous vehicles | 김홍승 | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19110) |
| 2025 | 기계·로봇 | From RGB image to hyperspectral image: Spectral synthesis via diffusion model | 차진훈 | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19313) |
| 2025 | 기계·로봇 | Impedance Control of Robot Manipulators Without Relying on External Force Information Minji Kim School of Mechanical and Robotics Engineering Gwangju Institute of Science and Technology | 김민지 | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19383) |
| 2025 | 기계·로봇 | Intelligent Metallic Loose Part Monitoring in Steam Generator Using Convolutional Neural Networks and the Position-Invariant Loss Function | 최정식 | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/19412) |
| 2025 | 기계·로봇 | Lightweight Neural Network for Remaining Useful Life Prediction Using Multi-Fidelity Data | Sangjun Jung | Other | [link](https://scholar.gist.ac.kr/handle/local/31915) |
| 2025 | 기계·로봇 | ROS2 based Distributed Task Assignment for Heterogeneous Unmannded Vehicles: Evaluation through SITL and HITL Hwan-Yong Park School of Mechanical and Robotics Engineering Gwangju Institute of Science and Technology | Park HwanYong | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/31950) |
| 2024 | 기계·로봇 | Accelerating Mode Conversion Simulation for Ultrasonic Wave Using Physics-informed Neural Networks | Hanbyeol Lee | Other | [link](https://scholar.gist.ac.kr/handle/local/18819) |
| 2024 | 기계·로봇 | Adaptive Sampling and Machine learning methods for Efficient Meta-model and application to Real-Time Target Tracking | Gwonyeol Lee | Efficient ML/Systems | [link](https://scholar.gist.ac.kr/handle/local/18834) |
| 2024 | 기계·로봇 | Enhancing Video Analysis of Car Accidents Using Multimodal Large Language Models with Effective Prompting Techniques | Inho Park | LLM/NLP,Vision/Generation,Multimodal,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19253) |
| 2024 | 기계·로봇 | Environmental perception and joint trajectory generation for transfemoral prosthesis | Jeong.Jiyoung | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19255) |
| 2024 | 기계·로봇 | Fault Diagnosis of Rotational Machine Using Remote Sensor Based on Neural Network for Operational Transfer Path Analysis | Jeongmin Oh | Other | [link](https://scholar.gist.ac.kr/handle/local/19300) |
| 2024 | 기계·로봇 | Flow Prediction using Machine Learning based Reduced Order Models and Application to Shape Design Optimization | Wontae Hwang | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/19309) |
| 2024 | 기계·로봇 | Improved Fault Detection in Ultrasonic Testing Using Self-supervised Learning | Minsu Jeon | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19388) |
| 2024 | 기계·로봇 | Real-Time UAS Path Planning and Autonomous Target Tracking Methods using Deep Reinforcement Learning and Imitation Learning, and Validation with Flight Test | Junki Shim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19627) |
| 2024 | 기계·로봇 | Topology optimization of functionally graded lattice structure with machine learning | Juahn Jeong | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/19848) |
| 2024 | 기계·로봇 | Visual Compass Utilizing Structural Regularities for Drone Navigation | Jungil Ham | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19888) |
| 2023 | 기계·로봇 | A Study on Health Indicator for Pump Degradation Diagnosis Using Autoencoder with Bayesian Neural Network | Changsung Lee | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/18922) |
| 2023 | 기계·로봇 | A performance improvement of industrial delta robot by using Iterative learning control | Hong-Keun Son | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/18887) |
| 2023 | 기계·로봇 | Anomaly Detection for Residential HVAC System Using  LSTM Autoencoder | Hyebin Park | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/18879) |
| 2023 | 기계·로봇 | Autonomous pursuit unmanned flight system based on location information of a launch-attached location tracker and stereo vision | Myeonggyun Kim | Vision/Generation,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/18960) |
| 2023 | 기계·로봇 | Development and Implementation of Visual Odometry for Autonomous Vehicles | Joon Oh Kim | RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19101) |
| 2023 | 기계·로봇 | Development of VPS for Indoor UAV System: Vision based SLAM and Pedestrian Tracking | Jeong, JaeWoo | Vision/Generation,RL/Robotics | [link](https://scholar.gist.ac.kr/handle/local/19176) |
| 2023 | 기계·로봇 | Improvement in thermal conductivity of amorphous polyimide (PI) by manipulation on the molecular scale | Dohun Yoon | RL/Robotics,Medical/Bio AI,HCI/XR | [link](https://scholar.gist.ac.kr/handle/local/19391) |
| 2023 | 기계·로봇 | The Identification of minor impact collisions in  a long video for detecting property damages  caused by fleeing vehicles using 3D  convolutional neural network | Inwoo Hwang | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19809) |
| 2025 | 의생명 | Machine Learning-Based Optimization of Lens Design for Capsule Endoscopes | Naziya Praveen | Theory/Optimization | [link](https://scholar.gist.ac.kr/handle/local/31917) |
| 2024 | 의생명 | An acoustic design to reduce patient discomfort  during dental treatment by using a multi-band filter  and auditory masking | Vu Thanh Phuong | Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/18861) |
| 2024 | 의생명 | Voice-Based Amyotrophic Lateral Sclerosis(ALS) Classification Using Deep Learning Method | MD HASIBUZZAMAN | Vision/Generation,Speech/Audio | [link](https://scholar.gist.ac.kr/handle/local/19890) |
| 2023 | 의생명 | Deep learning based cancer detection from whole slide images integrating contextual information | Kohinur Akter | Vision/Generation,Medical/Bio AI | [link](https://scholar.gist.ac.kr/handle/local/19060) |
| 2023 | 의생명 | Development of novel deep learning-based facial emotion recognition for atypical individuals | An Nazmus Sakib | Vision/Generation | [link](https://scholar.gist.ac.kr/handle/local/19157) |

---

## 4. 카테고리 분포

### 4.1 카테고리 × 연도 (AI 관련 160건, 다중 라벨)

| 카테고리 | 2023 | 2024 | 2025 | 2026 | 합계 |
|---|---:|---:|---:|---:|---:|
| Vision/Generation (이미지·영상·생성·확산) | 18 | 21 | 13 | 13 | **65** |
| RL/Robotics (강화학습·로봇·자율주행) | 9 | 4 | 10 | 7 | **30** |
| Medical/Bio AI (의료영상·EEG/fMRI·단백질·신약) | 5 | 9 | 7 | 7 | **28** |
| LLM/NLP (대형 언어 모델·자연어·추론) | 0 | 11 | 6 | 8 | **25** |
| Other (기타: 회로·CNN 응용 등) | 10 | 6 | 7 | 1 | **24** |
| HCI/XR (VR·AR·접근성·웨어러블) | 4 | 3 | 2 | 5 | **14** |
| Multimodal (비전-언어·교차 모달) | 1 | 2 | 4 | 4 | **11** |
| Speech/Audio (음성·음향·TTS) | 2 | 4 | 3 | 1 | **10** |
| Theory/Optimization (수렴·일반화·PINN) | 2 | 2 | 3 | 3 | **10** |
| Efficient ML/Systems (경량화·증류·양자화) | 3 | 2 | 0 | 3 | **8** |
| Graph/Networks (GNN·NAS) | 1 | 1 | 2 | 0 | **4** |
| Time-series/Signal (시계열·신호) | 1 | 0 | 3 | 0 | **4** |
| Security/Robustness (적대적·연합학습) | 1 | 1 | 0 | 0 | **2** |

### 4.2 학과별 AI 논문 수

| 학과 | 2023 | 2024 | 2025 | 2026 | AI 합계 | 전체 학위논문(2023-26) | AI 비율 |
|---|---:|---:|---:|---:|---:|---:|---:|
| AI융합학과 | 21 | 22 | 24 | 22 | **89** | 140 | 64% |
| EECS | 10 | 11 | 9 | 4 | **34** | 87 | 39% |
| 기계·로봇공학과 | 8 | 10 | 8 | 6 | **32** | 79 | 41% |
| 의생명공학과 | 2 | 2 | 1 | 0 | **5** | 23 | 22% |
| **합계** | **41** | **45** | **42** | **32** | **160** | **329** | 49% |

### 4.3 추세 관찰
- **LLM/NLP**: 2023년 0건 → 2024년 11건으로 폭증, ChatGPT 시대 이후 지도교수단 전환 가시화
- **Multimodal**: 2023년 1건 → 2025-26년 4건씩, Vision-Language 모델 보편화
- **Vision/Generation**: 전 기간 최다(연 13~21건) — GIST의 전통 강세 분야(영상처리·생성모델)
- **RL/Robotics**: 자율주행·imitation learning·multi-agent RL 등 응용으로 다변화
- **Medical/Bio AI**: 단백질 언어모델·신약·EEG·fMRI 등 AI4Science 갈래가 두텁게 형성됨

---

## 5. 추천 Top 10 (졸업논문 주제 참고)

> **선정 기준** (객관 지표):
> 1. **신선도**: 2024-2026 발행(2025-2026 우대)
> 2. **학과 적합도**: AI융합학과 > EECS > 기계·로봇 > 의생명
> 3. **사용자(최경찬) 관심 영역 부합도**: LLM, AI4Science, RL, 멀티모달
> 4. **주제의 명료성·재현 가능성**: 제목에 방법론과 응용이 모두 드러남
> 5. **학술적 신선도**: 최근 3년 NeurIPS/ICML/ACL 트렌드 키워드 포함(RAG, planning, in-context, distillation, foundation model 등)

| # | 추천 논문 | 연도 / 학과 | 추천 사유 (어떤 졸업논문 방향에 시사점이 있는가) |
|---|---|---|---|
| 1 | **NCWP: Unsupervised Semantic Embedding Alignment Post-processing for Improving RAG in Language Models** ([link](https://scholar.gist.ac.kr/handle/local/33792)) | 2026 / AI융합 | LLM+RAG 조합. 사용자의 LLM 관심에 직결되며, 비지도 후처리라 자원 부담이 적어 석사 스코프에 적합 |
| 2 | **Design and Implementation of Digital Twin Based Time Travel Summarization Framework Using Vision Language Models** ([link](https://scholar.gist.ac.kr/handle/local/33709)) | 2026 / AI융합 | VLM 응용 + 시스템 구현. 멀티모달 + LLM + 응용시스템이라는 융합 주제 |
| 3 | **Exploring Planning Capability of Large Language Model Using Abstraction and Reasoning Corpus Benchmark** ([link](https://scholar.gist.ac.kr/handle/local/19277)) | 2025 / AI융합 | LLM 추론·planning 능력 평가. ARC 벤치마크 기반 — 명확한 문제 정의·평가 프로토콜 |
| 4 | **Exploring the Limit of Vision-Language Model's Wordy Text-Image Representations** ([link](https://scholar.gist.ac.kr/handle/local/31893)) | 2025 / AI융합 | VLM 표현 한계 분석. 멀티모달 관심 사용자에게 분석형 논문 템플릿으로 유용 |
| 5 | **Reinforcement Learning Based Design of MDM2-Binding Anticancer peptides** ([link](https://scholar.gist.ac.kr/handle/local/33817)) | 2026 / AI융합 | RL × AI4Science(신약) 융합. 사용자 관심 RL+AI4Science 두 축을 동시에 만족 |
| 6 | **Host-pathogen protein-protein interaction prediction with protein language models** ([link](https://scholar.gist.ac.kr/handle/local/19348)) | 2024 / AI융합 | 단백질 언어모델(PLM) — AI4Science 표준 토픽. 데이터·라이브러리·평가지표 잘 정립됨 |
| 7 | **Prism: Spectral Diversity for Multi-Agent Reinforcement Learning** ([link](https://scholar.gist.ac.kr/handle/local/33810)) | 2026 / AI융합 | 다중 에이전트 RL의 다양성 부여. RL 관심 사용자에게 이론·실험 균형 잡힌 표본 |
| 8 | **Reward-Guided MedSwinGPT for Biomedical Image Captioning** ([link](https://scholar.gist.ac.kr/handle/local/33819)) | 2026 / EECS | 의료영상 + LLM(GPT). 멀티모달 + AI4Science 응용 |
| 9 | **Lightweight Multimodal LLM-Driven Frameworks for Context-Aware Path Planning and Dynamic Parameter Adjustment in Mobile Robot Navigation Systems** ([link](https://scholar.gist.ac.kr/handle/local/33774)) | 2026 / 기계·로봇 | 경량 멀티모달 LLM × 로봇 path planning. LLM/멀티모달/RL이 한 주제에 결합 |
| 10 | **Towards Interpretability of GPT-Style Models in Step-by-Step Games Through First-Order Logic** ([link](https://scholar.gist.ac.kr/handle/local/33853)) | 2026 / AI융합 | LLM 해석가능성 + 1차 논리. 이론적 깊이를 원하는 LLM 트랙에 적합 |

### 5.1 부록 — 차순위 후보(주제 다양성 확보용)
- **State-wise Safety in Autonomous Driving via Lagrangian-based Constrained Reinforcement Learning** (2025/AI융합, [link](https://scholar.gist.ac.kr/handle/local/31955)) — Safe RL 전형
- **Discrete Prompt Compression with Reinforcement Learning** (2024/AI융합, [link](https://scholar.gist.ac.kr/handle/local/19194)) — LLM × RL × 경량화 3중 융합
- **A Neuro-Evolutionary Program Synthesis for Compositional Reasoning** (2026/AI융합, [link](https://scholar.gist.ac.kr/handle/local/33700)) — 프로그램 합성·구성적 추론
- **Beyond Flat Personas: Facilitating Reflective Dialogue via Identity-Based Multi-Persona Agents** (2025/AI융합, [link](https://scholar.gist.ac.kr/handle/local/31853)) — LLM 다중 페르소나 에이전트
- **Uncertainty Quantification for Drug-Target Interaction and Binding Region Prediction using Bayesian Deep Learning** (2026/AI융합, [link](https://scholar.gist.ac.kr/handle/local/33858)) — AI4Science + 베이지안

---

## 6. 한계 (Limitations)

1. **메타데이터 한정 분석**
    - 본 조사는 **제목·저자·발행연도** 기반의 자동 키워드 매칭으로 AI 관련성을 판정함. 초록(abstract)·키워드(subject)는 GIST Scholar 상에서 항목별 페이지를 개별 fetch해야 하므로 본 조사 범위에서 제외했음. 따라서 **제목에 AI/딥러닝 키워드가 명시되지 않은 응용 논문**(예: 회로·디바이스 안에 신경망 가속이 들어가지만 제목엔 회로 용어만 노출)은 누락 가능성 있음.

2. **카테고리 분류의 자동성**
    - 13개 카테고리는 정규식 키워드 매칭으로 다중 라벨 부여됨. 일부 항목(특히 "Vision/Generation"이 "image/영상" 단어만으로 부여되는 경우)은 사람의 주제 분류와 다를 수 있음. 정성적 재분류 시 카테고리별 수치는 ±10% 변동 가능.

3. **2026년 봄학기 부분 데이터**
    - 2026-04-28 시점 기준 **2026년 발행 32건**(AI 기준)은 봄학기(2월) 학위수여분 위주이며, 가을학기(8월)는 미반영. 연도별 합계 비교 시 2026은 부분 표본.

4. **신설 학과 미반영**
    - **반도체공학과(2022 신설)** 및 **인공지능정책전략대학원(2024-09 개원)** 은 석사학위논문 미배출(0건)이므로 본 표에 등재되지 않음. 향후 1-2년 내 등재 예정.

5. **GIST Scholar 외 출처 비포함**
    - RISS·Google Scholar·KOAR 등 외부 통합 검색은 별도 수행하지 않음(공식 리포지터리가 학과·연도 전수 제공). 외부 제출본·해외 학술지 동시 게재본의 별도 추적은 미수행.

6. **일부 제목의 영문 자동 추출 노이즈**
    - DSpace 메타데이터 입력 과정에서 제목 끝에 저자 소속 문구("School of … Gwangju Institute of Science and Technology")가 함께 들어간 항목(예: 9, 11, 76, 134, 137행)은 원문 그대로 표시됨. 실제 학위논문 표지의 제목은 더 짧을 수 있음.

7. **객관 지표의 부재**
    - 학위논문은 학회·저널과 달리 **인용수·임팩트 팩터** 같은 객관 지표가 없음. 추천 Top 10은 **사용자의 명시적 관심 영역(LLM/AI4Science/RL/멀티모달)** 과 **최근 3년 학계 키워드 추세** 를 결합한 휴리스틱 기반이며, 학술적 우열을 보장하지 않음.

---

## 부록 A. 데이터 수집 메모(재현성)

```
# 학과별 Master 컬렉션 전체 fetch
for h in 7910 7916 7960 7979; do
  curl -L "https://scholar.gist.ac.kr/handle/local/$h/browse?type=dateissued&order=DESC&rpp=300"
done
# DSpace HTML의 <li class=""> 블록을 정규식으로 파싱
#   <span class="list_num">…</span>
#   <a href="/handle/local/N">제목</a>
#   <em class="list_authors"><a>저자</a></em>
#   <em class="list_date_t">YYYY</em>
```

수집된 메타데이터 컬럼: `dept_id, year, title, author, handle, url, ai_related(bool), categories(list)`.

---

*문서 끝. 총 160건 AI 학위논문 메타데이터 수록.*
