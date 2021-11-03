import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

import { AccountService } from "./account.service";
import { LoginReq, LoginRes, LoginReturnValue } from "./DTO/login.dto";

@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("login")
  async login(
    @Body() { token: googleToken }: { token: string },
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
