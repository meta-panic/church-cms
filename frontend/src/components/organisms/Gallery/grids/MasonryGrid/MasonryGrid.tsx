"use client";
import React, { useMemo } from "react";
import Image from "next/image";

import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import Typography from "@/components/atoms/typography/Typography";
import ClientOnly from "../../../header/_components/ClientOnly";

import type { ImageType } from "../../types";

import { getGridStyle, getItemSpan } from "./utils";

import styles from "./MasonryGrid.module.css";

interface MasonryGridProps {
  images: ImageType[];
  handleImageClick: (index: number) => void;
  showCaption?: boolean;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  images,
  handleImageClick,
  showCaption = false,
}) => {
  const isSmallScreen = useMediaQuery([BREAKPOINTS.mobile]);

  const gridStyle = useMemo(() => getGridStyle(isSmallScreen, images), [isSmallScreen, images]);


  return (
    <ClientOnly fallback={null}>
      <div role="grid" aria-label="Image Gallery" className={styles.masonry} style={gridStyle}>
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={styles.masonryItem}
            onClick={() => handleImageClick(index)}
            style={getItemSpan(image, isSmallScreen)}
            role="gridcell"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleImageClick(index);
              }
            }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <Image
                  src={image.src}
                  alt={image.alternativeText || ""}
                  width={image.width}
                  height={image.height}
                  className={styles.image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>
            </div>

            {showCaption && image.caption
              && <Typography className={styles.caption} tag={"body"}>
                {image.caption}
              </Typography>
            }

          </div>
        ))}
      </div>
    </ClientOnly >
  );
};

