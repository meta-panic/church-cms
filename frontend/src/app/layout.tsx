import { isDebug } from "@/utils/isDebug";
import type { Metadata } from "next";
import localFont from 'next/font/local'

const bebas = localFont({
  weight: '500',
  variable: '--font-bebas-regular',
  src: '../../public/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
});
const ralewayRegular = localFont({
  weight: '500',
  variable: '--font-raleway-regular',
  src: '../../public/fonts/Raleway-Regular.ttf',
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
};

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
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
