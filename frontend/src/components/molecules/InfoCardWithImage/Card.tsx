import cx from "classnames";
import Image, { StaticImageData } from "next/image";

import Typography from "@/components/atoms/typography/Typography";
import Link from "@/components/molecules/Link/Link";

import styles from "./InfoCardWithImage.module.css";


interface InfoCardWithImageProps {
  telegram?: string;
  phone?: string;
  image: {
    imageSrc: StaticImageData;
    altText: string;
  }
}

export const InfoCardWithImage: React.FC<InfoCardWithImageProps> = ({ telegram, phone, image }) => {
  const TelegramLink = () => telegram && <Link isExternal to={telegram}  >
    Наш телеграм
  </Link>;

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
          <Typography tag="H3" overideFont={{ fontFamily: "headlines" }}>
            Хочешь изучать Библию?
          </Typography>
        </div>
        <div className={styles.descriptions}>
          <Typography tag="body">
            Если ты живешь в Невинномысске и хочешь изучать Библию, напиши или позвони нам
          </Typography>
          <Typography tag="body" className={styles.contact}>
            {
              phone
                ? `${phone} | `
                : null
            }
            < TelegramLink />
          </Typography>
        </div>
      </div>
    </div>
  );
};
