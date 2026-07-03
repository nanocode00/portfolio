import { Injectable } from '@nestjs/common';
import { PortfolioData } from './portfolio.types';

@Injectable()
export class PortfolioService {
  private readonly portfolioData: PortfolioData = {
    name: '김재훈',
    jobTitle: 'AI · 모바일 · 백엔드를 연결하는 제품 엔지니어',
    tagline: '빠르게 배우고 깊게 파고들어, AI 기술을 실제 제품으로 완성하는 엔지니어',
    keywords: ['AI 제품화', '온디바이스 AI', '임베디드 IoT', '백엔드 데이터 설계'],
    recommendation: {
      label: 'AI Product Engineer',
      title: '기술을 배우는 데서 멈추지 않고, 제품으로 연결합니다.',
      description: 'AI 인식 결과를 모바일 기능으로 연결하고, 필요한 경우 백엔드와 하드웨어까지 확장해 실제 제품을 완성해 왔습니다.'
    },
    projects: [
      {
        id: 'hummingblocks',
        title: 'HummingBlocks',
        subtitle: '시각장애인을 위한 AI 코딩 교육 모바일 앱',
        description: '실물 블록을 스마트폰으로 촬영하면 AI가 배치된 블록을 정교하게 인식하고, 인식 결과를 실행 가능한 음악 데이터로 변환하여 재생하는 앱입니다. 약 1년 동안 기획부터 출시, 피드백 반영까지 직접 담당하며 제품을 완결성 있게 주도했습니다.',
        details: [
          'Android Studio와 Java 기반의 고성능 네이티브 모바일 애플리케이션 개발',
          'PyTorch 기반 YOLOv5 검출 모델을 Android 네이티브 앱 내부에서 실행하기 위해 Chaquopy 라이브러리를 채택 및 환경 임베딩 구축',
          '동작 성능 향상을 위한 알고리즘적 후처리: 예측 결과로 넘어오는 다양한 객체의 클래스, 신뢰도 점수, 바운딩 박스를 좌표 기준으로 정렬하고 임계값에 맞춰 중복을 완벽히 제거하는 NMS(Non-Maximum Suppression) 성격의 알고리즘 작성',
          '인식된 블록 객체들의 물리적 좌표를 논리적 실행 순서와 음악 데이터 구조(악보, MIDI 음원 매핑)로 매핑하는 변환 엔진 설계 및 연동',
          '네이티브 오디오 플레이어를 활용하여 실시간 악기음 합성 및 순차 플레이백 제어 로직 구현',
          '온디바이스 모바일 실행 속도 및 런타임 메모리 효율성을 개선하기 위해 TensorFlow Lite 변환 후 직접 실행하는 빌드 파이프라인 검토 및 프로토타이핑',
          'Google Play 스토어에 정식 출시하여 실사용자 평가 및 버그 보고서를 분석하고 1년간 점진적 업데이트를 수행하며 상용 수준의 완성도 확보'
        ],
        keyMessage: 'AI 모델의 원시(Raw) 추론 데이터를 가공 및 예외 처리하여 실질적인 모바일 네이티브 핵심 제품 기능으로 단단히 연동한 기술적 경험',
        techFlow: [
          '실물 블록 배치 촬영',
          'Chaquopy YOLO 추론',
          '중복 좌표 제거 & 2D 정렬',
          '악보 데이터 변환',
          'MIDI 음원 실시간 재생'
        ],
        techStack: ['Android Studio', 'Java', 'PyTorch', 'Chaquopy', 'YOLO', 'Python', 'OpenCV'],
        placeholderText: 'HummingBlocks 앱 화면 및 AI 인식 처리 흐름',
        placeholderType: 'hummingblocks',
        isHummingBlocks: true,
        isHummingBlocksPlaceholder: true
      },
      {
        id: 'medical-ai',
        title: '의료 AI 플랫폼 현장실습',
        subtitle: '사내 업무 관리 플랫폼 설계 및 백엔드 파이프라인 업무',
        description: '의료 AI 전문 기업에서 실무진과 협업하며 사내 프로젝트 및 업무 진행 상황을 통합적으로 관리하는 플랫폼의 기획 명세서와 백엔드 코어 모델을 정립했습니다. 비즈니스 기획 요구사항이 시스템의 영속성 계층으로 일관되게 구조화되는 과정을 총체적으로 경험했습니다.',
        details: [
          '제품 기획서와 프론트엔드 요구사항 시안을 심층적으로 분석하여 사용자 흐름에 매핑되는 기능 상세 명세서 작성',
          '업무 데이터의 실시간 진행 현황, 업무 계층 구조, 참여 인원 관계를 정확하게 표현하기 위한 관계형 ERD 설계 및 테이블 규격 수립',
          '안정적인 비즈니스 로직 처리를 위해 PostgreSQL 표준에 부합하는 트랜잭션 단위 SQL 작성 및 각 비즈니스 트랜잭션별 DTO 객체 설계',
          '대형 협업 플랫폼인 Jira, Git, Bitbucket, Confluence를 기반으로 한 현업 정규 애자일 스프린트 주기에 밀착 참여하여 일정 조율 및 상호 코드 리뷰 환경 경험',
          'Spring Framework의 계층적 아키텍처(Controller, Service, Repository) 패턴을 학습 프로젝트로 직접 클론 구축하며 대규모 백엔드 구조 학습 병행'
        ],
        keyMessage: '기획서의 화면 요구사항을 논리적이고 정규화된 데이터베이스 구조 및 정교한 백엔드 인터페이스 규격으로 구체화한 설계 역량',
        techStack: ['PostgreSQL', 'Node.js', 'Express', 'Spring (학습)', 'SQL', 'Jira', 'Bitbucket', 'Git'],
        placeholderText: '플랫폼 ERD 및 화면 데이터 연동 명세 구조',
        placeholderType: 'medical',
        isMedicalAI: true,
        isMedicalPlaceholder: true
      },
      {
        id: 'smart-pot',
        title: 'webOS 스마트 화분',
        subtitle: '센서 및 액추에이터를 유기적으로 결합한 임베디드 IoT 화분 시스템',
        description: '실시간 환경 상태(토양 수분, 조도)를 추적하고, 센싱값에 대응해 자동으로 액추에이터(워터 펌프, LED 식물등)를 자율 구동하는 풀스택 IoT 시스템을 빌드했습니다. 하드웨어 전기 소자 제어부터 웹 관리 화면까지 기술 전반을 관통하는 수직 통합을 완성했습니다.',
        details: [
          'Raspberry Pi 4 보드(webOS OSE 탑재)와 Arduino Micro 보드 간의 견고한 UART 시리얼 통신 통신망 구축 및 시리얼 통신 프로토콜 설계',
          '센서값 수집 회로(ADC 포함) 및 전기적 모터 역기전력 방지 보호 모듈을 탑재한 워터 펌프 및 LED 구동 전력 스위칭 회로 직접 하드웨어 빵판(Breadboard) 설계 및 납땜 배선',
          'Arduino에 동작하는 비차단(Non-blocking) 방식 of 센서 폴링 및 액추에이터 구동용 펌웨어 소스코드(C++) 개발',
          'webOS JavaScript Service 백그라운드 데몬 프로세스를 개발하여 센서 데이터를 정기 파싱하고 로컬 파일 시스템 및 외부 AWS 통신 모듈로의 브리지 처리 구현',
          'webOS 디스플레이 터치스크린에 연동되는 모니터링 및 제어용 React 프론트엔드 UI 컴포넌트 일부 개발 및 시스템 통합 테스트 주도'
        ],
        keyMessage: '이질적인 임베디드 물리 하드웨어 계층과 고수준의 웹 소프트웨어 제어판을 통신 프로토콜로 빈틈없이 연결한 융합 엔지니어링 역량',
        techStack: ['webOS OSE', 'Raspberry Pi', 'Arduino', 'React', 'C/C++', 'JavaScript Service', 'AWS'],
        placeholderText: '스마트 화분 센서 및 액추에이터 하드웨어 연결 모듈 구조',
        placeholderType: 'smartpot',
        isSmartPot: true,
        isSmartPotPlaceholder: true
      }
    ],
    skills: [
      {
        id: 'skill-ai',
        category: 'AI · 데이터',
        items: ['PyTorch', 'YOLO v5', 'OpenCV', 'Python', 'NumPy'],
        usage: '모바일 이미지 검출을 위한 객체 인식 모델 연동, 바운딩 박스 정렬 및 오차 제거, 기하학적 이미지 후처리 알고리즘 및 2차원 공간 정렬 구현 가능',
        relatedProjects: ['HummingBlocks'],
        projectIds: ['hummingblocks']
      },
      {
        id: 'skill-mobile',
        category: '모바일',
        items: ['Android Studio', 'Java SDK', 'Chaquopy', 'On-Device AI Execution'],
        usage: 'Android 네이티브 앱 설계 및 스토어 정식 출시, 자바-파이썬 인터프리터 연동 기법을 통한 모바일 내 인공지능 직접 작동 및 실시간 MIDI 오디오 제어',
        relatedProjects: ['HummingBlocks'],
        projectIds: ['hummingblocks']
      },
      {
        id: 'skill-backend',
        category: '백엔드 · 데이터베이스',
        items: ['PostgreSQL', 'SQL', 'Node.js', 'Express', 'Spring (학습 경험)'],
        usage: '사용자 시나리오 기반 ERD 설계, 테이블 관계 매핑, 성능 효율을 고려한 SQL 인덱싱 및 쿼리 최적화, DTO 설계 및 아키텍처 패턴 학습을 통한 백엔드 서버 구축',
        relatedProjects: ['의료 AI 플랫폼 현장실습'],
        projectIds: ['medical-ai']
      },
      {
        id: 'skill-web',
        category: '웹 · 서비스',
        items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'MVC Pattern'],
        usage: 'IoT 모니터링 연동 제어 대시보드 컴포넌트 구현 및 반응형 레이아웃 작성, Handlebars를 통한 서버 사이드 템플릿과 정적 스크립트 결합 설계',
        relatedProjects: ['webOS 스마트 화분'],
        projectIds: ['smart-pot']
      },
      {
        id: 'skill-system',
        category: '시스템 · 하드웨어',
        items: ['Raspberry Pi', 'Arduino', 'webOS OSE', 'C / C++', 'UART 통신 회로 설계'],
        usage: '센서 수집 회로 배선, 트랜지스터 기반 액추에이터 전력 스위칭 제어, 임베디드 하드웨어 제어를 위한 펌웨어(C++) 작성 및 임베디드 운영체제 상의 백그라운드 서비스 탑재',
        relatedProjects: ['webOS 스마트 화분'],
        projectIds: ['smart-pot']
      },
      {
        id: 'skill-collaboration',
        category: '협업',
        items: ['Git', 'Jira', 'Bitbucket', 'Confluence', 'Agile / Sprint'],
        usage: '화면 명세 및 기능 요구사항에 맞춘 하위 태스크 쪼개기, 스프린트 관리 및 플래닝 참여, 형상 관리를 위한 분기 전략(Git Flow) 및 코드 리뷰 수행',
        relatedProjects: ['HummingBlocks', '의료 AI 플랫폼 현장실습', 'webOS 스마트 화분'],
        projectIds: ['hummingblocks', 'medical-ai', 'smart-pot']
      }
    ],
    experiences: [
      {
        id: 'exp-humming',
        period: '2023.03 ~ 2024.02 (약 1년)',
        title: "시각장애인 코딩 교육용 네이티브 앱 'HummingBlocks' 개발 및 운영",
        role: '메인 Android 앱 개발 및 온디바이스 AI 통합 엔지니어',
        tasks: [
          'Android Studio (Java)를 활용한 모바일 앱의 라이프사이클 관리 및 컴포넌트 개발',
          'PyTorch 기반 YOLOv5 모델 임베딩을 위해 Chaquopy 런타임 환경 설정 및 메모리 점유율 개선',
          '인식 왜곡 및 미세 검출 오차를 배제하기 위해 물리적인 2D 좌표 기반의 NMS 및 정렬 후처리 자바 알고리즘 자체 구현',
          '인식된 블록 어레이를 MIDI 음원 인덱싱 및 가변 템포 악보 형식의 시퀀스로 재생하는 커스텀 연동 엔진 설계',
          'Google Play 스토어에 정식 퍼블리싱 후 실사용자의 피드백을 직접 반영한 릴리즈 점검 및 배포 자동화 프로세스 수행'
        ],
        techStack: ['Android SDK', 'Java', 'PyTorch', 'Chaquopy', 'YOLOv5', 'OpenCV', 'Git'],
        learning: 'AI 코어 모델 자체의 뛰어난 정확도도 중요하지만, 사용자가 매끄럽게 체감하는 실제 동작 성능을 완성하기 위해서는 엣지 모바일 기기의 제약 조건 하에서 좌표 왜곡을 정정하고 예측 실패를 안전하게 복구하는 정교한 데이터 후처리가 제품의 성패를 가른다는 것을 체감했습니다.'
      },
      {
        id: 'exp-medical',
        period: '2024.07 ~ 2024.08 (8주)',
        title: '의료 AI 전문 기업 플랫폼 개발 부서 실무 현장실습',
        role: '데이터베이스 설계 및 백엔드 요구사항 구체화 인턴',
        tasks: [
          '실제 유저 화면 기획안과 비즈니스 정책 문서를 정독하여 빈틈없는 시스템 동작 시나리오 및 백엔드 API 기능 상세 규격 작성',
          '업무 흐름, 관계 유형 및 이력 추적을 온전히 대응하는 고도화된 관계형 ERD 설계 및 인덱스 정비',
          '비즈니스 무결성을 충족하기 위한 트랜잭션별 세부 SQL 구문 및 서버-클라이언트 통신용 계층 데이터 교환용 DTO 명세',
          'Jira 스프린트 태스크 수립 및 Bitbucket Pull Request를 거치는 현업 실무진의 코드 리뷰 및 데브옵스 협업 체계 준수',
          'Spring Framework의 IoC/DI, 계층별 분리 패턴을 완벽히 이해하기 위한 자체 백엔드 구축 및 구조 설계 실습 병행'
        ],
        techStack: ['PostgreSQL', 'Node.js', 'Express', 'Spring (학습)', 'Jira', 'Bitbucket', 'Git'],
        learning: '화려한 유저 인터페이스 뒤에 단단하게 정형화된 데이터 아키텍처가 자리 잡아야 비로소 대형 비즈니스 프로세스가 오차 없이 굴러간다는 것을 깨달았고, 기획자와 백엔드 개발자 사이에서 완충적인 다리 역할을 하는 정규 문서 및 명세의 위력을 경험했습니다.'
      },
      {
        id: 'exp-pot',
        period: '2024.09 ~ 2024.12 (1학기)',
        title: "오픈소스 임베디드 플랫폼 연동 'webOS 스마트 화분' 융합 프로젝트",
        role: '임베디드 제어 펌웨어 및 이종 플랫폼 간의 통신 시스템 통합 개발자',
        tasks: [
          'Arduino Micro를 사용하여 다채널 아날로그 센서 수집 및 디지털 릴레이 스위칭을 연동하는 비동기 펌웨어(C++) 코딩',
          'webOS OSE(라즈베리파이 4)와 Arduino 간의 패킷 무손실 직렬 통신(UART) 채널 개설 및 프레임 기반 프로토콜 구축',
          'webOS에서 통신 포트 상태 및 수집 데이터를 다루기 위해 JS Service 데몬 모듈 백그라운드 구동',
          'React 프론트엔드를 활용하여 webOS 시스템 화면에 실시간 센서 변화 추이를 출력하고 즉각 모터를 가동하는 웹 컴포넌트 개발'
        ],
        techStack: ['webOS OSE', 'Raspberry Pi', 'Arduino', 'C/C++', 'React (임베디드 UI)', 'Node.js', 'AWS'],
        learning: '하드웨어의 저수준 물리 한계(전기적 노이즈, 통신 타이밍)와 프론트엔드 웹 UI의 추상화된 고수준 계층을 중계하는 프로토콜 설계를 관통하며, 전체 시스템을 넓게 바라보는 폭넓은 시야와 끝까지 연결해 내는 집요한 트러블슈팅 역량을 길렀습니다.'
      }
    ],
    contact: {
      email: 'rwg0901@naver.com',
      github: 'https://github.com/nanocode00',
      resume: ''
    },
    qnaList: [
      {
        id: 'q-main-project',
        question: '대표 프로젝트가 무엇인가요?',
        answer: '가장 대표적인 프로젝트는 시각장애인을 위한 코딩 교육 모바일 앱인 HummingBlocks입니다. 실물 블록을 배치하고 촬영하면 AI가 블록들의 종류와 위치를 분석하여 이를 실제 실행 가능한 음악 시퀀스로 가공 및 재생해 주는 창의적인 교육 보조 제품입니다. 약 1년 동안 기획부터 설계, 개발, AI 연동, 그리고 Google Play 스토어 정식 출시 후 피드백 업데이트까지 한 사이클을 온전히 끝마치고 운영해 보았습니다.'
      },
      {
        id: 'q-ai-mobile',
        question: 'AI를 모바일 앱에 어떻게 연결했나요?',
        answer: '모바일 현지에서 외부 서버 통신 비용 없이 원활하게 구동하기 위해 Android 네이티브 앱(Java) 내부에 Python 런타임을 임베딩해 주는 Chaquopy 라이브러리를 구축했습니다. 기기에 설치된 PyTorch YOLOv5 가중치 파일을 불러와 촬영 이미지를 직접 실시간 추론하도록 구조화했으며, AI 모델로부터 추출된 원시 바운딩 박스 데이터들을 좌표 기반의 2차원 공간 정렬 알고리즘과 NMS 중복 제거 가공 작업을 거쳐 순차 음악 플레이 로직의 깨끗한 입력값으로 완벽히 통제하여 연결했습니다.'
      },
      {
        id: 'q-backend',
        question: '백엔드 경험은 무엇인가요?',
        answer: '의료 AI 기업 인턴 실습에서 비즈니스 요구사항을 데이터베이스 스키마로 정확하게 치환하는 과정을 담당했습니다. 업무 관리 관계를 고려한 관계형 ERD 설계, 세부 PostgreSQL 쿼리 최적화 및 DTO 명세 작성을 도맡았으며 실무진과의 코드 리뷰를 통해 현업 수준의 구조화 능력을 길렀습니다. 이에 더해 대규모 인프라 아키텍처에서 많이 채택되는 Spring MVC 프레임워크 구조를 학습 프로젝트로 클론 설계하며 백엔드 전반의 설계 이해도를 꼼꼼히 갖추었습니다.'
      },
      {
        id: 'q-troubleshooting',
        question: '문제를 해결한 사례가 있나요?',
        answer: 'HummingBlocks 개발 과정에서 실물 블록을 정밀하게 탐지한 후, 블록이 가로 또는 세로로 완만하게 비뚤어졌을 때 순차 실행 구조가 꼬여 엉뚱한 음악이 연주되는 정렬 왜곡 현상이 발생했습니다. 이를 단순한 모델 튜닝이 아닌 로직 해결 과제로 정의하고, 인식된 모든 객체의 중심점을 구한 뒤, 기울어진 정렬 기준선을 수학적으로 정의하여 이에 수직/수평 투영된 거리 좌표를 정렬하는 커스텀 NMS 및 2차원 보정 정렬 알고리즘을 Java로 독자 구축하여 기울어진 블록 배치 상태에서도 100% 무결한 음악 재생 순서를 보장할 수 있었습니다.'
      },
      {
        id: 'q-tech-stack',
        question: '사용할 수 있는 기술은 무엇인가요?',
        answer: '모바일 영역에서는 Android Studio와 Java SDK 기반 네이티브 개발 능력을 보유하고 있으며, AI 및 데이터 가공 부문에서는 Python, PyTorch, OpenCV, YOLO를 깊게 다룹니다. 백엔드 및 데이터베이스 영역에서는 Node.js, Express, PostgreSQL, 표준 SQL, Spring 프레임워크 계층 구조를 이해하고 있으며, 시스템 영역에서는 Raspberry Pi, Arduino, webOS OSE 상의 C/C++ 제어 펌웨어 코딩 및 시리얼 UART 회로 설계를 직접 결합할 수 있는 실무 융합 역량을 가지고 있습니다.'
      }
    ]
  };

  getPortfolioData(): PortfolioData {
    return this.portfolioData;
  }
}
