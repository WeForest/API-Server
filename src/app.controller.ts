import { Controller, Get, Post, Headers, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiProperty } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { UserDTO } from "./profile/profile.dto";
import { questions } from "./util/config";
import { getSubByToken } from "./util/token";

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

  @Post("question/check")
  @ApiOperation({ summary: "대충 역량평가 답 갯수 받고 경험치 올려버리기" })
  @ApiOkResponse({ description: "대충 성공 시", type: UserDTO })
  async checkQuestion(
    @Headers("authorization") token: string,
    @Query("ans") answerCount: number
  ) {
    const sub = getSubByToken(token);
    return this.appService.clearQuestion(sub, answerCount);
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
