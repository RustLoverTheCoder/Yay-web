import React, { useState } from 'react';
import { List, Avatar } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Styles from './index.less';

const SortableItem = SortableElement(({ value }) => (
  <List.Item className={Styles.listItem}>
    <List.Item.Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title={<a href="https://ant.design">{value.title}</a>}
      description="在线"
    />
  </List.Item>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <List className={Styles.list}>
      {items.map((value: any, index: any) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </List>
  );
});

const SiderNav: React.FC<{}> = () => {
  const [listData, setListData] = useState([
    {
      title: '马云',
    },
    {
      title: '马化腾',
    },
    {
      title: '马斯克',
    },
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setListData(arrayMove(listData, oldIndex, newIndex));
  };
  return (
    <div className={Styles.SiderContent}>
      <SortableList items={listData} onSortEnd={onSortEnd} />
    </div>
  );
};

export default SiderNav;
