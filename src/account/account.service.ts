import { Injectable } from "@nestjs/common";
import { TokenPayload } from "google-auth-library";

import { LoginReturnValue, UserByPrisma } from "./login.dto";

import { PrismaService } from "../prisma.service";

import { verify } from "../util/OAuth";
import {
  createUser,
  findUserBySub,
  updateAccessTokenAtUser,
} from "../util/user";
import { generatedTokenBySub } from "../util/token";

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
    console.log(user);

    const generatedToken: string = generatedTokenBySub(sub);

    await updateAccessTokenAtUser({ prisma: this.prisma, sub, generatedToken });

    return { token: generatedToken, success: true, status: 200 };
  }
}
