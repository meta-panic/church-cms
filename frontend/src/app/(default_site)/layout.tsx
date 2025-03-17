import Header from "@/components/organisms/header";
import { Footer } from "@/components/organisms/Footer/Footer";

import { navItemsDesktop, navItemsMobileAndTablet } from "@/configuration/navigation";
import { getContactsData } from "@/lib/fetchData";

import "./layout.css";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";
import { HttpError } from "../types/Errors";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let contactData;
  try {
    contactData = await getContactsData();
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      return <DefaultError errorMessage={err.message} />;
    } else if (err instanceof Error) {
      return <DefaultError errorMessage={err.message} />;
    }

    return <DefaultError errorMessage={"Неизвестная ошибка"} />;
  }

  if (!contactData) {
    return <DefaultError errorMessage={"Данные временно недоступны"} />;
  }

  return (
    <div className="setFullHeight">

      {/* [for debug] Hidden div with the current date and time */}
      <div style={{ display: "none" }}>
        {new Date().toString()}
      </div>

      <Header
        navItemsDesktop={navItemsDesktop}
        navItemsMobile={navItemsMobileAndTablet}
        contacts={contactData && {
          taplink: contactData.taplink,
          telegram: contactData.taplink,
          vk: contactData.taplink,
          youtube: contactData.taplink,
          whatsup: contactData.taplink,
        }}
      />

      {children}

      <Footer
        serviceSchedule={contactData?.serviceSchedule}
        email={contactData?.email}
        phone={contactData?.phone}
        primalBuilding={contactData?.PrimalBuilding}
        footerNote={contactData?.footerNote}
        madeByLink={contactData.madeByLink}
        contacts={contactData && {
          taplink: contactData.taplink,
          telegram: contactData.telegram,
          vk: contactData.vk,
          youtube: contactData.youtube,
          whatsup: contactData.whatsup,
        }}
      />

    </div>
  );
}

