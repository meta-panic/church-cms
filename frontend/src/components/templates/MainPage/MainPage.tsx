"use client";
import cx from "classnames";

import { Hero } from "@/components/organisms/hero/Hero";
import { AboutUs } from "@/components/organisms/aboutUs/AboutUs";
import Section from "@/components/atoms/section/Section";
import Typography from "@/components/atoms/typography/Typography";
import { ComponentContentBlocksInfoBlock } from "@/types";
import Button from "@/components/atoms/Button/Button";
import { BREAKPOINTS, useMediaQuery } from "@/hooks/useMediaQuery";
import ClientOnly from "@/components/organisms/header/_components/ClientOnly";
import srcBackgroundHeroImage from "/public/background.jpg";

import styles from "./MainPage.module.css";


interface MainPageProps {
  heroData: ComponentContentBlocksInfoBlock;
  aboutUs: ComponentContentBlocksInfoBlock;
}

export const MainPage: React.FC<MainPageProps> = ({
  heroData, aboutUs,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  return (
    <>
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


      <Section>
        <AboutUs aboutUs={aboutUs} />
      </Section>

      <Section className={styles.section}>
        <div style={{ backgroundColor: "red", color: "green" }}>section-2</div>
      </Section>

    </>
  );;
};
