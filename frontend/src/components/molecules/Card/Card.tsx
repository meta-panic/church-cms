import cx from "classnames";
import Image, { StaticImageData } from "next/image";

import styles from "./Card.module.css";
import Typography from "@/components/atoms/typography/Typography";


interface CardProps {
  telegram: string;
  phone: string;
  image: {
    imageSrc: StaticImageData;
    altText: string;
  }
}

export const Card: React.FC<CardProps> = ({ telegram, phone, image }) => {

  return (
    <div className={cx("lightBlock", styles.container)}>

      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            placeholder="blur"
            src={image.imageSrc}
            fill
            objectFit="cover"
            alt={image.altText}
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.title}>
          <Typography tag="H3">
            Хочешь изучать Библию?
          </Typography>
        </div>
        <div className={styles.descriptions}>
          <Typography tag="body">
            Если ты живешь в Невинномысске и хочешь изучать Библию, напиши или позвони нам
          </Typography>
          <Typography tag="body" className={styles.contact}>
            {phone} | {telegram}
          </Typography>
        </div>
      </div>
    </div>
  );
};


/* */
/* <div className={styles.textContent}>
        <Typography tag="H2">
          Хочешь изучать Библию?
        </Typography>
        <Typography tag="body">
          Если ты живешь в Невинномысске и хочешь изучать Библию, напиши или позвони нам
        </Typography>
        <Typography tag="body-mini" className={styles.contact}>
          {phone} | {telegram}
        </Typography>
      </div> */
