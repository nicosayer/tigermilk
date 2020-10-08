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
        <link href="/fonts/styles.css" rel="stylesheet" />
      </Head>
      <Logo color={color} />
      <Header />
      <div className={styles["grid-container"]}>
        <Gallery />
      </div>
      <style jsx global>{`
        h3,
        .ant-btn-link,
        .ant-btn-link:hover,
        .ant-btn-link:focus,
        .ant-menu-item:hover,
        .ant-menu-submenu-title:hover,
        .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
        .ant-menu-submenu-active {
          color: ${color.hex} !important;
        }

        .ant-menu-submenu-vertical
          > .ant-menu-submenu-title:hover
          .ant-menu-submenu-arrow::after,
        .ant-menu-submenu-vertical
          > .ant-menu-submenu-title:hover
          .ant-menu-submenu-arrow::before {
          background: ${color.hex} !important;
        }
      `}</style>
    </div>
  );
}
