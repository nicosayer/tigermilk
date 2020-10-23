import { EMAIL, FACEBOOK, INSTAGRAM } from "config/enums";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Box } from "components/Box";
import { Email } from "components/Email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageSwitch } from "components/LanguageSwitch";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import languages from "languages";
import { useIsMobile } from "hooks/useIsMobile";
import { Toast } from "components/Toast";

export const Footer = ({ locale, setLocale, color }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Toast left bottom>
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
              href={INSTAGRAM.url}
              target="_blank"
            >
              {INSTAGRAM.name}
            </Box>
          </div>
          <Box
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <a href={INSTAGRAM.url} target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </Box>
          <a href={FACEBOOK.url} target="_blank">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
        </Box>
      </Toast>
      <Toast bottom right>
        {isMobile ? (
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
        ) : (
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
              <Email />
            </div>
            <Box style={{ marginLeft: "20px" }}>
              <a href={`mailto:${EMAIL}`} target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </Box>
          </Box>
        )}
      </Toast>
    </>
  );
};
