import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export interface SkeletonTableProps {
  /**
   * Number of rows to render
   * @default 5
   */
  rows?: number;

  /**
   * Number of columns to render
   * @default 4
   */
  cols?: number;

  /**
   * Gap between rows in pixels (follows 8px grid)
   * @default 12
   */
  rowGap?: number;

  /**
   * Gap between columns in pixels (follows 8px grid)
   * @default 12
   */
  colGap?: number;

  /**
   * Height of each cell in pixels
   * @default 16
   */
  cellHeight?: number;

  /**
   * Animation variant
   * @default "shimmer"
   */
  variant?: SkeletonVariant;

  /**
   * Border radius for each cell
   * @default 4
   */
  cellRadius?: number | string;

  /**
   * Whether to show header row with different styling
   * @default false
   */
  showHeader?: boolean;

  /**
   * Height of header cells (only used if showHeader is true)
   * @default 20
   */
  headerHeight?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional inline styles for the container
   */
  style?: React.CSSProperties;
}

export function Table({
  rows = 5,
  cols = 4,
  rowGap = 12,
  colGap = 12,
  cellHeight = 16,
  variant = "shimmer",
  cellRadius = 4,
  showHeader = false,
  headerHeight = 20,
  className = "",
  style = {},
}: SkeletonTableProps) {
  const totalRows = showHeader ? rows + 1 : rows;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${rowGap}px`,
        width: "100%",
        ...style,
      }}
    >
      {Array.from({ length: totalRows }).map((_, rowIndex) => {
        const isHeader = showHeader && rowIndex === 0;
        const currentHeight = isHeader ? headerHeight : cellHeight;

        return (
          <div
            key={rowIndex}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: `${colGap}px`,
              width: "100%",
            }}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <Skeleton
                key={colIndex}
                height={currentHeight}
                radius={cellRadius}
                variant={variant}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
