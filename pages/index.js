import { chunk, shuffle } from "lodash/fp";

import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const NUMBER_OF_PICTURES = 73;

export default function Home({ chunks }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>TIGERMILK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles["grid-container"]}>
        <div className={styles.grid}>
          {chunks.map((array) => (
            <div key={array.join('')} className={styles["vertical-grid"]}>
              {array.map((id) => (
                <img
                  key={id}
                  className={styles.image}
                  src={`/pictures/${id}.jpg`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  const chunks = chunk(
    6,
    shuffle([...Array(NUMBER_OF_PICTURES)].map((_, index) => index + 1))
  ).filter((_, index) => index < 10);

  return { props: { chunks } };
}
