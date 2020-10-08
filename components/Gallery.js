import { chunk, shuffle } from "lodash/fp";

import styles from "../styles/Gallery.module.css";

const chunks = chunk(
  6,
  shuffle([...Array(73)].map((_, index) => index + 1))
).filter((_, index) => index < 10);

export default function Gallery() {
  console.log(chunks);
  return (
    <div className={styles.grid}>
      {chunks.map((array) => (
        <div className={styles['vertical-grid']}>
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
