import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  REGEX_CONTAINS_AT_LEAST_ONE_NUMERIC,
  REGEX_CONTAINS_BOTH_LOWERCASE_UPPERCASE,
  REGEX_CONTAINS_ONE_SPECIAL_CHARACTER,
  regexTest,
} from '../../../../util/util';
import getStyles from './styles';

const PasswordLevel = ({ isShowLevel, password }) => {
  const styles = getStyles();
  const [pwScore, setPwScore] = useState(0);

  const getLevelText = () => {
    if (pwScore === 0) return 'Weak';
    if (pwScore === 1) return 'Fair';
    if (pwScore === 2) return 'Good';
    if (pwScore === 3) return 'Strong';
    return 'Weak';
  };

  const getLevelTextStyle = () => {
    if (pwScore === 0) return styles.levelTextWeak;
    if (pwScore === 1) return styles.levelTextFair;
    if (pwScore === 2) return styles.levelTextGood;
    if (pwScore === 3) return styles.levelTextStrong;
    return styles.levelTextWeak;
  };

  const getLevelBarStyle = () => {
    if (pwScore === 0) return styles.levelBarWeak;
    if (pwScore === 1) return styles.levelBarFair;
    if (pwScore === 2) return styles.levelBarGood;
    if (pwScore === 3) return styles.levelBarStrong;
    return styles.levelBarWeak;
  };

  useEffect(() => {
    let score = 0;
    if (regexTest(REGEX_CONTAINS_BOTH_LOWERCASE_UPPERCASE, password)) {
      score += 1;
    }
    if (regexTest(REGEX_CONTAINS_AT_LEAST_ONE_NUMERIC, password)) {
      score += 1;
    }
    if (regexTest(REGEX_CONTAINS_ONE_SPECIAL_CHARACTER, password)) {
      score += 1;
    }
    setPwScore(score);
  }, [password]);

  return isShowLevel ? (
    <View style={styles.container}>
      <View style={styles.greyBar}>
        <View style={[styles.levelBar, getLevelBarStyle()]} />
      </View>
      <Text style={[styles.levelText, getLevelTextStyle()]}>
        {getLevelText()}
      </Text>
    </View>
  ) : (
    <View style={styles.placeholderBar} />
  );
};

export default PasswordLevel;
