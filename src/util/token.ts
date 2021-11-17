import { AES } from "crypto-js";

export const generatedTokenBySub: Function = (sub: string) =>
  AES.encrypt(
    String(sub + process.env.DISTINGUISHER + Date.now().toString()),
    String(process.env.ACCESS_TOKEN_KEY)
  ).toString();

export const getSubByToken: Function = (token: string) => {
  const decryptToken: String = AES.decrypt(
    String(token),
    String(process.env.ACCESS_TOKEN_KEY)
  ).toString();
  console.log(decryptToken);
  return decryptToken.split(process.env.DISTINGUISHER)[0];
};
