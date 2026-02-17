import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonChipProps {
  /**
   * Number of chips to render
   * @default 5
   */
  count?: number;

  /**
   * Gap between chips in pixels
   * @default 8
   */
  gap?: number;

  /**
   * Height of each chip in pixels
   * @default 32
   */
  height?: number;

  /**
   * Vary the width of chips pseudo-randomly to look natural.
   * When true, widths cycle through the widthCycle array.
   * @default true
   */
  varyWidths?: boolean;

  /**
   * The widths (in px) to cycle through when varyWidths is true.
   * @default [72, 56, 88, 64, 96, 48, 80]
   */
  widthCycle?: number[];

  /**
   * Fixed width for every chip (used when varyWidths is false)
   * @default 80
   */
  width?: number;

  /**
   * Border radius. Defaults to "full" (pill shape).
   * @default 9999
   */
  radius?: number | string;

  /**
   * Wrap chips onto multiple lines
   * @default true
   */
  wrap?: boolean;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /** Additional CSS class name */
  className?: string;

  /** Additional inline styles for the outer wrapper */
  style?: React.CSSProperties;
}

export function Chip({
  count = 5,
  gap = 8,
  height = 32,
  varyWidths = true,
  widthCycle = [72, 56, 88, 64, 96, 48, 80],
  width = 80,
  radius = 9999,
  wrap = true,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonChipProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
        gap: `${gap}px`,
        width: "100%",
        ...style,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const chipWidth = varyWidths
          ? widthCycle[i % widthCycle.length]
          : width;

        return (
          <Skeleton
            key={i}
            width={chipWidth}
            height={height}
            radius={radius}
            variant={variant}
          />
        );
      })}
    </div>
  );
}
