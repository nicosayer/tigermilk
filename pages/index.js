import Gallery from "../components/Gallery";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Head>
        <title>TIGERMILK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles['grid-container']}>

      <Gallery />
      </div>
    </div>
  );
}
