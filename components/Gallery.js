import { chunk, shuffle } from "lodash/fp";
import { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import imagesData from "../scripts/imagesData.json";
import styles from "../styles/Gallery.module.css";

const NUMBER_OF_PICTURES = 73;

export default function Gallery() {
  const [chunks, setChunks] = useState([]);
  console.log(imagesData);
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
          {array.map((id) => (
            <LazyLoadImage
              key={id}
              // className={styles.image}
              wrapperClassName={styles['image-container']}
              placeholderSrc={`/pictures-min/${id}.jpg`}
              src={`/pictures/${id}.jpg`}
              effect="blur"
              // height={(imagesData[id].height * 250) / imagesData[id].width}
              width="100%"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
