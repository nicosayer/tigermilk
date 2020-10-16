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

const Title = ({ color, ...rest }) => {
  return (
    <Box
      style={{
        cursor: "pointer",
        fontSize: 'large',
        lineHeight: 'large',
        color,
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
              paddingTop: "4px",
              paddingBottom: "2px",
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
              <Title color={color.hex}>{languages[locale]?.header.MENU}</Title>
            </Popover>
            <Popover
              interactionKind={PopoverInteractionKind.HOVER}
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
              <Title color={color.hex}>
                {languages[locale]?.header.LOCATIONS}
              </Title>
            </Popover>
            <Link href={`/faq`}>
              <div>
                <Title color={color.hex}>{languages[locale]?.header.FAQ}</Title>
              </div>
            </Link>
            <Title>
              <LanguageSwitch
                locale={locale}
                setLocale={setLocale}
                color={color}
              />
            </Title>
          </Box>
        }
      />
    </Toaster>
  );
};
