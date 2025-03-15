export const dynamic = "force-static";

import qs from "qs";
import { Metadata } from "next";

import { HttpError } from "@/app/types/Errors";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";
import { OurSymbolsPage } from "@/components/templates/OurSymbolsPage/OurSymbolsPage";
import { fetchPageInfo } from "@/utils/fetch";

import type { OurSymbols } from "@/types";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Во что мы верим | Церковь «Дом молитвы»",
  icons: {
    icon: { url: "/favicon.png" },
  },
};


export default async function App() {
  let responce: { data: OurSymbols } | undefined;

  try {
    responce = await fetchPageInfo<OurSymbols>(query, "api/our-symbols");
  } catch (err: unknown) {
    if (err instanceof HttpError) {
    } else if (err instanceof Error) {
      return <DefaultError errorMessage={err.message} />;
    }

    return <DefaultError errorMessage={"Неизвестная ошибка"} />;
  }

  if (!responce || !responce.data) {
    return <DefaultError errorMessage={"Данные временно недоступны"} />;
  }

  const { Hero, TheMainSymbol, Theses, AdditionalInfoLink } = responce.data;

  return <div className={styles.pageContent}>
    <OurSymbolsPage
      hero={Hero}
      mainSymbol={TheMainSymbol}
      theses={Theses}
      findMoreInfoBlock={AdditionalInfoLink}
    />
  </div>;
}


const query = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      Theses: {
        populate: "*",
      },
      TheMainSymbol: {
        populate: "*",
      },
      AdditionalInfoLink: {
        populate: "*",
      },
      Hero: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
