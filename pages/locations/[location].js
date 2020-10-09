import { Classes, Dialog } from "@blueprintjs/core";
import { DAYS, RESTAURANTS } from "../../enums";

import Head from "next/head";
import globalStyles from "../../styles/Global.module.css";
import styles from "../../styles/Location.module.css";
import { useRouter } from "next/router";

export default function Location({ params }) {
  const { location } = params;
  const router = useRouter();

  const restaurant = RESTAURANTS.find(({ slug }) => slug === location);

  return (
    <div>
      <Head>
        <title>TIGERMILK - {restaurant.name}</title>
      </Head>
      <Dialog isOpen onClose={() => router.push("/")}>
        <div className={styles.body}>
          <div className={`${styles["text-container"]}`}>
            <div className={`${globalStyles.title} color`}>Adresse</div>
            <div
              className={`${globalStyles["margin-t"]} ${globalStyles["margin-b"]}`}
            >
              {restaurant.address}
            </div>
            <div className={`${globalStyles.title} color`}>Contact</div>
            <div className={globalStyles["margin-t"]}>
              Nous ne prenons pas de réservation, nos restaurants vous
              accueillent tous les jours de la semaine pour le déjeuner et le
              diner.
            </div>
            <div
              className={`${globalStyles["margin-t"]} ${globalStyles.italic}`}
            >
              The restaurant doesn’t take reservations. Our team welcomes you
              every day for lunch and dinner.
            </div>
            <div
              className={`${globalStyles["margin-t"]} ${globalStyles["margin-b"]}`}
            >
              {restaurant.phone && <div>Tel : {restaurant.phone}</div>}
              <div>
                Email :{" "}
                <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
              </div>
            </div>
            <div className={`${globalStyles.title} color`}>Horaires</div>
            <div className={globalStyles["margin-t"]}>
              <table className={styles.table}>
                {DAYS.map(({ slug, name }, index) => {
                  return (
                    <tr
                      key={slug}
                      className={
                        new Date().getDay() === index + 1 && globalStyles.bold
                      }
                    >
                      <td>{name.fr}</td>
                      <td>{restaurant.openingHours[slug].lunch}</td>
                      <td>{restaurant.openingHours[slug].diner}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div>
            <img
              className={styles.image}
              src={`/locations/${restaurant.slug}.png`}
            />
          </div>
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
