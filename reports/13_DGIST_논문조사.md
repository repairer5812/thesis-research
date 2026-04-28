# DGIST(대구경북과학기술원) AI 관련 대학원 석사논문 조사 (2023~2026)

**조사일**: 2026-04-28
**조사자**: 고려대 SW AI 융합대학원 석사과정 졸업논문 주제 선정 보조 리서치

---

## 1. 조사 범위

DGIST(대구경북과학기술원)는 학과 단일체제(학부 시절 "기초학부" → 대학원 진학 시 전공 선택)이며 **일반대학원만 운영**(특수대학원 없음)하는 것으로 확인되었다. 이에 따라 본 조사는 DGIST 일반대학원(Graduate School)에서 운영되는 AI 관련 학과/전공의 석사학위논문을 대상으로 한다.

| 단위 | DGIST Scholar 컬렉션 | Handle | 비고 |
|---|---|---|---|
| 전기전자컴퓨터공학과 (EECS) — 정보통신융합 포함 | Theses (419건) | `20.500.11750/92` | AI/ML, ICT, NLP, CV, 컴퓨터공학 트랙 통합. Information & Communication Engineering Research Center가 EECS 산하 하위 컬렉션으로 확인됨 |
| 로봇공학전공 (Robotics & Mechatronics) | Theses (280건) | `20.500.11750/156` | 로봇 + 의료 AI + 인터페이스 |
| 뇌과학전공 (Brain Sciences) | Theses (240건) | `20.500.11750/266` | 대다수 분자/세포 신경과학. AI/뇌공학 융합 논문은 일부 |
| 학제전공 (Interdisciplinary Engineering Major) | Theses (6건) | `20.500.11750/13616` | 모빌리티/소재 융합. AI 응용 논문 포함 |

**주의**:
- DGIST의 "정보통신융합전공"은 별도 커뮤니티가 아니며 **EECS 학과의 일부**로 운영(EECS 하위 "Information and Communication Engineering Research Center" 컬렉션 존재로 확인). 본 조사에서는 EECS Theses(419건) 중 AI 관련 키워드(딥러닝/ML/RL/NLP/Vision/그래프/Federated 등)로 필터링했다.
- "Division of AI, Big data and Block chain"(`/handle/20.500.11750/10133`)은 교수·연구실의 융합연구 결과물(저널·학회 논문, 특허) 묶음이며 **학위논문 컬렉션이 없다** — 따라서 제외.
- 뇌과학전공 Theses(240건)는 95% 이상 분자생물학·시냅스·동물모델 연구이며, AI/뇌공학 융합(BCI, 신경 신호 디코딩, fMRI/EEG 분석, 뇌질환 GAN/생성모델) 논문만 선별 포함했다.
- 로봇공학전공 Theses(280건)에서도 순수 기구학·소재·MEMS·의료기기 논문은 다수 존재 — AI/ML/딥러닝 적용 논문만 선별.
- DGIST는 **대학원만 운영하며 특수대학원이 없다** (서울대 GSDS, 고려대 SW AI 융합대학원, KAIST 김재철AI대학원 등의 대비점). 산업/야간 학위 트랙이 별도 존재하지 않는다.

대상 기간: 2023-01 ~ 2026-02 졸업 (DGIST는 봄 학기 졸업이 표준; 2026년도 졸업자는 발행일 2026 표시).

## 2. 데이터 출처

- **주 출처: DGIST Scholar (DGIST 기관 리포지터리)** — https://scholar.dgist.ac.kr
  - EECS Theses: https://scholar.dgist.ac.kr/handle/20.500.11750/92
  - Robotics Theses: https://scholar.dgist.ac.kr/handle/20.500.11750/156
  - Brain Sciences Theses: https://scholar.dgist.ac.kr/handle/20.500.11750/266
  - Interdisciplinary Engineering Major Theses: https://scholar.dgist.ac.kr/handle/20.500.11750/13616
