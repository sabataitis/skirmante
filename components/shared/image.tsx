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

// remove w;h;q props from url as assets.tina.io doesn't support those (look into cloudflare hosting)
const imageLoader = ({ src }) => src;

export function Img(props: Props) {
  const { src, alt, size, radius, className = "" } = props;

  const width = sizeMap[size] || sizeMap[ImageSize.MEDIUM];
  const height = sizeMap[size] || sizeMap[ImageSize.MEDIUM];

  if (size === ImageSize.AUTO) {
    return (
      <Image
        className={`${className} ${radius}`}
        loader={imageLoader}
        src={src}
        fill={true}
        alt={alt || "image-alt"}
        unoptimized
      />
    );
  }

  return (
    <Image
      className={`${className} ${radius}`}
      loader={imageLoader}
      src={src}
      width={width}
      height={height}
      alt={alt || "image-alt"}
      unoptimized
    />
  );
}
