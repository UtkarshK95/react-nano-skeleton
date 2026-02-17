import React from "react";
import { Skeleton, SkeletonVariant } from "./Skeleton";

export type FormFieldType = "input" | "textarea" | "select" | "checkbox" | "radio";

export interface SkeletonFormProps {
  /**
   * Number of form fields to render
   * @default 4
   */
  fields?: number;

  /**
   * Gap between form fields in pixels
   * @default 20
   */
  gap?: number;

  /**
   * Show a label above each field
   * @default true
   */
  showLabel?: boolean;

  /**
   * Height of each label line in pixels
   * @default 13
   */
  labelHeight?: number;

  /**
   * Height of each input field in pixels
   * @default 44
   */
  inputHeight?: number;

  /**
   * Specify individual field types in order.
   * If fewer types are given than `fields`, the last type repeats.
   * @default ["input"]
   */
  fieldTypes?: FormFieldType[];

  /**
   * Show a submit button skeleton below the fields
   * @default true
   */
  showSubmit?: boolean;

  /**
   * Width of the submit button (px or CSS string)
   * @default 160
   */
  submitWidth?: number | string;

  /**
   * Height of the submit button in pixels
   * @default 44
   */
  submitHeight?: number;

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

// Internal heights for special field types
const FIELD_TYPE_HEIGHT: Record<FormFieldType, number | null> = {
  input: null,    // use inputHeight prop
  select: null,   // use inputHeight prop
  textarea: 100,  // taller by default
  checkbox: 20,
  radio: 20,
};

export function Form({
  fields = 4,
  gap = 20,
  showLabel = true,
  labelHeight = 13,
  inputHeight = 44,
  fieldTypes = ["input"],
  showSubmit = true,
  submitWidth = 160,
  submitHeight = 44,
  variant = "shimmer",
  className = "",
  style = {},
}: SkeletonFormProps) {
  const getFieldType = (index: number): FormFieldType => {
    return fieldTypes[Math.min(index, fieldTypes.length - 1)];
  };

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
      {Array.from({ length: fields }).map((_, i) => {
        const type = getFieldType(i);
        const isCheckOrRadio = type === "checkbox" || type === "radio";
        const fieldHeight = FIELD_TYPE_HEIGHT[type] ?? inputHeight;

        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Label */}
            {showLabel && !isCheckOrRadio && (
              <Skeleton
                width="35%"
                height={labelHeight}
                radius={4}
                variant={variant}
              />
            )}

            {/* Checkbox / Radio: horizontal layout with label after */}
            {isCheckOrRadio ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Skeleton
                  width={20}
                  height={20}
                  radius={type === "checkbox" ? "sm" : "circle"}
                  variant={variant}
                />
                <Skeleton
                  width="50%"
                  height={13}
                  radius={4}
                  variant={variant}
                />
              </div>
            ) : (
              /* Standard input / textarea / select */
              <Skeleton
                width="100%"
                height={fieldHeight}
                radius={6}
                variant={variant}
              />
            )}
          </div>
        );
      })}

      {/* Submit button */}
      {showSubmit && (
        <div style={{ paddingTop: 4 }}>
          <Skeleton
            width={submitWidth}
            height={submitHeight}
            radius={6}
            variant={variant}
          />
        </div>
      )}
    </div>
  );
}
