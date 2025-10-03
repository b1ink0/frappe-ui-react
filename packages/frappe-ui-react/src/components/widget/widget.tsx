import { useState } from 'react';
import { BaseItem, WidgetList } from './widgetList';
import { Triangle } from 'lucide-react';

export function WidgetDropArea({widgets}:{widgets:BaseItem[]}) {
  const [items, setItems] = useState(widgets);

  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <WidgetList
        items={items}
        onChange={setItems}
        renderItem={({ id, title, Widget }) => (
          <WidgetContainer id={id} title={title} Widget={Widget}/>
        )}
      />
    </div>
  );
};

export const WidgetContainer = ({
  id,
  title,
  Widget,
}:BaseItem) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <WidgetList.Item id={id}>
      <div className='w-full flex justify-between cursor-pointer '>
        <WidgetList.DragHandle title={title} />
        <button onClick={toggleOpen}>
          <Triangle className={`${!isOpen && "rotate-180"}`} />
        </button>
      </div>
      {/* Separator */}
      <hr className={`${!isOpen && "hidden"} my-2 border-t border-outline-gray-1`} />
      {/* Content */}
      <div className={`${!isOpen && "hidden"}`} >
        <Widget/>
      </div>
    </WidgetList.Item>
  );
};
