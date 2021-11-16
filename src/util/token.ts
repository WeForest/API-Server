import { AES } from "crypto-js";

export const generatedTokenBySub: Function = (sub: string) =>
  AES.encrypt(
    String(sub + process.env.DISTINGUISHER + Date.now().toString()),
    String(process.env.ACCESS_TOKEN_KEY)
  ).toString();

export const getSubByToken: Function = (token: string) =>
  AES.decrypt(String(token), String(process.env.ACCESS_TOKEN_KEY))
    .toString()
    .split(process.env.DISTINGUISHER)[0];
