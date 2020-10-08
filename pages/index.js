import { useEffect, useState } from "react";

import Gallery from "../components/Gallery";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const COLORS = [
  { name: "Orange", hex: "#F06A37" },
  { name: "Jade", hex: "#00B675" },
  { name: "Pink", hex: "#FD1BAB" },
];

export default function Home() {
  const [color, setColor] = useState({});

  useEffect(() => {
    setColor(COLORS[Math.floor(Math.random() * Math.floor(3))]);
  }, []);

  console.log(color.hex);

  return (
    <div className={styles.layout}>
      <Head>
        <title>TIGERMILK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles["grid-container"]}>
        <Gallery />
      </div>
      <style jsx global>{`
        .ant-btn-link,
        .ant-btn-link:hover,
        .ant-btn-link:focus,
        .ant-menu-item:hover,
        .ant-menu-submenu-title:hover,
        .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
        .ant-menu-submenu-active {
          color: ${color.hex};
        }

        .ant-menu-submenu-vertical
          > .ant-menu-submenu-title:hover
          .ant-menu-submenu-arrow::after,
        .ant-menu-submenu-vertical
          > .ant-menu-submenu-title:hover
          .ant-menu-submenu-arrow::before {
          background: ${color.hex};
        }
      `}</style>
    </div>
  );
}
