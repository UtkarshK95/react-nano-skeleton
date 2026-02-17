import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonStatProps {
  /**
   * Number of stat cards to render in a responsive row
   * @default 4
   */
  count?: number;

  /**
   * Gap between cards in pixels
   * @default 16
   */
  gap?: number;

  /**
   * Show a small icon placeholder in the top-right corner
   * @default true
   */
  showIcon?: boolean;

  /**
   * Show a trend indicator row (e.g. "+12% vs last month")
   * @default true
   */
  showTrend?: boolean;

  /**
   * Show a subtle sparkline / mini chart bar at the bottom of each card
   * @default false
   */
  showSparkline?: boolean;

  /**
   * Height of each stat card in pixels
   * @default 120
   */
  cardHeight?: number;

  /**
   * Padding inside each card in pixels
   * @default 20
   */
  cardPadding?: number;

  /**
   * Border radius of each card
   * @default 12
   */
  cardRadius?: number;

  /**
   * Background color of each card
   * @default "transparent"
   */
  cardBackground?: string;

  /**
   * Border style of each card
   * @default "1px solid rgba(0,0,0,0.08)"
   */
  cardBorder?: string;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /** Additional CSS class name */
  className?: string;

  /** Additional inline styles for the outer grid wrapper */
  style?: React.CSSProperties;
}

export function Stat({
  count = 4,
  gap = 16,
  showIcon = true,
  showTrend = true,
  showSparkline = false,
  cardHeight = 120,
  cardPadding = 20,
  cardRadius = 12,
  cardBackground = "transparent",
  cardBorder = "1px solid rgba(0,0,0,0.08)",
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonStatProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        width: "100%",
        ...style,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: cardHeight,
            padding: cardPadding,
            background: cardBackground,
            border: cardBorder,
            borderRadius: cardRadius,
            boxSizing: "border-box",
          }}
        >
          {/* Top row: label + optional icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Label */}
            <Skeleton width="55%" height={12} radius={4} variant={variant} />

            {/* Icon placeholder */}
            {showIcon && (
              <Skeleton
                width={32}
                height={32}
                radius="md"
                variant={variant}
              />
            )}
          </div>

          {/* Middle: big metric number */}
          <Skeleton width="45%" height={28} radius={6} variant={variant} />

          {/* Bottom row: trend or sparkline */}
          {(showTrend || showSparkline) && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {showTrend && (
                <>
                  {/* Trend badge */}
                  <Skeleton
                    width={40}
                    height={20}
                    radius={99}
                    variant={variant}
                  />
                  {/* "vs last period" text */}
                  <Skeleton
                    width="40%"
                    height={11}
                    radius={4}
                    variant={variant}
                  />
                </>
              )}

              {showSparkline && !showTrend && (
                /* Mini bar chart: 7 bars of random heights */
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 3,
                    height: 28,
                  }}
                >
                  {[60, 45, 75, 55, 80, 50, 90].map((pct, idx) => (
                    <Skeleton
                      key={idx}
                      width={6}
                      height={Math.round((pct / 100) * 28)}
                      radius={2}
                      variant={variant}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
