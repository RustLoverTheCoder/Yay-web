import React from 'react';
import { Avatar, Dropdown, Menu, Popover } from 'antd';
import { useIntl } from 'umi';
import {
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './index.less';

const QuestionMenu = (
  <Menu>
    <Menu.Item className={styles.menuItem}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        帮助
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item className={styles.menuItem}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        动态
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item className={styles.menuItem}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        反馈
      </a>
    </Menu.Item>
  </Menu>
);

const SettingContent = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const User: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <div className={styles.userContent}>
      <Dropdown
        overlay={QuestionMenu}
        placement="bottomCenter"
        trigger={['click']}
      >
        <QuestionCircleOutlined className={styles.icon} />
      </Dropdown>
      <Popover
        placement="bottomRight"
        content={SettingContent}
        title={intl.formatMessage({ id: 'setting' })}
        trigger="click"
      >
        <SettingOutlined className={styles.icon} />
      </Popover>
      <Avatar size={32} className={styles.avatar} icon={<UserOutlined />} />
    </div>
  );
};

export default User;
