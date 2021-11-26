import { Interests, Major } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { uploadToS3 } from "src/util/image";
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
    const imageUrl: string = await uploadToS3(file.name, file);

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
}
