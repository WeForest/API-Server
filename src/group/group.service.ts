import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AboutGroup, CreateGroupMethodInform, SearchGroup } from "./group.dto";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async joinTheGroup({ sub, id }: AboutGroup) {
    const userHasGroup = await (
      await this.prisma.user.findUnique({
        where: { sub },
        select: {
          group: true,
        },
      })
    ).group;

    const willJoingroup = await this.prisma.studyGroup.findUnique({
      where: { id },
    });

    await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        group: {
          deleteMany: {},
          create: [...userHasGroup, willJoingroup],
        },
      },
    });

    return willJoingroup;
  }

  async withdrawGroupById({ sub, id }: AboutGroup) {
    await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        group: {
          deleteMany: {
            id,
          },
        },
      },
    });
  }

  async createGroup({ name, description, tags, sub }: CreateGroupMethodInform) {
    console.log(name, description, tags, sub);
    return this.prisma.studyGroup.create({
      data: {
        name,
        description,
        tags,
        owner: { connect: { sub } },
        StudyMember: { create: { member: { connect: { sub } } } },
        chatting: { create: { type: "group" } },
      },
    });
  }

  async dropGroup({ sub, id }: AboutGroup) {
    const owner = await (
      await this.prisma.studyGroup.findUnique({
        where: { id },
        include: { owner: true },
      })
    ).owner;
    owner.sub === sub &&
      (await this.prisma.studyGroup.delete({ where: { id } }));
  }

  async findStudyGroup({ page, keyword }: SearchGroup) {
    return this.prisma.studyGroup.findMany({
      where: { name: { contains: keyword ?? "" } },
      orderBy: { id: "asc" },
      take: 20,
      skip: (page - 1) * 20,
    });
  }
}
