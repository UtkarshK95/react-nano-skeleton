import React from "react";
import "../styles.css";

export type SkeletonVariant = "shimmer" | "pulse" | "wave" | "static";

export interface SkeletonProps {
  /**
   * Width of the skeleton
   * @default "100%"
   */
  width?: number | string;

  /**
   * Height of the skeleton
   * @default 16
   */
  height?: number | string;

  /**
   * Border radius of the skeleton
   * Can be a number (px), string, or preset: "circle" | "sm" | "md" | "lg" | "xl"
   * @default 6
   */
  radius?: number | string | "circle" | "sm" | "md" | "lg" | "xl";

  /**
   * Number of skeleton elements to render
   * @default 1
   */
  count?: number;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /**
   * Gap between skeleton elements when count > 1
   * @default 8
   */
  gap?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;

  /**
   * Whether to animate (deprecated - use variant="static" instead)
   * @deprecated Use variant prop instead
   */
  animate?: boolean;
}

export function Skeleton({
  width = "100%",
  height = 16,
  radius = 6,
  count = 1,
  variant = "shimmer",
  gap = 8,
  className = "",
  style = {},
  animate = true,
}: SkeletonProps) {
  // Map radius presets to CSS classes
  const getRadiusClass = () => {
    if (typeof radius === "string") {
      switch (radius) {
        case "circle":
          return "nano-skeleton-circle";
        case "sm":
          return "nano-skeleton-rounded-sm";
        case "md":
          return "nano-skeleton-rounded-md";
        case "lg":
          return "nano-skeleton-rounded-lg";
        case "xl":
          return "nano-skeleton-rounded-xl";
        default:
          return "";
      }
    }
    return "";
  };

  // Determine animation class
  const getAnimationClass = () => {
    // Support legacy animate prop
    if (animate === false) {
      return "nano-skeleton-static";
    }
    return `nano-skeleton-${variant}`;
  };

  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    // Only apply borderRadius if not using a preset class
    ...(typeof radius !== "string" ||
    !["circle", "sm", "md", "lg", "xl"].includes(radius)
      ? { borderRadius: radius }
      : {}),
    ...style,
  };

  const radiusClass = getRadiusClass();
  const animationClass = getAnimationClass();
  const combinedClassName =
    `nano-skeleton ${radiusClass} ${animationClass} ${className}`.trim();

  // Single skeleton
  if (count === 1) {
    return <div className={combinedClassName} style={skeletonStyle} />;
  }

  // Multiple skeletons
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={combinedClassName} style={skeletonStyle} />
      ))}
    </div>
  );
}
