import type { Meta, StoryObj } from "@storybook/react-vite";
import TextEditor from "./index";
import { useState } from "react";

const meta: Meta<typeof TextEditor> = {
  title: "Components/TextEditor",
  component: TextEditor,
  parameters: { docs: { source: { type: "dynamic" } }, layout: "centered" },
  argTypes: {
    allowImageUpload: {
      control: "boolean",
      description: "Enable image upload functionality",
    },
    allowVideoUpload: {
      control: "boolean",
      description: "Enable video upload functionality",
    },
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
    allowImageUpload: true,
    placeholder: "Write something...",
    value: `
		<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
		<p style="text-align: center;">This text is center-aligned.</p>
		<p style="text-align: right;">This text is right-aligned.</p>
		<ul>
			<li>This is a bullet point</li>
			<li>Another bullet point</li>
		</ul>
		<ol>
			<li>This is a numbered list</li>
			<li>Second item in numbered list</li>
		</ol>
		<p>This paragraph has a <a href="https://frappe.io" target="_blank">link to Frappe</a>.</p>
		`,
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

export const WithJSONOutput: Story = {
  args: {
    allowImageUpload: true,
    placeholder: "Write something...",
    onChange: () => {},
  },
  render: (args) => {
    const [html, setHtml] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [json, setJson] = useState<any>(null);

    return (
      <div className="w-3xl mx-auto">
        <TextEditor
          {...args}
          value={html}
          onChange={(newValue) => setHtml(newValue)}
          onContentChange={(jsonContent) => setJson(jsonContent)}
        />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">HTML Output:</h3>
            <pre className="p-2 bg-surface-gray-1 border border-outline-gray-2 rounded text-sm overflow-auto max-h-48">
              {html}
            </pre>
          </div>
          <div>
            <h3 className="font-bold mb-2">JSON Output:</h3>
            <pre className="p-2 bg-surface-gray-1 border border-outline-gray-2 rounded text-sm overflow-auto max-h-48">
              {JSON.stringify(json, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

export const HiddenToolbar: Story = {
  args: {
    hideToolbar: true,
    placeholder: "Start typing...",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState("");

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

export const WithMediaSupport: Story = {
  args: {
    allowImageUpload: true,
    allowVideoUpload: true,
    placeholder: "Write something... You can also add images and videos!",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState("");

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

export const Disabled: Story = {
  args: {
    disabled: true,
    value: `<p>This editor is disabled and cannot be edited.</p>`,
    onChange: () => {},
  },
  render: (args) => {
    return (
      <div className="w-3xl mx-auto">
        <TextEditor {...args} />
      </div>
    );
  },
};
