import styles from "../styles/Logo.module.css";

export default function Logo({ color }) {
  return (
    <div className={styles.container}>
      <img
        src="logos/logo.svg"
        className={`${styles[`filter-${color.name}`]} ${styles.image}`}
      />
    </div>
  );
}
