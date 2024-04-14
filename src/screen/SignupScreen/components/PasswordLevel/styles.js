import { StyleSheet } from 'react-native';
import color from '../../../../util/color';
import { rHeight } from '../../../../util/util';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'flex-end',
    },
    greyBar: {
      width: '100%',
      height: 1,
      borderRadius: 100,
      backgroundColor: color.grey2,
    },
    placeholderBar: {
      height: 1,
      borderRadius: 100,
      backgroundColor: color.blue1,
    },
    levelText: {
      fontSize: 12,
      marginTop: rHeight(8),
    },
    levelTextWeak: {
      color: color.red2,
    },
    levelTextFair: {
      color: color.yellow1,
    },
    levelTextGood: {
      color: color.blue1,
    },
    levelTextStrong: {
      color: color.green1,
    },
    levelBar: {
      height: 1,
      borderRadius: 100,
    },
    levelBarWeak: {
      width: '25%',
      backgroundColor: color.red2,
    },
    levelBarFair: {
      width: '50%',
      backgroundColor: color.yellow1,
    },
    levelBarGood: {
      width: '75%',
      backgroundColor: color.blue1,
    },
    levelBarStrong: {
      backgroundColor: color.green1,
    },
  });
};

export default getStyles;
