"use server";
export const isDebug = async (): Promise<boolean> => {

  const { cookies } = await import("next/headers");
  const cookieStore = cookies();
  const hasDebugCookie = (await cookieStore).has("debugCookie");

  return hasDebugCookie;
};
