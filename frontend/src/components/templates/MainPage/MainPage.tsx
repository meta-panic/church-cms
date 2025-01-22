"use client";
import { StaticImageData } from "next/image";
import cx from "classnames";

import { Hero } from "@/components/organisms/hero/Hero";
import Section from "@/components/atoms/section/Section";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentContentBlocksInfoBlock as HeroBlock } from "@/types";
import Button from "@/components/atoms/Button/Button";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";

import styles from "./MainPage.module.css";


interface MainPageProps {
  srcBackgroundHeroImage: StaticImageData;
  heroData: HeroBlock;
}

export const MainPage: React.FC<MainPageProps> = ({
  srcBackgroundHeroImage,
  heroData,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  return (
    <>
      {
        <Hero
          src={srcBackgroundHeroImage}
          content={
            <div className={cx("darkBlock", styles.heroContainer)}>
              <div className={styles.hero}>
                <div className={styles.text}><Typography tag="H1">{heroData.Title}</Typography></div>
                <div>
                  {heroData.description?.map((description) => {
                    return <div className={styles.text} key={description?.id}><Typography tag="body">{description?.body}</Typography><br /></div>;
                  })}
                </div>
                <ClientOnly>
                  <Button
                    link="/internal-page"
                    variant="ghost"
                    text={heroData.Button?.Button_text || "Узнать больше"}
                    on="onBrand"
                    size="L"
                    wide={!!isMobile}
                  />
                </ClientOnly>
              </div>
            </div>
          }
        />
      }

      <Section>
        <div style={{ backgroundColor: "red" }}>section-1</div>
      </Section>

      <Section className={styles.section}>
        <div style={{ backgroundColor: "red", color: "green" }}>section-2</div>
      </Section>

    </>
  );;
};
