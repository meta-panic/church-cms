"use client";
import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import cx from "classnames";

import Section from "@/components/atoms/section/Section";
import { isRootPath } from "@/utils/isRoot";

import styles from "./Hero.module.css";
import "./Hero.css";

interface HeroProps {
  src: StaticImageData | string;
  content?: JSX.Element | null;
  imageAlt: string;
  fullHeight?: boolean
  imageStyles?: string;
}

export const Hero: React.FC<HeroProps> = ({ src, fullHeight = true, imageAlt, content, imageStyles }) => {

  return (
    <div className={cx({ [styles.fullHeight]: fullHeight }, styles.heroWrapper)}>
      <div className={styles.imageWrapper}>
        <Image
          id="hero church background"
          priority
          src={src}
          quality={100}
          layout="fill"
          objectFit="cover"
          alt={imageAlt}
          sizes="100vw"
          className={cx(imageStyles, styles.transition, "heroImage-opacity")}
          onLoadingComplete={(image: HTMLImageElement) => image.classList.remove("heroImage-opacity")}
        />
      </div>
      <div className={cx(styles.heroContent, { [styles.presentationHeader]: isRootPath(usePathname()) })}>
        <Section className={styles.contentWrapper}>{content}</Section>
      </div>
    </div>
  );
};
