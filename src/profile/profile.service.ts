import { Interests, Major } from ".prisma/client";
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import axios from "axios";

import FormData = require("form-data");
import { Blob } from "buffer";
import { uploadToS3 } from "../util/image";
import { PrismaService } from "../prisma.service";
import {
  GetProfileFunction,
  UpdateProfileDataWithAccessToken,
} from "./profile.dto";
import { GoalExp } from "@prisma/client";

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfileByNickname(name: string): Promise<GetProfileFunction> {
    const result = await this.prisma.user.findFirst({
      select: {
        email: true,
        name: true,
        followers: true,
        following: true,
        authCompany: true,
        exp: true,
        level: true,
        companyEmail: true,
        isJobSeeker: true,
        purpose: true,
        major: true,
        group: true,
        accessToken: true,
        interested: true,
        profileImg: true,
      },
      where: {
        name,
      },
    });

    return Object.assign({}, result, {
      success: true,
      message: "success get profile",
    });
  }

  async updateProfileByAccessToken({
    sub,
    updateData,
  }: UpdateProfileDataWithAccessToken): Promise<any> {
    const { interested, major, ...profileUpdateData } = updateData;
    const user = await this.prisma.user.findUnique({ where: { sub } });

    return this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        name: profileUpdateData.name,
        purpose: profileUpdateData.purpose,
        isJobSeeker: profileUpdateData.isJobSeeker,
        companyEmail: profileUpdateData.companyEmail,
        interested: {
          deleteMany: { userId: user.id },
          create: interested.map((interest: Interests) => ({
            Interested: interest.Interested,
            userId: user.id,
          })),
        },
        major: {
          deleteMany: { userId: user.id },
          create: major.map((majorObject: Major) => ({
            major: majorObject.major,
            userId: user.id,
          })),
        },
      },
    });
  }

  async uploadProfilePicture(sub: string, file: any) {
    const imageUrl: string = await uploadToS3({
      fileName: file.originalname,
      file,
    });

    await this.prisma.user.update({
      data: {
        profileImg: imageUrl,
      },
      where: {
        sub,
      },
    });

    return imageUrl;
  }

  async addConefenceLog(
    sub: string,
    conference: string,
    name: string,
    file: any
  ) {
    const connectUser = await this.prisma.user.findUnique({ where: { sub } });
    const goalExpByUser: GoalExp = await this.prisma.goalExp.findUnique({
      where: { level: connectUser.level },
    });

    const userExp: number = connectUser.exp + 200;
    await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        exp:
          goalExpByUser.GoalExperience <= userExp
            ? userExp - goalExpByUser.GoalExperience
            : userExp,
        level:
          goalExpByUser.GoalExperience <= userExp
            ? connectUser.level + 1
            : connectUser.level,
        ExpLog: {
          create: { getExp: 200, activity: "conference" },
        },
      },
    });
    const conferenceUrl: string = await uploadToS3({
      fileName: file.originalname,
      file,
    });
    return await this.prisma.conference.create({
      data: {
        conferenceName: conference,
        user: {
          connect: { id: connectUser.id },
        },
        conferenceImgUrl: conferenceUrl,
      },
    });
  } //
  async getFollowerByNickname(name: string) {
    const result = await this.prisma.user.findFirst({
      select: {
        followers: {
          select: {
            email: true,
            name: true,
            followers: true,
            following: true,
            authCompany: true,
            exp: true,
            level: true,
            companyEmail: true,
            isJobSeeker: true,
            purpose: true,
            major: true,
            group: true,
            accessToken: true,
            interested: true,
            profileImg: true,
          },
        },
      },
      where: {
        name,
      },
    });
    if (!result) {
      throw new NotFoundException("값을 찾을 수 없습니다");
    }
    return Object.assign({}, result, {
      success: true,
      message: "success get profile",
    });
  }

  async getFollowingByNickname(name: string) {
    const result = await this.prisma.user.findFirst({
      select: {
        following: {
          select: {
            email: true,
            name: true,
            followers: true,
            following: true,
            authCompany: true,
            exp: true,
            level: true,
            companyEmail: true,
            isJobSeeker: true,
            purpose: true,
            major: true,
            group: true,
            accessToken: true,
            interested: true,
            profileImg: true,
          },
        },
      },
      where: {
        name,
      },
    });

    return Object.assign({}, result, {
      success: true,
      message: "success get profile",
    });
  }

  async followUser(nickname: string, sub: string) {
    const followedUser = await this.prisma.user.findFirst({
      where: { name: nickname },
    });

    await this.prisma.user.update({
      where: { id: followedUser.id },
      data: { followers: { connect: { sub } } },
    });

    return this.prisma.user.update({
      where: { sub },
      data: {
        following: { connect: { id: followedUser.id } },
      },
    });
  }

  async unfollowuser(name: string, sub: string) {
    const targetUser = await this.prisma.user.findFirst({
      where: { name },
    });
    await this.prisma.user.update({
      where: { id: targetUser.id },
      data: {
        followers: { disconnect: { sub } },
      },
    });
    return this.prisma.user.update({
      where: { sub },
      data: {
        following: { disconnect: { id: targetUser.id } },
      },
    });
  }
  async getExpLogs(sub: string) {
    return this.prisma.expLog.findMany({ where: { user: { sub } } });
  }
  async getConefenceLog(name: string) {
    const user = await this.prisma.user.findMany({ where: { name } });
    return this.prisma.conference.findMany({
      where: { user: { sub: user[0].sub } },
    });
  }
}
