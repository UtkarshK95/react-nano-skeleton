import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonTextProps {
  /**
   * Number of text lines to render
   * @default 3
   */
  lines?: number;

  /**
   * Height of each line in pixels
   * @default 12
   */
  lineHeight?: number;

  /**
   * Gap between lines in pixels (follows 4px/8px grid)
   * @default 8
   */
  gap?: number;

  /**
   * Width of the last line as a percentage (to simulate natural text ending)
   * @default 60
   */
  lastLineWidth?: number;

  /**
   * Animation variant for the skeleton
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /**
   * Border radius for each line
   * @default 4
   */
  radius?: number | string;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles for the container
   */
  style?: React.CSSProperties;
}

export function Text({
  lines = 3,
  lineHeight = 12,
  gap = 8,
  lastLineWidth = 60,
  variant = "shimmer",
  radius = 4,
  className = "",
  style = {},
}: SkeletonTextProps) {
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
      {Array.from({ length: lines }).map((_, i) => {
        // Last line is shorter to simulate natural text
        const isLastLine = i === lines - 1;
        const width = isLastLine ? `${lastLineWidth}%` : "100%";

        return (
          <Skeleton
            key={i}
            width={width}
            height={lineHeight}
            radius={radius}
            variant={variant}
          />
        );
      })}
    </div>
  );
}
