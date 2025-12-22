import { useMemo } from "react";
import type { Editor } from "@tiptap/react";
import { createEditorButton, EditorButtonOption } from "./utils";
import Menu from "./menu";
import { EditorCommand } from "./commands";

interface TextEditorFixedMenuProps {
  editor: Editor;
  buttons?: boolean | EditorButtonOption[];
  className?: string;
}

const TextEditorFixedMenu = ({
  editor,
  buttons,
  className,
}: TextEditorFixedMenuProps) => {

  const fixedMenuButtons = useMemo(() => {
    if (!buttons) return null;

    let buttonList: EditorButtonOption[];
    if (Array.isArray(buttons)) {
      buttonList = buttons;
    } else {
      buttonList = [
        [
          "Heading 1",
          "Heading 2",
          "Heading 3",
          "Heading 4",
          "Heading 5",
          "Heading 6",
        ],
        "Paragraph",
        "Separator",
        "Bold",
        "Italic",
        "Separator",
        "Bullet List",
        "Numbered List",
        "Task List",
        "Separator",
        "Align Left",
        "Align Center",
        "Align Right",
        "FontColor",
        "Separator",
        "Image",
        "Video",
        "Iframe",
        "Link",
        "Blockquote",
        "Code",
        "Horizontal Rule",
        [
          "InsertTable",
          "AddColumnBefore",
          "AddColumnAfter",
          "DeleteColumn",
          "AddRowBefore",
          "AddRowAfter",
          "DeleteRow",
          "MergeCells",
          "SplitCell",
          "ToggleHeaderColumn",
          "ToggleHeaderRow",
          "ToggleHeaderCell",
          "DeleteTable",
        ],
        "Separator",
        "Undo",
        "Redo",
      ];
    }
    return buttonList.map(createEditorButton) as (
      | EditorCommand
      | EditorCommand[]
    )[];
  }, [buttons]);

  if (!fixedMenuButtons) {
    return null;
  }

  return <Menu editor={editor} buttons={fixedMenuButtons} className={className} />;
};

export default TextEditorFixedMenu;
