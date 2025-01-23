import { Metadata } from "next";

import { MainPage } from "@/components/templates/MainPage/MainPage";
import { getLandingPageData } from "../../../lib/fetchData";

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
    // not render any text till BE is availible and the static page is revalidated
    return null;
  }

  const { landingInfo } = data;

  return (
    <>
      {/* [for debug] Hidden div with the current date and time */}
      <div style={{ display: "none" }}>
        {new Date().toString()}
      </div>

      <MainPage
        heroData={landingInfo.Hero_header!} // TODO: make the prop not optional
        aboutUs={landingInfo.About_us!} // TODO: make the prop not optional
        HTBChristian={landingInfo.How_to_become_a_christian!} // TODO: make the prop not optional
      />

    </>
  );
}
