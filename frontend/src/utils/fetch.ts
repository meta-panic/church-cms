import { HttpError } from "@/app/types/Errors";

type ApiPath = `api/${string}`;

export async function fetchPageInfo<T>(query: string, path: ApiPath): Promise<{ data: T }> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await ((await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/${path}?${query}`)).json());

  if ("error" in response && response.error !== null) {
    throw new HttpError(
      response.error?.status || "unknown code",
      response.error?.message || `Error during fetching ${path} data occurred`,
    );
  }

  return response;
}
