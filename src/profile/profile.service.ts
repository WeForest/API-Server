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
    await this.prisma.user.update({
      data: updateData,
      where: {
        sub,
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
