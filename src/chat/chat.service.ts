import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { FindChattingQueryInterface } from "./chat.dto";

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async findChattingGroup({ page, keyword }: FindChattingQueryInterface) {
    return this.prisma.chatting.findMany({
      where: { StudyGroup: { name: { contains: keyword ?? "" } } },
      select: { chatting: true },
      orderBy: { id: "asc" },
      take: 20,
      skip: (page - 1) * 20,
    });
  }

  async getChattingLogByChannel(chattingId: number) {
    return this.prisma.chattingLog.findMany({
      where: { chattingId: ~~chattingId },
      select: {
        id: true,
        userId: true,
        chattingId: true,
        user: true,
      },
    });
  }
}
