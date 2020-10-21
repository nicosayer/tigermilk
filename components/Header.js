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

import { Box } from "components/Box";
import { LanguageSwitch } from "components/LanguageSwitch";
import Link from "next/link";
import { RESTAURANTS } from "config/enums";
import languages from "languages";
import { useIsMobile } from "hooks/useIsMobile";

const Title = ({ ...rest }) => {
  return (
    <Box
      style={{
        fontSize: "large",
        lineHeight: "large",
        fontFamily: "title",
      }}
      focus={{
        outline: "none",
      }}
      {...rest}
    />
  );
};

export const Header = ({ locale, setLocale, color }) => {
  const isMobile = useIsMobile();

  return (
    <Toaster position={Position.Top}>
      <Toast
        message={
          <Box
            style={{
              whiteSpace: "nowrap",
              width: "calc(100vw - 62px)",
              display: "grid",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "2px",
              gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
            }}
          >
            <Popover
              hoverOpenDelay={50}
              interactionKind={
                isMobile
                  ? PopoverInteractionKind.CLICK
                  : PopoverInteractionKind.HOVER
              }
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
              <Title>
                <a>{languages[locale]?.header.MENU}</a>
              </Title>
            </Popover>
            <Popover
              hoverOpenDelay={50}
              interactionKind={
                isMobile
                  ? PopoverInteractionKind.CLICK
                  : PopoverInteractionKind.HOVER
              }
              position={Position.BOTTOM}
              captureDismiss
              content={
                <Menu>
                  {RESTAURANTS.map(({ name, slug }) => (
                    <Link key={name[locale]} href={`/locations/${slug}`}>
                      <div>
                        <MenuItem text={name[locale]} />
                      </div>
                    </Link>
                  ))}
                </Menu>
              }
            >
              <Title>
                <a>{languages[locale]?.header.LOCATIONS}</a>
              </Title>
            </Popover>
            <Title>
              <Link href="/faq">{languages[locale]?.header.FAQ}</Link>
            </Title>
            {!isMobile && (
              <Title>
                <LanguageSwitch
                  locale={locale}
                  setLocale={setLocale}
                  color={color}
                />
              </Title>
            )}
          </Box>
        }
      />
    </Toaster>
  );
};
