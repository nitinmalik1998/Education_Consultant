import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Checkbox} from 'react-native-paper';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({route}) => {
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [emailPhone, setEmailPhone] = useState('devp7536@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [checked, setChecked] = useState(false);
  const {role} = route?.params;
  console.log('55555', role);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Hold on!',
          'Are you sure you want to exit the app?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'YES',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {cancelable: false},
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove(); // ✅ correct way to clean up
    }, []),
  );

  const handleLogin = async () => {
    if (!checked) {
      Alert.alert('Please accept Terms and Conditions');
      return;
    }

    if (!emailPhone || !password) {
      Alert.alert('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('email_phone', emailPhone);
    formData.append('password', password);

    try {
      const response = await axios.post(
        'https://argosmob.uk/admission-consultation/public/api/v1/auth/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const userData = response.data?.user;
      console.log('Login Response:', response.data?.user);

      if (!userData) {
        throw new Error('User data missing in response');
      }

      await AsyncStorage.setItem('LoginData', JSON.stringify(userData));
      navigation.navigate('TabNavigation');
    } catch (error) {
      console.error('Registration Error:', error);
      Alert.alert(
        'Login failed',
        error?.response?.data?.message ||
          error.message ||
          'Something went wrong',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../Assests/Images/Signin.png')}
          style={styles.topImage}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Icon name="user" size={28} color="#000" />
          <Text style={styles.headerText}>Login</Text>
        </View>

        <Text style={styles.subText}>
          Welcome! Please enter your information below and get started.
        </Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Your email / Phone Number"
          placeholderTextColor="#aaa"
          value={emailPhone}
          onChangeText={setEmailPhone}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkboxText}>Accept Terms and Conditions</Text>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          onPress={() => {
            handleLogin();
            // navigation.navigate('OTP');
          }}
          style={styles.createButton}>
          <Text style={styles.createButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup', {role: role});
          }}>
          <Text style={styles.loginText}>
            Don't have an account?{' '}
            <Text style={styles.loginLink}>Signup here!</Text>
          </Text>
        </TouchableOpacity>

        {/* OR Section */}
        {/* <Text style={styles.orText}>or</Text> */}

        {/* Social Media Icons */}
        {/* <View style={styles.socialIcons}>
          <FontAwesome name="google" size={30} color="#EA4335" />
          <FontAwesome name="facebook" size={30} color="#1877F2" />
          <FontAwesome name="apple" size={30} color="#000" />
        </View> */}
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FBB03B',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: -200,
  },
  topImage: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
    // marginTop: 70,
    backgroundColor: 'red',

    // zIndex:1
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center',
    marginTop: -40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subText: {
    fontSize: 14,
    color: '#808B9A',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
  },
  createButton: {
    width: '100%',
    backgroundColor: '#25A8C5',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#777',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#76A1FF',
  },
  orText: {
    fontSize: 16,
    color: '#777',
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
});
