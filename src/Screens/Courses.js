// import { View, Text } from 'react-native'
// import React from 'react'

// const Courses = () => {
//   return (
//     <View>
//       <Text>Courses</Text>
//     </View>
//   )
// }

// export default Courses

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Courses = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.userName}>Rohan Sharma</Text>
            <Text style={styles.location}>
              <Icon name="map-pin" size={14} color="#d00" /> Rohini sec-21 New
              Delhi
            </Text>
          </View>
          <TouchableOpacity style={styles.studyButton}>
            <Icon name="book-open" size={14} color="#8A2BE2" />
            <Text style={styles.studyText}> Study Material</Text>
          </TouchableOpacity>
          <Icon name="bell" size={20} color="#8A2BE2" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#555" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        {/* Form */}
        <Text style={styles.formTitle}>Fill the Details</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="+91"
        />

        <Text style={styles.label}>Education</Text>
        <TextInput style={styles.input} placeholder="Your Education" />

        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} placeholder="Your City" />

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedBtn}>
          <Text style={styles.proceedText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  location: {
    fontSize: 12,
    color: '#333',
  },
  profilePic: {width: 50, height: 50, borderRadius: 25, marginRight: 10},

  studyButton: {
    backgroundColor: '#f3e5f5',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 12,
    alignItems: 'center',
  },
  studyText: {
    fontSize: 12,
    color: '#8A2BE2',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 45,
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 4,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 60,
  },
  proceedBtn: {
    backgroundColor: '#00bcd4',
    marginTop: 30,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  proceedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 11,
    color: '#444',
    marginTop: 4,
  },
});

export default Courses;
