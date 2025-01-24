import Header from "@/components/organisms/header";
import cx from "classnames";

import layoutStyles from "./layout.module.css";
import Section from "@/components/atoms/section/Section";
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
      />

      {children}

      <footer className={cx(layoutStyles.footer)}>
        <Section>
          <div style={{ backgroundColor: "gray" }}>
            Footer content
          </div>
        </Section>
      </footer>

    </div>
  );
}
