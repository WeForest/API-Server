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
  ExpLogsDTO,
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

  @Get("log")
  @ApiOperation({
    summary: "경험치 로그 조회",
    description: "경험치 로그를 조회합ㄴ디ㅏ.",
  })
  @ApiOkResponse({ description: "성공 시", type: [ExpLogsDTO] })
  async getExpLogs(@Headers("authorization") token: string) {
    const sub = getSubByToken(token);
    return this.profileService.getExpLogs(sub);
  }

  @Get(":nickname/follower")
  @ApiOperation({
    summary: "팔로워 조회",
    description: "팔로워를 조회해드립니다",
  })
  @ApiOkResponse({ description: "성공 시", type: [UserDTO] })
  async followerJoin(@Param("nickname") nickname: string) {
    const result = await this.profileService.getFollowerByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return { result: datas.followers, message };
  }

  @Get(":nickname/following")
  @ApiOperation({
    summary: "팔로잉 조회",
    description: "팔로잉을 조회해드립니다",
  })
  @ApiOkResponse({ description: "성공 시", type: [UserDTO] })
  async followingJoin(@Param("nickname") nickname: string) {
    const result = await this.profileService.getFollowingByNickname(nickname);

    const { success, message, ...datas } = result;
    if (!success) {
      return { message: message ?? "에러." };
    }
    return { result: datas.following, message };
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

  @Post("un/:nickname")
  @ApiOperation({
    summary: "팔취",
    description: "팔로우 취소해버리기",
  })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
  async unfollowUser(
    @Headers("authorization") token: string,
    @Param("nickname") nickname: string
  ) {
    return this.profileService.unfollowuser(nickname, getSubByToken(token));
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

  @UseInterceptors(FileInterceptor("images", null))
  @Post("conferenc")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "profile picture update",
    type: FileUploadDto,
  })
  @ApiOkResponse({ description: "성공 시", type: UserDTO })
  async addConefenceLog(
    @Headers("authorization") accessToken: string,
    @UploadedFile("file") file
  ) {
    const sub = getSubByToken(accessToken);
    return this.profileService.addConefenceLog(sub, file);
  }

  @UseInterceptors(FileInterceptor("images", null))
  @Patch("picture")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "profile picture update",
    type: FileUploadDto,
  })
  @ApiOkResponse({ description: "성공 시", type: FileUploadIsSuccess })
  async uploadFile(
    @Headers("authorization") accessToken: string,
    @UploadedFile("file") file
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
