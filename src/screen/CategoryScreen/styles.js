import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../../util/color';
import { rHeight, rWidth } from '../../util/util';

const getStyles = () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.black0,
    },
    bg: {
      width: '100%',
    },
    topWrapper: {
      marginTop: insets.top + rHeight(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: rWidth(24),
    },
    backBtn: {
      width: 24,
      height: 24,
    },
    gradientFilter: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingBottom: insets.bottom,
    },
    done: {
      fontSize: 14,
      color: color.white0,
    },
    bottomWrapper: {
      marginTop: rHeight(120),
      paddingHorizontal: rWidth(24),
    },
    title: {
      fontSize: 22,
      color: color.white0,
      marginBottom: rHeight(10),
    },
    des: {
      fontSize: 14,
      color: color.white2,
      lineHeight: 23,
      marginBottom: rHeight(20),
    },
    list: {
      paddingHorizontal: rWidth(24),
    },
  });
};

export default getStyles;
