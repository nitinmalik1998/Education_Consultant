// import { View, Text } from 'react-native'
// import React from 'react'

// const Share = () => {
//   return (
//     <View>
//       <Text>Share</Text>
//     </View>
//   )
// }

// export default Share

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const colleges = [
  {
    id: '1',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
  {
    id: '2',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
  {
    id: '3',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
  {
    id: '4',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
  {
    id: '5',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
  {
    id: '6',
    name: 'KGMU- King George’s Medical University',
    location: 'Location | Govt | Top 25 in India',
    courses: '1 Course | ⭐ 4.5',
    exam: 'Exam Accepted\nNEET, UP NEET',
    fees: '₹1.9L',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo
  },
];

const CollegeCard = ({item}) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.collegeName}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
          <Image
            source={require('../Assests/Images/collegeIcon.png')}
            style={styles.collegeLogo}
          />
        </View>
        <View style={styles.infoRow}>
          <View>
            <Text style={{fontSize: 12, color: '#747474'}}>
              Courses Offered
            </Text>
            <Text style={styles.infoText}>{item.courses}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>{item.exam}</Text>
          </View>
          <View>
            <Text style={{fontSize: 12, color: '#747474'}}>
              Total Tuition Fee
            </Text>
            <Text style={styles.feeText}>{item.fees}</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.shareButton}>
            <MaterialIcons name="share" size={16} color="green" />
            <Text style={styles.shareText}> Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.brochureButton, {flexDirection: 'row', gap: 2}]}>
            <MaterialIcons name="download" size={20} color="white" />
            <Text style={styles.brochureText}>Brochure</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const Share = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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

      <View style={styles.searchContainer}>
        <FontAwesome
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      <FlatList
        data={['Location', 'Rating', 'Total Fees', 'Courses']}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.filterButton}>
            <Text>{item} ▼</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={colleges}
        renderItem={CollegeCard}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 100, paddingTop: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  welcomeText: {fontSize: 12, color: '#777'},
  studyButton: {
    flexDirection: 'row',
    backgroundColor: '#F9CBFF',
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  studyText: {color: '#670075', marginLeft: 5},
  userName: {fontSize: 16, fontWeight: 'bold'},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 2,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1},
  // filterContainer: {flexDirection: 'row', marginBottom: 10},
  filterButton: {
    height: 35,
    padding: 8,
    backgroundColor: '#EEE',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContent: {flexDirection: 'row'},
  collegeName: {fontSize: 16, fontWeight: 'bold', color: '#0096FF'},
  location: {fontSize: 12, color: '#777'},
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoText: {fontSize: 12, color: '#333'},
  feeText: {fontSize: 14, fontWeight: 'bold', color: '#000'},
  buttonRow: {flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end'},
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 10,
  },
  shareText: {color: 'green'},
  brochureButton: {backgroundColor: '#35AA64', padding: 8, borderRadius: 12},
  brochureText: {color: '#fff', fontWeight: 'bold'},
  collegeLogo: {width: 50, height: 50, borderRadius: 25, marginLeft: 10},
});

export default Share;
