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
  MajorDTO,
  ProfileInterface,
  UpdateProfileDataInterface,
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

  @Get(":major")
  @ApiOperation({
    summary: "전공 컬럼 생성",
    description: "전공 컬럼들을 생성합니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: MajorDTO })
  async addMajor(@Param("major") major: string) {}

  @Post("profile/picture")
  @UseInterceptors(FileInterceptor("file"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "profile picture update",
    type: FileUploadDto,
  })
  async uploadFile(
    @Headers("authorization") accessToken: string,
    @UploadedFile() file
  ): Promise<string> {
    console.log(file);
    const sub = getSubByToken(accessToken);
    return this.profileService.uploadProfilePicture(sub, file);
  }
}
