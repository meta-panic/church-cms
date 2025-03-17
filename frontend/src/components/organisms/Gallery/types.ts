export interface ImageType {
  thumbnail: string;
  src: string;
  width: number;
  height: number;
  caption?: string;
  alternativeText?: string;
}

export interface GridRenderProps {
  images: ImageType[];
  handleImageClick: (index: number) => void;
}
