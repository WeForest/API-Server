import { AES, enc } from "crypto-js";

export const generatedTokenBySub: Function = (sub: string) =>
  AES.encrypt(
    enc.Utf8.parse(String(sub + process.env.DISTINGUISHER + Date.now().toString())),
    String(process.env.ACCESS_TOKEN_KEY)
  ).toString();

export const getSubByToken: Function = (token: string) =>
  AES.decrypt(token, process.env.ACCESS_TOKEN_KEY)
    .toString()
    .split(process.env.DISTINGUISHER)[0];
