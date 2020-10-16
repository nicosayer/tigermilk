import { css, cx } from "emotion";
import theme, { cssKeyToThemeKey } from "config/theme";

const withTheme = (style = {}) => {
  return Object.entries(style).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: theme[cssKeyToThemeKey[key]]?.[value] ?? value,
    }),
    {}
  );
};

export const Box = ({
  as = "div",
  style,
  hover,
  focus,
  className,
  ...rest
}) => {
  const Element = as;
  return (
    <Element
      className={cx(
        className,
        css`
          ${withTheme(style)}
          ${hover ? `&hover{${withTheme(hover)}}` : ""}
          ${focus ? `&focus{${withTheme(focus)}}` : ""}
        `
      )}
      {...rest}
    />
  );
};
