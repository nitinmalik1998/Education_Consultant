import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // ✅ ADD THIS LINE


const OTP = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputs = useRef([]);
  const [userData, setUserData] = useState({});

  const handleOTPChange = (index, value) => {
    let newOtp = [...otp];

    if (value.length > 1) return; // Prevent entering more than 1 digit

    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (value && index < 4) {
      inputs.current[index + 1].focus();
    }

    // If last digit is entered, you can trigger OTP verification
    if (index === 4 && value) {
      console.log('OTP entered:', newOtp.join(''));
    }
  };

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          const parsedData = JSON.parse(data);
          setUserData(parsedData);
          console.log('User data from AsyncStorage:', parsedData);
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    getUserData();
  }, []);

  // console.log('userData', userData.otp);
  // console.log('otp', otp);

  const RegistrationVerification = async userId => {
    try {
      if (!userId) {
        throw new Error('user_id is required');
      }

      const formData = new FormData();
      formData.append('user_id', userId);

      const response = await axios.post(
        'https://argosmob.uk/admission-consultation/public/api/v1/auth/register-verify',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      // ✅ Handle success (you can customize this part)
      console.log('Verification Response:', response.data);
      await AsyncStorage.setItem(
        'LoginData',
        JSON.stringify(response.data?.user),
      );
      navigation.navigate('TabNavigation');
      // return response.data;
    } catch (error) {
      console.error('Registration Verification Error:', error);
      throw error; // you can also show an alert or toast if needed
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assests/Images/Signin.png')}
        style={styles.image}
        //   resizeMode='stretch'
      />
      <View style={styles.validationContainer}>
        <View style={styles.profileOuter}>
          <View style={styles.profileIcon}>
            <Icon name="account-outline" size={38} color={'#39434F'} />
          </View>
        </View>
        <Text style={styles.heading}>Validation code</Text>
        <Text style={styles.subHeading}>
          Check your email or WhatsApp inbox and enter the validation code here
        </Text>
        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOTPChange(index, value)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index, digit);
                }
              }}
            />
          ))}
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          onPress={() => {
            const enteredOtp = otp.join('');
            if (enteredOtp.trim() === userData.otp?.toString().trim()) {
              RegistrationVerification(userData?.id);
              Alert.alert('Success', 'OTP verified successfully');
            } else {
              Alert.alert('Invalid OTP', 'The code you entered is incorrect.');
            }
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        {/* Login Link */}
        {/* <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Log in here!</Text>
          </Text> */}
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDBD4E',
  },
  image: {
    height: '80%',
    width: '100%',
    resizeMode: 'cover',
  },
  validationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '-60%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
  },
  profileOuter: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 39,
    marginTop: -40,
  },
  profileIcon: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#D1E6FF',
    borderRadius: 29,
    backgroundColor: '#fff',
    // marginTop: -35,
  },

  heading: {
    fontWeight: 700,
    fontSize: 26,
    color: '#39434F',
    marginTop: 24,
  },
  subHeading: {
    marginTop: 24,
    fontWeight: 500,
    fontSize: 16,
    width: '80%',
    color: '#808B9A',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    marginTop: 24,
    width: 50,
    height: 50,
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#D9DFE6',
    backgroundColor: '#fff',
    color: '#2D384C',
  },
  button: {
    backgroundColor: '#25A8C5',
    paddingVertical: 12,
    paddingHorizontal: 96,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    // marginTop: 10,
    color: '#2D384C',
    fontSize: 14,
  },
  loginLink: {
    color: '#76A1FF',
    fontWeight: 'bold',
  },
});
