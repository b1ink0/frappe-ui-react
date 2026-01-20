import type { Meta, StoryObj } from "@storybook/react-vite";
import TextEditor from "./index";
import { useState } from "react";

const meta: Meta<typeof TextEditor> = {
  title: "Components/TextEditor",
  component: TextEditor,
  parameters: { docs: { source: { type: "dynamic" } }, layout: "centered" },
  argTypes: {
    hideToolbar: {
      control: "boolean",
      description: "Hide the formatting toolbar",
    },
    value: {
      control: "text",
      description: "Initial content of the editor",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when editor is empty",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: "Write something...",
    value: "",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState(args.value as string);

    return (
      <div className="w-3xl mx-auto">
        <TextEditor
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    );
  },
};
