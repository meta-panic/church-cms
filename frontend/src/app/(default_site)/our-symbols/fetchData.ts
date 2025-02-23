import qs from "qs";

import { OurSymbols } from "@/types";

export async function fetchSymbols(): Promise<{ data: OurSymbols }> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/our-symbols?${query}`);

  return response.json();
}

const query = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      Theses: {
        populate: "*",
      },
      TheMainSymbol: {
        populate: "*",
      },
      AdditionalInfoLink: {
        populate: "*",
      },
      Hero: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
