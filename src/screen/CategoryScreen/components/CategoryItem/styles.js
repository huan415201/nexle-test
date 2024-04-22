import { Dimensions, StyleSheet } from 'react-native';
import color from '../../../../util/color';
import { rHeight, rWidth } from '../../../../util/util';

const getStyles = () => {
  return StyleSheet.create({
    item: {
      borderWidth: 1,
      borderColor: color.white3,
      borderRadius: 8,
      alignItems: 'center',
      paddingVertical: rHeight(24),
      width:
        (Dimensions.get('window').width - (rWidth(24) * 2 + rWidth(8) * 2)) / 3,
      marginBottom: rHeight(8),
    },
    itemMRight: {
      marginRight: rWidth(8),
    },
    itemText: {
      fontSize: 14,
      color: color.white2,
      flex: 1,
    },
  });
};

export default getStyles;
