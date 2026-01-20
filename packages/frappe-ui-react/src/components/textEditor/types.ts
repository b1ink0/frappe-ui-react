/**
 * External dependencies.
 */
import type { JSONContent } from "@tiptap/core";

/**
 * TextEditor component props interface.
 */
export interface TextEditorProps {
  /**
   * Enable image upload functionality.
   */
  allowImageUpload?: boolean;

  /**
   * Enable video upload functionality.
   */
  allowVideoUpload?: boolean;

  /**
   * Additional CSS classes to apply to the editor container.
   */
  className?: string;

  /**
   * Hide the formatting toolbar.
   */
  hideToolbar?: boolean;

  /**
   * Callback fired when content changes, returns HTML string.
   * Required prop for controlled component usage.
   */
  onChange: (value: string) => void;

  /**
   * Callback fired when content changes, returns Tiptap JSON format.
   * Optional prop for advanced use cases that need structured content.
   */
  onContentChange?: (json: JSONContent) => void;

  /**
   * The HTML content of the editor.
   */
  value?: string;

  /**
   * Placeholder text to display when the editor is empty.
   */
  placeholder?: string;

  /**
   * Whether the editor is disabled.
   */
  disabled?: boolean;
}
