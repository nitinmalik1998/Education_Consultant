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
import {useNavigation} from '@react-navigation/native';

const Wallet = () => {
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
            <Text style={styles.welcomeText}>Hi, Welcome back</Text>
            <Text style={styles.userName}>Rohan Sharma</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <MaterialIcons name="notifications" size={24} color="#4D2990" />
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
  welcomeText: {fontSize: 14, color: '#777'},
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
});

export default Wallet;
