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
      left: rWidth(-93),
    },
    backBtn: {
      marginTop: insets.top + rHeight(12),
      marginLeft: rWidth(24),
      width: 24,
      height: 24,
    },
    gradientFilter: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingBottom: insets.bottom,
    },
    spaceView: {
      marginTop: rHeight(280),
      paddingHorizontal: rWidth(24),
      flex: 1,
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
    checkbox: {
      marginTop: rHeight(50),
    },
    tos: {
      fontSize: 12,
      fontWeight: '500',
      color: color.grey1,
      lineHeight: 20,
      marginTop: rHeight(30),
    },
    highlightTOS: {
      color: color.blue1,
    },
    signupWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: rHeight(30),
    },
    signupText: {
      fontSize: 16,
      fontWeight: '500',
      color: color.white0,
    },
    noBorder: {
      borderBottomWidth: 0,
    },
  });
};

export default getStyles;
