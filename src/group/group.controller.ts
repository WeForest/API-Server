import { Controller, Get, Patch } from "@nestjs/common";
import { GroupService } from "./group.service";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get(":id")
  async joinGroupById() {}

  @Patch(":id")
  async withdrawGroupById() {}
}
