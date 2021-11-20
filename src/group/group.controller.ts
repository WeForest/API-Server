import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Headers,
  Res,
} from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { getSubByToken } from "src/util/token";
import {
  CreateGroupDTO,
  CreateGroupInform,
  CreateGroupResponseDTO,
  GroupDTO,
} from "./group.dto";
import { GroupService } from "./group.service";
import { Response } from "express";
import { StudyGroup } from ".prisma/client";

@Controller("group")
@ApiTags("그룹 관련 API")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(":id")
  @ApiOperation({
    summary: "그룹 가입",
    description: "id값에 해당하는 그룹에 유저를 가입시킵니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: GroupDTO })
  async joinGroupById(
    @Headers("authorization") accessToken: string,
    @Param("id") id: number,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.groupService.joinTheGroup({
      sub: getSubByToken(accessToken),
      id,
    });
  }

  @Patch(":id")
  @ApiOperation({
    summary: "그룹 탈퇴",
    description: "id값에 해당하는 그룹에 유저를 탈퇴시킵니다.",
  })
  @ApiCreatedResponse({ description: "성공 시" })
  async withdrawGroupById(
    @Headers("authorization") accessToken: string,
    @Param("id") id: number
  ) {
    return this.groupService.withdrawGroupById({
      sub: getSubByToken(accessToken),
      id,
    });
  }

  @Post("create")
  @ApiOperation({
    summary: "그룹 생성",
    description: "정보에 맞는 그룹을 생성시킵니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: CreateGroupResponseDTO })
  async createGroup(
    @Headers("authorization") accessToken: string,
    @Body() groupInform: CreateGroupDTO
  ): Promise<CreateGroupResponseDTO> {
    try {
      return {
        success: true,
        group: await this.groupService.createGroup(
          Object.assign(
            {},
            {
              sub: getSubByToken(accessToken),
            },
            groupInform
          )
        ),
      };
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }

  @Delete("drop/:id")
  @ApiOperation({
    summary: "그룹 삭제",
    description: "id값에 해당하는 그룹을 삭제합니다.",
  })
  @ApiCreatedResponse({ description: "성공 시" })
  async dropGroup(
    @Headers("authorization") accessToken: string,
    @Param("id") id: number
  ) {
    return this.groupService.dropGroup({
      sub: getSubByToken(accessToken),
      id,
    });
  }
}
