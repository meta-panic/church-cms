import "server-only";
import qs from "qs";

import { PageLanding, Service as DivineService, Global as ContactInfo } from "@/types";
import { hasValue } from "@/utils/notMaybe";
import { HttpError } from "../app/types/Errors";


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
          "Button": {
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
      "serviceSchedule": {
        populate: "*",
      },
      footerNote: {
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
}> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const landingResponse =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/page-landings?${landingPageQuery}`);

    if (!landingResponse.ok) {
      throw new HttpError(
        landingResponse.status,
        landingResponse.statusText,
      );
    }

    const landingInfo: { data: Record<string, PageLanding> } = await landingResponse.json();

    //

    const divineServicesResponce =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/services?${divineServicesQuery}`);

    if (!divineServicesResponce.ok) {
      throw new HttpError(
        divineServicesResponce.status,
        divineServicesResponce.statusText,
      );
    }

    const divineServices: { data: DivineService[] } = await divineServicesResponce.json();

    return {
      landingInfo: landingInfo.data[0],
      divineServices: divineServices.data
        .filter<DivineService>((d): d is DivineService => !!d && hasValue(d)),
    };
  } catch (err: unknown) {
    /* eslint-disable no-console */

    if (err instanceof HttpError) {
      console.error(`Fetch error is excepted during build time. If it is not, so...ops. Code - ${err.status}; Error - ${err.message}`);
    } else {
      console.error(`Error during fetching data for the main page - ${err}`);
    }
    throw err;

    /* eslint-enable no-console */
  }
};



export async function getContactsData(): Promise<ContactInfo> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const response =
      await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/global?${queryGlobal}`);

    if (!response.ok) {
      throw new HttpError(
        response.status,
        response.statusText,
      );
    }

    const contacts: { data: ContactInfo } = await response.json();;

    return contacts.data;
  } catch (err) {
    /* eslint-disable no-console */

    if (err instanceof HttpError) {
      console.error(`Fetch error is excepted during build time. If it is not, so...ops. Code - ${err.status}; Error - ${err.message}`);
    } else {
      console.error(`Error during fetching contacts data - ${err}`);
    }
    throw err;

    /* eslint-enable no-console */
  }
};
