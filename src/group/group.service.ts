import { StudyGroup } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AboutGroup, CreateGroupMethodInform, SearchGroup } from "./group.dto";

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async joinTheGroup({ sub, id }: AboutGroup) {
    await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        group: {
          connect: {
            id,
          },
        },
      },
    });

    return this.prisma.studyGroup.findUnique({
      where: { id: Number(id) },
      select: { StudyMember: { select: { member: true } } },
    });
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
    const member = await this.prisma.user.findUnique({ where: { sub } });
    return this.prisma.studyGroup.create({
      data: {
        name,
        description,
        tags,
        owner: { connect: { sub } },
        StudyMember: { create: [{ memberId: member.id }] },
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
      select: {
        id: true,
        name: true,
        description: true,
        tags: true,
        owner: { select: { name: true, profileImg: true } },
      },
      orderBy: { id: "asc" },
      take: 20,
      skip: (page - 1) * 20,
    });
  }

  async getGroup(id: number) {
    return this.prisma.studyGroup.findUnique({
      where: { id },
      select: {
        name: true,
        description: true,
        tags: true,
        owner: { select: { name: true, profileImg: true } },
      },
    });
  }
}
