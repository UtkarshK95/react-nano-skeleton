import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";
import { Text } from "./Text";

export interface SkeletonProductRowProps {
  /**
   * Number of product rows to render
   * @default 4
   */
  items?: number;

  /**
   * Gap between rows in pixels
   * @default 20
   */
  gap?: number;

  /**
   * Width of the product thumbnail in pixels
   * @default 140
   */
  imageWidth?: number;

  /**
   * Height of the product thumbnail in pixels
   * @default 140
   */
  imageHeight?: number;

  /**
   * Border radius of the product thumbnail
   * @default 8
   */
  imageRadius?: number;

  /**
   * Number of description lines
   * @default 3
   */
  lines?: number;

  /**
   * Show a price skeleton (larger text, below title)
   * @default true
   */
  showPrice?: boolean;

  /**
   * Show a star-rating row
   * @default true
   */
  showRating?: boolean;

  /**
   * Show a badge / label skeleton (e.g. "Best Seller", "Sponsored")
   * @default false
   */
  showBadge?: boolean;

  /**
   * Show a CTA button at the end of the row
   * @default false
   */
  showCta?: boolean;

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

export function ProductRow({
  items = 4,
  gap = 20,
  imageWidth = 140,
  imageHeight = 140,
  imageRadius = 8,
  lines = 3,
  showPrice = true,
  showRating = true,
  showBadge = false,
  showCta = false,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonProductRowProps) {
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
      {Array.from({ length: items }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Product thumbnail */}
          <Skeleton
            width={imageWidth}
            height={imageHeight}
            radius={imageRadius}
            variant={variant}
            style={{ flexShrink: 0 }}
          />

          {/* Product info */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {/* Optional badge */}
            {showBadge && (
              <Skeleton
                width={90}
                height={22}
                radius={99}
                variant={variant}
              />
            )}

            {/* Title lines */}
            <Text
              lines={lines}
              lineHeight={13}
              gap={7}
              variant={variant}
              lastLineWidth={60}
            />

            {/* Star rating row */}
            {showRating && (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {/* 5 star circles */}
                {Array.from({ length: 5 }).map((_, s) => (
                  <Skeleton
                    key={s}
                    width={14}
                    height={14}
                    radius={2}
                    variant={variant}
                  />
                ))}
                {/* Review count */}
                <Skeleton
                  width={60}
                  height={11}
                  radius={4}
                  variant={variant}
                />
              </div>
            )}

            {/* Price */}
            {showPrice && (
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {/* Main price */}
                <Skeleton
                  width={80}
                  height={22}
                  radius={4}
                  variant={variant}
                />
                {/* Struck-through original price */}
                <Skeleton
                  width={55}
                  height={14}
                  radius={4}
                  variant={variant}
                />
                {/* Discount badge */}
                <Skeleton
                  width={45}
                  height={18}
                  radius={4}
                  variant={variant}
                />
              </div>
            )}

            {/* CTA button */}
            {showCta && (
              <Skeleton
                width={140}
                height={40}
                radius={6}
                variant={variant}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
