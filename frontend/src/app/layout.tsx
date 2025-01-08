import Header from "@/components/organisms/header";
import { isDebug } from "@/utils/isDebug";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import cx from 'classnames';

import layoutStyles from './layout.module.css';
import pageStyles from './page.module.css';
import { NavItem } from "@/components/organisms/header";

const bebas = localFont({
  weight: '500',
  variable: '--font-bebas-regular',
  src: '../../public/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
});
const ralewayRegular = localFont({
  weight: '500',
  variable: '--font-raleway-regular',
  src: '../../public/fonts/Raleway-regular.ttf',
  display: 'swap',
});
const ralewayItalic = localFont({
  weight: '500',
  variable: '--font-raleway-italic',
  src: '../../public/fonts/Raleway-Italic-VariableFont_wght.ttf',
  display: 'swap',
});
const ralewaySemiBold = localFont({
  weight: '500',
  variable: '--font-raleway-semobold',
  src: '../../public/fonts/Raleway-semi-bold.ttf',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Дом молитвы",
  description: "Церковь Евангельских христиан-баптистов",
  icons: {
    icon: { url: '/favicon.png' },
  },
};

const navItems: NavItem[] = [
  { href: "/history", text: "О нас" },
  { href: "/how-to-become-a-cristian", text: "Как стать христианином" },
  { href: "/piblic-service", text: "Проповеди" },
  { href: "/#services", text: "Служения" },
  { href: "/#footer", text: "Контакты" },
];

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
          {children}
        </body>
      </html>
    );
  }


  return (
    <html lang="ru">
      <body className={`${bebas.variable} ${ralewayRegular.variable} ${ralewayItalic.variable} ${ralewaySemiBold.variable}`}>
        <div className={pageStyles.layoutContainer}>

          <Header navItems={navItems} className={pageStyles.section} />

          {children}

          <section className={cx(pageStyles.section, layoutStyles.footer)}>
            <footer>footer</footer>
          </section>

        </div>
      </body>
    </html>
  );
}
