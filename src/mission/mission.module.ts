import { Module } from "@nestjs/common";
import { MissionService } from "./mission.service";
import { MissionController } from "./mission.controller";
import { PrismaService } from "src/prisma.service";

@Module({
  providers: [MissionService],
  controllers: [MissionController, PrismaService],
})
export class MissionModule {}
