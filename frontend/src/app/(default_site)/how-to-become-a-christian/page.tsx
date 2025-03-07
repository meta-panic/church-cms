export const dynamic = "force-static";

import qs from "qs";

import { HttpError } from "@/app/types/Errors";
import { HTBaChristian } from "@/components/templates/HTBaChristian/HTBaChristian";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";
import { fetchPageInfo } from "@/utils/fetch";

import { HtBaChristian } from "@/types";

export default async function App() {

  let responce: { data: HtBaChristian } | undefined;

  try {
    responce = await fetchPageInfo<HtBaChristian>(query, "api/ht-ba-christian");
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      return <DefaultError errorMessage={err.message} />;
    } else if (err instanceof Error) {
      return <DefaultError errorMessage={err.message} />;
    }

    return <DefaultError errorMessage={"Неизвестная ошибка"} />;
  }

  if (!responce || !responce?.data) {
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


const query = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      hero: {
        populate: "*",
      },
      presentationVideo: {
        populate: "*",
      },
      content: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
