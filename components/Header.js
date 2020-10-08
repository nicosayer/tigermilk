import { Button, Dropdown, Menu } from "antd";

import styles from "../styles/Header.module.css";

const menu = (
  <div className="ant-dropdown-menu">
    <Menu selectedKeys={[]}>
      <Menu.Item>Brussels</Menu.Item>
      <Menu.Item>Paris - Canal St Martin</Menu.Item>
      <Menu.SubMenu title="Paris - Sentier">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="Paris - South Pigalle">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>
);

export default function Header() {
  return (
    <div className={styles.header}>
      <Dropdown overlay={menu} trigger="click">
        <Button type="link">Menu</Button>
      </Dropdown>
      <div>Locations</div>
      <div>FAQ</div>
    </div>
  );
}
