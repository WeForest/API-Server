import { Controller, Get, Param, Res, Query } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";

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
  @ApiCreatedResponse({ description: "성공 시" })
  async findChattingGroup(
    @Param("page") page: number,
    @Query("k") keyword: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.chatService.findChattingGroup({ page, keyword });
  }
}