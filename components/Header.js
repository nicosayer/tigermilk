import { Button, Dropdown, Menu } from "antd";

import styles from "../styles/Header.module.css";

const menu = (
  <div>
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.SubMenu title="sub menu">
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
