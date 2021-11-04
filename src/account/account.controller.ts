import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { ApiTags, ApiOperation, ApiOkResponse } from "@nestjs/swagger";

import { AccountService } from "./account.service";
import { LoginReq, LoginRes, LoginResDTO, LoginReturnValue } from "./login.dto";

@Controller("account")
@ApiTags("계정 관련 API")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("login")
  @ApiOperation({
    summary: "유저 로그인 API",
    description: "첫 로그인 시, 유저를 생성하며, 그 후부터는 로그인만 맡는다.",
  })
  @ApiOkResponse({
    description: "성공적으로 로그인 또는 회원가입이 이루어짐.",
    type: LoginResDTO,
  })
  async login(
    @Body() { token: googleToken }: LoginReq,
    @Res() res: Response
  ): Promise<LoginRes> {
    const result: LoginReturnValue = await this.accountService.login(
      googleToken
    );
    res.status(result.status);
    const { token, success, message } = result;
    return { token, success, message };
  }
}
