import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';




export default () => {  
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>{intl.formatMessage({id:'WELCOME_TO_UMI_WORLD'},{name:'maxiang'})}</h1>
    </div>
  );
}
