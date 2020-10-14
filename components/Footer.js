import { Position, Toast, Toaster } from "@blueprintjs/core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import globalStyles from "../styles/Global.module.css";
import lang from "../lang";
import styles from "../styles/Footer.module.css";
import { useIsMobile } from "../hooks/useIsMobile";

function Footer({ locale }) {
  const isMobile = useIsMobile();

  return (
    <>
      <Toaster position={isMobile ? Position.BOTTOM : Position.BOTTOM_LEFT}>
        <Toast
          message={
            <div className={`${styles["social-network-toast"]} color`}>
              <div>
                {lang[locale]?.footer.socialMedias.followUs}
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
      {!isMobile && (
        <Toaster position={Position.BOTTOM_RIGHT}>
          <Toast
            message={
              <div className={`${styles["social-network-toast"]} color`}>
                <div>
                  {lang[locale]?.footer.jobOffers.joinUs}
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
        </Toaster>
      )}
    </>
  );
}

export default Footer;
