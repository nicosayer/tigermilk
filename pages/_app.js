import "styles/globals.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { DEFAULT_LANGUAGE, GALLERY_GRID_GAP } from "config/enums";
import { getLocale, randomChunks, randomColor } from "utils";
import { useEffect, useState } from "react";

import { Box } from "components/Box";
import { Footer } from "components/Footer";
import { Gallery } from "components/Gallery";
import Head from "next/head";
import { Header } from "components/Header";
import { Logo } from "components/Logo";

function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState({});
  const [chunks, setChunks] = useState([]);
  const [locale, setLocale] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    setColor(randomColor());
    setChunks(randomChunks());
    setLocale(getLocale());
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", getLocale(locale));
  }, [locale]);

  return (
    <>
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
        <meta property="og:title" content="TIGERMILK - Paris & Brussels" />
        <meta
          property="og:description"
          content="Fast, Fresh, Fun, affordable latin flavored food! All dishes are made in house. Our sourcing provides you with high quality products from sustainable suppliers. Every day we cook, chop, and bake fresh ingredients to make sure you taste great flavours!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tigermilkrestaurants.com/" />
        <meta property="og:image" content="/logos/Logo_Lemon_Forest.png" />
        <link
          rel="icon"
          type="image/png"
          href={`/logos/favicon-${color.name}.png`}
        />
      </Head>
      <Header locale={locale} setLocale={setLocale} color={color} />
      <Box
        style={{ cursor: "pointer" }}
        onClick={() => {
          setColor(randomColor(color.name));
          setChunks(randomChunks());
        }}
      >
        <Logo color={color} />
      </Box>
      <Box
        style={{
          position: "fixed",
          top: GALLERY_GRID_GAP,
          left: GALLERY_GRID_GAP,
          right: GALLERY_GRID_GAP,
          bottom: GALLERY_GRID_GAP,
          overflow: "hidden",
        }}
      >
        <Gallery chunks={chunks} />
      </Box>
      <Footer locale={locale} setLocale={setLocale} color={color} />
      <Component {...pageProps} color={color} locale={locale} />
      <style jsx global>{`
        a,
        .color {
          color: ${color.hex} !important;
        }
      `}</style>
    </>
  );
}

export default MyApp;
