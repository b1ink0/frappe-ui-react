import React from "react";

export interface StoryLayoutConfig {
  type?: "single" | "grid" | "list";
  width?: number | string;
  height?: number | string;
  iframe?: boolean;
}

export interface StoryProps {
  layout?: StoryLayoutConfig;
  children: React.ReactNode;
  controls?: React.ReactNode;
}

export const Story: React.FC<StoryProps> = ({
  layout = { type: "single" },
  children,
  controls,
}) => {
  const getLayoutStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      padding: "16px",
      minHeight: "200px",
    };

    switch (layout.type) {
      case "grid":
        return {
          ...baseStyles,
          display: "grid",
          gridTemplateColumns: layout.width
            ? `repeat(auto-fit, minmax(${
                typeof layout.width === "number"
                  ? `${layout.width}px`
                  : layout.width
              }, 1fr))`
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          alignItems: "start",
          height: layout.height ? layout.height : "auto",
        };
      case "list":
        return {
          ...baseStyles,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: layout.width || "100%",
          height: layout.height ? layout.height : "auto",
        };
      default:
        return {
          ...baseStyles,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: layout.width || "100%",
          height: layout.height ? layout.height : "auto",
        };
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={getLayoutStyles()}>{children}</div>
      {controls && (
        <div className="border border-outline-gray-2 p-4 bg-surface-gray-1 mt-4 rounded">
          <h4 className="mb-3 text-lg font-semibold text-ink-gray-9">
            Controls
          </h4>
          <div className="flex flex-wrap gap-4">{controls}</div>
        </div>
      )}
    </div>
  );
};
