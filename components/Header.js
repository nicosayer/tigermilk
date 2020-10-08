import {
  Button,
  Menu,
  MenuItem,
  Popover,
  PopoverInteractionKind,
  Position,
} from "@blueprintjs/core";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Popover
        interactionKind={PopoverInteractionKind.HOVER}
        position={Position.BOTTOM}
        content={
          <Menu>
            <MenuItem
              text="Brussels"
              popoverProps={{ openOnTargetFocus: false }}
            >
              <MenuItem
                text="Food"
                href={
                  process.env.PUBLIC_URL +
                  `/assets/pdfs/Menu_TGMK_Bruxelles.pdf`
                }
                target="_blank"
              />
              <MenuItem
                text="Sunday brunch (11h30-15h)"
                href={
                  process.env.PUBLIC_URL + `/assets/pdfs/Menu_Brunch_TGMK.pdf`
                }
                target="_blank"
              />
            </MenuItem>
            <MenuItem
              text="Paris - Canal St Martin"
              popoverProps={{ openOnTargetFocus: false }}
            >
              <MenuItem
                text="Food"
                href={
                  process.env.PUBLIC_URL +
                  `/assets/pdfs/Menu_TGMK_Canal_St_Martin.pdf`
                }
                target="_blank"
              />
              <MenuItem
                text="Sunday brunch (12h-15h)"
                href={
                  process.env.PUBLIC_URL + `/assets/pdfs/Menu_Brunch_TGMK.pdf`
                }
                target="_blank"
              />
            </MenuItem>
            <MenuItem
              text="Paris - Sentier"
              href={
                process.env.PUBLIC_URL + `/assets/pdfs/Menu_TGMK_Sentier.pdf`
              }
              target="_blank"
            />

            <MenuItem
              text="Paris - South Pigalle"
              popoverProps={{ openOnTargetFocus: false }}
            >
              <MenuItem
                text="Food"
                href={
                  process.env.PUBLIC_URL +
                  `/assets/pdfs/Menu_TGMK_South_Pigalle.pdf`
                }
                target="_blank"
              />
              <MenuItem
                text="Drinks"
                href={
                  process.env.PUBLIC_URL +
                  `/assets/pdfs/Menu_Drinks_TGMK_South_Pigalle.pdf`
                }
                target="_blank"
              />
            </MenuItem>
          </Menu>
        }
      >
        <Button>MENU</Button>
      </Popover>
    </div>
  );
}
