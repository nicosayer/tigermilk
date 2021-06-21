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
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "3px",
          justifyContent:'space-between'
        }}
      >
        <Popover
          text={languages[locale]?.header.LOCATIONS}
          content={
            <Menu>
              {RESTAURANTS.map(({ name, menus, slug, booking }) => {
                return (
                  <MenuItem
                    key={name[locale]}
                    text={name[locale]}
                    popoverProps={{ openOnTargetFocus: false }}
                  >
                    {menus.length === 1 ? <MenuItem
                      key='menu'
                      text={languages[locale]?.word.Menu}
                      href={`/pdfs/${menus[0].pdf}`}
                      target={!isMobile && "_blank"}
                    /> : <MenuItem
                      key='menu'
                      text={languages[locale]?.word.Menu}
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
                    </MenuItem>}
                    <Link key='informations' href={`/locations/${slug}`}>
                      <div>
                        <MenuItem text={languages[locale]?.word.Informations} />
                      </div>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          }
        />
        <Popover
          text={isMobile ? languages[locale]?.header.BOOK : languages[locale]?.header.BOOK_A_TABLE}
          content={
            <Menu>
              {RESTAURANTS.map(({ name, menus, slug, booking }) => {
                return (
                  <Link key='booking' href={booking}>
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
