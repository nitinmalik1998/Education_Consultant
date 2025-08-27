// import { View, Text } from 'react-native'
// import React from 'react'

// const SkillsDev = () => {
//   return (
//     <View>
//       <Text>SkillsDev</Text>
//     </View>
//   )
// }

// export default SkillsDev

// import { View, Text } from 'react-native'
// import React from 'react'

// const Offer = () => {
//   return (
//     <View>
//       <Text>Offer</Text>
//     </View>
//   )
// }

// export default Offer

import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const SkillsDev = () => {
  const navigation = useNavigation()
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View style={styles.communicationContainer}>
          <Image source={require('../Assests/Images/Communication.png')} />
          <Text style={styles.communication}>Communication skills</Text>
        </View>
        <View style={styles.communicationContainer}>
          <Image source={require('../Assests/Images/Computer.png')} />
          <Text style={styles.communication}>Basic Computer Skills</Text>
        </View>
        <View style={styles.communicationContainer}>
          <Image source={require('../Assests/Images/Soft.png')} />
          <Text style={styles.communication}>Soft skills</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../Assests/Images/OfferPoster.png')} // Replace with your local or online image
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Get 50% Off</Text>
          <Text style={styles.subtitle}>
            Get 50% discount in your first consultant
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Claim Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#D9F4FF', // Light blue
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    // width: 350,
    height: 180,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 180,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
  },
  button: {
    backgroundColor: '#25A8C5',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  communicationContainer: {
    borderWidth: 1,
    borderColor: '#25A8C5',
    alignItems: 'center',
    padding: 9,
    borderRadius: 8,
  },
  communication: {
    color: '#25A8C5',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default SkillsDev;
