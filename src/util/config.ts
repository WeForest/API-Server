import { QuestionDTO } from "../app.controller";

export const questions: QuestionDTO[] = [
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
];
