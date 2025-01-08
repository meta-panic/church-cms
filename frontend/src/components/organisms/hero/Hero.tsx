import React from 'react';
import Image from "next/image";

import srcBackgroundHeroImage from '../../../../public/background.jpg';
import styles from './Hero.module.css';


interface HeroProps {
}

export const Hero: React.FC<HeroProps> = ({ }) => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          priority
          src={srcBackgroundHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="chapel under starry sky"
          style={{
            objectPosition: '50% 60%',
          }}
        />
      </div>
      <div className={styles.heroContent}>text text</div>
    </>
  );
};
