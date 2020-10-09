import globalStyles from "../styles/Global.module.css";
import styles from "../styles/Logo.module.css";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Logo({ color }) {
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <img
        src={isMobile ? "/logos/monogram.svg" : "/logos/logo.svg"}
        className={`${globalStyles[`filter-${color.name}`]} ${styles.image}`}
      />
    </div>
  );
}
