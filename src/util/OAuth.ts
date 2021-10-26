import { OAuth2Client, TokenPayload } from "google-auth-library";

export const verify: Function = async (
  token: string
): Promise<TokenPayload> => {
  const CLIENT_ID = process.env.CLIENT_ID;

  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
};
