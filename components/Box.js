import { css, cx } from "emotion";
import theme, { cssKeyToThemeKey } from "config/theme";

import { kebabCase } from "lodash/fp";

const withTheme = (style = {}) => {
  return Object.entries(style).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: theme[cssKeyToThemeKey[key]]?.[value] ?? value,
    }),
    {}
  );
};

const jsToCss = (style = {}) => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    if (value === undefined) {
      return acc;
    }
    return `
    ${acc}
    ${kebabCase(key)}:${theme[cssKeyToThemeKey[key]]?.[value] ?? value};
    `;
  }, "");
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
          ${hover ? `&:hover{${jsToCss(hover)}}` : ""}
          ${focus ? `&:focus{${jsToCss(focus)}}` : ""}
        `
      )}
      {...rest}
    />
  );
};
