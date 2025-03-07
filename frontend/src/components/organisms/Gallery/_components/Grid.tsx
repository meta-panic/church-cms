import Image from "next/image";

import { ImageType } from "../types";

import styles from "./Grid.module.css";


interface GridProps {
  images: ImageType[];
  handleImageClick: (index: number) => void;
}

export const Grid: React.FC<GridProps> = ({ images, handleImageClick }) => {
  return (
    <div className={styles.gridGallery} role="grid" aria-label="Image Gallery">
      {images.map((image, index) => {
        const aspectRatio = image.width / image.height;
        const span = getSpan(aspectRatio);

        return (
          <div
            className={styles.gridItem}
            key={index}
            role="gridcell"
            tabIndex={0}
            style={{
              gridColumnEnd: `span ${span.col}`,
              gridRowEnd: `span ${span.row}`,
            }}
            onClick={() => handleImageClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleImageClick(index);
              }
            }}
          >
            <Image
              src={image.thumbnail}
              alt={image.alternativeText || ""}
              className={styles.thumbnail}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div >
  );
};

const getSpan = (aspectRatio: number) => {
  if (aspectRatio > 1.5) return { col: 2, row: 1 };
  if (aspectRatio < 0.8) return { col: 1, row: 2 };
  return { col: 1, row: 1 };
};
