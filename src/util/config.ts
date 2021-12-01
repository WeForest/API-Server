import { QuestionDTO } from "../app.controller";

export const questions: { [k: string]: QuestionDTO[] } = {
  low: [
    {
      questions_num: "1",
      questions:
        "일반적으로 명령어의 패치사이클중에는 현재 수행하고 있는 명령어의 위치를 가리키고, 실행사이클중에는 바로 다음에 실행할 명령어의 위치를 가리키는 Register는?",
      one_num: "누산기(accumulator)",
      two_num: "프로그램 카운터(program counter)",
      three_num: "명령어 레지스터(instruction register)",
      four_num: "범용 레지스터(general purpose. register)",
      answer: "4",
    },

    {
      questions_num: "2",
      questions:
        "스택 연산에서 데이터를 삽입하거나 삭제하는 동작을 나타내는 것은?",
      one_num: "ADD,SUB",
      two_num: "LOAD,STORE",
      three_num: "PUSH,POP",
      four_num: "MOV,MUL",
      answer: "3",
    },

    {
      questions_num: "3",
      questions:
        "다음 중 제어장치에서 명령어의 실행 사이클에 해당하지 않는 것은?",
      one_num: "인출 주기(fetch cycle)",
      two_num: "직접 주기(direct cycle)",
      three_num: "간접주기(indirect cycle)",
      four_num: "실행 주기(execute cycle)",
      answer: "2",
    },

    {
      questions_num: "4",
      questions: "전가산기 (Full Adder)는 어떤 회로로 구성되는가?",
      one_num: "반가산기 1개와 OR 게이트로 구성된다.",
      two_num: "반가산기 1개와 AND 게이트로 구성된다.",
      three_num: "반가산기 2개와 OR 게이트로 구성된다.",
      four_num: "반가산기 2개와 AND 게이트로 구성된다.",
      answer: "3",
    },

    {
      questions_num: "5",
      questions: "CISC(Complex Instrution Set Computer)의 특징으로 틀린 것은?",
      one_num: "많은 수의 명령어",
      two_num: "다양한 주소지정 방식",
      three_num: "가변 길이 명령어 형식",
      four_num: "단일 사이클의 명령어 실행",
      answer: "4",
    },

    {
      questions_num: "6",
      questions: "EBCDIC 코드는 몇 개의 Zone bit를 갖는가?",
      one_num: "1",
      two_num: "2",
      three_num: "3",
      four_num: "4",
      answer: "4",
    },

    {
      questions_num: "7",
      questions: "가상 메모리를 사용하는 목적으로 가장 옳은 것은?",
      one_num: "주기억 장치의 용량 제한으로 발생하는 문제 해결",
      two_num: "CPU와 주기억 장치 사이의 속도 차이 개선",
      three_num: "대용량 멀티미디어 데이터 보존을 위한 백업",
      four_num: "컴퓨터 부팅에 사용되는 초기화 프로그램 보관",
      answer: "1",
    },

    {
      questions_num: "8",
      questions:
        "다음 회로(감산기 , 보수기 , 누산기, 가산기)와 관련이 있는 장치는?",
      one_num: "연산장치",
      two_num: "제어장치",
      three_num: "기억장치",
      four_num: "입력장치",
      answer: "1",
    },
    {
      questions_num: "9",
      questions:
        "8 bit 를 1 word로 이용하는 컴퓨터에서 op code를 3bit 사용하면 인스트럭션을 몇개 사용할 수 있는가?",
      one_num: "4",
      two_num: "6",
      three_num: "8",
      four_num: "16",
      answer: "3",
    },

    {
      questions_num: "10",
      questions: "(A+1)*(B+1)+C의 논리식을 간단히 한 결과는?",
      one_num: "1",
      two_num: "A",
      three_num: "AB",
      four_num: "B",
      answer: "1",
    },

    {
      questions_num: "11",
      questions:
        "다음과 같은 주소 일부를 접속하거나 계산하여 기억 장치에 접근 시킬 수 있는 주소의 일부분을 생략한 주소 표현 방식은?",
      one_num: "절대 주소",
      two_num: "약식 주소",
      three_num: "생략 주소",
      four_num: "자료 자신",
      answer: "2",
    },

    {
      questions_num: "12",
      questions:
        "묵시적 주소 지정 방식을 사용하는 산술 명령어는 주로 어떤 레지스터의 내용을 사용하여 연산을 수행 하는가?",
      one_num: "PC",
      two_num: "MBR",
      three_num: "AC",
      four_num: "SP",
      answer: "3",
    },

    {
      questions_num: "13",
      questions:
        "제어 논리 장치(CLU)와 산술 논리연산장치(ALU)의 실행 순서를 제어하기 위해 사용하는 레지스터는?",
      one_num: "Flag Register",
      two_num: "Accumulator",
      three_num: "Data Register",
      four_num: "Status Register",
      answer: "1",
    },

    {
      questions_num: "14",
      questions:
        "CPU의 정보처리 속도 단위중 초당 100만개의 명령어를 수행하는 것을 나타내는 단위는?",
      one_num: "MHZ",
      two_num: "KIPS",
      three_num: "MIPS",
      four_num: "LIPS",
      answer: "3",
    },

    {
      questions_num: "15",
      questions:
        "순차적인 주소지정 등에 유리하며, 주소지정에 2개의 레지스터가 사용되는 방식은?",
      one_num: "직접 Addressing",
      two_num: "간접 Addressing",
      three_num: "상대 Addressing",
      four_num: "색인 Addressing",
      answer: "4",
    },

    {
      questions_num: "16",
      questions:
        "개인용 컴퓨터에 주로 사용되고 있는 중앙처리장치는 무엇으로 구성되는가?",
      one_num: "코프로세서",
      two_num: "핸드쉐이킹",
      three_num: "마이크로프로세서",
      four_num: "초고밀도 집적회로",
      answer: "3",
    },

    {
      questions_num: "17",
      questions: "JK 플립플롭에서 J=K=1 일때 출력 동작은?",
      one_num: "Set",
      two_num: "Clear ",
      three_num: "No Change",
      four_num: "Complement",
      answer: "4",
    },

    {
      questions_num: "18",
      questions:
        "스프레스 시트에서 조건을 부여하여 이에 맞는 자료들만 추출하여 표시하는 것을 무엇이라고 하는가?",
      one_num: "정렬",
      two_num: "필터",
      three_num: "매크로",
      four_num: "프리젠테이션",
      answer: "2",
    },

    {
      questions_num: "19",
      questions:
        "관계 데이터베이스에서 하나의 애트리뷰트가 취 할 수있는 같은 타입의 모든 원자값의 집합을 무엇이라고하는가?",
      one_num: "튜플(tuple)",
      two_num: "도메인(domain)",
      three_num: "스키마(schema)",
      four_num: "인스턴스(instance)",
      answer: "2",
    },

    {
      questions_num: "20",
      questions:
        "데이터베이스 제어어(DCL) 중 사용자에게 조작에 대한 권한을 부여하는 명령어는?",
      one_num: "VALUES",
      two_num: "IPTION",
      three_num: "REVOKE",
      four_num: "GRANT",
      answer: "4",
    },
  ],
  middle: [
    {
      questions_num: "1",
      questions:
        "UML 모델에서 한 사물의 명세가 바뀌면 다른사물에 영향을 주며, 일반적으로 한 클래스가다른 클래스를 오퍼레이션의 매개변수로 사용하는 경우에 나타나는 관계는?",
      one_num: "Association",
      two_num: "Dependency",
      three_num: "Realization",
      four_num: "Generalization",
      answer: "2",
      Commentary:
        "한 사물의 명세가 바뀌면 다른 사물에 영향을 주는 관계는 의존 관계(Dependency Relationship)이므로 2번이 정답입니다.",
    },
    {
      questions_num: "2",
      questions:
        "소프트웨어 설계에서 사용되는 대표적인 추상화(Abstraction) 기법이 아닌 것은?",
      one_num: "자료 추상화",
      two_num: "제어 추상화",
      three_num: "과정 추상화",
      four_num: "강도 추상화",
      answer: "4",
      Commentary: `소프트웨어 설계에 사용되는 대표적인 3가지 추상화 기법
  -제어 추상화: 제어의 정확한 메커니즘을 정의하지 않고 원하는 효과를 정하는데 이용하는 방법
  -기능 추상화: 입력 자료를 출력자료로 변환하는 과정을 추상화하는 방법
  -자료 추상화: 자료와 자료에 적용될 수 있는 기능을 함께 정의함으로써 자료 객체를 구성하는 방법`,
    },
    {
      questions_num: "3",
      questions: "객체지향의 주요 개념에 대한 설명으로 틀린 것은?",
      one_num:
        "캡슐화는 상위클래스에서 속성이나 연산을 전달받아 새로운 형태의 클래스로 확장하여 사용하는 것을 의미한다.",
      two_num: "객체는 실세계에 존재하거나 생각할 수 있는 것을 말한다.",
      three_num:
        "클래스는 하나 이상의 유사한 객체들을 묶어 공통된 특성을 표현한 것이다.",
      four_num:
        "다형성은 상속받은 여러 개의 하위 객체들이 다른 형태의 특성을 갖는 객체로 이용될 수 있는 성질이다.",
      answer: "1",
      Commentary: "1. 상속에 대한 설명",
    },
    {
      questions_num: "4",
      questions: "사용자 인터페이스(User Interface)에 대한 설명으로 틀린 것은?",
      one_num:
        "사용자와 시스템이 정보를 주고받는 상호작용이 잘 이루어지도록 하는 장치나 소프트웨어를 의미한다.",
      two_num: "편리한 유지보수를 위해 개발자 중심으로 설계되어야 한다.",
      three_num: "배우기가 용이하고 쉽게 사용할 수 있도록 만들어져야 한다.",
      four_num: "사용자 요구사항이 UI에 반영될 수 있도록 구성해야 한다.",
      answer: "2",
      Commentary:
        "사용자 인터페이스는 개발자 중심이 아닌 사용자가 바라보는 관점으로 쉽게 알아볼 수 있도록 설계되어야 한다.",
    },
    {
      questions_num: "5",
      questions: "다음 중 선형 구조로만 묶인 것은?",
      one_num: "스택, 트리",
      two_num: "큐, 데크",
      three_num: "큐, 그래프",
      four_num: "리스트, 그래프",
      answer: "2",
      Commentary: `선형구조: 리스트, 스택, 큐, 덱
  비선형구조: 트리, 그래프
  파일구조: 순차파일, 색인파일, 직접파일`,
    },
    {
      questions_num: "6",
      questions:
        "소프트웨어 테스트에서 검증(Verification)과 확인 (Validation)에 대한 설명으로 틀린 것은?",
      one_num:
        "소프트웨어 테스트에서 검증과 확인을 구별하면 찾고자 하는 결함 유형을 명확하게 하는 데 도움이 된다.",
      two_num:
        "검증은 소프트웨어 개발 과정을 테스트하는 것이고, 확인은 소프트웨어 결과를 테스트 것이다.",
      three_num:
        "검증은 작업 제품이 요구 명세의 기능, 비기능 요구사항을 얼마나 잘 준수하는지 측정하는 작업이다.",
      four_num:
        "검증은 작업 제품이 사용자의 요구에 적합한지 측정하며, 확인은 작업 제품이 개발자의 기대를 충족시키는지를 측정한다.",
      answer: "4",
      Commentary: `검증(Verification): 소프트웨어가 요구사항에 부합하게 구현되었음을 보장하는 활동
  확인(Validation): 소프트웨어가 고객의 의도에 따라 구현되었음을 보장하는 활동`,
    },
    {
      questions_num: "7",
      questions:
        "소스코드 정적 분석(Static Analysis)에 대한 설명으로 틀린 것은?",
      one_num: "소스 코드를 실행시키지 않고 분석한다.",
      two_num: "코드에 있는 오류나 잠재적인 오류를 찾아내기 위한 활동이다.",
      three_num: "하드웨어적인 방법으로만 코드 분석이 가능하다.",
      four_num:
        "자료 흐름이나 논리 흐름을 분석하여 비정상적인 패턴을 찾을 수 있다.",
      answer: "3",
      Commentary: `소스코드 정적 분석
  - 프로그램을 실행 시키지 않고 코드를 분석하는 방법
  - 코드 내에 존재하는 보안 취약점, 잠재적 결함, 위험 등을 발견 가능
  - 규칙과 흐름에 맞게 코드가 올바르게 작성되어 있는지 점검`,
    },
    {
      questions_num: "8",
      questions:
        "테스트 케이스 자동 생성 도구를 이용하여 테스트 데이터를 찾아내는 방법이 아닌 것은?",
      one_num: "스터브(Stub)와 드라이버(Driver)",
      two_num: "입력 도메인 분석",
      three_num: "랜덤(Random) 테스트",
      four_num: "자료 흐름도",
      answer: "1",
      Commentary: `테스트 수행 도구
  : 자료 흐름도, 기능 테스트, 입력 도메인 분석, 랜덤 테스트
  
  스터브(Stub)와 드라이버(Driver)는 통합 테스트 시 사용되는 것
  스터브(Stub)는 하향식 테스트에 사용되는 테스트용 임시 모듈
  드라이브(Drive)는 상향식 테스트에 사용되는 테스트 가동기`,
    },
    {
      questions_num: "9",
      questions:
        "관계형 데이터베이스에서 릴레이션 내의 속성들의 집합으로 구성된 키로써, 릴레이션을 구성하는 모든 튜플에 유일성은 만족하지만 최소성은 만족하지 못하는 키(Key)는?",
      one_num: "후보키",
      two_num: "대체키",
      three_num: "슈퍼키",
      four_num: "외래키",
      answer: "3",
      Commentary: "슈퍼키 : 유일성을 만족하는 속성 또는 속성들의 집합",
    },
    {
      questions_num: "10",
      questions: "다음 중 SQL에서의 DDL 문이 아닌 것은?",
      one_num: "CREATE",
      two_num: "DELETE",
      three_num: "ALTER",
      four_num: "DROP",
      answer: "2",
      Commentary: "DELETE는 UPDATE, SELECT, INSERT와 같은 DML 문",
    },
    {
      questions_num: "11",
      questions: "C Class에 속하는 IP address는?",
      one_num: "200.168.30.1",
      two_num: "10.3.2.1 4",
      three_num: "225.2.4.1",
      four_num: "172.16.98.3",
      answer: "1",
      Commentary: "C class에 속하는 ip 주소 범위: 192.0.0.0 ~ 223.255.255.255",
    },
    {
      questions_num: "12",
      questions:
        "귀도 반 로섬(Guido van Rossum)이 발표한 언어로 인터프리터 방식이자 객체지향적이며, 배우기 쉽고 이식성이 좋은 것이 특징인 스크립트 언어는?",
      one_num: "C++",
      two_num: "JAVA",
      three_num: "C#",
      four_num: "Python",
      answer: "4",
      Commentary: "",
    },
    {
      questions_num: "13",
      questions:
        "모듈의 독립성을 높이기 위한 결합도(Coupling)와 관련한 설명으로 틀린 것은?",
      one_num:
        "오류가 발생했을 때 전파되어 다른 오류의 원인이 되는 파문 효과(Ripple Effect)를 최소화해야 한다.",
      two_num:
        "인터페이스가 정확히 설정되어 있지 않을 경우 불필요한 인터페이스가 나타나 모듈 사이의 의존도는 높아지고 결합도가 증가한다.",
      three_num:
        "모듈들이 변수를 공유하여 사용하게 하거나 제어 정보를 교류하게 함으로써 결합도를 낮추어야 한다.",
      four_num:
        "다른 모듈과 데이터 교류가 필요한 경우 전역변수(Global Variable)보다는 매개변수(Parameter)를 사용하는 것이 결합도를 낮추는 데 도움이 된다.",
      answer: "3",
      Commentary:
        "모듈들이 변수를 공유하여 사용하게 하거나 제어 정보를 교류하게 하면 모듈 간의 결합도가 높아집니다.",
    },
    {
      questions_num: "14",
      questions: "TCP헤더와 관련한 설명으로 틀린 것은?",
      one_num:
        "순서번호(Sequence Number)는 전달하는 바이트마다 번호가 부여된다.",
      two_num:
        "수신번호확인(Acknowledgement Number)은 상대편 호스트에서 받으려는 바이트의 번호를 정의한다.",
      three_num:
        "체크섬(Checksum)은 데이터를 포함한 세그먼트의 오류를 검사한다.",
      four_num:
        "윈도우 크기는 송수신 측의 버퍼 크기로 최대크기는 32767bit 이다.",
      answer: "4",
      Commentary:
        "TCP 헤더에 있는 Window size는 16비트로 2^16 = 65535byte = 64KB",
    },
    {
      questions_num: "15",
      questions: "모듈화(Modularity)와 관련한 설명으로 틀린 것은?",
      one_num:
        "소프트웨어의 모듈은 프로그래밍 언어에서 Subroutine, Function 등으로 표현될 수 있다.",
      two_num:
        "모듈의 수가 증가하면 상대적으로 각 모듈의 크기가 커지며, 모듈 사이의 상호교류가 감소하여 과부하(Overload) 현상이 나타난다.",
      three_num:
        "모듈화는 시스템을 지능적으로 관리할 수 있도록 해주며, 복잡도 문제를 해결하는 데 도움을 준다.",
      four_num: "모듈화는 시스템의 유지보수와 수정을 용이하게 한다.",
      answer: "2",
      Commentary: `모듈의 수가 "감소"하면 상대적으로 각 모듈의 크기가 커지고,
  모듈의 수가 "증가"하면 상대적으로 각 모듈의 크기가 작아집니다.`,
    },
    {
      questions_num: "16",
      questions: "C언어에서의 변수 선언으로 틀린 것은?",
      one_num: "int else;",
      two_num: "int Test2;",
      three_num: "int pc;",
      four_num: "int True;",
      answer: "1",
      Commentary: "else는 예약어로 변수명으로 사용할 수 없음",
    },
    {
      questions_num: "17",
      questions:
        "침입탐지 시스템(IDS : Intrusion Detection System)과 관련한 설명으로 틀린 것은?",
      one_num:
        "이상 탐지 기법은 Signature Base나 Knowledge Base라고도 불리며 이미 발견되고 정립된 공격 패턴을 입력해두었다가 탐지 및 차단한다.",
      two_num:
        "HIDS는 운영체제에 설정된 사용자 계정에 따라 어떤 사용자가 어떤 접근을 시도하고 어떤 작업을 했는지에 대한 기록을 남기고 추적한다.",
      three_num: "NIDS로는 대표적으로 Snort가 있다.",
      four_num:
        "외부 인터넷에 서비스를 제공하는 서버가 위치하는 네트워크인 DMZ에는 IDS가 설치될 수 있다.",
      answer: "1",
      Commentary:
        "이상 탐지 기법은 Signature Base나 Knowledge Base라고도 불리며 이미 발견되고 정립된 공격 패턴을 입력해두었다가 탐지 및 차단한다.",
    },
    {
      questions_num: "18",
      questions:
        "Cocomo model 중 기관 내부에서 개발된 중소규모의 소프트웨어로 일괄 자료 처리나 과학기술계산용, 비즈니스 자료 처리용으로 5만 라인이하의 소프트웨어를 개발하는 유형은?",
      one_num: "Embeded",
      two_num: "Organic",
      three_num: "Semi-detached",
      four_num: "Semi-embeded",
      answer: "2",
      Commentary:
        "Organoc: 5만 라인 이하의 프로젝트에 적합, Semidetached: 30만 라인 이하의 프로젝트에 적합, Embeded: 30만 라인 이하의 프로젝트에 적합",
    },
    {
      questions_num: "19",
      questions:
        "시스템에 저장되는 패스워드들은 Hash 또는 암호화 알고리즘의 결과 값으로 저장된다. 이때 암호공격을 막기 위해 똑같은 패스워드들이 다른 암호 값으로 저장되도록 추가되는 값을 의미하는 것은?",
      one_num: "Pass flag",
      two_num: "Bucket",
      three_num: "Opcode",
      four_num: "Salt",
      answer: "4",
      Commentary: "",
    },
    {
      questions_num: "20",
      questions:
        "TCP/IP 기반 네트워크에서 동작하는 발행-구독 기반의 메시징 프로토콜로 최근 IoT 환경에서 자주 사용되고 있는 프로토콜은?",
      one_num: "MLFQ",
      two_num: "MQTT",
      three_num: "Zigbee",
      four_num: "MTSP",
      answer: "2",
      Commentary: "",
    },
  ],
  high: [
    {
      questions_num: "1",
      questions: "객체지향 분석 기법과 관련한 설명으로 틀린것은?",
      one_num: "동적 모델링 기법이 사용될 수 있다.",
      two_num:
        "기능 중심으로 시스템을 파악하며 순차적인처리가 중요시되는 하향식(Top-down)방식으로 볼 수 있다.",
      three_num:
        "데이터와 행위를 하나로 묶어 객체를 정의내리고 추상화시키는 작업이라 할 수 있다.",
      four_num:
        "코드 재사용에 의한 프로그램 생산성 향상 및 요구에 따른 시스템의 쉬운 변경이 가능하다.",
      answer: "2",
      Commentary:
        "2번은 순차적인 하향식 처리방식이기 때문에 절차지향 분석 기법",
    },
    {
      questions_num: "2",
      questions:
        "분산 시스템에서의 미들웨어 (Middleware)와 관련한 설명으로 틀린 것은?",
      one_num:
        "분산 시스템에서 다양한 부분을 관리하고 통신하며 데이터를 교환하게 해주는소프트웨어로 볼 수 있다.",
      two_num: "위치 투명성(Location Transparency)을 제공한다.",
      three_num:
        "분산 시스템의 여러 컴포넌트가 요구하는 재사용가능한 서비스의 구현을 제공한다.",
      four_num: "애플리케이션과 사용자 사이에서만 분산서비스를 제공한다.",
      answer: "4",
      Commentary:
        "미들웨어 : 복잡한 이기종 환경에서 응용 프로그램과 운영환경 간에 원만한 통신을 이룰 수 있게 해주는 소프트웨어",
    },
    {
      questions_num: "3",
      questions:
        "응용프로그램의 프로시저를 사용하여 원격 프로시저를 로컬 프로시저처럼 호출하는 방식의 미들웨어는?",
      one_num: "MOM(Message Oriented Middleware)",
      two_num: "RPC(Remote Procedure Call)",
      three_num: "ORB(Object Request Broker)",
      four_num: "WAS(Web Application Server)",
      answer: "2",
      Commentary: "RPC : 원격 프로시저 호출",
    },
    {
      questions_num: "4",
      questions: "바람직한 소프트웨어 설계 지침이 아닌 것은?",
      one_num: "모듈의 기능을 예측할 수 있도록 정의한다.",
      two_num: "이식성을 고려한다.",
      three_num: "적당한 모듈의 크기를 유지한다.",
      four_num: "가능한 모듈을 독립적으로 생성하고 결합도를 최대화한다.",
      answer: "4",
      Commentary: "결합도는 최소화해야한다.",
    },
    {
      questions_num: "5",
      questions:
        "하향식 통합시험을 위해 일시적으로 필요한 조건만을 가지고 임시로 제공되는 시험용 모듈은?",
      one_num: "Stub",
      two_num: "Driver",
      three_num: "Procedure",
      four_num: "Function",
      answer: "1",
      Commentary:
        "주요 제어 모듈은 작성된 프로그램을 사용하고, 주요 제어 모듈의 종속 모듈들은 스텁(Stub)으로 대체한다.",
    },
    {
      questions_num: "6",
      questions:
        "그래프의 특수한 형태로 노드(Node)와 선분(Branch)으로 되어 있고, 정점 사이에 사이클(Cycle)이 형성되어 있지 않으며, 자료 사이의 관계성이 계층 형식으로 나타나는 비선형 구조는?",
      one_num: "tree",
      two_num: "network",
      three_num: "stack",
      four_num: "distributed",
      answer: "1",
      Commentary: "비선형구조:트리, 그래프",
    },
    {
      questions_num: "7",
      questions: "디지털 저작권 관리(DRM)에 사용되는 기술요소가 아닌 것은?",
      one_num: "키관리",
      two_num: "방화벽",
      three_num: "암호화",
      four_num: "크랙방지",
      answer: "2",
      Commentary:
        "디지털 저작권 관리의 기술요소 : 암호화/키관리/암호화 파일생성/식별기술/저작권 표현/정책관리/크랙방지/인증",
    },
    {
      questions_num: "8",
      questions:
        "병행제어의 로킹(Locking) 단위에 대한 설명으로 옳지 않은 것은?",
      one_num: "데이터베이스, 파일, 레코드 등은 로킹 단위가 될 수 있다.",
      two_num: "로킹 단위가 작아지면 로킹 오버헤드가 증가한다.",
      three_num: "한꺼번에 로킹할 수 있는 단위를 로킹단위라고 한다.",
      four_num: "로킹 단위가 작아지면 병행성 수준이 낮아진다.",
      answer: "4",
      Commentary:
        "로킹 단위가 작으면 : 오버헤드 증가, 병행성 수준 높음, 데이터베이스 공유도 증가",
    },
    {
      questions_num: "9",
      questions: "다음 중 응집도가 가장 높은 것은?",
      one_num: "절차적 응집도",
      two_num: "순차적 응집도",
      three_num: "우연적 응집도",
      four_num: "논리적 응집도",
      answer: "2",
      Commentary: "기능적-순차적-교환적-절차적-시간적-논리적-우연적",
    },
    {
      questions_num: "10",
      questions: "정보 보안을 위한 접근통제 정책 종류에 해당하지 않는 것은?",
      one_num: "임의적 접근 통제",
      two_num: "데이터 전환 접근 통제",
      three_num: "강제적 접근 통제",
      four_num: "역할 기반 접근 통제",
      answer: "2",
      Commentary:
        "정보보안을 위한 접근통제 정책 종류 : 1.임의적 접근통제정책, 2.강제적 접근통제정책, 3.역할기반 접근통제정책",
    },
  ],
};
