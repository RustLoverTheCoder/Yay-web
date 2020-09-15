import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
import styles from './index.less';

const SearchBar: React.FC<{}> = () => {
  return (
    <Search
      className={styles.search}
      size="large"
      placeholder="搜索"
      onSearch={value => console.log(value)}
      enterButton
    />
  );
};

export default SearchBar;
