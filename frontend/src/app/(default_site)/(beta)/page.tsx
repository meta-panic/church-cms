import { Metadata } from "next";

import { MainPage } from "@/components/templates/MainPage/MainPage";
import { getContactsData, getLandingPageData } from "../../../lib/fetchData";
import { PageLanding, Service as DivineService, Global as ContactInfo } from "@/types";
import { HttpError } from "@/app/types/Errors";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";
import { favSettings } from "@/app/faviconSettings";

export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: favSettings,
};


export default async function App() {
  let data: {
    landingInfo: PageLanding;
    divineServices: DivineService[];
  } | undefined;
  let contacts: ContactInfo | undefined;

  try {
    data = await getLandingPageData();
    contacts = await getContactsData();
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      return <DefaultError errorMessage={err.message} />;
    } else if (err instanceof Error) {
      return <DefaultError errorMessage={err.message} />;
    }
    return <DefaultError errorMessage={"Неизвестная ошибка"} />;
  }

  if (!data || !contacts) {
    return <DefaultError errorMessage={"Данные временно недоступны"} />;
  }

  const { landingInfo, divineServices } = data;

  return (
    <>
      {/* [for debug] Hidden div with the current date and time */}
      <div style={{ display: "none" }}>
        {new Date().toString()}
      </div>

      <MainPage
        heroData={landingInfo.Hero_header}
        aboutUs={landingInfo.About_us}
        HTBChristian={{
          blockInfo: landingInfo.How_to_become_a_christian,
          phone: contacts.phone,
          telegram: contacts.telegram,
        }}
        contacts={contacts}
        events={landingInfo.Events}
        divineServices={divineServices}
      />

    </>
  );
}
