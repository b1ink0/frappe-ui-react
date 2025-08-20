import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Rating from "./rating";
import { Story, Variant } from "../Story";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  tags: ["autodocs"],
  component: Rating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5 },
      description: "Current rating value",
      table: { category: "Props" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the rating icons",
      table: { category: "Props" },
    },
    label: {
      control: "text",
      description: "Optional label for the rating",
      table: { category: "Props" },
    },
    onChange: {
      action: "onChange",
      description: "Callback when rating changes",
      table: { category: "Events" },
    },
    className: {
      control: "text",
      description: "Custom CSS classes for the container",
      table: { category: "Props" },
    },
  },
};
export default meta;

type RatingStory = StoryObj<typeof Rating>;

export const Default: RatingStory = {
  render: (args) => {
    const [value, setValue] = React.useState(0);

    return (
      <Story layout={{ type: "grid", width: 300 }}>
        <Variant title="default">
          <div className="p-2">
            <Rating {...args} value={value} onChange={setValue} />
          </div>
        </Variant>
      </Story>
    );
  },
  args: {
    value: 0,
    size: "md",
    label: "Rating",
  },
};
