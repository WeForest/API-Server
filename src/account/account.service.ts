import { Injectable } from "@nestjs/common";
import { TokenPayload } from "google-auth-library";
import { AES } from "crypto-js";

import { LoginReturnValue, UserByPrisma } from "./DTO/login-cat.dto";

import { PrismaService } from "../prisma.service";

import { verify } from "../util/OAuth";
import {
  createUser,
  findUserBySub,
  updateAccessTokenAtUser,
} from "../util/user";

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async login(token: string): Promise<LoginReturnValue> {
    const verified: TokenPayload = await verify(token); // verify google token
    const { sub } = verified;
    const searchData: UserByPrisma = { prisma: this.prisma, sub };

    let user = await findUserBySub(searchData);
    if (!user) {
      user = await createUser(
        Object.assign({}, searchData, {
          name: verified.name,
          email: verified.email,
        })
      );
    }

    const generatedToken: string = AES.encrypt(
      sub + process.env.DISTINGUISHER + Date.now().toString(),
      process.env.ACCESS_TOKEN_KEY
    ).toString();

    await updateAccessTokenAtUser({ prisma: this.prisma, sub, generatedToken });

    return { token: generatedToken, success: true, status: 200 };
  }
}
