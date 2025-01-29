import "server-only";
import qs from "qs";

import { PageLanding, Service as DivineService, Global as ContactInfo } from "@/types";
import { hasValue } from "@/utils/notMaybe";
import { errors } from "@strapi/utils";


const landingPageQuery = qs.stringify(
  {
    populate: {
      "Hero_header": {
        populate: "*",
      },
      "About_us": {
        populate: "*",
      },
      "How_to_become_a_christian": {
        populate: "*",
      },
      "Events": {
        populate: {
          "image": {
            populate: "*",
          },
        },
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);

const divineServicesQuery = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      landingCarouselView: {
        populate: "*",
      },
      hero: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);

const queryGlobal = qs.stringify(
  {
    populate: {
      "PrimalBuilding": {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);


export async function getLandingPageData(): Promise<{
  landingInfo: PageLanding;
  divineServices: DivineService[];
} | undefined> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const landingInfo: { data: Record<string, PageLanding> } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/page-landings?${landingPageQuery}`)
        .then((res) => res.json());


    const divineServices: { data: DivineService[] } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/services?${divineServicesQuery}`)
        .then((res) => res.json());

    return {
      landingInfo: landingInfo.data[0],
      divineServices: divineServices.data
        .filter<DivineService>((d): d is DivineService => !!d && hasValue(d)),
    };
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error("Fetch error is excepted during build time. If it is not, so...ops");
    if (err instanceof errors["ApplicationError"]) {
      // eslint-disable-next-line no-console
      console.error("Some error occurred during fetching data for a landing page - ", err.message);
    } else {
      // eslint-disable-next-line no-console
      console.error("Some error occurred during fetching data for a landing page - ", err);
    }
  }
};



export async function getContactsData(): Promise<ContactInfo | undefined> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const response: { data: ContactInfo } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/global?${queryGlobal}`)
        .then((res) => res.json());

    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Fetch error is excepted during build time. If it is not, so...ops");
    // eslint-disable-next-line no-console
    console.error("Some error occurred during fetching contact data - ", err);
  }
};
