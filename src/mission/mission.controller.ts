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
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { getSubByToken } from "../util/token";
import { CreateMissionDTO, MissionDTO, MissionType } from "./mission.dto";
import { MissionService } from "./mission.service";

@Controller("mission")
@ApiTags("미션 관련 API")
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post("add") // 미션 생성
  @ApiOperation({ summary: "미션 생성", description: "미션 생성하는 API" })
  @ApiOkResponse({ description: "성공 시", type: MissionDTO })
  async addMission(@Body() body: CreateMissionDTO) {
    return this.missionService.createMission(body);
  }

  @Delete(":number") // 미션 삭제
  @ApiOperation({ summary: "미션 제거", description: "미션 제거하는 API" })
  @ApiOkResponse({ description: "성공 시", type: MissionDTO })
  async dropMission(@Param("number") number: number) {
    return this.missionService.dropMission({ number });
  }

  @Get(":number") // 숫자로 미션 조회
  @ApiOperation({
    summary: "미션 받아오기",
    description: "미션을 낱개로 받아오는 API",
  })
  @ApiOkResponse({ description: "성공 시", type: MissionDTO })
  async getMissionByNumber(@Param("number") number: number) {
    return this.missionService.getMissionByNumber(number);
  }

  @Get(":type") // 타입으로 미션들 조회
  // @ApiOperation({ summary: "미션 제거", description: "미션 제거하는 API" })
  // @ApiOkResponse({ description: "성공 시", type: MissionDTO })
  async getMissionListByType(@Param("type") type: MissionType) {
    return this.missionService.getMissionListByType(type);
  }

  @Patch("clear/:number") // 미션 성공시
  async successMission(
    @Headers("authorization") accessToken: string,
    @Param("number") number: number
  ) {
    const sub = getSubByToken(accessToken);
    return this.missionService.sucessMissionBySub({ sub, number });
  }

  @Patch("fail/:number") // 미션 실패시
  async failMission(
    @Headers("authorization") accessToken: string,
    @Param("number") number: number
  ) {
    const sub = getSubByToken(accessToken);
    return this.missionService.failedMissionBySub({ sub, number });
  }
}
