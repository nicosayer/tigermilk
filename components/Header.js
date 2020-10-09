import {
  Menu,
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
        interactionKind={PopoverInteractionKind.HOVER}
        position={Position.BOTTOM}
        openOnTargetFocus
        content={
          <Menu>
            {RESTAURANTS.map(({ name, menus }) => {
              if (menus.length < 2) {
                return (
                  <MenuItem
                    key={name}
                    text={name}
                    href={`/pdfs/${menus[0].pdf}`}
                    target="_blank"
                  />
                );
              }
              return (
                <MenuItem
                  key={name}
                  text={name}
                  popoverProps={{ openOnTargetFocus: false }}
                >
                  {menus.map(({ name, pdf }) => (
                    <MenuItem
                      text={name}
                      href={`/pdfs/${pdf}`}
                      target="_blank"
                    />
                  ))}
                </MenuItem>
              );
            })}
          </Menu>
        }
      >
        <div className={`color ${styles.title}`}>MENU</div>
      </Popover>
      <Popover
        interactionKind={PopoverInteractionKind.HOVER}
        position={Position.BOTTOM}
        openOnTargetFocus
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
