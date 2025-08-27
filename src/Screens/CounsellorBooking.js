import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const CounsellorBooking = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.welcomeText}>Hi, Welcome back</Text>
            <Text style={styles.userName}>Rohan Sharma</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Form Fields with Labels */}
      <View style={styles.formGroup}>
        {/* <Text style={styles.label}>Name</Text> */}
        <View style={styles.inputBox}>
          <FontAwesome name="user" size={20} color="#444" />
          <TextInput placeholder="Enter your name" style={styles.inputText} />
        </View>
      </View>

      <View style={styles.formGroup}>
        {/* <Text style={styles.label}>Date</Text> */}
        <View style={styles.inputBox}>
          <FontAwesome name="calendar" size={20} color="#444" />
          <TextInput placeholder="Select Date" style={styles.inputText} />
        </View>
      </View>

      <View style={styles.formGroup}>
        {/* <Text style={styles.label}>Time</Text> */}
        <View style={styles.inputBox}>
          <Ionicons name="time-outline" size={20} color="#444" />
          <TextInput placeholder="Select Time" style={styles.inputText} />
        </View>
      </View>

      <View style={styles.formGroup}>
        {/* <Text style={styles.label}>Location</Text> */}
        <View style={styles.inputBox}>
          <Ionicons name="location-outline" size={20} color="#444" />
          <TextInput placeholder="Enter Location" style={styles.inputText} />
        </View>
      </View>

      <View style={styles.formGroup}>
        {/* <Text style={styles.label}>Stream</Text> */}
        <View style={styles.inputBox}>
          <MaterialIcons name="school" size={20} color="#444" />
          <TextInput placeholder="Select Stream" style={styles.inputText} />
        </View>
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity onPress={() => {navigation.navigate('QuestionAsk')}}>
        <LinearGradient
          colors={['#1DBEE1', '#0B778F']}
          style={styles.signInButton}>
          <Text style={styles.buttonText}>Book Your Appointment</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  welcomeText: {fontSize: 12, color: '#777'},
  userName: {fontSize: 14, fontWeight: 'bold'},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 2,
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#DBDBDB',
    borderWidth: 1,
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1},

  // Form Group (Label + Input)
  formGroup: {marginVertical: 20},
  label: {fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 5},

  inputBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    // paddingVertical:8,
    borderRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#DBDBDB',
  },
  inputText: {marginLeft: 10, fontSize: 16, color: '#444', flex: 1},
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

export default CounsellorBooking;
