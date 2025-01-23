import { Hero } from "@/components/organisms/hero/Hero";
import Section from "@/components/atoms/section/Section";
import { MainHeroContent } from "./components/MainHeroContent";
import { HowToBecomeAChristian } from "./components/HowToBecomeAChristian";
import { ComponentContentBlocksInfoBlock } from "@/types";
import srcBackgroundHeroImage from "/public/background.jpg";

import styles from "./MainPage.module.css";
import { AboutUs } from "./components/AboutUs";


interface MainPageProps {
  heroData: ComponentContentBlocksInfoBlock;
  aboutUs: ComponentContentBlocksInfoBlock;
  HTBChristian: ComponentContentBlocksInfoBlock;
}

export const MainPage: React.FC<MainPageProps> = ({
  heroData, aboutUs, HTBChristian,
}) => {

  console.log("HTBChristian - ", HTBChristian);
  return (
    <>
      <Hero
        src={srcBackgroundHeroImage}
        content={
          <MainHeroContent
            title={heroData.Title || "Добро пожаловать в дом молитвы"}
            description={heroData.description!} // TODO: make it obligatory
            button={heroData.Button} />
        }
      />

      <Section>
        <AboutUs aboutUs={aboutUs} />
      </Section>

      <Section className={styles.howToBecomeAChristianContainer}>
        <HowToBecomeAChristian
          title={HTBChristian.Title || "Как стать христианином?"}
          description={HTBChristian.description}
          button={HTBChristian.Button}
        />
      </Section>

    </>
  );
};
