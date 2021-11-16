import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { FindChattingQueryInterface } from "./chat.dto";

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async findChattingGroup({ page, keyword }: FindChattingQueryInterface) {
    return this.prisma.chatting.findMany({
      where: { name: { contains: keyword } },
      orderBy: { id: "asc" },
      take: 20,
      skip: (page - 1) * 20,
    });
  }
}