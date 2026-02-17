import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";
import { Text } from "./Text";

export interface SkeletonAvatarTextProps {
  /**
   * Number of text lines next to the avatar
   * @default 2
   */
  lines?: number;

  /**
   * Size of the avatar (width and height) in pixels
   * @default 48
   */
  avatarSize?: number;

  /**
   * Gap between avatar and text in pixels (follows 8px grid)
   * @default 12
   */
  gap?: number;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /**
   * Height of each text line in pixels
   * @default 12
   */
  lineHeight?: number;

  /**
   * Gap between text lines in pixels
   * @default 6
   */
  lineGap?: number;

  /**
   * Vertical alignment of content
   * @default "center"
   */
  align?: "start" | "center" | "end";

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles for the container
   */
  style?: React.CSSProperties;
}

export function AvatarText({
  lines = 2,
  avatarSize = 48,
  gap = 12,
  variant = "shimmer",
  lineHeight = 12,
  lineGap = 6,
  align = "center",
  className = "",
  style = {},
}: SkeletonAvatarTextProps) {
  const alignItemsMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
  };

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: alignItemsMap[align],
        gap: `${gap}px`,
        width: "100%",
        ...style,
      }}
    >
      {/* Avatar skeleton - always circular */}
      <Skeleton
        width={avatarSize}
        height={avatarSize}
        radius="circle"
        variant={variant}
      />

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <Text
          lines={lines}
          lineHeight={lineHeight}
          gap={lineGap}
          variant={variant}
          lastLineWidth={65}
        />
      </div>
    </div>
  );
}
