import {
  Controller,
  Get,
  Param,
  Patch,
  Headers,
  Body,
  Post,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";

import { ProfileService } from "./profile.service";
import {
  FileUploadDto,
  FileUploadIsSuccess,
  ProfileInterface,
  UpdateProfileDataDTO,
} from "./profile.dto";
import { getSubByToken } from "src/util/token";
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { UserDTO } from "./profile.dto";
import { FileInterceptor } from "@nestjs/platform-express";

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

  @Get(":nickname/follower")
  @ApiOperation({
    summary: "팔로워 조회",
    description: "팔로워를 조회해드립니다",
  })
  @ApiOkResponse({ description: "성공 시", type: [UserDTO] })
  async followerJoin(
    @Param("nickname") nickname: string
  ): Promise<UserDTO | { message: string }> {
    const result = await this.profileService.getFollowerByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return { ...datas.followers, message };
  }

  @Get(":nickname/following")
  @ApiOperation({
    summary: "팔로잉 조회",
    description: "팔로잉을 조회해드립니다",
  })
  @ApiOkResponse({ description: "성공 시", type: [UserDTO] })
  async followingJoin(
    @Param("nickname") nickname: string
  ): Promise<UserDTO | { message: string }> {
    const result = await this.profileService.getFollowingByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return { ...datas.following, message };
  }

  @Post(":nickname")
  @ApiOperation({
    summary: "팔로우하기",
    description: "팔로우하버리기",
  })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
  async followUser(
    @Headers("authorization") token: string,
    @Param("nickname") nickname: string
  ) {
    const sub = getSubByToken(token);
    return this.profileService.followUser(nickname, sub);
  }
  @Patch("update")
  @ApiOperation({
    summary: "프로필 업데이트",
    description: "프로필을 업데이트합니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
  async profileUpdate(
    @Headers("authorization") accessToken: string,
    @Body() body: UpdateProfileDataDTO
  ): Promise<any> {
    const sub = getSubByToken(accessToken);
    return this.profileService.updateProfileByAccessToken({
      sub,
      updateData: body,
    });
  }

  @Post("picture")
  @UseInterceptors(FileInterceptor("file"))
  @ApiBody({
    description: "profile picture update",
    type: FileUploadDto,
  })
  @ApiOkResponse({ description: "성공 시", type: FileUploadIsSuccess })
  async uploadFile(
    @Headers("authorization") accessToken: string,
    @UploadedFile() file
  ): Promise<FileUploadIsSuccess> {
    console.log(file);
    const sub = getSubByToken(accessToken);
    try {
      return {
        success: true,
        message: await this.profileService.uploadProfilePicture(sub, file),
      };
    } catch (e) {
      console.error(e);
      return { success: false, message: "에러 발생, 서버 코드 참조" };
    }
  }
}
