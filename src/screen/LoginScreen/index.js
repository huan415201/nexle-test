import React, { useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { arrowLeft, signupBg } from '../../asset/image';
import CustomInput from '../../common/CustomInput';
import color from '../../util/color';
import getStyles from './styles';

const SignUpScreen = () => {
  const styles = getStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorTextEmail, setErrorTextEmail] = useState('');
  const [errorTextPassword, setErrorTextPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSetEmail = value => {
    setEmail(value);
    if (!value) setErrorTextEmail('Email is required');
  };

  const handleSetPassword = value => {
    setPassword(value);
    if (!value) setErrorTextPassword('Password is required');
  };
  const toggleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={signupBg} resizeMode="cover" style={styles.bg} />
      <LinearGradient
        colors={[color.black1, color.black0]}
        locations={[0.13, 0.71]}
        style={styles.gradientFilter}>
        <TouchableOpacity style={styles.backBtn}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <View style={styles.spaceView}>
          <Text style={styles.title}>Let’s get you started!</Text>
          <View style={styles.inputWrapper}>
            <CustomInput
              textInputProps={{
                placeholder: 'Your email',
                value: email,
                onChangeText: handleSetEmail,
              }}
              errorText={errorTextEmail}
            />
            <CustomInput
              containerStyle={styles.passwordWrapper}
              textInputProps={{
                placeholder: 'Your password',
                value: password,
                onChangeText: handleSetPassword,
                secureTextEntry: !showPassword,
              }}
              errorText={errorTextPassword}
              rightIcon={{ icon: arrowLeft, onPress: toggleShowPassword }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;
