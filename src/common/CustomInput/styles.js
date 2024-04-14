import { StyleSheet } from 'react-native';
import color from '../../util/color';
import { rHeight, rWidth } from '../../util/util';

const getStyles = () => {
  return StyleSheet.create({
    label: {
      fontSize: 12,
      color: color.white1,
    },
    inputWrapper: {
      borderBottomWidth: 1,
      borderBottomColor: color.blue1,
    },
    inputLine: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingLeft: 0,
      paddingVertical: rHeight(12),
      fontSize: 16,
      color: color.white0,
    },
    error: {
      fontSize: 12,
      color: color.red1,
      marginBottom: rHeight(8),
    },
    spacing: {
      height: rHeight(8),
    },
    iconWrapper: {
      marginLeft: rWidth(8),
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default getStyles;
