//export const dynamic = "force-static";
import { Metadata } from "next";

import srcBackgroundHeroImage from "/public/background.jpg";
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
  const { landingInfo } = await getLandingPageData();

  console.log("landingInfo - ", landingInfo);
  return (
    <>
      {/* [for debbug] Hidden div with the current date and time */}
      <div style={{ display: "none" }}>
        {new Date().toString()}
      </div>

      <MainPage
        srcBackgroundHeroImage={srcBackgroundHeroImage}
      />

    </>
  );
}
