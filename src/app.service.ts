import { Injectable } from "@nestjs/common";
import { GoalExp, User } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return "Hello World!";
  }

  async clearQuestion(sub: string, score: number) {
    const user: User = await this.prisma.user.findUnique({ where: { sub } });

    const goalExpByUser: GoalExp = await this.prisma.goalExp.findUnique({
      where: { level: user.level },
    });

    const userExp: number = user.exp + score * 10;
    return this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        exp:
          goalExpByUser.GoalExperience <= userExp
            ? userExp - goalExpByUser.GoalExperience
            : userExp,
        level:
          goalExpByUser.GoalExperience <= userExp ? user.level + 1 : user.level,
        ExpLog: {
          create: { getExp: score * 10, activity: "test" },
        },
      },
    });
  }
}
