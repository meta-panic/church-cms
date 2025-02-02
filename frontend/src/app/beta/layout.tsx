import Header from "@/components/organisms/header";
import { Footer } from "@/components/organisms/Footer/Footer";


import { navItemsDesktop, navItemsMobileAndTablet } from "@/configuration/navigation";
import { getContactsData } from "@/lib/fetchData";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactData = await getContactsData();

  return (
    <div>

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
        contacts={contactData && {
          taplink: contactData.taplink,
          telegram: contactData.telegram,
          vk: contactData.vk,
          youtube: contactData.youtube,
          whatsup: contactData.whatsup,
        }} />

    </div>
  );
}
