import { Controller, Get, Param, Res, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { ChattingLogDTO, ChattingSearchResultDTO } from "./chat.dto";

import { ChatService } from "./chat.service";

@Controller("chat")
@ApiTags("Chatting 관련 API")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(":page")
  @ApiOperation({
    summary: "채팅 그룹 검색",
    description: "채팅 그룹을 검색합니다.",
  })
  @ApiOkResponse({ description: "성공 시", type: [ChattingSearchResultDTO] })
  async findChattingGroup(
    @Param("page") page: number,
    @Query("k") keyword: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.chatService.findChattingGroup({ page, keyword });
  }

  @Get("log/:channel")
  @ApiOperation({
    summary: "채팅 로그 가져오기",
    description: "채팅로그를 가져온다고 하네요",
  })
  @ApiOkResponse({ description: "성공 시", type: [ChattingLogDTO] })
  async getChattingLogByChannel(@Param("channel") ch: number) {
    return this.chatService.getChattingLogByChannel(ch);
  }
}
