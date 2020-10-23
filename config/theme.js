export const cssKeyToThemeKey = {
  fontSize: "fontSize",
  lineHeight: "fontSize",
  borderRadius: "radius",
  borderTopLeftRadius: "radius",
  borderTopRightRadius: "radius",
  borderBottomLeftRadius: "radius",
  borderBottomRightRadius: "radius",
  boxShadow: "boxShadow",
  color: "color",
  backgroundColor: "color",
  filter: "filter",
  top: "size",
  bottom: "size",
  left: "size",
  right: "size",
  marginTop: "size",
  marginBottom: "size",
  marginLeft: "size",
  marginRight: "size",
  paddingTop: "size",
  paddingBottom: "size",
  paddingLeft: "size",
  paddingRight: "size",
  gridGap: "size",
  fontFamily: "fontFamily",
};

const fallbackFonts= 'Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,  Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

export default {
  fontFamily: { title: `Druk, ${fallbackFonts}` },
  fontSize: { large: "20px" },
  radius: { classic: "4px" },
  boxShadow: { classic: "0 0 10px #00000080" },
  size: {
    "grid-gap": "4px",
  },
  color: {
    jade: "#00B675",
    orange: "#F06A37",
    pink: "#FD1BAB",
  },
  filter: {
    jade:
      "invert(63%) sepia(50%) saturate(6672%) hue-rotate(128deg) brightness(96%) contrast(101%)",
    orange:
      "invert(54%) sepia(91%) saturate(2309%) hue-rotate(338deg) brightness(97%) contrast(95%)",
    pink:
      "invert(28%) sepia(65%) saturate(4651%) hue-rotate(306deg) brightness(99%) contrast(109%)",
  },
};
