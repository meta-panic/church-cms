import qs from "qs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchHTBaChristianInfo(): Promise<{ data: any }> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/ht-ba-christian?${query}`);

  return response.json();
}

const query = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      hero: {
        populate: "*",
      },
      presentationVideo: {
        populate: "*",
      },
      content: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
