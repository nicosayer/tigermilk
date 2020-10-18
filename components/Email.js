import { Box } from "components/Box";
import { EMAIL } from "config/enums";

export const Email = ({ email = EMAIL }) => {
  return (
    <Box
      as="a"
      style={{ fontStyle: "italic" }}
      href={`mailto:${email}`}
      target="_blank"
    >
      {email}
    </Box>
  );
};
