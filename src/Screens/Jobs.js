import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const jobsData = [
  {
    id: '1',
    title: 'Graphic Designer Job',
    bgColor: '#fbd5ff',
  },
  {
    id: '2',
    title: 'Nursing',
    bgColor: '#d1f4ff',
  },
  {
    id: '3',
    title: 'Engineering',
    bgColor: '#d7fbdc',
  },
  {
    id: '4',
    title: 'UI/UX Design',
    bgColor: '#fff2cc',
  },
];

const Jobs = () => {
  const navigation = useNavigation();
  const renderJobCard = ({item}) => (
    <View style={[styles.jobCard, {backgroundColor: item.bgColor}]}>
      <Image
        source={require('../Assests/Images/JobsCard.png')} // Replace with your job image
        style={styles.jobImage}
      />
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobDetail}>
          <Text style={styles.jobLabel}>Location: </Text>Noida Sector-30
        </Text>
        <Text style={styles.jobDetail}>
          <Text style={styles.jobLabel}>Salary: </Text>INR 30,000 Per Month
        </Text>
        <Text style={styles.jobDetail}>
          <Text style={styles.jobLabel}>Working Hours: </Text>60 Hours a week
        </Text>
      </View>
    </View>
  );

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

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Job Cards */}
      <FlatList
        data={jobsData}
        renderItem={renderJobCard}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
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
  searchBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 2,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 14,
    color: '#000',
  },
  jobCard: {
    flexDirection: 'row',
    // borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 16,
    marginBottom: -10,
    alignItems: 'center',
  },
  jobImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  jobDetail: {
    fontSize: 12,
    marginBottom: 2,
    color: '#333',
  },
  jobLabel: {
    fontWeight: '600',
  },
});
