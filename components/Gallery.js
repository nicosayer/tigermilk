import { chunk, shuffle } from "lodash/fp";

import styles from "../styles/Gallery.module.css";

const NUMBER_OF_PICTURES = 73;

export default function Gallery() {
  const chunks = chunk(
    6,
    shuffle([...Array(NUMBER_OF_PICTURES)].map((_, index) => index + 1))
  ).filter((_, index) => index < 10);
  console.log(chunks);

  return (
    <div className={styles.grid}>
      {chunks.map((array, index) => (
        <div key={index} className={styles["vertical-grid"]}>
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
  );
}
