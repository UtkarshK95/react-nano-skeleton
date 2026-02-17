import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";
import { Text } from "./Text";

export interface SkeletonListProps {
  /**
   * Number of list rows to render
   * @default 5
   */
  items?: number;

  /**
   * Gap between rows in pixels
   * @default 16
   */
  gap?: number;

  /**
   * Show a leading avatar circle on each row
   * @default false
   */
  showAvatar?: boolean;

  /**
   * Diameter of the leading avatar in pixels
   * @default 44
   */
  avatarSize?: number;

  /**
   * Shape of the leading avatar
   * @default "circle"
   */
  avatarShape?: "circle" | "square";

  /**
   * Show a leading thumbnail rectangle instead of/in addition to avatar.
   * Ignored when showAvatar is true.
   * @default false
   */
  showThumbnail?: boolean;

  /**
   * Width of the thumbnail in pixels
   * @default 56
   */
  thumbnailWidth?: number;

  /**
   * Height of the thumbnail in pixels
   * @default 56
   */
  thumbnailHeight?: number;

  /**
   * Show a trailing action placeholder (e.g. chevron or badge) on each row
   * @default false
   */
  showTrailing?: boolean;

  /**
   * Width of the trailing element in pixels
   * @default 24
   */
  trailingWidth?: number;

  /**
   * Number of text lines in each row
   * @default 2
   */
  lines?: number;

  /**
   * Show a thin divider line between rows
   * @default false
   */
  showDivider?: boolean;

  /**
   * Divider color
   * @default "rgba(0,0,0,0.07)"
   */
  dividerColor?: string;

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

export function List({
  items = 5,
  gap = 16,
  showAvatar = false,
  avatarSize = 44,
  avatarShape = "circle",
  showThumbnail = false,
  thumbnailWidth = 56,
  thumbnailHeight = 56,
  showTrailing = false,
  trailingWidth = 24,
  lines = 2,
  showDivider = false,
  dividerColor = "rgba(0,0,0,0.07)",
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonListProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        ...style,
      }}
    >
      {Array.from({ length: items }).map((_, i) => (
        <div key={i}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingTop: i === 0 ? 0 : gap / 2,
              paddingBottom: i === items - 1 ? 0 : gap / 2,
            }}
          >
            {/* Leading: Avatar */}
            {showAvatar && (
              <Skeleton
                width={avatarSize}
                height={avatarSize}
                radius={avatarShape === "circle" ? "circle" : "md"}
                variant={variant}
              />
            )}

            {/* Leading: Thumbnail (only if no avatar) */}
            {!showAvatar && showThumbnail && (
              <Skeleton
                width={thumbnailWidth}
                height={thumbnailHeight}
                radius="sm"
                variant={variant}
                style={{ flexShrink: 0 }}
              />
            )}

            {/* Main text content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <Text
                lines={lines}
                lineHeight={12}
                gap={6}
                variant={variant}
                lastLineWidth={55}
              />
            </div>

            {/* Trailing placeholder */}
            {showTrailing && (
              <Skeleton
                width={trailingWidth}
                height={trailingWidth}
                radius="sm"
                variant={variant}
                style={{ flexShrink: 0 }}
              />
            )}
          </div>

          {/* Divider */}
          {showDivider && i < items - 1 && (
            <div
              style={{
                height: 1,
                background: dividerColor,
                marginLeft: showAvatar
                  ? avatarSize + 12
                  : showThumbnail
                  ? thumbnailWidth + 12
                  : 0,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
