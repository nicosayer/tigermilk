import { DAYS, RESTAURANTS } from "../../config/enums";

import { Dialog } from "@blueprintjs/core";
import Head from "next/head";
import globalStyles from "../../styles/Global.module.css";
import lang from "../../lang";
import styles from "../../styles/Location.module.css";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useRouter } from "next/router";

export default function Location({ params, color, locale }) {
  const { location } = params;
  const router = useRouter();
  const isMobile = useIsMobile();

  const restaurant = RESTAURANTS.find(({ slug }) => slug === location);

  return (
    <div>
      <Head>
        <title>TIGERMILK • {restaurant.name[locale]}</title>
      </Head>
      <Dialog isOpen onClose={() => router.push("/")} usePortal={false}>
        <div
          className={styles.body}
          style={{ gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}
        >
          <div className={`${styles["text-container"]}`}>
            <div className={`${globalStyles.title} color`}>
              {lang[locale]?.locations.Address}
            </div>
            <div
              className={`${globalStyles["margin-t"]} ${globalStyles["margin-b"]}`}
            >
              {restaurant.address}
            </div>
            <div className={`${globalStyles.title} color`}>
              {lang[locale]?.locations.Contact}
            </div>
            <div className={globalStyles["margin-t"]}>
              {lang[locale]?.locations.noReservations}
            </div>
            <div
              className={`${globalStyles["margin-t"]} ${globalStyles["margin-b"]}`}
            >
              {restaurant.phone && (
                <div>
                  {lang[locale]?.locations.Tel} : {restaurant.phone}
                </div>
              )}
              <div>
                {lang[locale]?.locations.Email} :{" "}
                <a href={`mailto:${restaurant.email}`} target="_blank">
                  {restaurant.email}
                </a>
              </div>
            </div>
            <div className={`${globalStyles.title} color`}>
              {lang[locale]?.locations.OpeningHours}
            </div>
            <div className={globalStyles["margin-t"]}>
              <table className={styles.table}>
                {DAYS.map(({ slug, name }, index) => {
                  return (
                    <tr
                      key={slug}
                      className={
                        new Date().getDay() === index + 1
                          ? globalStyles.bold
                          : undefined
                      }
                    >
                      <td>{name[locale]}</td>
                      <td>{restaurant.openingHours[slug].lunch}</td>
                      <td>{restaurant.openingHours[slug].diner}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          {!isMobile && (
            <div className={styles["image-container"]}>
              <img
                className={styles["location-image"]}
                src={`/locations/${restaurant.slug}.png`}
              />
              <img
                className={`${globalStyles[`filter-${color.name}`]} ${
                  styles.monogram
                }`}
                src="/logos/monogram.svg"
              />
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: RESTAURANTS.map(({ slug }) => `/locations/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
