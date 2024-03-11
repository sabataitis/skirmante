import Image from "next/image";

export type IMAGE_SIZES = "small" | "medium" | "large";

const sizeMap = {
  ["small"]: 200,
  ["medium"]: 400,
  ["large"]: 600,
  ["extraLarge"]: 800,
};

export function Img({
  src,
  alt,
  size,
  className = "",
}: {
  src: string;
  alt: string;
  size: IMAGE_SIZES | string;
  className: string;
}) {
  return (
    <Image
      className={className}
      src={src}
      width={sizeMap[size] || 400}
      height={sizeMap[size] || 400}
      alt={alt}
    />
  );
}
