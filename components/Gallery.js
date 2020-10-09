import { chunk, shuffle } from "lodash/fp";
import { useEffect, useState } from "react";

import imagesData from "../scripts/imagesData.json";
import styles from "../styles/Gallery.module.css";

const NUMBER_OF_PICTURES = 73;

export default function Gallery() {
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    setChunks(
      chunk(
        6,
        shuffle([...Array(NUMBER_OF_PICTURES)].map((_, index) => index + 1))
      ).filter((_, index) => index < 10)
    );
  }, []);

  return (
    <div className={styles.grid}>
      {chunks.map((array) => (
        <div key={array.join("")} className={styles.column}>
          {array.map((id) => {
            return (
              <div
                key={id}
                className={styles["image-container"]}
                style={{
                  paddingTop: `${
                    (imagesData[id].height / imagesData[id].width) * 100
                  }%`,
                }}
              >
                <img src={`/pictures/${id}.jpg`} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
