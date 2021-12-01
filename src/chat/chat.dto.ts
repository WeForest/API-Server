import { ChattingLog, ChattingParticipant } from ".prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { UserDTO } from "../profile/profile.dto";

export interface FindChattingQueryInterface {
  page: number;
  keyword: string;
}

export class ChattingSearchResultDTO {
  @ApiProperty({ description: "채팅방 고유 아이디" })
  id: number;

  @ApiProperty({ description: "이름" })
  name?: string;

  @ApiProperty({ description: "타입" })
  type: "study" | "dm";

  @ApiProperty({ description: "채팅 기록" })
  ChattingLog: ChattingLog;

  @ApiProperty({ description: "채팅 참가자" })
  ChattingParticipant: ChattingParticipant;
}

export class ChattingLogDTO {
  @ApiProperty({ description: "ID" })
  id: number;

  @ApiProperty({ description: "채팅 내용" })
  content: string;

  @ApiProperty({ description: "유저 id" })
  userId: number;

  @ApiProperty({ description: "채팅 id" })
  chattingId: number;

  @ApiProperty({ description: "유저" })
  user: UserDTO;

  @ApiProperty({ description: "욕설 유무" })
  abuse: boolean;
}
