import { ImageType } from "../../types";

const VERTICAL_IMAGE_RATIO = 1.3;
const HORIZONTAL_IMAGE_RATIO = 0.7;

export const isSquareLike = (ratio: number) => ratio <= 1.3 && ratio >= 0.7;

export const isVertical = (ratio: number) => ratio > 1.3;


export const getItemSpan = (image: ImageType, isSmallScreen: boolean) => {
  if (isSmallScreen) return {};

  const aspectRatio = image.width / image.height;

  if (aspectRatio > VERTICAL_IMAGE_RATIO) {
    return {
      gridColumn: "span 2",
      gridRow: "span 1",
      takenSpans: 2,
    };
  }

  if (aspectRatio < HORIZONTAL_IMAGE_RATIO) {
    return {
      gridColumn: "span 1",
      gridRow: "span 2",
      takenSpans: 2,
    };
  }

  return {
    takenSpans: 1,
  };
};

export const getGridStyle = (isSmallScreen: boolean, images: ImageType[]) => {
  if (isSmallScreen) return { gridTemplateColumns: "1fr" };

  const spansCount = images.reduce((acc, image) => {
    const imageSpanSettings = getItemSpan(image, isSmallScreen);
    return imageSpanSettings?.takenSpans ? acc + imageSpanSettings?.takenSpans : acc;
  }, 0);

  const isEvenCount = spansCount % 2 === 0;

  return {
    gridTemplateColumns: `repeat(${isEvenCount ? 2 : 3}, minmax(auto, 1fr))`,
    gridAutoRows: "minmax(200px, auto)",
    gridAutoFlow: "dense",
  };
};
