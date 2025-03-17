import localFont from "next/font/local";

import "./layout.css";

import "../styles/reset.css";
import "../styles/colours.css";
import "../styles/semantic.css";
import "../styles/sizes.css";
import "../styles/globals.css";


const raleway = localFont({
  src: "../../public/fonts/Raleway-VariableFont_wght.ttf",
  display: "swap",
});
const ralewayItalic = localFont({
  src: "../../public/fonts/Raleway-Italic-VariableFont_wght.ttf",
  display: "swap",
});
const montserrat = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});
const montserratItalic = localFont({
  src: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
  display: "swap",
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="preconnect" href="https://vk.com" />

      <body
        className={`${raleway.className} ${ralewayItalic.className} ${montserratItalic.className} ${montserrat.className}  lightBlock`}
      >

        {children}

      </body>
    </html >
  );
}

