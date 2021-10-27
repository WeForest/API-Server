import { User } from ".prisma/client";

import {
  UpdateAccessTokenByPrisma,
  UserByPrisma,
  UserRegistByPrisma,
  UserUpdateInform,
} from "../account/DTO/login.dto";

export const findUserBySub: Function = async ({
  prisma,
  sub,
}: UserByPrisma): Promise<User> => {
  return prisma.user.findUnique({
    where: {
      sub,
    },
  });
};

export const createUser: Function = async ({
  prisma,
  ...datas
}: UserRegistByPrisma): Promise<User> => {
  return prisma.user.create({
    data: datas,
  });
};

export const updateAccessTokenAtUser: Function = async ({
  prisma,
  sub,
  accessToken,
}: UpdateAccessTokenByPrisma): Promise<User> => {
  return prisma.user.update({
    data: { accessToken },
    where: {
      sub,
    },
  });
};

export const updateUserInfrom: Function = async (
  { prisma, sub }: UserByPrisma,
  datas: UserUpdateInform
): Promise<User> => {
  return prisma.user.update({
    data: datas,
    where: {
      sub,
    },
  });
};
