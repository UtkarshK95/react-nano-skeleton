import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export type ImageAspectRatio = "1:1" | "4:3" | "16:9" | "3:2" | "3:4" | "9:16";

const ASPECT_RATIO_MAP: Record<ImageAspectRatio, number> = {
  "1:1": 1,
  "4:3": 4 / 3,
  "3:2": 3 / 2,
  "16:9": 16 / 9,
  "3:4": 3 / 4,
  "9:16": 9 / 16,
};

export interface SkeletonImageProps {
  /**
   * Aspect ratio preset for the image
   * "1:1" = square, "16:9" = widescreen, "4:3" = standard,
   * "3:4" = portrait (like mobile product photos), "9:16" = tall/story
   * If both width and height are provided, aspectRatio is ignored.
   * @default "16:9"
   */
  aspectRatio?: ImageAspectRatio;

  /**
   * Width of the image skeleton (CSS string or number in px)
   * @default "100%"
   */
  width?: number | string;

  /**
   * Height of the image skeleton. When set, aspectRatio is ignored.
   */
  height?: number | string;

  /**
   * Border radius preset or value
   * @default 8
   */
  radius?: number | string | "sm" | "md" | "lg" | "xl" | "circle";

  /**
   * Show a small play icon overlay (for video thumbnails)
   * @default false
   */
  showPlayIcon?: boolean;

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

export function Image({
  aspectRatio = "16:9",
  width = "100%",
  height,
  radius = 8,
  showPlayIcon = false,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonImageProps) {
  // If explicit height is given, skip aspect ratio padding trick
  if (height !== undefined) {
    return (
      <Skeleton
        width={width}
        height={height}
        radius={radius}
        variant={variant}
        className={className}
        style={style}
      />
    );
  }

  // Aspect ratio via padding-top trick so it works with width: "100%"
  const ratio = ASPECT_RATIO_MAP[aspectRatio] ?? 16 / 9;
  const paddingTop = `${(1 / ratio) * 100}%`;

  // Resolve border radius for the wrapper
  const radiusPresets: Record<string, string> = {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    circle: "50%",
  };
  const borderRadius =
    typeof radius === "string" && radius in radiusPresets
      ? radiusPresets[radius]
      : typeof radius === "number"
      ? `${radius}px`
      : radius;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        paddingTop,
        overflow: "hidden",
        borderRadius,
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Stretched skeleton fills the padded box */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <Skeleton
          width="100%"
          height="100%"
          radius={0}
          variant={variant}
        />
      </div>

      {/* Optional play icon overlay for video thumbnails */}
      {showPlayIcon && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Simple triangle "play" shape in CSS */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "18px solid rgba(255,255,255,0.6)",
                marginLeft: 4,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
