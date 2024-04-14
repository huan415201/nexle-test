import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { checkboxChecked, checkboxUncheck } from '../../asset/image';
import getStyles from './styles';

const CustomCheckbox = ({
  checked,
  setChecked,
  text,
  disabled,
  containerStyle,
}) => {
  const styles = getStyles();
  const handlePress = () => setChecked(prev => !prev);

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={1}
      style={[styles.container, containerStyle]}>
      <Image source={checked ? checkboxChecked : checkboxUncheck} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
