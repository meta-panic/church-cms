export const dynamic = "force-static";

import qs from "qs";

import { History } from "@/components/templates/History/History";

import { HttpError } from "@/app/types/Errors";
import { fetchPageInfo } from "@/utils/fetch";
import DefaultError from "@/components/molecules/CustomErrorBoundaries/DefaultError/DefaultError";

import type { History as HistoryType } from "@/types";

import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "История поместной церкви г. Невинномысска",
  icons: {
    icon: { url: "/favicon.png" },
  },
};

export default async function App() {
  let responce: { data: HistoryType } | undefined;

  try {
    responce = await fetchPageInfo<HistoryType>(query, "api/history");
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      return <DefaultError errorMessage={err.message} />;
    } else if (err instanceof Error) {
      return <DefaultError errorMessage={err.message} />;
    }

    return <DefaultError errorMessage={"Данные временно недоступны"} />;
  }


  return (
    <div className={styles.pageContent}>
      <History content={responce.data.content} />
    </div>
  );
}

const query = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      content: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
