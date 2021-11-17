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
    await this.prisma.user.update({
      where: {
        sub,
      },
      data: {
        name: profileUpdateData.name,
        purpose: "랄랄라랄ㄹ",
        isJobSeeker: profileUpdateData.isJobSeeker,
        companyEmail: profileUpdateData.companyEmail,
        interested: {
          deleteMany: {},
          create: interested.map((interest: Interests) => ({
            Interested: interest.Interested,
          })),
        },
        major: {
          deleteMany: {},
          create: major.map((majorObject: Major) => ({
            major: majorObject.major,
          })),
        },
      },
    });
  }

  async uploadProfilePicture(sub: string, file: any) {
    const imageUrl: string = await uploadToS3(file);

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
}
