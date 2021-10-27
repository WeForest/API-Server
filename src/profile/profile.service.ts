import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { GetProfileFunction, ProfileInterface } from "./DTO/profile.dto";

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfileByNickname(name: string): Promise<GetProfileFunction> {
    return Object.assign(
      await this.prisma.user.findFirst({
        select: {
          email: true,
          name: true,
          profileImg: true,
          isJobSeeker: true,
          companyEmail: true,

          purpose: true,
          level: true,
          exp: true,
        },
        where: {
          name,
        },
      })
    );
  }
}
