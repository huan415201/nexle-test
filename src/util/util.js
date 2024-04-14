import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
export const REGEX_EMAIL = /^[\w\.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
export const REGEX_CONTAINS_BOTH_LOWERCASE_UPPERCASE =
  /^(?=.*[a-z])(?=.*[A-Z])/;
export const REGEX_CONTAINS_AT_LEAST_ONE_NUMERIC = /^(?=.*\d)/;
export const REGEX_CONTAINS_ONE_SPECIAL_CHARACTER = /^(?=.*[\W_])/;

export const rWidth = width => {
  return (Dimensions.get('window').width * width) / DESIGN_WIDTH;
};

export const rHeight = height => {
  return (Dimensions.get('window').height * height) / DESIGN_HEIGHT;
};

export const regexTest = (regex, str) => {
  return regex.test(str);
};
