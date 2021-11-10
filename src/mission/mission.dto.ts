import { ApiProperty } from "@nestjs/swagger";

export interface CreateMission {
  level: levelType;
  exp: number;
  title: string;
  content: string;
  expiredAt: number;
  type?: "daily" | "weekly" | "monthly"; // daily, weekly, monthly
}

export class CreateMissionDTO {
  @ApiProperty({ description: "난이도(low, middle, high)" })
  level: levelType;

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
export type levelType = "low" | "middle" | "high";
export class UserDTO {
  @ApiProperty({ description: "유저 고유 값" })
  id: number;

  @ApiProperty({ description: "유저 구글 이메일" })
  email: string;

  @ApiProperty({ description: "유저 고유 값" })
  sub: string;

  @ApiProperty({ description: "유저 이름" })
  name: string;

  @ApiProperty({ description: "프로필 이미지 링크" })
  profileImg?: string;

  @ApiProperty({ description: "구직자인지" })
  isJobSeeker: boolean;

  @ApiProperty({ description: "회사 이메일" })
  companyEmail?: string;

  @ApiProperty({ description: "회사가 인증 되었는지" })
  authCompany?: boolean;

  @ApiProperty({ description: "유저의 목표" })
  purpose?: string;

  @ApiProperty({ description: "유저 레벨" })
  level: number;

  @ApiProperty({ description: "유저의 경험치" })
  exp: number;

  @ApiProperty({ description: "액세스 토큰" })
  accessToken?: string;
}
