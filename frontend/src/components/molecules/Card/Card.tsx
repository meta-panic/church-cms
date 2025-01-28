import cx from "classnames";
import Image, { StaticImageData } from "next/image";

import Typography from "@/components/atoms/typography/Typography";

import styles from "./Card.module.css";


interface CardProps {
  telegram?: string;
  phone?: string;
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
            {
              phone && telegram
                ? `${phone} | ${telegram}`
                : `${phone || telegram || ""}`
            }
          </Typography>
        </div>
      </div>
    </div>
  );
};
