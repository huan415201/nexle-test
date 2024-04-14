import { StyleSheet } from 'react-native';
import color from '../../util/color';
import { rWidth } from '../../util/util';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: color.white0,
      marginLeft: rWidth(8),
    },
  });
};

export default getStyles;
