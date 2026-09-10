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
  caption?: ReactNode;
  figureClassName?: string;
  figureStyle?: CSSProperties;
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
  caption,
  figureClassName,
  figureStyle,
}: ProseImageProps) {
  const img = (
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

  if (caption) {
    return (
      <figure
        className={figureClassName}
        style={{ margin: "1.75rem 0", ...figureStyle }}
      >
        {img}
        <figcaption
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--color-text-muted, #64748b)",
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      </figure>
    );
  }

  return img;
}