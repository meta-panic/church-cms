import { cookies } from "next/headers";

export const isDebug = async (): Promise<boolean> => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment) {
    return isDevelopment;
  }

  const cookieStore = cookies();
  const hasDebugCookie = (await cookieStore).has('debugCookie');

  return hasDebugCookie;
};
