import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

export const rWidth = width => {
  return (Dimensions.get('window').width * width) / DESIGN_WIDTH;
};

export const rHeight = height => {
  return (Dimensions.get('window').height * height) / DESIGN_HEIGHT;
};
