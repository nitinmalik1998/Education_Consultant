// import { View, Text } from 'react-native'
// import React from 'react'

// const MyCourses = () => {
//   return (
//     <View>
//       <Text>MyCourses</Text>
//     </View>
//   )
// }

// export default MyCourses

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const courses = [
  {
    id: '1',
    title: 'Basic Grammers',
    category: 'English Course',
    color: '#8676FF',
    icon: require('../Assests/Images/BasicGrammer.png'),
  },
  {
    id: '2',
    title: 'Nursing',
    category: 'Medical',
    color: '#3EDDC2',
    icon: require('../Assests/Images/MedicalNurshing.png'),
  },
  {
    id: '3',
    title: 'Engineering',
    category: 'IT',
    color: '#00596C',
    icon: require('../Assests/Images/IIT.png'),
  },
  {
    id: '4',
    title: 'Data Science',
    category: 'Coding',
    color: '#378C0E',
    icon: require('../Assests/Images/DataScience.png'),
  },
  {
    id: '5',
    title: 'Graphic Design',
    category: 'Design',
    color: '#A442F1',
    icon: require('../Assests/Images/GraphicDesigner.png'),
  },
  {
    id: '6',
    title: 'Digital Marketing',
    category: 'Marketing',
    color: '#9A671E',
    icon: require('../Assests/Images/DigitalMarketing.png'),
  },
  {
    id: '7',
    title: 'Entrepreneurship',
    category: 'Business',
    color: '#814BCE',
    icon: require('../Assests/Images/BussinessEntre.png'),
  },
  {
    id: '8',
    title: 'Web Development',
    category: 'Coding',
    color: '#B7722C',
    icon: require('../Assests/Images/WebDevelopment.png'),
  },
];

const MyCourses = () => {
  const navigation = useNavigation();
  const renderCourseCard = ({item}) => (
    <View style={[styles.courseCard, {backgroundColor: item.color}]}>
      <View>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.courseTop}>
        <Image source={item.icon} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
              style={styles.avatar}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>Rohan Sharma</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="map-marker" size={14} color="#DB0D0D" />
                <Text style={styles.location}>Rohini sec-21 New Delhi</Text>
              </View>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.studyBtn}>
              <Icon name="book-open-outline" size={16} color="#000" />
              <Text style={styles.studyText}>Study Material</Text>
            </TouchableOpacity>
            <Icon name="bell-outline" size={20} color="#000" />
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Icon name="magnify" size={20} color="#aaa" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>

        {/* Courses Grid */}
        <FlatList
          data={courses}
          keyExtractor={item => item.id}
          renderItem={renderCourseCard}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          scrollEnabled={false}
          contentContainerStyle={{paddingBottom: 80}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  scrollContainer: {padding: 16, paddingBottom: 100},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {width: 50, height: 50, borderRadius: 25},
  name: {fontSize: 16, fontWeight: '600'},
  location: {fontSize: 12, marginLeft: 4},
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  studyBtn: {
    backgroundColor: '#EBD9FF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  studyText: {fontSize: 12, fontWeight: '600', marginLeft: 4},
  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 16,
    height: 48,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
  courseCard: {
    gap: 5,
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    flex: 0.48,
    justifyContent: 'space-between',
  },
  courseTop: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    color: '#fff',
    fontSize: 11,
  },
  courseTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  continueBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  continueText: {
    color: '#000',
    fontSize: 12,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 11,
    marginTop: 2,
  },
  homeIconWrap: {
    marginTop: -30,
    backgroundColor: '#D9F4FF',
    borderRadius: 40,
    padding: 10,
  },
  homeIcon: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default MyCourses;
