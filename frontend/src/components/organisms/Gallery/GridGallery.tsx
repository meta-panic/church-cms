import { Grid } from "./grids/Grid";
import { AbstractGallery } from "./AbstractGallery";
import { MasonryGrid } from "./grids/MasonryGrid";

import { ImageType } from "./types";

export const GridGallery = ({ images }: { images: ImageType[] }) => (
  <AbstractGallery
    images={images}
    renderGrid={(props) => <Grid {...props} />}
  />
);

export const MasonryGallery = ({ images }: { images: ImageType[] }) => (
  <AbstractGallery
    images={images}
    renderGrid={(props) => <MasonryGrid {...props} />}
  />
); 
