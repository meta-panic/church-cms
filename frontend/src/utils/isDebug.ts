import { cookies } from "next/headers";

export const isDebug = async (): Promise<boolean> => {
  const cookieStore = cookies();
  const hasDebugCookie = (await cookieStore).has("debugCookie");

  return hasDebugCookie;
};
