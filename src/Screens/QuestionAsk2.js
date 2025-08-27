import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

const QuestionAsk2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>
        Let us know something about you{' '}
        <Image source={require('../Assests/Images/bulb.png')} />
      </Text>
      <Text style={[styles.heading,{marginTop:-20}]}>
        about you
      </Text>


      <Text style={styles.label}>MOther's Name</Text>
      <TextInput style={styles.input} placeholder="Mother's Name" />

      {/* <Text style={styles.label}>Stream</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue="Arts">
          <Picker.Item label="Arts" value="Arts" />
          <Picker.Item label="Science" value="Science" />
          <Picker.Item label="Commerce" value="Commerce" />
        </Picker>
      </View> */}

      {/* <Text style={styles.label}>Current Status</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue="Working">
          <Picker.Item label="Student" value="Student" />
          <Picker.Item label="Working" value="Working" />
          <Picker.Item label="Looking for Job" value="Looking for Job" />
        </Picker>
      </View> */}

      <Text style={styles.label}>Father's Name</Text>
      <TextInput style={styles.input} placeholder="Father's Name" />

      <Text style={styles.label}>Your Skills</Text>
      <TextInput style={styles.input} placeholder="Your Skills" />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QuestionAsk');
        }}>
        <LinearGradient
          colors={['#1DBEE1', '#0B778F']}
          style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20,
    // justifyContent:'center',
    alignItems:'center'
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    padding: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    marginTop: 5,
  },
  signInButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
});

export default QuestionAsk2;