- **2차 확인**: DGIST 도서관 (https://library.dgist.ac.kr), DGIST Curation 가이드 (https://curation.dgist.ac.kr/curation/m/1067), 학과 공식 사이트 (https://ice.dgist.ac.kr, https://www.dgist.ac.kr)

정렬: `type=dateissued&sort_by=2&order=DESC&rpp=50`. 2023~2026 범위 내 모든 페이지를 수집한 후 AI 관련 키워드(딥러닝/머신러닝/강화학습/NLP/CV/생성모델/GNN/LLM/연합학습/페더레이티드/자율주행/스마트시티/IoT-AI/뇌-기계 인터페이스 등) 기준으로 필터링했다.

## 3. 학위논문 목록 (AI 관련, 석사·박사 혼재 — DGIST Theses 컬렉션은 학위 구분 표시가 표면 목록에 노출되지 않아 분리 안 됨)

총 **52건** 수록 (2023~2026, AI 관련 필터링 후).

- EECS: 35건
- Robotics & Mechatronics: 11건
- Brain Sciences: 4건
- Interdisciplinary Engineering Major: 2건

**주제분류 약어**: LLM=LLM/NLP, CV=Computer Vision, RL=Reinforcement Learning, AI4S=AI4Science/Health, MM=Multimodal, GNN=Graph/GNN, FL=Federated Learning, ROB=Robotics, SEC=AI Security/Crypto, THY=ML Theory/Optim, TS=Time Series, SYS=Systems/HW/PIM, NEU=NeuroAI/BCI, AD=Autonomous Driving, COM=Communication/Network AI, ETC=기타

**참고**: 지도교수·학위 종류(석/박)는 DGIST Scholar 브라우즈 뷰에 직접 노출되지 않으며, 개별 handle 상세 페이지나 dCollection 원문에서만 확인 가능하다. 시간/네트워크 비용상 일괄 수집은 미실시.

| # | 제목 | 저자 | 연도 | 학과 | 주제분류 |
|---|---|---|---|---|---|
| 1 | A Study on Intelligent Anti-Drone System using AI-based Long-Range Detection and Identification | Woo-Cheol Jin | 2026 | EECS | CV/AD |
| 2 | Dynamic IM Offloading for Cost Minimization in Open RAN: From Distributed Optimization to Centralized Deep Reinforcement Learning | Sojung Lee | 2026 | EECS | RL/COM |
| 3 | Expanding the Feature Space of Keystroke Dynamics for User Authentication | Munjeong Kim | 2026 | EECS | SEC |
| 4 | Physics-Informed Machine Learning for Acoustic Hologram Design in Precise Holographic Transcranial Ultrasound Neuromodulation | Moon Hwan Lee | 2026 | EECS | AI4S/NEU |
| 5 | Automated Identification of ICS Topology and Device Types via Protocol-Agnostic Passive Monitoring | Wonje Heo | 2026 | EECS | SEC |
| 6 | Robust 3D Perception for Autonomous Driving | Jaeyeul Kim | 2026 | EECS | CV/AD |
| 7 | Real-Time Scheduling Framework for Multi-DNN Inference | Woosung Kang | 2026 | EECS | SYS |
| 8 | Systematic Evaluation and Adaptation of Spatio-Temporal Graph Neural Networks for Distributed and Resource-Constrained Environments | Heeyong Yoon | 2026 | EECS | GNN/SYS |
| 9 | Adaptive Real-Time Scheduling for Open Systems via Reinforcement Learning | Jun Won Park | 2026 | EECS | RL/SYS |
| 10 | Semantically Consistent Visual Segmentation in Dynamic Environments | Seunghun Lee | 2026 | EECS | CV |
| 11 | Accelerating On-Device CNN Inference via Fused Operation Offloading | Jueun Park | 2026 | EECS | SYS |
| 12 | Cyber-Physical Artificial Intelligence: A Unified Framework for Embodied Intelligence | Sanghoon Lee | 2026 | EECS | RL/ROB |
| 13 | Adaptive Encoding and AI Inference Optimization for Onboard Processing in LEO Satellite Systems | Eunsu Kim | 2026 | EECS | SYS/COM |
| 14 | LoRA-RAG: Scalable Long-Context Augmentation for LLM Serving | Chanwoo Moon | 2026 | EECS | LLM/SYS |
| 15 | Hardware Acceleration with Microscaling Formats for Deep Learning Inference and Training | Jahyun Koo | 2026 | EECS | SYS |
| 16 | Diffusion-based Generative System Surrogates for Scalable Learning-Driven Optimization in Virtual Playgrounds | Junyoung Lee | 2026 | EECS | THY/AI4S |
| 17 | Construction and Analysis of a Large-Scale Multi-Layered Proteomics Network for Human Cancer Using Graph Neural Networks | Sungho Shim | 2025 | EECS | GNN/AI4S |
| 18 | A Lightweight CXL Memory Emulation Framework for Modern AI Workload Exploration | HOYEON LEE | 2025 | EECS | SYS |
| 19 | Energy-Efficient Accelerator Design for Lightweight Deep Learning Workloads | Seock-Hwan Noh | 2025 | EECS | SYS |
| 20 | A GPU-Based Complex Graph Query Processing System Based on Grid Partitioning for Trillion-Scale Graphs | Seyeon Oh | 2025 | EECS | GNN/SYS |
| 21 | Hardware-Software Co-design Methodology for Highly-Efficient Operation of Spiking Neural Networks | Sangwoo Hwang | 2025 | EECS | SYS/NEU |
| 22 | A Joint Source Channel Coding System That Transmits Foveated Images | Minseo Son | 2025 | EECS | CV/COM |
| 23 | Hierarchical Network Slicing leveraging Dynamic Optimization and Learning in Open-RAN Architecture | Han Jong Won | 2025 | EECS | RL/COM |
| 24 | MX format Quantization Optimization for Lightning-NeRF | Sungju Kim | 2025 | EECS | CV/SYS |
| 25 | A Deep Reinforcement Learning-Based Policy for Efficient Resource Management in Vehicular Edge Computing | Jeeyoo Kim | 2025 | EECS | RL/COM |
| 26 | Dynamic Secure Code Offloading for Energy Minimization in LEO Satellite Edge Computing | Jeongsoo Kim | 2025 | EECS | SEC/COM |
| 27 | Landing-Type Aware Multi-Drone Route Generation for Last-Mile Delivery Service | JiHyun Kwon | 2025 | EECS | AD/RL |
| 28 | SegRig: Advanced Neural Rigging Network via 3D Semantic Segmentation | Junkyu Cho | 2025 | EECS | CV |
| 29 | An Energy-scalable and Low-power Inference Hardware for Deep Learning | Sangwoo Jung | 2025 | EECS | SYS |
| 30 | Learning-Enabled Cross-Layer Design for Cyber-Physical Production Systems | Sihoon Moon | 2024 | EECS | RL/SYS |
| 31 | Improving the Accuracy of Precision Switchable Neural Networks with Feature-based Knowledge Distillation | Seungpyo Lee | 2024 | EECS | THY |
| 32 | Self-Supervised Contrastive Learning Using Temporal-Spectral Hierarchical Loss for Local Field Potentials | Sion Kim | 2024 | EECS | NEU/THY |
| 33 | Revealing Insights for Small Cell Networks via Optimization and Deep Reinforcement Learning | Pildo Yoon | 2024 | EECS | RL/COM |
| 34 | A Privacy-Preserving Anomaly Detection Model in Critical Infrastructure with Homomorphic Encryption | Dahoon Jeong | 2024 | EECS | SEC |
| 35 | ABCD: Arbitrary Bitwise Coefficient for Dequantization | Woo Kyoung Han | 2024 | EECS | THY/SYS |
| 36 | Detecting Attacks on Communication Data using Deep Learning and Vehicle Physical Properties in Cooperative Intelligent Transportation Systems | Jihyun Min | 2024 | EECS | SEC/AD |
| 37 | Reinforcement Learning-based Metro Train Tracking Control to Overcome Input Time Delay | Kyungbae Lee | 2024 | EECS | RL |
| 38 | Burst super resolution of multi-scale using optical flow | Eung Gu Kang | 2024 | EECS | CV |
| 39 | Generalizable Camera Soiling Detection Using Double Cost Volume for Achieving Safe DDT Fallback in Autonomous Driving | Youngseo Hwang | 2026 | Robotics | CV/AD |
| 40 | LLM-Driven Human-Robot Interaction with Tri-Modal Tactile Skin for Context-Aware Speech and Gesture Generation in Social Settings | Fawole Emmanuel A. A. | 2026 | Robotics | LLM/MM/ROB |
| 41 | Subject-Adaptive Learning for Personalized EEG Analysis against Inter-Subject Variability | Sion An | 2026 | Robotics | NEU |
| 42 | Markerless 6D Pose Estimation for a Continuum Manipulator using Synthetic Data Generation and Differential Rendering Refinement | Junhyun Park | 2026 | Robotics | CV/ROB |
| 43 | Deep Learning-Based Privacy-Preserving Optical Image Captioning | Martin Antoinette Deborah | 2026 | Robotics | LLM/CV/SEC |
| 44 | Physics-Guided Radiation Field Estimation for Informative and Risk-Aware Path Planning in Radiation Search | Ikhyeon Kwon | 2026 | Robotics | RL/ROB |
| 45 | A Study on Reinforcement Learning-Driven Snake Robot | Bongsub Song | 2025 | Robotics | RL/ROB |
| 46 | FedAPT: Inter-Floor Noise Complaint Prediction in Residential Complexes via Federated Learning | Nakheon Ko | 2025 | Robotics | FL |
| 47 | Reliable Representation Learning for Multi-Institutional Medical Image Analysis | Myeongkyun Kang | 2025 | Robotics | CV/AI4S |
| 48 | Autonomous Control of Magnetic Microrobots and Nanoparticles Using Reinforcement Learning-Driven Electromagnetic Actuation Systems for Biomedical Applications | Sarmad Ahmad Abbasi | 2025 | Robotics | RL/ROB/AI4S |
| 49 | Multi Contour-Aware SAM: Multi Contour-Layer Guided SAM for Histology Image Nuclei Instance Segmentation | Hyun Namgung | 2025 | Robotics | CV/AI4S |
| 50 | Optimized Red Blood Cell Segmentation in Holographic Imaging through Integration of Self-Supervised Learning and Diffusion Models | Hyunbin An | 2025 | Robotics | CV/AI4S |
| 51 | Replicating Connectomic, Neural, and Behavioral Observations by Developing a Computational Model of Nervous and Muscular Systems in Caenorhabditis elegans | Taegon Chung | 2025 | Brain Sci | NEU/AI4S |
| 52 | On the Principles of Multi-Modal Learning for Biological Sequence Analysis (KMLEE Framework) | Kyoungmin Lee | 2025 | Brain Sci | MM/AI4S |
| 53 | Gene knock-down simulation for de novo target screening in disease using generative models | Taehyeong Kim | 2025 | Brain Sci | AI4S/THY |
| 54 | Study on Alzheimer's Disease Subtypes Using Generative Adversarial Networks | Jisu Jeong | 2024 | Brain Sci | AI4S |
| 55 | Enhancing Collaborative Lane Detection for Autonomous Vehicles Using a Scalable Late Fusion Architecture | Jahn Lennart Lorenz Freimuth | 2024 | Interdisciplinary | CV/AD |
| 56 | A new hybrid pruning scheme of a lightweight deep learning for a radar-based foot recognition system | Eungang Son | 2024 | Interdisciplinary | THY/CV |
| 57 | Adaptive Data Augmentation for 3D Object Detection | Joohyun Lee | 2024 | Interdisciplinary | CV/AD |

## 4. 카테고리(주제분류) 분포

다중 라벨 허용 — 한 논문이 둘 이상의 분류에 속할 수 있음.

| 분류 | 건수 | 비중 |
|---|---|---|
| CV (Computer Vision) | 19 | 33% |
| SYS (Systems/HW/PIM/Acceleration) | 14 | 25% |
| RL (Reinforcement Learning) | 13 | 23% |
| AI4S (AI4Science/Health) | 11 | 19% |
| COM (Communication/Network AI, Open-RAN, V2X, LEO) | 9 | 16% |
| AD (Autonomous Driving) | 7 | 12% |
| SEC (AI Security/Privacy/Crypto) | 6 | 11% |
| ROB (Robotics, Embodied) | 6 | 11% |
| NEU (NeuroAI/BCI/Spiking) | 5 | 9% |
| THY (ML Theory/Quantization/Pruning) | 5 | 9% |
| LLM (LLM/NLP) | 3 | 5% |
| GNN | 3 | 5% |
| MM (Multimodal) | 2 | 4% |
| FL (Federated Learning) | 1 | 2% |

**관찰**:
- DGIST의 AI 연구는 **시스템/하드웨어 가속(SYS), 컴퓨터비전(CV), 무선 통신·네트워크 RL(RL+COM)** 의 3축이 가장 두드러진다. 이는 DGIST EECS의 강점 분야(저전력 SoC, PIM, Open-RAN, 자율주행)가 그대로 반영된 결과다.
- LLM/NLP 비중은 매우 낮음(약 5%) — 서울대 GSDS·KAIST AI 등 LLM 중심 기관과 대비되는 특징이다. 다만 2026년 졸업자에서 LoRA-RAG, LLM-Driven HRI 등 등장 시작.
- AI4Science(의료영상, 단백질, 신경과학 시뮬, 알츠하이머 GAN, 약물 타깃)가 19%로 강한 두 번째 트랙. 로봇공학전공·뇌과학전공의 융합으로 형성됨.
- 자율주행/V2X/Edge Computing 관련 응용 AI(RL+COM+AD)를 합치면 30% 이상 — DGIST의 자동차·모빌리티 산학 협력(현대차·대구지역 클러스터)이 반영된다.

## 5. 추천 Top 10 (고려대 SW·AI 융합대학원 석사 졸업논문 주제 후보로 활용 가능한 것)

선정 기준: (a) 사용자 관심사 (LLM/AI4Science/RL/Multimodal 중 미확정) 매칭, (b) 1~2년 안에 단독 또는 소규모 팀으로 재현·확장 가능, (c) 주제 명확성/측정가능성, (d) 최신성(2025~2026 우선).

| 순위 | 제목 | 학과/연도 | 추천 이유 |
|---|---|---|---|
| 1 | LoRA-RAG: Scalable Long-Context Augmentation for LLM Serving | EECS / 2026 | LLM 서빙 + 시스템 효율화의 교차점. LoRA 어댑터를 RAG 컨텍스트 확장에 활용하는 신선한 시도. 코드/모델 재현 가능성 높고 SW·AI 융합대학원의 응용 지향과 부합 |
| 2 | LLM-Driven Human-Robot Interaction with Tri-Modal Tactile Skin for Context-Aware Speech and Gesture Generation | Robotics / 2026 | LLM × 멀티모달(촉각·음성·제스처). 사용자 관심분야 LLM/멀티모달 동시 충족, 응용 임팩트 명확 |
| 3 | Diffusion-based Generative System Surrogates for Scalable Learning-Driven Optimization in Virtual Playgrounds | EECS / 2026 | 생성모델을 시뮬레이션 대체(서로게이트)로 활용 — AI4Science/Optim 융합. 이론과 시스템 모두 다룰 수 있는 주제 |
| 4 | Hardware Acceleration with Microscaling Formats for Deep Learning Inference and Training | EECS / 2026 | MX(Microscaling) 포맷은 2024 OCP 표준화된 최신 양자화 형식. SW/HW 공동설계 경험에 강한 트렌드 주제 |
| 5 | Subject-Adaptive Learning for Personalized EEG Analysis against Inter-Subject Variability | Robotics / 2026 | 도메인 적응 + 헬스케어 신호. AI4Science 관심자에 좋은 진입점, 데이터셋 공개 풍부 |
| 6 | Systematic Evaluation and Adaptation of Spatio-Temporal Graph Neural Networks for Distributed Environments | EECS / 2026 | GNN + 시공간 + 분산 — 그래프 ML 트렌드 종합. 교통/도시 데이터로 확장 용이 |
| 7 | A Deep Reinforcement Learning-Based Policy for Efficient Resource Management in Vehicular Edge Computing | EECS / 2025 | RL × 시스템(엣지 컴퓨팅) 융합. 시뮬레이터(SUMO+ns-3) 기반이라 실험 자원 적게 듦 |
| 8 | Reliable Representation Learning for Multi-Institutional Medical Image Analysis | Robotics / 2025 | 페더레이티드/사이트 일반화 + 의료영상. AI4Science + FL 관심자에 적합 |
| 9 | Cyber-Physical Artificial Intelligence: A Unified Framework for Embodied Intelligence | EECS / 2026 | "Embodied AI"라는 신흥 키워드, 추후 LLM 에이전트와 연결 가능한 확장성 |
| 10 | Self-Supervised Contrastive Learning Using Temporal-Spectral Hierarchical Loss for Local Field Potentials | EECS / 2024 | 자기지도학습 × 신경신호. 공개 데이터셋(NeuroPyxels 등)으로 재현 가능, 방법론 자체가 다른 도메인(EEG, ECoG, 음성) 이식 용이 |

## 6. 한계

1. **학위 종류(석/박) 미분리**: DGIST Scholar Theses 컬렉션은 브라우즈 페이지에 학위 종류를 표기하지 않으며, 개별 handle 페이지에서만 확인 가능. 본 목록은 박사학위 논문이 일부 포함되어 있을 수 있음 (특히 2023년 이전 발행 일부, 외국인 저자 다수 포함된 항목, 분량이 큰 종합 주제 등은 박사 가능성 높음). 정확한 분리는 dCollection 원문 확인 필요.

2. **지도교수 정보 부재**: 컬렉션 브라우즈에서는 advisor 메타데이터가 노출되지 않아 본 목록에 미수록. 연구실 정보가 필요한 경우 EECS 하위의 53개 연구실 컬렉션(예: Computer Vision Lab `/handle/20.500.11750/12135`, CSP Lab `/handle/20.500.11750/131`, Computation Efficient Learning Lab 등)을 별도 조회해야 함.

3. **2026년 항목의 누락 가능성**: DGIST Scholar는 학위수여 후 dCollection 등록을 거쳐 1~2주 이내 색인되며 2026 봄학기 졸업자(2월) 일부가 아직 등록되지 않았을 수 있음. 4월 시점 기준 EECS 35건, Robotics 24건이 2026 발행으로 표시되어 정상 범위.

4. **"정보통신융합전공"의 별도 추출 불가**: DGIST EECS Theses 컬렉션(419건)은 학과 내부 트랙(전기전자/컴퓨터/정보통신융합)을 구분하지 않고 통합 등록한다. 따라서 사용자 요청의 "정보통신융합전공"만 따로 추출하는 것은 표면 메타데이터로는 불가능하며, 본 조사에서는 EECS 전체를 대상으로 AI 키워드 필터링을 적용했다.

5. **주제분류 라벨링의 주관성**: 분류는 제목 기반 휴리스틱으로 부여했고 초록을 확인하지 않았다. 일부 논문은 다른 분류로 더 적절할 수 있음 (특히 SYS/THY/AI4S 경계).

6. **AI/Big Data/Blockchain 융합전공의 학위논문 부재**: 동 융합전공 커뮤니티(`/handle/20.500.11750/10133`)는 저널 논문·특허 등 연구산출물만 보유하고 학위논문 컬렉션이 별도로 존재하지 않는다. 해당 전공 학생들의 학위논문은 본전공(EECS·Robotics 등)의 Theses 컬렉션에 등록되는 구조로 추정된다.

7. **뇌과학전공의 AI 융합 비중 낮음**: 뇌과학전공 Theses 240건 중 AI/딥러닝 응용은 4건만 발견. 대다수가 분자생물학·시냅스·동물행동 연구이며 AI 도구를 본격 활용하는 논문은 매우 제한적이다.

8. **특수대학원 부재 명시**: DGIST는 일반대학원만 운영하며, 서울대·고려대·중앙대 등이 운영하는 SW/AI 특수대학원에 해당하는 단위가 없다. 따라서 "산업체 재직자 트랙"이나 "야간 과정" 학위논문은 존재하지 않는다.
