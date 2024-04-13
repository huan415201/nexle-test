import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../../util/color';
import { rHeight, rWidth } from '../../util/util';

const getStyles = () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.black2,
    },
    bg: {
      left: rWidth(-93),
    },
    backBtn: {
      top: insets.top + rHeight(12),
      left: rWidth(24),
    },
    gradientFilter: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingBottom: insets.bottom,
    },
    spaceView: {
      top: insets.top + rHeight(280),
      paddingHorizontal: rWidth(24),
    },
    title: {
      fontSize: 22,
      color: color.white0,
    },
    inputWrapper: {
      marginTop: rHeight(40),
    },
    passwordWrapper: {
      marginTop: rHeight(16),
    },
  });
};

export default getStyles;
