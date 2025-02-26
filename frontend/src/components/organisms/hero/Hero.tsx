"use client";
import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";

import Section from "@/components/atoms/section/Section";

import cx from "classnames";

import styles from "./Hero.module.css";
import "./Hero.css";


interface HeroProps {
  src: StaticImageData;
  content?: JSX.Element | null;
  blurDataURL?: string;
  imageStyles?: string;
}

export const Hero: React.FC<HeroProps> = ({ src, content, blurDataURL, imageStyles }) => {
  return (
    <div className={cx("fullHeightHero", styles.heroWrapper)}>
      <div className={styles.imageWrapper}>
        <Image
          id="hero church background"
          priority
          blurDataURL={blurDataURL}
          loading="eager"
          placeholder="blur"
          src={src}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Церковь с крестом на крыше на фоне ночного звездного неба"
          className={cx(imageStyles, styles.transition, "heroImage-opacity")}
          onLoadingComplete={(image: HTMLImageElement) => image.classList.remove("heroImage-opacity")}
        />
      </div>
      <div className={styles.heroContent}>
        <Section className={styles.contentWrapper}>{content}</Section>
      </div>
    </div>
  );
};
