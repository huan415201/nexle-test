import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { arrowButton, arrowLeft, eye, signupBg } from '../../asset/image';
import CustomCheckbox from '../../common/CustomCheckbox';
import CustomInput from '../../common/CustomInput';
import { setToken, setUserInfo } from '../../features/reduck/user/userSlice';
import { api } from '../../network';
import color from '../../util/color';
import { REGEX_EMAIL, regexTest } from '../../util/util';
import PasswordLevel from './components/PasswordLevel';
import getStyles from './styles';

const SignUpScreen = ({ navigation }) => {
  const styles = getStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOver16, setIsOver16] = useState(false);
  const [errorSignup, setErrorSignup] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorTextEmail, setErrorTextEmail] = useState('');
  const [errorTextPassword, setErrorTextPassword] = useState('');
  const [showPasswordLevel, setShowPasswordLevel] = useState(false);

  const handleSetEmail = value => {
    setEmail(value);
    if (!value) {
      setErrorTextEmail('Email is required');
    } else if (!regexTest(REGEX_EMAIL, value)) {
      setErrorTextEmail('Email is not valid');
    } else {
      setErrorTextEmail('');
    }
  };

  const handleSetPassword = value => {
    setPassword(value);
    if (!value) {
      setErrorTextPassword('Password is required');
    } else if (value?.length < 6 || value?.length > 18) {
      setErrorTextPassword('Password not valid');
    } else {
      setErrorTextPassword('');
    }
  };

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleShowPasswordLevel = () => setShowPasswordLevel(true);

  const signup = async () => {
    const signupRes = await api.post('/auth/signup', {
      firstName: 'Jamie',
      lastName: 'Doe',
      email: email,
      password: password,
    });
    if (signupRes?.status < 300) {
      const loginRes = await api.post('/auth/signin', {
        email: email,
        password: password,
      });
      dispatch(setUserInfo(loginRes.data?.user));
      dispatch(setToken(loginRes.data?.accessToken));
      navigation.navigate('Category');
    } else {
      setErrorSignup(signupRes.data?.message || '');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={signupBg} resizeMode="cover" style={styles.bg} />
      <LinearGradient
        colors={[color.black1, color.black0]}
        locations={[0.13, 0.5]}
        style={styles.gradientFilter}>
        <TouchableOpacity style={styles.backBtn}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.spaceView}>
          <Text style={styles.title}>Let's get you started!</Text>
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
              inputWrapperStyle={styles.noBorder}
              textInputProps={{
                placeholder: 'Your password',
                value: password,
                onChangeText: handleSetPassword,
                secureTextEntry: !showPassword,
                onFocus: handleShowPasswordLevel,
              }}
              errorText={errorTextPassword}
              rightIcon={{ icon: eye, onPress: toggleShowPassword }}
            />
            <PasswordLevel
              isShowLevel={showPasswordLevel && !errorTextPassword}
              password={password}
            />
          </View>
          <CustomCheckbox
            checked={isOver16}
            setChecked={setIsOver16}
            text="I am over 16 years of age"
            containerStyle={styles.checkbox}
          />
          <Text style={styles.tos}>
            By clicking Sign Up, you are indicating that you have read and agree
            to the <Text style={styles.highlightTOS}>Terms of Service</Text> and{' '}
            <Text style={styles.highlightTOS}>Privacy Policy</Text>
          </Text>
          {errorSignup ? <Text style={styles.error}>{errorSignup}</Text> : null}
          <View style={styles.signupWrapper}>
            <Text style={styles.signupText}>Sign Up</Text>
            <TouchableOpacity
              onPress={signup}
              disabled={!isOver16 || !!errorTextEmail || !!errorTextPassword}>
              <Image source={arrowButton} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;
