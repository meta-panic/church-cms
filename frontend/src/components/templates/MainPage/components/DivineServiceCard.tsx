import React from "react";
import cx from "classnames";
import Image, { StaticImageData } from "next/image";

import Typography from "@/components/atoms/typography/Typography";
import Link from "@/components/molecules/Link/Link";

import type { PublicServiceRoute } from "@/configuration/navigation";

import styles from "./DivineServiceCard.module.css";


interface DivineServiceCardProps {
  title: string;
  description: string;
  image: {
    imageSrc: string | StaticImageData;
    altText?: string;
  },
  href: PublicServiceRoute;
  onClick?: (href: PublicServiceRoute) => void;
}

export const DivineServiceCard: React.FC<DivineServiceCardProps> = ({
  title,
  description,
  image,
  href,
}) => {

  return (
    <div tabIndex={-1} className={cx("lightBlock", styles.container)} >

      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image
            src={image.imageSrc}
            loading="lazy"
            fill
            objectFit="cover"
            alt={image?.altText || ""}
          />
        </div>
      </div>

      <div className={styles.cardBody}>

        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Link tag="body" to={href} isExternal={false} overideFont={{ fontFamily: "headlines", fontWeight: "extra-bold" }} >
              {title}
            </Link>
          </div>

          <Typography tag="body">
            {description}
          </Typography>
        </div>
      </div>
    </div >
  );
};
