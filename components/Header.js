import {
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  PopoverInteractionKind,
  Position,
} from "@blueprintjs/core";

import Link from "next/link";
import { RESTAURANTS } from "../enums";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Popover
        interactionKind={PopoverInteractionKind.HOVER_TARGET_ONLY}
        position={Position.BOTTOM}
        captureDismiss
        content={
          <Menu>
            {RESTAURANTS.map(({ name, menus }) => {
              return (
                <React.Fragment key={name}>
                  <MenuDivider title={name} />
                  {menus.map(({ name, pdf }) => (
                    <MenuItem
                      text={name}
                      href={`/pdfs/${pdf}`}
                      target="_blank"
                    />
                  ))}
                </React.Fragment>
              );
            })}
          </Menu>
        }
      >
        <div className={`color ${styles.title}`}>MENU</div>
      </Popover>
      <Popover
        interactionKind={PopoverInteractionKind.HOVER_TARGET_ONLY}
        position={Position.BOTTOM}
        captureDismiss
        content={
          <Menu>
            {RESTAURANTS.map(({ name, slug }) => (
              <Link href={`/locations/${slug}`}>
                <MenuItem text={name} />
              </Link>
            ))}
          </Menu>
        }
      >
        <div className={`color ${styles.title}`}>LOCATIONS</div>
      </Popover>
      <Link href={`/faq`}>
        <div className={`color ${styles.title}`}>FAQ</div>
      </Link>
    </div>
  );
}
