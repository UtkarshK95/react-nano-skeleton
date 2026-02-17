import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";
import { Text } from "./Text";

export interface SkeletonCardProps {
  /**
   * Number of text lines below the image
   * @default 2
   */
  lines?: number;

  /**
   * Height of the image/media section in pixels
   * @default 200
   */
  imageHeight?: number;

  /**
   * Show title skeleton (appears between image and text lines)
   * @default true
   */
  showTitle?: boolean;

  /**
   * Width of the title as a percentage
   * @default 70
   */
  titleWidth?: number;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /**
   * Gap between card sections in pixels (follows 8px grid)
   * @default 12
   */
  gap?: number;

  /**
   * Border radius for the image
   * @default 8
   */
  imageRadius?: number | string;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles for the container
   */
  style?: React.CSSProperties;
}

export function Card({
  lines = 2,
  imageHeight = 200,
  showTitle = true,
  titleWidth = 70,
  variant = "shimmer",
  gap = 12,
  imageRadius = 8,
  className = "",
  style = {},
}: SkeletonCardProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
        width: "100%",
        ...style,
      }}
    >
      {/* Image/Media skeleton */}
      <Skeleton height={imageHeight} radius={imageRadius} variant={variant} />

      {/* Title skeleton (optional) */}
      {showTitle && (
        <Skeleton
          height={16}
          width={`${titleWidth}%`}
          radius={4}
          variant={variant}
        />
      )}

      {/* Description/Text lines */}
      {lines > 0 && (
        <Text
          lines={lines}
          lineHeight={12}
          gap={8}
          variant={variant}
          lastLineWidth={55}
        />
      )}
    </div>
  );
}
