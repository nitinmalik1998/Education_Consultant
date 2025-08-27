// import { View, Text } from 'react-native'
// import React from 'react'

// const Setting = () => {
//   return (
//     <View style={{flex:1,backgroundColor:'#fff'}}>
//       <Text>Setting</Text>
//     </View>
//   )
// }

// export default Setting

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.userName}>Rohan Sharma</Text>
            <Text style={styles.welcomeText}>
              <Icon name="map-marker" size={12} color="#DB0D0D" />
              Rohini sec-21 New Delhi
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <TouchableOpacity
            style={styles.studyButton}
            onPress={() => navigation.navigate('StudyMaterial')}>
            <Image source={require('../Assests/Images/books.png')} />
            <Text style={styles.studyText}>Study Material</Text>
          </TouchableOpacity>
          <Icon name="bell-outline" size={18} color="#4D2990" />
        </View>
      </View>

      {/* Personal Details Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Icon name="email-outline" size={20} color="#fff" />
          <Text style={styles.infoText}>roharsh45@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="map-marker" size={20} color="#fff" />
          <Text style={styles.infoText}>Rohini sec-21, New Delhi 110086</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="school-outline" size={20} color="#fff" />
          <Text style={styles.infoText}>12th Pass out with science</Text>
        </View>
      </View>

      {/* Action Cards */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.cardTitle}>My Downloads</Text>
            <Text style={styles.subtitle}>
              view your booked events and venues
            </Text>
          </View>
          <Icon name="plus-box-outline" size={26} color="#fff" />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.cardTitle}>Customer Support</Text>
            <Text style={styles.subtitle}>for any help contact us freely</Text>
          </View>
          <Icon name="headphones" size={26} color="#fff" />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.cardTitle}>Referral Code</Text>
            <Text style={styles.subtitle}>Get 5% off in your Code</Text>
          </View>
          <Icon name="gift-outline" size={26} color="#fff" />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.cardTitle}>Terms and Conditions</Text>
            <Text style={styles.subtitle}>Read it carefully</Text>
          </View>
          <Icon name="scale-balance" size={26} color="#fff" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9F4FF',
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  welcomeText: {fontSize: 12, color: '#777'},
  userName: {fontSize: 16, fontWeight: 'bold'},
  studyButton: {
    flexDirection: 'row',
    backgroundColor: '#F9CBFF',
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  studyText: {color: '#670075', marginLeft: 5},
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  phone: {
    color: '#000',
    fontSize: 14,
  },
  changeText: {
    color: '#4D2990',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#25A8C5',
    borderRadius: 12,
    padding: 18,
    marginBottom: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  editText: {
    color: '#fff',
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
  subtitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Setting;
