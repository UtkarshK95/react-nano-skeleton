import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";
import { Text } from "./Text";

export interface SkeletonCommentProps {
  /**
   * Number of top-level comment items to render
   * @default 3
   */
  items?: number;

  /**
   * Gap between top-level comments in pixels
   * @default 24
   */
  gap?: number;

  /**
   * Number of nested reply skeletons to show under each comment (0 to disable)
   * @default 1
   */
  replyCount?: number;

  /**
   * Number of lines of body text in each comment
   * @default 2
   */
  lines?: number;

  /**
   * Show reaction/action row (like, reply, etc.) below each comment body
   * @default true
   */
  showActions?: boolean;

  /**
   * Size of the comment author avatar in pixels
   * @default 36
   */
  avatarSize?: number;

  /**
   * Animation variant
   * @default "pulse"
   */
  variant?: SkeletonVariant;

  /** Additional CSS class name */
  className?: string;

  /** Additional inline styles for the outer wrapper */
  style?: React.CSSProperties;
}

function SingleComment({
  lines,
  avatarSize,
  showActions,
  variant,
  isReply = false,
}: {
  lines: number;
  avatarSize: number;
  showActions: boolean;
  variant: SkeletonVariant;
  isReply?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        width: "100%",
      }}
    >
      {/* Avatar */}
      <Skeleton
        width={isReply ? avatarSize * 0.8 : avatarSize}
        height={isReply ? avatarSize * 0.8 : avatarSize}
        radius="circle"
        variant={variant}
        style={{ flexShrink: 0 }}
      />

      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Author name + timestamp row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Skeleton width="25%" height={12} radius={4} variant={variant} />
          <Skeleton width="15%" height={10} radius={4} variant={variant} />
        </div>

        {/* Comment body */}
        <Text
          lines={lines}
          lineHeight={12}
          gap={6}
          variant={variant}
          lastLineWidth={isReply ? 70 : 55}
        />

        {/* Action row */}
        {showActions && (
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Skeleton width={40} height={10} radius={4} variant={variant} />
            <Skeleton width={40} height={10} radius={4} variant={variant} />
            <Skeleton width={40} height={10} radius={4} variant={variant} />
          </div>
        )}
      </div>
    </div>
  );
}

export function Comment({
  items = 3,
  gap = 24,
  replyCount = 1,
  lines = 2,
  showActions = true,
  avatarSize = 36,
  variant = "pulse",
  className = "",
  style = {},
}: SkeletonCommentProps) {
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
        <div key={i}>
          {/* Top-level comment */}
          <SingleComment
            lines={lines}
            avatarSize={avatarSize}
            showActions={showActions}
            variant={variant}
          />

          {/* Nested replies */}
          {replyCount > 0 && (
            <div
              style={{
                marginTop: 16,
                marginLeft: avatarSize + 12,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                borderLeft: "2px solid rgba(128,128,128,0.15)",
                paddingLeft: 16,
              }}
            >
              {Array.from({ length: replyCount }).map((_, j) => (
                <SingleComment
                  key={j}
                  lines={Math.max(1, lines - 1)}
                  avatarSize={avatarSize}
                  showActions={showActions}
                  variant={variant}
                  isReply
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
