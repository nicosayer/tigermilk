import { COLORS, DEFAULT_LANGUAGE, LANGUAGES } from "config/enums";
import { chunk, shuffle } from "lodash/fp";

import imagesData from "scripts/imagesData.json";

export const randomColor = (currentColorName) => {
  const remainingColors = COLORS.filter(
    ({ name }) => name !== currentColorName
  );
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

export const getColorFilter = (color) => {
  switch (color) {
    case "jade":
      return "invert(63%) sepia(50%) saturate(6672%) hue-rotate(128deg) brightness(96%) contrast(101%)";
    case "orange":
      return "invert(54%) sepia(91%) saturate(2309%) hue-rotate(338deg) brightness(97%) contrast(95%)";
    case "pink":
      return "invert(28%) sepia(65%) saturate(4651%) hue-rotate(306deg) brightness(99%) contrast(109%)";
    default:
      return "";
  }
};
