import imagesData from "scripts/imagesData.json";
import styles from "styles/Gallery.module.css";

export default function Gallery({ chunks }) {
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
                    (imagesData[id]?.height / imagesData[id]?.width) * 100
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
