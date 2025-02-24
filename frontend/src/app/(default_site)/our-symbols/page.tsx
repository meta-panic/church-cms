export const dynamic = "force-static";

import { OurSymbols } from "@/types";


import { HttpError } from "@/app/types/Errors";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";

import { fetchSymbols } from "./fetchData";
import { OurSymbolsPage } from "@/components/templates/OurSymbolsPage/OurSymbolsPage";

export default async function App() {
  let responce: { data: OurSymbols } | undefined;

  try {
    responce = await fetchSymbols();
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

  return <OurSymbolsPage hero={Hero} mainSymbol={TheMainSymbol} theses={Theses} findMoreInfoBlock={AdditionalInfoLink} />;
}
