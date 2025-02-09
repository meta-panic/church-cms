export const dynamic = "force-static";
import qs from "qs";

import Section from "@/components/atoms/section/Section";
import Typography from "@/components/atoms/typography/Typography";
import CustomError from "@/components/molecules/CustomErrorBoundaries/template/Error";
import { HttpError } from "@/app/types/Errors";

import { Service as DivineService } from "@/types";

import styles from "./page.module.css";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await fetchDivineServices();
    return posts.data.map((ds: DivineService) => ({
      slug: ds.slug,
    }));
  } catch (err: unknown) {
    /* eslint-disable no-console */


    if (err instanceof HttpError) {
      console.error(`[/public-services] Fetch error is excepted during build time. If it is not, so...ops. Code - ${err.status}; Error - ${err.message}`);
    } else {
      console.error(`[/public-services] Error is excepted during build time. If it is not, so...ops - ${err}`);
    }

    return [];

    /* eslint-enable no-console */
  }
}

async function fetchDivineServices(): Promise<{ data: DivineService[]; }> {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`http://${NEXT_PUBLIC_BACKEND_URL}/api/services?${divineServicesQuery}`, {
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  try {
    const services = await fetchDivineServices();

    const currentService = services.data.find((ds: DivineService) => ds.slug === slug);
    return <div className={styles.pageContent}>
      {/* [for debug] Hidden div with the current date and time */}
      <div style={{ display: "none" }}>
        {new Date().toString()}
      </div>
      <Section>
        <Typography tag="H1">{currentService?.hero.Title}</Typography>

        <div>Cтраница для {slug} служение</div>
      </Section>
    </div>;
  } catch (err: unknown) {
    if (err instanceof HttpError) {
      return <CustomError title={err.message} />;
    } else {
      return <CustomError title={"Неизвестная ошибка"} />;
    }
  }
};

export default Page;


const divineServicesQuery = qs.stringify(
  {
    pagination: {
      pageSize: 100,
      page: 1,
    },
    populate: {
      landingCarouselView: {
        populate: "*",
      },
      hero: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
