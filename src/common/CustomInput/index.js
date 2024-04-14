import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import color from '../../util/color';
import getStyles from './styles';

const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };

const CustomInput = ({
  textInputProps = {},
  errorText = '',
  rightIcon = {},
  containerStyle = {},
  inputWrapperStyle = {},
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
      <View style={[styles.inputWrapper, inputWrapperStyle]}>
        <View style={styles.inputLine}>
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
              hitSlop={hitSlop}
              style={styles.iconWrapper}>
              <Image source={rightIcon.icon} />
            </TouchableOpacity>
          ) : null}
        </View>
        {!!errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
      <View style={styles.spacing} />
    </View>
  );
};

export default CustomInput;
