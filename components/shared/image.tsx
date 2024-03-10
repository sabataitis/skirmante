import Image from "next/image";

export type AppImagePayload = {
  data: { src: string; alt: string; width: number; height: number };
  className: string;
};

export function AppImage({ data, className = "" }: AppImagePayload) {
  return (
    <Image
      className={className}
      src={data.src}
      width={data.width}
      height={data.height}
      alt={data.alt}
    />
  );
}
