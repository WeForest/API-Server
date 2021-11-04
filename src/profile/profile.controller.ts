import { Controller, Get, Param, Patch, Headers, Body } from "@nestjs/common";

import { ProfileService } from "./profile.service";
import { ProfileInterface, UpdateProfileDataInterface } from "./profile.dto";
import { getSubByToken } from "src/util/token";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserDTO } from "./profile.dto";

@Controller("profile")
@ApiTags("프로필 관련 API")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(":nickname")
  @ApiOperation({ summary: "프로필 조회", description: "프로필를 조회합니다." })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
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
  @ApiOperation({
    summary: "프로필 업데이트",
    description: "프로필을 업데이트합니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
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
