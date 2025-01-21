import { Hero } from "@/components/organisms/hero/Hero";
import Section from "@/components/atoms/section/Section";

import styles from "./MainPage.module.css";
import { StaticImageData } from "next/image";


interface MainPageProps {
  srcBackgroundHeroImage: StaticImageData;
}

export const MainPage: React.FC<MainPageProps> = ({
  srcBackgroundHeroImage,
}) => {
  return (
    <>
      {<Hero src={srcBackgroundHeroImage} content={<div>text text</div>} />}

      <Section>
        <div style={{ backgroundColor: "red" }}>section-1</div>
      </Section>

      <Section className={styles.section}>
        <div style={{ backgroundColor: "red", color: "green" }}>section-2</div>
      </Section>

    </>
  );;
};
