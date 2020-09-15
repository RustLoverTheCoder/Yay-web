import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import SearchBar from '@/pages/HeadNav/SearchBar';
import User from '@/pages/HeadNav/user';
import styles from './index.less';

const { Header } = Layout;

const HeadNav: React.FC = () => {
  const intl = useIntl();
  return (
    <Header className={styles.Header}>
      <div className={styles.logo}>
        <MenuOutlined className={styles.menu} />
        <div className={styles.logoText}>
          {intl.formatMessage({ id: 'logo' })}
        </div>
      </div>
      <div className={styles.searchAndUser}>
        <SearchBar />
        <User />
      </div>
    </Header>
  );
};

export default HeadNav;
