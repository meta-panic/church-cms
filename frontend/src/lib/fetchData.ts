import "server-only";
import qs from "qs";
import { PageLanding, Service as DivineService, Global as ContactInfo } from "@/types";


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
          "Photo": {
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
      "Landing_page_carousel_view": {
        populate: "*",
      },
      "Header": {
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
  divineServices: Record<string, DivineService>;
} | undefined> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const landingInfo: { data: Record<string, PageLanding> } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/page-landings?${landingPageQuery}`)
        .then((res) => res.json());


    const divineServices: { data: Record<string, DivineService> } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/services?${divineServicesQuery}`)
        .then((res) => res.json());

    console.log("landingInfo - ", landingInfo);
    console.log("divineServices - ", divineServices);
    return {
      landingInfo: landingInfo.data[0],
      divineServices: divineServices.data,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Some error occured durign fetching data for a landing page - ", err);
  }
};



export async function getContactsData(): Promise<ContactInfo | undefined> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const responce: { data: ContactInfo } =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/global?${queryGlobal}`)
        .then((res) => res.json());

    return responce.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Some error occured durign fetching contact data - ", err);
  }
};
