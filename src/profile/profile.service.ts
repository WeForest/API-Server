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

  async addConefenceLog(sub: string, file: any) {
    const formData = new FormData();
    console.log(file);
    formData.append("image", file.buffer);
    const data = await axios({
      method: "POST",
      url: "http://34.125.102.123:5000/fileUpload",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data.data);

    const { success, conference, name } = data.data;
    if (success) {
      const connectUser = await this.prisma.user.findUnique({ where: { sub } });
      console.log("connect : ", connectUser);
      if (connectUser.name != name) {
        throw new UnauthorizedException("인가되지않은 권한입니다.");
      }
      return await this.prisma.conference.create({
        data: {
          conferenceName: conference,
          user: {
            connect: { id: connectUser.id },
          },
        },
      });
    } else {
      return { success: "실패" };
    }
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
}
