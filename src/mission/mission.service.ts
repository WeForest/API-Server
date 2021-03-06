import { Mission, User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { GoalExp } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateMission, MissionType } from "./mission.dto";

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) {}

  async createMission(mission: CreateMission): Promise<Mission> {
    return this.prisma.mission.create({ data: mission });
  }

  async dropMission({ number }: { number: number }) {
    return this.prisma.mission.delete({ where: { id: number } });
  }

  async getMissionByNumber(number: number) {
    return this.prisma.mission.findFirst({ where: { id: number } });
  }

  async getMissionListByType(type: MissionType, page: number) {
    return await this.prisma.mission.findMany({
      where: { type },
      orderBy: {
        id: "asc",
      },
      skip: (page - 1) * 20,
      take: 20,
    });
  }

  async failedMissionBySub({ sub, number }: { sub: any; number: number }) {
    await this.prisma.hasMission.deleteMany({
      where: {
        user: {
          sub,
        },
        mission: {
          id: number,
        },
      },
    });
  }
  async sucessMissionBySub({ sub, number }: { sub: any; number: number }) {
    const successMission = await this.prisma.hasMission.findMany({
      select: {
        mission: {
          select: {
            exp: true,
          },
        },
      },
      where: {
        user: {
          sub,
        },
        mission: {
          id: number,
        },
      },
    })[0];

    const user: User = await this.prisma.user.findUnique({ where: { sub } });

    const goalExpByUser: GoalExp = await this.prisma.goalExp.findUnique({
      where: { level: user.level },
    });

    const userExp: number = user.exp + successMission.mission.exp;
    const updatedUser = await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        exp:
          goalExpByUser.GoalExperience <= userExp
            ? userExp - goalExpByUser.GoalExperience
            : userExp,
        ExpLog: {
          create: { getExp: successMission.mission.exp, activity: "mission" },
        },
        level:
          goalExpByUser.GoalExperience <= userExp ? user.level + 1 : user.level,
      },
    });

    await this.prisma.hasMission.deleteMany({
      where: {
        user: {
          sub,
        },
        mission: {
          id: number,
        },
      },
    });
    return updatedUser;
  }
}
