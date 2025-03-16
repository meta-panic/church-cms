import { AbstractGallery } from "./AbstractGallery";
import { MasonryGrid } from "./grids/MasonryGrid/MasonryGrid";
import { Grid } from "./grids/DefaultGrid/Grid";

import { ImageType } from "./types";
import { useMemo } from "react";
import { isSquareLike, isVertical } from "./grids/MasonryGrid/utils";

export const GridGallery = ({ images }: { images: ImageType[] }) => (
  <AbstractGallery
    images={images}
    renderGrid={(props) => <Grid {...props} />}
  />
);

export const MasonryGallery = ({ images }: { images: ImageType[] }) => {
  // sort the images to move square-like ones to the bottom
  // because it is the way "dense" property works for grid
  // see - https://www.w3.org/TR/css3-grid-layout/#grid-auto-flow-property
  const sortedImages = useMemo(() => {
    return [...images].sort((a, b) => {
      const aspectRatioA = a.width / a.height;
      const aspectRatioB = b.width / b.height;
      if (isSquareLike(aspectRatioA) && isSquareLike(aspectRatioB)) {
        return 0;
      }

      if (isSquareLike(aspectRatioA)) {
        return 1;
      }

      if (isSquareLike(aspectRatioB)) {
        return -1;
      }

      return isVertical(aspectRatioA) ? -1 : 1;
    });
  }, [images]);

  return (
    <AbstractGallery
      images={sortedImages}
      renderGrid={(props) => <MasonryGrid {...props} />}
    />
  );
};
