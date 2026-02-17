import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonBannerProps {
  /**
   * Height of the banner in pixels
   * @default 420
   */
  height?: number;

  /**
   * Show a large title skeleton
   * @default true
   */
  showTitle?: boolean;

  /**
   * Width of the title as a percentage
   * @default 60
   */
  titleWidth?: number;

  /**
   * Show a subtitle / description below the title
   * @default true
   */
  showSubtitle?: boolean;

  /**
   * Width of the subtitle as a percentage
   * @default 45
   */
  subtitleWidth?: number;

  /**
   * Show one or more CTA button skeletons
   * @default true
   */
  showCta?: boolean;

  /**
   * Number of CTA buttons to show
   * @default 2
   */
  ctaCount?: number;

  /**
   * Layout of the inner content
   * - "center": content centered in the banner
   * - "left":   content left-aligned
   * - "bottom": content pinned to the bottom-left
   * @default "center"
   */
  contentAlign?: "center" | "left" | "bottom";

  /**
   * Border radius of the whole banner
   * @default 0
   */
  radius?: number;

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

export function Banner({
  height = 420,
  showTitle = true,
  titleWidth = 60,
  showSubtitle = true,
  subtitleWidth = 45,
  showCta = true,
  ctaCount = 2,
  contentAlign = "center",
  radius = 0,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonBannerProps) {
  const alignStyles: Record<string, React.CSSProperties> = {
    center: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center" as const,
    },
    left: {
      alignItems: "flex-start",
      justifyContent: "center",
    },
    bottom: {
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingBottom: 40,
    },
  };

  const currentAlign = alignStyles[contentAlign] ?? alignStyles.center;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        borderRadius: radius,
        ...style,
      }}
    >
      {/* Background image placeholder */}
      <Skeleton
        width="100%"
        height="100%"
        radius={radius}
        variant={variant}
      />

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "0 48px",
          ...currentAlign,
        }}
      >
        {/* Eyebrow / category label */}
        <Skeleton
          width={80}
          height={12}
          radius={99}
          variant="static"
          style={{ opacity: 0.4 }}
        />

        {/* Title */}
        {showTitle && (
          <Skeleton
            width={`${titleWidth}%`}
            height={40}
            radius={8}
            variant="static"
            style={{ opacity: 0.35 }}
          />
        )}

        {/* Subtitle */}
        {showSubtitle && (
          <Skeleton
            width={`${subtitleWidth}%`}
            height={20}
            radius={6}
            variant="static"
            style={{ opacity: 0.3 }}
          />
        )}

        {/* CTA Buttons */}
        {showCta && ctaCount > 0 && (
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {Array.from({ length: ctaCount }).map((_, i) => (
              <Skeleton
                key={i}
                width={i === 0 ? 140 : 110}
                height={44}
                radius={6}
                variant="static"
                style={{ opacity: i === 0 ? 0.5 : 0.3 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
