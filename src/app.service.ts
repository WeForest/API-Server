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

    const goalExpByUser: GoalExp = (await this.prisma.GoalExp).filter(
      (goalExpList: GoalExp) => {
        goalExpList.level === user.level;
      }
    )[0];
    console.log(goalExpByUser);
    console.log(await this.prisma.GoalExp);

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
      },
    });
  }
}
