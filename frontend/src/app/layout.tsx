import localFont from "next/font/local";

import "./layout.css";

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
  return (
    <html lang="ru">
      <body
        className={`${bebas.variable} ${ralewayRegular.variable} ${ralewayItalic.variable} ${ralewaySemiBold.variable} lightBlock`}
      >

        {children}

      </body>
    </html >
  );
}

