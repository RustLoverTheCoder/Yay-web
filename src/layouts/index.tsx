import React from 'react';
import { Layout } from 'antd';
import HeadNav from '@/pages/HeadNav';
import styles from './index.less';

const { Content } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <HeadNav />
      <Content className={styles.content}>{props.children}</Content>
    </Layout>
  );
};

export default BasicLayout;
