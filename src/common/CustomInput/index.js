import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import color from '../../util/color';
import getStyles from './styles';

const CustomInput = ({
  textInputProps = {},
  errorText = '',
  rightIcon = {},
  containerStyle = {},
}) => {
  const styles = getStyles();
  const {
    style: inputStyle,
    placeholder,
    onChangeText,
    ...props
  } = textInputProps;
  const [showLabel, setShowLabel] = useState(false);

  const handleChangeText = text => {
    onChangeText?.(text);
    setShowLabel(!!text);
  };

  return (
    <View style={containerStyle}>
      <Text style={styles.label}>
        {placeholder && showLabel ? placeholder : ''}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={color.white1}
          onChangeText={handleChangeText}
          style={[styles.input, inputStyle]}
          {...props}
        />
        {rightIcon?.icon ? (
          <TouchableOpacity
            onPress={rightIcon?.onPress}
            style={styles.iconWrapper}>
            <Image source={rightIcon.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
      {!!errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      <View style={styles.spacing} />
    </View>
  );
};

export default CustomInput;
