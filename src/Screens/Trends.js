import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Trends = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Trend Posts */}
      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            source={require('../Assests/Images/TrendsAvatar.png')} // Profile icon
            style={styles.avatar}
          />
          <View>
            <Text style={styles.postTitle}>Medical Career is on Top</Text>
            <Text style={styles.time}>15 min ago</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Researchers are discovering how music affects the brain, helping us to
          make sense of its real emotional and social power...
        </Text>
        <Image
          source={require('../Assests/Images/TrendsMain1.png')}
          style={styles.postImage}
        />
        <View style={styles.postFooter}>
          <View style={styles.commentSection}>
            <Image
              source={require('../Assests/Images/TrendsProfiles.png')}
              style={styles.commentUsers}
            />
            <Text style={styles.footerText}>24 comments</Text>
          </View>
          <Text style={styles.footerText}>🤍 300k likes</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.postHeader}>
          <Image
            source={require('../Assests/Images/TrendsAvatar.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.postTitle}>Engineering is top paying job</Text>
            <Text style={styles.time}>15 min ago</Text>
          </View>
        </View>
        <Text style={styles.description}>
          A new study suggests that listening to happy music promotes more
          divergent...
        </Text>
        <Image
          source={require('../Assests/Images/TrendsMain1.png')}
          style={styles.postImage}
        />
        <View style={styles.postFooter}>
          <View style={styles.commentSection}>
            <Image
              source={require('../Assests/Images/TrendsProfiles.png')}
              style={styles.commentUsers}
            />
            <Text style={styles.footerText}>24 comments</Text>
          </View>
          <Text style={styles.footerText}>🤍 300k likes</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
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
  searchBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#171616',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 2,
    marginVertical: 16,
  },
  searchInput: {
    fontSize: 14,
    color: '#000',
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUsers: {
    width: 36,
    height: 16,
    marginRight: 6,
    resizeMode: 'contain',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});
