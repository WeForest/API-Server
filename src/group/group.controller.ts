import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Headers,
} from "@nestjs/common";
import { getSubByToken } from "src/util/token";
import { CreateGroupInform } from "./group.dto";
import { GroupService } from "./group.service";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(":id")
  async joinGroupById(
    @Headers("authorization") accessToken: string,
    @Param("id") id: number
  ) {
    return this.groupService.joinTheGroup({
      sub: getSubByToken(accessToken),
      id,
    });
  }

  @Patch(":id")
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
  async createGroup(
    @Headers("authorization") accessToken: string,
    @Body() groupInform: CreateGroupInform
  ) {
    return this.groupService.createGroup(
      Object.assign(
        {},
        {
          sub: getSubByToken(accessToken),
        },
        groupInform
      )
    );
  }

  @Delete("drop/:id")
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
