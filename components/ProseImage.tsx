import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

type ProseImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
};

export default function ProseImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  style,
  sizes,
}: ProseImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      style={style}
      sizes={sizes ?? "(min-width: 880px) 880px, 100vw"}
    />
  );
}