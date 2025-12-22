import { Editor } from "@tiptap/react";
import { type UploadedFile } from "../../utils/useFileUpload";
import { type MentionSuggestionItem } from "./extensions/mention/mention-extension";

export type { UploadedFile };

export type ConfigureMentionOptions =
  | {
      mentions: MentionSuggestionItem[];
      component?: React.ComponentType<unknown>;
    }
  | MentionSuggestionItem[]
  | null;

export interface TextEditorProps {
  content?: string | null;
  placeholder?: string | (() => string);
  editorClass?: string | string[] | object;
  editable?: boolean;
  autofocus?: boolean;
  bubbleMenu?: boolean | any[];
  bubbleMenuOptions?: object;
  fixedMenu?: boolean | any[];
  floatingMenu?: boolean | any[];
  extensions?: any[];
  starterkitOptions?: any;
  mentions?: ConfigureMentionOptions;
  tags?: any[];
  uploadFunction?: (file: File) => Promise<UploadedFile>;
  uploadArgs?: object;
  onChange?: (content: string) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onTransaction?: (editor: Editor) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | ((props: { editor: Editor }) => React.ReactNode);
}

export interface TextEditorRef {
  editor: Editor | null;
  rootRef: HTMLDivElement | null;
}
