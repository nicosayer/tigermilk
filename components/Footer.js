import { Position, Toast, Toaster } from "@blueprintjs/core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Box } from "components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageSwitch } from "components/LanguageSwitch";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import languages from "languages";
import { useIsMobile } from "hooks/useIsMobile";

export const Footer = ({ locale, setLocale, color }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Toaster position={Position.BOTTOM_LEFT}>
        <Toast
          message={
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                color: color,
              }}
            >
              <div>
                {languages[locale]?.footer.socialMedias.followUs}
                <br />
                <Box
                  as="a"
                  style={{ fontStyle: "italic" }}
                  href="https://www.instagram.com/tigermilkrestaurants"
                  target="_blank"
                >
                  @tigermilkrestaurants
                </Box>
              </div>
              <Box
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                <a
                  href="https://www.instagram.com/tigermilkrestaurants"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </Box>
              <a
                href="https://www.facebook.com/tigermilkrestaurants"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </Box>
          }
        />
      </Toaster>
      <Toaster position={Position.BOTTOM_RIGHT}>
        {isMobile ? (
          <Toast
            message={
              <Box
                style={{
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LanguageSwitch
                  locale={locale}
                  setLocale={setLocale}
                  color={color}
                />
              </Box>
            }
          />
        ) : (
          <Toast
            message={
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  color: color,
                }}
              >
                <div>
                  {languages[locale]?.footer.jobOffers.joinTheTeam}
                  <br />
                  <Box
                    as="a"
                    style={{ fontStyle: "italic" }}
                    href="mailto:hello@tigermilkgroup.com"
                    target="_blank"
                  >
                    hello@tigermilkgroup.com
                  </Box>
                </div>
                <Box style={{ marginLeft: "20px" }}>
                  <a href="mailto:hello@tigermilkgroup.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </Box>
              </Box>
            }
          />
        )}
      </Toaster>
    </>
  );
};
