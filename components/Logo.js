import styles from "../styles/Logo.module.css";

export default function Logo({ color }) {
  console.log(color);
  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <img src="logos/logo.svg" className={`${styles[`filter-${color.name}`]} ${styles.image}`} />
      </div>
    </div>
  );
}
