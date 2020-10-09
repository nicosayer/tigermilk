import "../styles/globals.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { COLORS } from "../enums";
import Gallery from "../components/Gallery";
import Head from "next/head";
import Header from "../components/Header";
import Logo from "../components/Logo";
import globalStyles from "../styles/Global.module.css";
import styles from "../styles/Layout.module.css";
import { useState } from "react";

const randomColor = (currentColorName) => {
  const remainingColors = COLORS.filter(
    ({ name }) => name !== currentColorName
  );
  return remainingColors[
    Math.floor(Math.random() * Math.floor(remainingColors.length))
  ];
};

function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState(randomColor());

  return (
    <div className={styles.layout}>
      <Head>
        <meta charset="utf-8" />
        <title>TIGERMILK</title>
        <meta
          name="description"
          content="Fast, Fresh, Fun, affordable latin flavored food! All dishes are made in house. Our sourcing provides you with high quality products from sustainable suppliers. Every day we cook, chop, and bake fresh ingredients to make sure you taste great flavours!"
        />
        <meta
          name="keywords"
          content="restaurant, paris, bruxelles, brussels, tigermilk"
        />
        <meta
          property="og:title"
          content="TIGERMILK - 77 rue d'Aboukir 75002 Paris"
        />
        <meta
          property="og:description"
          content="Fast, Fresh, Fun, affordable latin flavored food! All dishes are made in house. Our sourcing provides you with high quality products from sustainable suppliers. Every day we cook, chop, and bake fresh ingredients to make sure you taste great flavours!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tigermilkrestaurants.com/" />
        <meta property="og:image" content="/logos/Logo_Lemon_Forest.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logos/favicon.png" />
        <link href="/fonts/style.css" rel="stylesheet" />
      </Head>
      <div className={styles.header}>
        <Header color={color} />
      </div>
      <div className={styles.body}>
        <div
          className={globalStyles.pointer}
          onClick={() => setColor(randomColor(color.name))}
        >
          <Logo color={color} />
        </div>
        <Gallery />
      </div>
      <Component {...pageProps} color={color} />;
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
