import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Skeleton from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom class names for the skeleton",
    },
  },
};

export default meta;

type SkeletonStory = StoryObj<typeof Skeleton>;

export const Basic: SkeletonStory = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-10 w-15 bg-gray-200" />
      <Skeleton className="h-10 w-25 bg-gray-200" />
      <Skeleton className="h-10 w-35 bg-gray-200" />
    </div>
  ),
};
