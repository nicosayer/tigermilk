import "../styles/globals.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { useEffect, useState } from "react";

import { COLORS } from "../enums";
import Gallery from "../components/Gallery";
import Head from "next/head";
import Header from "../components/Header";
import Logo from "../components/Logo";
import styles from "../styles/Layout.module.css";

function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState({});

  useEffect(() => {
    setColor(COLORS[Math.floor(Math.random() * Math.floor(3))]);
  }, []);

  return (
    <div className={styles.layout}>
      <Head>
        <title>TIGERMILK</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/fonts/style.css" rel="stylesheet" />
      </Head>
      <div className={styles.header}>
        <Header color={color} />
      </div>
      <div className={styles.body}>
        <Logo color={color} />
        <Gallery />
      </div>
      <Component {...pageProps} color={color}/>;
      <style jsx global>{`
        a,
        .color {
          color: ${color.hex} !important;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
