"use client";
import React from "react";
import Image from "next/image";

import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import ClientOnly from "../../header/_components/ClientOnly";

import type { ImageType } from "../types";

import styles from "./MasonryGrid.module.css";

interface MasonryGridProps {
  images: ImageType[];
  handleImageClick: (index: number) => void;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  images,
  handleImageClick,
}) => {
  const isSmallScreen = useMediaQuery([BREAKPOINTS.mobile]);

  const getGridStyle = () => {
    if (isSmallScreen) return { gridTemplateColumns: "1fr" };

    return {
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gridAutoRows: "minmax(200px, auto)",
      gridAutoFlow: "dense",
    };
  };

  const getItemSpan = (image: ImageType) => {
    if (isSmallScreen) return {};

    const aspectRatio = image.width / image.height;

    if (aspectRatio > 1.3) {
      return {
        gridColumn: "span 2",
        gridRow: "span 1",
        aspectRatio: "2/1",
      };
    }

    if (aspectRatio < 0.7) {
      return {
        gridColumn: "span 1",
        gridRow: "span 2",
        aspectRatio: "1/2",
      };
    }

    return { aspectRatio: "1/1" };
  };


  return (
    <ClientOnly fallback={null}>
      <div role="grid" aria-label="Image Gallery" className={styles.masonry} style={getGridStyle()}>
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={styles.masonryItem}
            onClick={() => handleImageClick(index)}
            style={getItemSpan(image)}
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
                  alt={image.caption || ""}
                  width={image.width}
                  height={image.height}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    aspectRatio: getItemSpan(image).aspectRatio,
                  }}
                />
              </div>
              {image.caption && (
                <div className={styles.caption}>
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ClientOnly >
  );
}; 
