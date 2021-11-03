import { Mission } from ".prisma/client";
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

export interface CreateMission {
  level: number;
  exp: number;
  title: string;
  content: string;
  expiredAt: number;
  type?: "daily" | "weekly" | "monthly"; // daily, weekly, monthly
}

export class CreateMissionDTO {
  @ApiProperty({ description: "최소 레벨" })
  level: number;

  @ApiProperty({ description: "미션 해결 시, 얻는 경험치 양" })
  exp: number;

  @ApiProperty({ description: "미션 타이틀" })
  title: string;

  @ApiProperty({ description: "미션 상세 내용" })
  content: string;

  @ApiProperty({ description: "미션 기간" })
  expiredAt: number;

  @ApiProperty({ description: "미션 타입(일간, 주간, 월간" })
  type: MissionType;
}

export class MissionDTO extends CreateMissionDTO {
  @ApiProperty({ description: "미션 고유 아이디값" })
  id: number;

  @ApiProperty({ description: "생성 날짜" })
  createdAt: Date;
}
export type MissionType = "daily" | "weekly" | "monthly";
