// import { View, Text } from 'react-native'
// import React from 'react'

// const Counsellor = () => {
//   return (
//     <View>
//       <Text>Counsellor</Text>
//     </View>
//   )
// }

// export default Counsellor

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const consultants = [
  {
    id: '1',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '2',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '3',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '4',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
];

const Coordinator = () => {
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
          <TouchableOpacity
            style={styles.studyButton}
            onPress={() => navigation.navigate('StudyMaterial')}>
            <Image source={require('../Assests/Images/books.png')} />
            <Text style={styles.studyText}>Study Material</Text>
          </TouchableOpacity>
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

      {/* Title */}
      <Text style={styles.sectionTitle}>Top Counsellor</Text>

      {/* Consultants List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={consultants}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            {/* Consultant Info */}
            <View style={styles.cardHeader}>
              <Image source={{uri: item.image}} style={styles.cardImage} />
              <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.field}</Text>
              </View>
            </View>

            {/* Expertise Icons */}
            <Text style={styles.expertiseText}>Expertise</Text>
            <View style={styles.iconContainer}>
              <View style={styles.iconBox}>
                <FontAwesome name="trophy" size={20} color="#FFA500" />
                <Text style={styles.iconLabel}>Top Rating</Text>
              </View>
              <View style={styles.iconBox}>
                <MaterialIcons name="translate" size={20} color="#00AEEF" />
                <Text style={styles.iconLabel}>Hindi and English</Text>
              </View>
              <View style={styles.iconBox}>
                <Ionicons name="person-outline" size={20} color="#A020F0" />
                <Text style={styles.iconLabel}>Expertise in Design</Text>
              </View>
              <View style={styles.iconBox}>
                <MaterialIcons name="library-books" size={20} color="#00C853" />
                <Text style={styles.iconLabel}>With Support Material</Text>
              </View>
            </View>

            {/* About & Pricing */}
            <Text style={styles.aboutText}>About Consular</Text>
            <Text style={styles.description}>{item.description}</Text>

            {/* Price & Button */}
            <View style={styles.footer}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => {
                  navigation.navigate('CounsellorBooking');
                }}>
                <Text style={styles.bookButtonText}>Book Now</Text>
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
    // marginVertical: 20,
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
  searchContainer: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 2,
    alignItems: 'center',
    marginVertical: 10,
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1},
  sectionTitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  card: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  cardImage: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  cardTitle: {fontSize: 16, fontWeight: 'bold'},
  cardSubtitle: {fontSize: 14, color: '#777'},
  expertiseText: {fontSize: 14, fontWeight: 'bold', marginBottom: 5},
  iconContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  iconBox: {alignItems: 'center', width: '25%'},
  iconLabel: {fontSize: 10, textAlign: 'center', marginTop: 2, color: '#777'},
  aboutText: {fontSize: 14, fontWeight: 'bold', marginVertical: 5},
  description: {fontSize: 12, color: '#777'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {fontSize: 16, fontWeight: 'bold', color: '#28A745'},
  bookButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bookButtonText: {fontSize: 14, fontWeight: 'bold', color: '#fff'},
});

export default Coordinator;
