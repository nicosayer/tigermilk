import { Box } from "components/Box";

export const LanguageSwitch = ({ locale, setLocale, color }) => {
  return (
    <Box
      style={{
        cursor: "pointer",
        color: "lightgray",
      }}
      onClick={() => {
        setLocale(locale === "en" ? "fr" : "en");
      }}
    >
      <Box as="span" style={{ color: locale === "en" ? color.hex : undefined }}>
        EN
      </Box>
      /
      <Box as="span" style={{ color: locale === "fr" ? color.hex : undefined }}>
        FR
      </Box>
    </Box>
  );
};
