import React from 'react';
import SiderNav from '@/pages/SiderNav';
import ContentNav from '@/pages/ContentNav';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.content}>
      {/*<SiderNav />*/}
      <ContentNav />
    </div>
  );
};
