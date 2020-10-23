import {
  Menu,
  MenuItem,
  Popover as BPPopover,
  PopoverInteractionKind,
  Position,
} from "@blueprintjs/core";

import { Box } from "components/Box";
import { LanguageSwitch } from "components/LanguageSwitch";
import Link from "next/link";
import { RESTAURANTS } from "config/enums";
import languages from "languages";
import { useIsMobile } from "hooks/useIsMobile";
import { Toast } from "components/Toast";

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

const Popover = ({ content, text }) => {
  const isMobile = useIsMobile();

  return (
    <BPPopover
      hoverOpenDelay={50}
      interactionKind={
        isMobile ? PopoverInteractionKind.CLICK : PopoverInteractionKind.HOVER
      }
      position={Position.BOTTOM}
      captureDismiss
      content={content}
    >
      <Title>
        <a>{text}</a>
      </Title>
    </BPPopover>
  );
};

export const Header = ({ locale, setLocale, color }) => {
  const isMobile = useIsMobile();

  return (
    <Toast top left right>
      <Box
        style={{
          whiteSpace: "nowrap",
          width: "calc(100vw - 62px)",
          display: "grid",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "3px",
          gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
        }}
      >
        <Popover
          text={languages[locale]?.header.MENU}
          content={
            <Menu>
              {RESTAURANTS.map(({ name, menus }) => {
                if (menus.length === 1) {
                  return (
                    <MenuItem
                      key={name[locale]}
                      text={name[locale]}
                      href={`/pdfs/${menus[0].pdf}`}
                      target={!isMobile && "_blank"}
                    />
                  );
                }
                return (
                  <MenuItem
                    key={name[locale]}
                    text={name[locale]}
                    popoverProps={{ openOnTargetFocus: false }}
                  >
                    {menus.map(({ name, pdf }) => (
                      <MenuItem
                        key={name[locale]}
                        text={name[locale]}
                        href={`/pdfs/${pdf}`}
                        target={!isMobile && "_blank"}
                      />
                    ))}
                  </MenuItem>
                );
              })}
            </Menu>
          }
        />
        <Popover
          text={languages[locale]?.header.LOCATIONS}
          content={
            <Menu>
              {RESTAURANTS.map(({ name, slug }) => {
                return (
                  <Link key={name[locale]} href={`/locations/${slug}`}>
                    <div>
                      <MenuItem text={name[locale]} />
                    </div>
                  </Link>
                );
              })}
            </Menu>
          }
        />
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
    </Toast>
  );
};
