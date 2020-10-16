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
      <Box as="span" style={{ color: locale === "en" ? color : undefined }}>
        EN
      </Box>
      /
      <Box as="span" style={{ color: locale === "fr" ? color : undefined }}>
        FR
      </Box>
    </Box>
  );
};
