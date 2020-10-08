import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>Menu</div>
      <div>Locations</div>
      <div>FAQ</div>
    </div>
  );
}
