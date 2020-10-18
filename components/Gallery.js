import { Box } from "components/Box";
import { GALLERY_GRID_GAP } from "config/enums";
import imagesData from "scripts/imagesData.json";

export const Gallery = ({ chunks }) => {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: GALLERY_GRID_GAP,
      }}
    >
      {chunks.map((array) => (
        <Box
          key={array.join("")}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {array.map((id) => {
            return (
              <Box
                key={id}
                style={{
                  position: "relative",
                  width: "100%",
                  marginBottom: GALLERY_GRID_GAP,
                  overflow: "hidden",
                  paddingTop: `${
                    (imagesData[id]?.height / imagesData[id]?.width) * 100
                  }%`,
                  backgroundImage: `url("/pictures/${id}.jpg")`,
                  backgroundSize: "cover",
                }}
              />
            );
          })}
        </Box>
      ))}
    </Box>
  );
};
