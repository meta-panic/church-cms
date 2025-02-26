export const dynamic = "force-static";


import { HtBaChristian } from "@/types";


import { HttpError } from "@/app/types/Errors";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";

import { fetchHTBaChristianInfo } from "./fetchData";
import { HTBaChristian } from "@/components/templates/HTBaChristian/HTBaChristian";

export default async function App() {

  let responce: { data: HtBaChristian } | undefined;

  try {
    responce = await fetchHTBaChristianInfo();
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

  return <HTBaChristian
    hero={{
      title: "Как стать христианином?",
      description: [],
      ...responce.data.hero,
      videoLink: responce.data.presentationVideo,
    }}
    content={responce.data.content}
  />;
}

