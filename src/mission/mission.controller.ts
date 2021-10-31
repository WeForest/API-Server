import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { MissionService } from "./mission.service";

@Controller("mission")
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post("add") // 미션 생성
  async addMission() {}

  @Delete(":type/:number") // 미션 삭제
  async dropMission() {}

  @Get(":type/:number") // 타입과 숫자로 미션 조회
  async getMissionByTypeAndNumber() {}

  @Get("list/:type") // 타입으로 미션 여러개 조회
  async getMissionList() {}

  @Patch("clear/:type/:number") // 미션 성공시
  async successMission() {}

  @Patch("fail/:type/:number") // 미션 실패시
  async failMission() {}
}
