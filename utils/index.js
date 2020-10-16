import { COLORS, DEFAULT_LANGUAGE, LANGUAGES } from "config/enums";
import { chunk, shuffle } from "lodash/fp";

import imagesData from "scripts/imagesData.json";

export const randomColor = (currentColorName) => {
  const remainingColors = COLORS.filter((name) => name !== currentColorName);
  return remainingColors[
    Math.floor(Math.random() * Math.floor(remainingColors.length))
  ];
};

export const randomChunks = () => {
  return chunk(6, shuffle(Object.keys(imagesData).slice(0, 60)));
};

export const getLocale = (locale) => {
  if (LANGUAGES[locale]) {
    return locale;
  }

  if (LANGUAGES[localStorage.locale]) {
    return localStorage.locale;
  }

  return DEFAULT_LANGUAGE;
};
