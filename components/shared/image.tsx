import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: ImageSize | string;
  radius: Radius | string;
  className?: string;
};

export enum ImageSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRALARGE = "extralarge",
  AUTO = "auto",
}
export type Radius = "rounded-full" | "rounded-xl" | "rounded-none";

const sizeMap = {
  [ImageSize.SMALL]: 200,
  [ImageSize.MEDIUM]: 400,
  [ImageSize.LARGE]: 600,
  [ImageSize.EXTRALARGE]: 800,
};

export function Img(props: Props) {
  const { src, alt, size, radius, className = "" } = props;

  const width = sizeMap[size] || sizeMap[ImageSize.MEDIUM];
  const height = sizeMap[size] || sizeMap[ImageSize.MEDIUM];

  if (size === ImageSize.AUTO) {
    return (
      <Image
        className={`${className} ${radius}`}
        src={src}
        fill={true}
        alt={alt}
      />
    );
  }

  return (
    <Image
      className={`${className} ${radius}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
