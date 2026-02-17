import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonButtonProps {
  /**
   * Width of the button in pixels or CSS string
   * @default 120
   */
  width?: number | string;

  /**
   * Height of the button in pixels
   * @default 40
   */
  height?: number;

  /**
   * Border radius preset or value
   * @default "md"
   */
  radius?: number | string | "sm" | "md" | "lg" | "xl" | "full";

  /**
   * Render as an icon-only circular button
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Size of the icon button (used only when iconOnly=true)
   * @default 40
   */
  iconSize?: number;

  /**
   * Number of buttons to render in a row
   * @default 1
   */
  count?: number;

  /**
   * Gap between buttons (when count > 1)
   * @default 8
   */
  gap?: number;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /** Additional CSS class name */
  className?: string;

  /** Additional inline styles */
  style?: React.CSSProperties;
}

export function Button({
  width = 120,
  height = 40,
  radius = "md",
  iconOnly = false,
  iconSize = 40,
  count = 1,
  gap = 8,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonButtonProps) {
  // Resolve "full" radius (not in base Skeleton presets)
  const resolvedRadius = radius === "full" ? 9999 : radius;

  if (iconOnly) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: `${gap}px`,
          ...style,
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton
            key={i}
            width={iconSize}
            height={iconSize}
            radius="circle"
            variant={variant}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: `${gap}px`,
        ...style,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          width={width}
          height={height}
          radius={resolvedRadius}
          variant={variant}
        />
      ))}
    </div>
  );
}
