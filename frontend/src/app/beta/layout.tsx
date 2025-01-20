import Header from "@/components/organisms/header";
import cx from "classnames";

import layoutStyles from "./layout.module.css";
import styles from "./layout.module.css";
import Section from "@/components/atoms/section/Section";
import { navItemsDesktop, navItemsMobileAndTablet } from "@/configuration/navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>

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
