import React from "react";
import Image from "next/image";

import srcBackgroundHeroImage from "../../../../public/background.jpg";
import styles from "./Hero.module.css";
import Section from "@/components/atoms/section/Section";


export const Hero: React.FC = ({ }) => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          priority
          loading="eager"
          placeholder="blur"
          src={srcBackgroundHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="chapel under starry sky"
          style={{
            objectPosition: "50% 60%",
          }}
        />
      </div>
      <div className={styles.heroContent}>
        <Section className={styles.contentWrapper}><div>text text</div></Section>
      </div>
    </div>
  );
};
