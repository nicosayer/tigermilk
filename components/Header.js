import { LANGUAGES, RESTAURANTS } from "config/enums";
import {
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  PopoverInteractionKind,
  Position,
  Toast,
  Toaster,
} from "@blueprintjs/core";

import Link from "next/link";
import globalStyles from "styles/Global.module.css";
import languages from "languages";
import styles from "styles/Header.module.css";
import { useIsMobile } from "hooks/useIsMobile";

export default function Header({ locale, setLocale }) {
  const languagesArray = Object.entries(LANGUAGES);
  const isMobile = useIsMobile();

  return (
    <Toaster position={Position.Top}>
      <Toast
        message={
          <div
            className={styles.toast}
            style={{
              gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
            }}
          >
            <Popover
              interactionKind={PopoverInteractionKind.HOVER}
              position={Position.BOTTOM}
              captureDismiss
              content={
                <Menu>
                  {RESTAURANTS.map(({ name, menus }) => {
                    return (
                      <React.Fragment key={name[locale]}>
                        <MenuDivider title={name[locale]} />
                        {menus.map(({ name, pdf }) => (
                          <MenuItem
                            key={name[locale]}
                            text={name[locale]}
                            href={`/pdfs/${pdf}`}
                          />
                        ))}
                      </React.Fragment>
                    );
                  })}
                </Menu>
              }
            >
              <div className={`color ${styles.title}`}>
                {languages[locale]?.header.MENU}
              </div>
            </Popover>
            <Popover
              interactionKind={PopoverInteractionKind.HOVER}
              position={Position.BOTTOM}
              captureDismiss
              content={
                <Menu>
                  {RESTAURANTS.map(({ name, slug }) => (
                    <Link key={name[locale]} href={`/locations/${slug}`}>
                      <MenuItem text={name[locale]} />
                    </Link>
                  ))}
                </Menu>
              }
            >
              <div className={`color ${styles.title}`}>
                {languages[locale]?.header.LOCATIONS}
              </div>
            </Popover>
            <Link href={`/faq`}>
              <div className={`color ${styles.title}`}>
                {languages[locale]?.header.FAQ}
              </div>
            </Link>
            <div
              className={`${styles.title} ${globalStyles.gray}`}
              onClick={() => {
                const currentIndex = languagesArray.findIndex(
                  ([key]) => key === locale
                );
                const [nextLang] =
                  languagesArray[currentIndex + 1] || languagesArray[0];
                setLocale(nextLang);
              }}
            >
              {!isMobile &&
                languagesArray.map(([key, { short }], index) => (
                  <React.Fragment key={key}>
                    {index > 0 && "/"}
                    <span className={locale === key ? "color" : undefined}>
                      {short}
                    </span>
                  </React.Fragment>
                ))}
            </div>
          </div>
        }
      />
    </Toaster>
  );
}
