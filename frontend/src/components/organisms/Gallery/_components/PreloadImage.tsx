import Image from "next/image";


interface PreloadImageProps {
  nextImageSrc: string;
}

export const PreloadImage: React.FC<PreloadImageProps> = ({ nextImageSrc }) => {
  return (
    <Image
      src={nextImageSrc}
      alt={"Для кэширования изображений, технический блок"}
      layout="fill"
      objectFit="cover"
      loading="eager"
    />
  );
};
