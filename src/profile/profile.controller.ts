import { Controller, Get, Param, Patch, Headers, Body } from "@nestjs/common";

import { ProfileService } from "./profile.service";
import {
  ProfileInterface,
  UpdateProfileDataInterface,
} from "./DTO/profile.dto";
import { getSubByToken } from "src/util/token";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(":nickname")
  async profileJoin(
    @Param("nickname") nickname: string
  ): Promise<ProfileInterface | { message: string }> {
    const result = await this.profileService.getProfileByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return datas;
  }

  @Patch("update")
  async profileUpdate(
    @Headers("authorization") accessToken: string,
    @Body() body: UpdateProfileDataInterface
  ): Promise<any> {
    const sub = getSubByToken(accessToken);

    const _ = await this.profileService.updateProfileByAccessToken({
      sub,
      updateData: body,
    });
  }
}
