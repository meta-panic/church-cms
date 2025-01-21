import "server-only";
import qs from "qs";
import { PageLanding, Service, Global as ContactInfo } from "@/types";


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
  divineServices: Service;
}> {
  const NEXT_PUBLIC_BACKEND_URL = "cms:1337";
  const landingInfo: PageLanding =
    await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/page-landings?${landingPageQuery}`)
      .then((res) => res.json());


  const divineServices: Service =
    await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/services?${divineServicesQuery}`)
      .then((res) => res.json());

  return {
    landingInfo,
    divineServices,
  };
};



export async function getContactsData(): Promise<ContactInfo> {
  const NEXT_PUBLIC_BACKEND_URL = "cms:1337";

  const responce: { data: ContactInfo } =
    await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/global?${queryGlobal}`)
      .then((res) => res.json());

  return responce.data;
};
