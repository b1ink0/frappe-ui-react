import { Suspense } from "react";
import type { Editor } from "@tiptap/react";
import { useEditorState } from "@tiptap/react";
import Popover from "../popover/popover";
import { EditorCommand } from "./commands";
import clsx from "clsx";

interface MenuProps {
  editor: Editor;
  buttons: (EditorCommand | EditorCommand[])[];
  className?: string;
}

const Menu = ({ editor, buttons, className }: MenuProps) => {
  // Subscribe to editor state to re-render on selection changes
  useEditorState({
    editor,
    selector: (ctx) => ctx.editor.state.selection,
  });

  const onButtonClick = (button: EditorCommand) => {
    button.action?.(editor);
  };

  return (
    <div className={clsx("inline-flex bg-surface-white px-1 py-1", className)}>
      <div className="inline-flex items-center gap-1">
        {buttons.map((button, index) => {
          if (Array.isArray(button)) {
            const activeBtn =
              button.find((b) => b.isActive(editor)) || button[0];

            return (
              <div key={index} className="shrink-0">
                <Popover
                  transition="default"
                  target={({ togglePopover }) => (
                    <button
                      className="rounded px-2 py-1 text-base font-medium text-ink-gray-8 transition-colors hover:bg-surface-gray-2"
                      onClick={() => togglePopover()}
                    >
                      {activeBtn.icon && (
                        <activeBtn.icon className="h-4 w-4" />
                      )}
                      {!activeBtn.icon && <span>{activeBtn.label}</span>}
                    </button>
                  )}
                  body={({ close }) => (
                    <ul className="w-fit p-1.5 mt-2 rounded-lg bg-surface-modal shadow-2xl ring-1 ring-black/5 focus:outline-none">
                      {button.map((option, optionIndex) => {
                        const isDisabled = option.isDisabled?.(editor);
                        if (isDisabled) return null;

                        return (
                          <li key={optionIndex}>
                            <button
                              className="w-full h-7 rounded px-2 text-base flex items-center gap-2 hover:bg-surface-gray-3"
                              onClick={() => {
                                onButtonClick(option);
                                close();
                              }}
                            >
                              {option.icon && (
                                <option.icon className="size-4 flex-shrink-0 text-ink-gray-6" />
                              )}
                              {option.label && (
                                <span className="whitespace-nowrap text-ink-gray-7">
                                  {option.label}
                                </span>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                />
              </div>
            );
          }

          if (button.type === "separator") {
            return (
              <div key={index} className="h-4 w-[2px] border-l border-outline-gray-1"></div>
            );
          }
          
          if (button.component) {
            const Component = button.component;
            return (
              <Suspense key={index} fallback={<div className="h-6 w-6" />}>
                <Component editor={editor}>
                  {({ isActive, onClick }: { isActive?: boolean; onClick?: (button: EditorCommand) => void }) => (
                    <button
                      className={clsx(
                        "flex rounded p-1 text-ink-gray-8 transition-colors",
                        button.isActive?.(editor) || isActive
                          ? "bg-surface-gray-3"
                          : "hover:bg-surface-gray-2",
                        button.class
                      )}
                      onClick={() =>
                        onClick ? onClick(button) : onButtonClick(button)
                      }
                      title={button.label}
                    >
                      {button.icon && <button.icon className="h-4 w-4" />}
                      {!button.icon && button.text && (
                        <span className="inline-block h-4 min-w-[1rem] text-sm leading-4">
                          {button.text}
                        </span>
                      )}
                    </button>
                  )}
                </Component>
              </Suspense>
            );
          }

          return (
            <button
              key={index}
              className={clsx(
                "flex rounded p-1 text-ink-gray-8 transition-colors",
                button.isActive?.(editor)
                  ? "bg-surface-gray-3"
                  : "hover:bg-surface-gray-2",
                button.class
              )}
              onClick={() => onButtonClick(button)}
              title={button.label}
            >
              {button.icon && <button.icon className="h-4 w-4" />}
              {!button.icon && button.text && (
                <span className="inline-block h-4 min-w-[1rem] text-sm leading-4">
                  {button.text}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
