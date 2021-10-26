import { Controller, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

import { AccountService } from "./account.service";
import { LoginReq, LoginRes, LoginReturnValue } from "./DTO/login.dto";

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("/login")
  async login(
    @Req() request: Request,
    @Res() res: Response
  ): Promise<LoginRes> {
    const body: LoginReq = request.body;
    const result: LoginReturnValue = await this.accountService.login(
      body.token
    );
    res.status(result.status);
    const { token, success, message } = result;
    return { token, success, message };
  }
}
