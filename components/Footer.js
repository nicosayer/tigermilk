import { Position, Toast, Toaster } from "@blueprintjs/core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LANGUAGES } from "config/enums";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import globalStyles from "styles/Global.module.css";
import languages from "languages";
import styles from "styles/Footer.module.css";
import { useIsMobile } from "hooks/useIsMobile";

function Footer({ locale, setLocale }) {
  const isMobile = useIsMobile();

  const languagesArray = Object.entries(LANGUAGES);

  return (
    <>
      <Toaster position={Position.BOTTOM_LEFT}>
        <Toast
          message={
            <div className={`${styles["social-toast"]} color`}>
              <div>
                {languages[locale]?.footer.socialMedias.followUs}
                <br />
                <a
                  className={globalStyles.italic}
                  href="https://www.instagram.com/tigermilkrestaurants"
                  target="_blank"
                >
                  @tigermilkrestaurants
                </a>
              </div>
              <div className={globalStyles["margin-x"]}>
                <a
                  href="https://www.instagram.com/tigermilkrestaurants"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
              <a
                href="https://www.facebook.com/tigermilkrestaurants"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </div>
          }
        />
      </Toaster>
      <Toaster position={Position.BOTTOM_RIGHT}>
        {isMobile ? (
          <Toast
            message={
              <div
                className={`${styles["language-toast"]} ${globalStyles.gray}`}
                onClick={() => {
                  const currentIndex = languagesArray.findIndex(
                    ([key]) => key === locale
                  );
                  const [nextLang] =
                    languagesArray[currentIndex + 1] || languagesArray[0];
                  setLocale(nextLang);
                }}
              >
                {languagesArray.map(([key, { short }], index) => (
                  <React.Fragment key={key}>
                    {index > 0 && "/"}
                    <span className={locale === key ? "color" : undefined}>
                      {short}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            }
          />
        ) : (
          <Toast
            message={
              <div className={`${styles["social-toast"]} color`}>
                <div>
                  {languages[locale]?.footer.jobOffers.joinTheTeam}
                  <br />
                  <a
                    className={globalStyles.italic}
                    href="mailto:hello@tigermilkgroup.com"
                    target="_blank"
                  >
                    hello@tigermilkgroup.com
                  </a>
                </div>
                <div className={globalStyles["margin-l"]}>
                  <a href="mailto:hello@tigermilkgroup.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </div>
              </div>
            }
          />
        )}
      </Toaster>
    </>
  );
}

export default Footer;
