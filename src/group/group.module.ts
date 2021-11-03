import { Module } from "@nestjs/common";

import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { PrismaService } from "src/prisma.service";

@Module({
  providers: [GroupService, PrismaService],
  controllers: [GroupController],
})
export class GroupModule {}
