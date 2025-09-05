import React from "react";

export interface VariantProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  flexAlign?: string;
  flexJustify?: string;
  minHeight?: number | string;
}

export const Variant: React.FC<VariantProps> = ({
  title,
  description,
  children,
  flexAlign = "center",
  flexJustify = "center",
  minHeight = "80px",
}) => {
  return (
    <div className="border border-outline-gray-1 rounded-lg bg-surface-gray-1 shadow-sm">
      <div className="p-3 bg-surface-gray-2 border-b border-outline-gray-2">
        <h3 className="text-sm font-medium text-ink-gray-9 capitalize m-0">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-xs text-ink-gray-7">{description}</p>
        )}
      </div>
      <div
        className="p-4"
        style={{
          display: "flex",
          alignItems: flexAlign,
          justifyContent: flexJustify,
          minHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
};
