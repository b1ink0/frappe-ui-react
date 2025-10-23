import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Separator from ".";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative (for accessibility)",
    },
  },
};

export default meta;

type SeparatorStory = StoryObj<typeof Separator>;

export const Basic: SeparatorStory = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="w-40">Above</div>
      <Separator />
      <div className="w-40">Below</div>
    </div>
  ),
};
