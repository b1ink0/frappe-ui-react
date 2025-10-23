import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Label from ".";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the label",
    },
  },
};

export default meta;

type LabelStory = StoryObj<typeof Label>;

export const Basic: LabelStory = {
  render: () => <Label htmlFor="input">Label Example</Label>,
};
