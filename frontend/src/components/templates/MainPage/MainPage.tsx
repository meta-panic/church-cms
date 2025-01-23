import { Hero } from "@/components/organisms/hero/Hero";
import { AboutUs } from "@/components/organisms/aboutUs/AboutUs";
import Section from "@/components/atoms/section/Section";
import { ComponentContentBlocksInfoBlock } from "@/types";
import srcBackgroundHeroImage from "/public/background.jpg";

import styles from "./MainPage.module.css";
import { MainHeroContent } from "./components/MainHeroContent";


interface MainPageProps {
  heroData: ComponentContentBlocksInfoBlock;
  aboutUs: ComponentContentBlocksInfoBlock;
}

export const MainPage: React.FC<MainPageProps> = ({
  heroData, aboutUs,
}) => {

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

      <Section className={styles.section}>
        <div style={{ backgroundColor: "red", color: "green" }}>section-2</div>
      </Section>

    </>
  );
};
