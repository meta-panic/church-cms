import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import { NextJsImage } from "./_components/NextjsImage";
import { PreloadImage } from "./_components/PreloadImage";
import { Grid } from "./_components/Grid";

import { ImageType } from "./types";


interface GridGalleryProps {
  images: ImageType[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const CacheImages = ({ currentIndex }: { currentIndex: number }) => {
    return lightboxOpen ? <div style={{ display: "none" }}>
      {currentIndex > 0 && <PreloadImage nextImageSrc={images[currentIndex - 1].src} />}
      {currentIndex < (images.length - 1) && <PreloadImage nextImageSrc={images[currentIndex + 1].src} />}
    </div> : null;
  };

  return (
    <>
      <Grid images={images} handleImageClick={handleImageClick} />

      <CacheImages currentIndex={currentIndex} />

      <Lightbox
        on={{ view: ({ index: currentIndex }) => setCurrentIndex(currentIndex) }}

        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images.map((i) => ({ ...i, description: i.caption }))}
        index={currentIndex}
        render={{ slide: NextJsImage }}
        plugins={[Captions]}
        carousel={{
          finite: images.length <= 1,
          preload: 0,
          imageFit: "contain",
        }}
      />

    </>
  );
};

export default GridGallery;
