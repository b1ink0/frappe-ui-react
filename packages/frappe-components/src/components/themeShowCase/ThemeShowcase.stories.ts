import type { Meta, StoryObj } from "@storybook/react-vite";
import ThemeShowcase from "./ThemeShowcase";

/**
 * A component that showcases all the design system's theme tokens.
 * This serves as visual documentation for designers and developers.
 */
const meta = {
  title: "Theme/DesignSystem",
  component: ThemeShowcase,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default view of the ThemeShowcase component displaying all theme tokens.
 * This includes color scales, semantic colors, typography, spacing, shadows, and more.
 */
export const Default: Story = {
  args: {},
};
