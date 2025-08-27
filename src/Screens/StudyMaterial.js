// import { View, Text } from 'react-native'
// import React from 'react'

// const StudyMaterial = () => {
//   return (
//     <View>
//       <Text>StudyMaterial</Text>
//     </View>
//   )
// }

// export default StudyMaterial

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const booksData = [
  {
    id: '1',
    title: 'The Ultimate Guide to 21st Century Careers.',
    date: 'Sat, Feb 1 • 2:00 PM',
    image: 'https://m.media-amazon.com/images/I/61pb6M5ykvL.jpg', // Replace with actual book image URL
  },
  {
    id: '2',
    title: 'The Ultimate Guide to 21st Century Careers.',
    date: 'Sat, Feb 1 • 2:00 PM',
    image: 'https://m.media-amazon.com/images/I/61pb6M5ykvL.jpg',
  },
  {
    id: '3',
    title: 'The Ultimate Guide to 21st Century Careers.',
    date: 'Sat, Feb 1 • 2:00 PM',
    image: 'https://m.media-amazon.com/images/I/61pb6M5ykvL.jpg',
  },
  {
    id: '4',
    title: 'The Ultimate Guide to 21st Century Careers.',
    date: 'Sat, Feb 1 • 2:00 PM',
    image: 'https://m.media-amazon.com/images/I/61pb6M5ykvL.jpg',
  },
];

const StudyMaterial = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.userName}>Rohan Sharma</Text>
            <Text style={styles.welcomeText}>
              <MaterialCommunityIcons
                name="map-marker"
                size={12}
                color="#DB0D0D"
              />
              Rohini sec-21 New Delhi
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          {/* <TouchableOpacity
            style={styles.studyButton}
            onPress={() => navigation.navigate('StudyMaterial')}>
            <Image source={require('../Assests/Images/books.png')} />
            <Text style={styles.studyText}>Study Material</Text>
          </TouchableOpacity> */}
          <MaterialCommunityIcons
            name="bell-outline"
            size={18}
            color="#4D2990"
          />
        </View>
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

      {/* Books Title */}
      <Text style={styles.sectionTitle}>Books and Support Material</Text>

      {/* Books List */}
      <FlatList
        data={booksData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.bookCard}>
            <Image source={{uri: item.image}} style={styles.bookImage} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookDate}>{item.date}</Text>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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

  headerRight: {flexDirection: 'row', alignItems: 'center'},
  studyMaterialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1BEE7',
    padding: 8,
    borderRadius: 15,
    marginRight: 10,
  },
  studyMaterialText: {color: '#fff', fontSize: 12, marginLeft: 5},

  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 2,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1},

  sectionTitle: {fontSize: 16, fontWeight: 'bold', marginVertical: 10},

  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 5, // Works for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0}, // Changed height from 2 to 0
    shadowOpacity: 0.5, // Increased for more visibility
    shadowRadius: 6, // Increased for a smoother shadow
  },
  bookImage: {width: 80, height: 80, borderRadius: 10, marginRight: 10},
  bookInfo: {flex: 1},
  bookDate: {fontSize: 14, color: '#5669FF', fontWeight: '400'},
  bookTitle: {fontSize: 16, fontWeight: '400', marginVertical: 5},
  downloadButton: {
    backgroundColor: '#3B0986',
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  downloadButtonText: {fontSize: 14, fontWeight: 'bold', color: '#fff'},

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {alignItems: 'center'},
  navText: {fontSize: 12, marginTop: 2, color: '#000'},
});

export default StudyMaterial;
