import { Metadata } from "next";

import { MainPage } from "@/components/templates/MainPage/MainPage";
import { getContactsData, getLandingPageData } from "../../../lib/fetchData";

export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: {
    icon: { url: "/favicon.png" },
  },
};



export default async function App() {
  const data = await getLandingPageData();

  if (!data || !data?.landingInfo || !data?.divineServices) {
    // not render any text till BE is available and the static page is revalidated
    return null;
  }

  const contacts = await getContactsData();
  if (!contacts) {
    // not render any text till BE is available and the static page is revalidated
    return null;
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
