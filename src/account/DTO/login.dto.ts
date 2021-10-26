import { PrismaService } from "../../prisma.service";

interface Login {
  token: string;
}

export interface LoginReq extends Login {}

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
