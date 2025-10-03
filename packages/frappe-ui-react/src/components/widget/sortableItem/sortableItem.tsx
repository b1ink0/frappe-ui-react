import { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type {
  DraggableSyntheticListeners,
  UniqueIdentifier
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: UniqueIdentifier;
}

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() { }
});

export function Item({ children, id }: PropsWithChildren<Props>) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition
  };

  return (
    <SortableItemContext.Provider value={context}>
      <li className="flex flex-col px-5 py-[18px] shadow-[0_0_0_1px_rgba(63,63,68,0.05),0_1px_3px_0_rgba(34,33,81,0.15)] rounded box-border list-none" ref={setNodeRef} style={style}>
        {children}
      </li>
    </SortableItemContext.Provider>
  );
}

export function DragHandle({ title }: { title: string }) {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  {/* TODO: Use icon button. Blocked by issue #38 */ }
  return (
    <button className="text-ink-gray-8 active:bg-surface-gray-4" {...attributes} {...listeners} ref={ref}>
      <h2 className="text-ink-gray-8">
        {title}
      </h2>
    </button>
  );
}
