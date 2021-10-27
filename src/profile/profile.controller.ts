import { Controller, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

import { ProfileService } from "./profile.service";
import { ProfileInterface } from "./DTO/profile.dto";

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post("/profile/:nickname")
  async login(
    @Param("nickname") nickname: string,
    @Res() res: Response
  ): Promise<ProfileInterface | { message: string }> {
    const result = await this.profileService.getProfileByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return datas;
  }
}
