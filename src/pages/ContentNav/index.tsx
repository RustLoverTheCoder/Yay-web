import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Styles from './index.less';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);
const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value: any, index: any) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const ContentNav: React.FC<{}> = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className={Styles.contentNav}>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
};

export default ContentNav;
