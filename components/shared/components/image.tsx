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
  const { src, alt = "Image", size, radius, className = "" } = props;

  const width = sizeMap[size] || sizeMap[ImageSize.MEDIUM];
  const height = sizeMap[size] || sizeMap[ImageSize.MEDIUM];

  if (size === ImageSize.AUTO) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`${className} ${radius} absolute inset-0 h-full w-full`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`${className} ${radius} border-transparent`}
    />
  );
}
