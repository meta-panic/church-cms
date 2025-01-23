import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./Hero.module.css";
import Section from "@/components/atoms/section/Section";

interface HeroProps {
  src: StaticImageData;
  content: JSX.Element;
}

export const Hero: React.FC<HeroProps> = ({ src, content }) => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          priority
          loading="eager"
          placeholder="blur"
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="chapel under starry sky"
          style={{
            objectPosition: "50% 60%",
          }}
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <Section className={styles.contentWrapper}>{content}</Section>
      </div>
    </div>
  );
};
