import { LANGUAGES, MAIN_COLORS } from "config/enums";
import { chunk, shuffle } from "lodash/fp";

import imagesData from "scripts/imagesData.json";

export const randomColor = (currentColorName) => {
  const remainingColors = MAIN_COLORS.filter((name) => name !== currentColorName);
 
  return remainingColors[
    Math.floor(Math.random() * Math.floor(remainingColors.length))
  ];
};

export const randomChunks = () => {
  return chunk(6, shuffle(Object.keys(imagesData).slice(0, 60)));
};

export const getLocale = (locale) => {
  if (LANGUAGES.includes(locale)) {
    return locale;
  }

  if (LANGUAGES.includes(localStorage.locale)) {
    return localStorage.locale;
  }

  if (LANGUAGES.includes(navigator.language.substring(0, 2))) {
    return navigator.language.substring(0, 2);
  }

  return LANGUAGES[0];
};
