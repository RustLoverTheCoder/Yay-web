import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import styles from './index.less';

const { Header } = Layout;

const HeadNav: React.FC = props => {
    const intl = useIntl();
    return (
        <Header className={styles.Header}>
            <div className={styles.logo}>
                <MenuOutlined />
                <div></div>
            </div>
        </Header>
    );
};

export default HeadNav;