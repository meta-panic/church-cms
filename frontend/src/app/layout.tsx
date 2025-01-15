import Header from "@/components/organisms/header";
import { isDebug } from "@/utils/isDebug";
import localFont from "next/font/local";
import cx from "classnames";

import layoutStyles from "./layout.module.css";
import pageStyles from "./page.module.css";
import Section from "@/components/atoms/section/Section";
import { navItemsDesktop, navItemsMobileAndTablet } from "@/configuration/navigation";
import Stub from "@/components/organisms/stub/Stub";

import "../styles/reset.css";
import "../styles/colours.css";
import "../styles/semantic.css";
import "../styles/sizes.css";
import "../styles/globals.css";

const bebas = localFont({
  weight: "500",
  variable: "--font-bebas-regular",
  src: "../../public/fonts/BebasNeue-Regular.ttf",
  display: "swap",
});
const ralewayRegular = localFont({
  weight: "500",
  variable: "--font-raleway-regular",
  src: "../../public/fonts/Raleway-regular.ttf",
  display: "swap",
});
const ralewayItalic = localFont({
  weight: "500",
  variable: "--font-raleway-italic",
  src: "../../public/fonts/Raleway-Italic-VariableFont_wght.ttf",
  display: "swap",
});
const ralewaySemiBold = localFont({
  weight: "500",
  variable: "--font-raleway-semobold",
  src: "../../public/fonts/Raleway-semi-bold.ttf",
  display: "swap",
});




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = await isDebug();


  if (!isDevelopment) {
    return (
      <html lang="ru">
        <body className={`${bebas.variable} ${ralewayRegular.variable} ${ralewayItalic.variable} ${ralewaySemiBold.variable}`}>
          <Stub />
        </body>
      </html>
    );
  }

  return (
    <html lang="ru">
      <body className={`${bebas.variable} ${ralewayRegular.variable} ${ralewayItalic.variable} ${ralewaySemiBold.variable} lightBlock`}>
        <div className={pageStyles.layoutContainer}>

          <Header
            navItemsDesktop={navItemsDesktop}
            navItemsMobile={navItemsMobileAndTablet}
          />

          {children}

          <footer className={cx(layoutStyles.footer)}>
            <Section>
              <div style={{ backgroundColor: "gray" }}>
                Footer content
              </div></Section>
          </footer>

        </div>
      </body>
    </html>
  );
}
