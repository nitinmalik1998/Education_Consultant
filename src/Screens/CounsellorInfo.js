// import { View, Text } from 'react-native'
// import React from 'react'

// const CounsellorInfo = () => {
//   return (
//     <View>
//       <Text>CounsellorInfo</Text>
//     </View>
//   )
// }

// export default CounsellorInfo

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const CounsellorInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.welcomeText}>Hi, Welcome back</Text>
            <Text style={styles.userName}>Rohan Sharma</Text>
          </View>
        </View>
        <MaterialIcons name="notifications" size={24} color="#4D2990" />
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

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Weekly Top Live Counselors</Text>

      {/* Consultant Card */}

      <View style={styles.card}>
        {/* Profile Image */}
        <Image
          source={{
            uri: 'https://img.indiaforums.com/person/640x480/0/2164-atif-aslam.jpg?c=7vP7E1',
          }}
          style={styles.profileImage}
        />

        {/* Title & Subtitle */}
        <Text style={styles.consollerName}>Ansh Mehra</Text>
        <Text style={styles.userField}>AI & Design</Text>

        <Text style={styles.cardHeading}>About Consular</Text>
        <Text style={{fontSize: 12, fontWeight: '400'}}>
          Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis
          lacinia auctor gravida. Eu mattis
        </Text>

        <Text style={styles.cardHeading}>Expertise</Text>

        {/* Icons Row */}
        <View style={styles.iconContainer}>
          <View>
            <FontAwesome name="trophy" size={24} color="#FFA500" />
            <Text style={styles.iconText}>Top Rating</Text>
          </View>
          <View>
            <MaterialIcons name="translate" size={24} color="#00AEEF" />
            <Text style={styles.iconText}>Hindi and English</Text>
          </View>
          <View>
            <Ionicons name="person-outline" size={24} color="#A020F0" />
            <Text style={styles.iconText}>Expertise in Design </Text>
          </View>
          <View>
            <MaterialIcons name="library-books" size={24} color="#00C853" />
            <Text style={styles.iconText}>With Support Material</Text>
          </View>
        </View>

        <Text style={styles.cardHeading}>Reviews</Text>

        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/1.jpg'}}
              style={styles.boxImage}
            />
            <Text style={styles.boxText}>Bhumika</Text>
            <Text style={styles.reviwText}>
              “Lorem ipsum dolor sit amet consectetur. Amet risus sed ac luctus.
              Aliquet m”.
            </Text>
          </View>
          <View style={styles.box}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/2.jpg'}}
              style={styles.boxImage}
            />
            <Text style={styles.boxText}>Bhumika</Text>
            <Text style={styles.reviwText}>
              “Lorem ipsum dolor sit amet consectetur. Amet risus sed ac luctus.
              Aliquet m”.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CounsellorBooking')}>
          <LinearGradient
            colors={['#1DBEE1', '#0B778F']}
            style={styles.signInButton}>
            <Text style={styles.buttonText}>Book Your Appointment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  welcomeText: {fontSize: 14, color: '#777'},
  userName: {fontSize: 16, fontWeight: 'bold', color: '#111'},
  consollerName: {fontSize: 24, fontWeight: '500'},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 2,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff', // Dark theme
    borderRadius: 15,
    padding: 20,

    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: '99%',
    // margin:'10%',
    alignSelf: 'center',
  },
  cardHeading: {
    marginVertical: 10,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userField: {
    fontSize: 14,
    color: '#6A6A6A',
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
  },
  iconText: {
    fontSize: 10,
    alignSelf: 'center',
    width: 50,
  },
  reviwText: {
    fontSize: 10,
    alignSelf: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  box: {
    width: '45%',
    padding: 5,
    // height: 80,
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  boxText: {
    color: '#00AEEF',
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

export default CounsellorInfo;
