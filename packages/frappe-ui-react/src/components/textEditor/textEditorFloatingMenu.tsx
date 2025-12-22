import { useMemo } from "react";
import { FloatingMenu } from "@tiptap/react/menus";
import type { Editor } from "@tiptap/react";
import { createEditorButton } from "./utils";
import type { EditorCommand } from "./commands";
import Menu from "./menu";

interface TextEditorFloatingMenuProps {
  editor: Editor;
  buttons?: boolean | string[];
}

const TextEditorFloatingMenu = ({ editor, buttons }: TextEditorFloatingMenuProps) => {
  const floatingMenuButtons = useMemo(() => {
    if (!buttons) return null;

    const buttonList: string[] = Array.isArray(buttons)
      ? buttons
      : [
          "Paragraph",
          "Heading 2",
          "Heading 3",
          "Bullet List",
          "Numbered List",
          "Task List",
          "Blockquote",
          "Code",
          "Horizontal Rule",
        ];
        
    return buttonList.map(createEditorButton) as (EditorCommand | EditorCommand[])[];
  }, [buttons]);

  if (!floatingMenuButtons) {
    return null;
  }

  return (
    <FloatingMenu editor={editor}>
      <Menu editor={editor} buttons={floatingMenuButtons} />
    </FloatingMenu>
  );
};

export default TextEditorFloatingMenu;
