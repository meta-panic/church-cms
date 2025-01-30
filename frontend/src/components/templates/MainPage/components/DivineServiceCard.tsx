import React from "react";
import cx from "classnames";
import Image from "next/image";

import Typography from "@/components/atoms/typography/Typography";
import Link from "@/components/atoms/link/Link";

import type { PublicServiceRoute } from "@/configuration/navigation";

import styles from "./DivineServiceCard.module.css";


interface DivineServiceCardProps {
  title: string;
  description: string;
  image: {
    imageSrc: string;
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
    <div className={cx("lightBlock", styles.container)} >

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
            <Typography tag="H3">
              {title}
            </Typography>
          </div>

          <Typography tag="body">
            {description}
          </Typography>
        </div>

        <Link tag="body" to={href} isExternal={false}>
          Узнать больше
        </Link>

      </div>
    </div >
  );
};
