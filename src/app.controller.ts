import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { questions } from "./util/config";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: "서버 살아있는지 체크" })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("question")
  @ApiOperation({ summary: "대충 역량평가 값 얻어오기" })
  @ApiOkResponse({ description: "성공 시", type: [QuestionDTO] })
  getQuestion() {
    return questions;
  }
}

export class QuestionDTO {
  @ApiProperty({ description: "문제 넘버" })
  questions_num: string;

  @ApiProperty({ description: "문제 내용" })
  questions: string;

  @ApiProperty({ description: "첫번째 문항" })
  one_num: string;

  @ApiProperty({ description: "두번째 문항" })
  two_num: string;

  @ApiProperty({ description: "세번째 문항" })
  three_num: string;

  @ApiProperty({ description: "네번째 문항" })
  four_num: string;

  @ApiProperty({ description: "답 문항" })
  answer: string;
}
