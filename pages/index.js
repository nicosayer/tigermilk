import { useEffect, useState } from "react";

import Gallery from "../components/Gallery";
import Head from "next/head";
import Header from "../components/Header";
import Logo from "../components/Logo";
import styles from "../styles/Home.module.css";

const COLORS = [
  { name: "orange", hex: "#F06A37" },
  { name: "jade", hex: "#00B675" },
  { name: "pink", hex: "#FD1BAB" },
];

export default function Home() {
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
        <Header />
      </div>
      <div className={styles.body}>
        <Logo color={color} />
        <Gallery />
      </div>

      <style jsx global>{`
        div {
          color: pink;
        }
      `}</style>
    </div>
  );
}
