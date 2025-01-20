//export const dynamic = "force-static";
import { Metadata } from "next";

import srcBackgroundHeroImage from "/public/background.jpg";
import { MainPage } from "@/components/templates/MainPage/MainPage";
import { PageLanding, Service, Global as ContactInfo } from "@/types";
import { Suspense } from "react";
import { getData } from "../../../lib/fetchTest";

export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: {
    icon: { url: "/favicon.png" },
  },
};


interface AppProps {
  landingInfo: PageLanding;
  divineServices: Service;
  contactInfo: ContactInfo;
}


export default async function App() {
  const data = await getData();

  // const { landingInfo } = await getStaticProps();
  // console.log("landingInfo - ", data.landingInfo);
  return (
    <>

      <div>[1]It got revalidated at:
        <Suspense>
          {data}
        </Suspense>
      </div>

      <MainPage srcBackgroundHeroImage={srcBackgroundHeroImage} />

    </>
  );
}





// const q = `http://${process.env.NEXT_PUBL;IC_BACKEND_URL}/api/page-landings?${queryLandingPage}`;;
// console.log("q - ", q);
// const data = await fetch(q);

// const posts: PageLanding = await data.json();

// console.log("data - ", posts);

// const services = `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services?${queryServices}`;
// console.log("services - ", services);
// const data2 = await fetch(services);
// const posts2: PageLanding = await data2.json();

// console.log("data2 - ", posts2);

// const services = `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/global?${queryGlobal}`;
// console.log("services - ", services);
// const data2 = await fetch(services);
// const posts2: PageLanding = await data2.json();

// console.log("data2 - ", posts2);
