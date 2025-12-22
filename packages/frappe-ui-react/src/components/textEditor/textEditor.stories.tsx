import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TextEditor from "./textEditor";
import { Button } from "../button";
import { EditorContent } from "@tiptap/react";
import TextEditorFixedMenu from "./textEditorFixedMenu";

const meta: Meta<typeof TextEditor> = {
  title: "Components/TextEditor",
  component: TextEditor,
  parameters: { 
    docs: { source: { type: "dynamic" } },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(`
<div>
  <h2>Heading 2</h2>
  <p>
    This is a paragraph with <strong>bold</strong> and <em>italic</em> text.
  </p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <p>
    <a href="https://frappe.io">Frappe</a>
  </p>
  <pre><code class="language-javascript">import { Button } from 'frappe-ui'
const value = ref(true);</code>
  </pre>
</div>
`);
    
    return (
      <div className="m-2 w-[550px]">
        <TextEditor
          editorClass="prose-sm min-h-[4rem] border rounded-b-lg border-t-0 p-2"
          content={value}
          placeholder="Type something..."
          onChange={(val) => setValue(val)}
          bubbleMenu={true}
          fixedMenu={true}
        />
      </div>
    );
  },
};

export const CommentEditor: Story = {
  render: () => {
    const [customValue, setCustomValue] = useState("");
    
    const customButtons = [
      "Paragraph",
      ["Heading 2", "Heading 3", "Heading 4"],
      "Separator",
      "Bold",
      "Italic",
      "Separator",
      "Bullet List",
      "Numbered List",
      "Separator",
      "Link",
      "Image",
    ];
    
    return (
      <div className="m-2 w-[550px]">
        <TextEditor
          editorClass="prose-sm max-w-none min-h-[4rem]"
          content={customValue}
          onChange={(val) => setCustomValue(val)}
          starterkitOptions={{ heading: { levels: [2, 3, 4] } }}
          placeholder="Write something amazing..."
        >
          {({ editor }) => (
            <>
              <EditorContent
                editor={editor}
                className="max-h-[50vh] overflow-y-auto border border-outline-gray-1 rounded-lg p-4"
              />
              <div className="mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
                <TextEditorFixedMenu
                  editor={editor}
                  className="-ml-1 overflow-x-auto"
                  buttons={customButtons}
                />
                <div className="mt-2 flex items-center justify-end space-x-2 sm:mt-0">
                  <Button>Cancel</Button>
                  <Button variant="solid">Submit</Button>
                </div>
              </div>
            </>
          )}
        </TextEditor>
      </div>
    );
  },
};

