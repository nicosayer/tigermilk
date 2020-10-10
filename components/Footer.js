import { Position, Toast, Toaster } from "@blueprintjs/core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import globalStyles from "../styles/Global.module.css";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <Toaster position={Position.BOTTOM}>
        <Toast
          message={
            <div className={`${styles["social-network-toast"]} color`}>
              <div>
                Follow us
                <br />
                <a
                  className={globalStyles.italic}
                  href="https://www.instagram.com/tigermilkrestaurants"
                  target="_blank"
                >
                  @tigermilkrestaurants
                </a>
              </div>
              <a
                href="https://www.instagram.com/tigermilkrestaurants"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
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
    </>
  );
}

export default Footer;
