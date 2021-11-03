import { ApiProperty } from "@nestjs/swagger";
import { PrismaService } from "../prisma.service";

interface Login {
  token: string;
}

export class LoginReq {
  @ApiProperty({ description: "구글 로그인을 통해 얻은 토큰 값" })
  token!: string;
}

export class LoginResDTO {
  @ApiProperty({ description: "해당 서비스를 이용하기 위한 토큰값" })
  token!: string;

  @ApiProperty({ description: "성공했는지 안했는지" })
  success!: boolean;

  @ApiProperty({ description: "실패시의 값" })
  message?: string;
}
export interface LoginRes extends Login {
  success: boolean;
  message?: string;
}

export interface LoginReturnValue extends LoginRes {
  status: number;
}

export interface UserByPrisma {
  prisma: PrismaService;
  sub: string;
}

export interface UserRegistByPrisma extends UserByPrisma {
  email: string;
  name: string;
}

export interface UpdateAccessTokenByPrisma extends UserByPrisma {
  accessToken: string;
}

export interface UserUpdateInform {
  purpose?: string;
  companyEmail?: string;
  authCompany?: boolean;
}
