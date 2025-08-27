import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const coursesdetail = [
    {id:1,stream:"Bachelor of optomerty(B.Optom)"},
    {id:2,stream:"Bachelor of Nursing(BSC Nursing)"},
    {id:3,stream:"Bachelor of Medicine(MBBS)"},
    {id:4,stream:"Bachelor of Dental Surgery(BDS)"},
    {id:5,stream:"Bachelor of Ayurvedic Medicine(BAM)"},
    {id:6,stream:"Bachelor of optomerty(B.Optom)"}
]

const Course = () => {
  const navigation = useNavigation();

  const renderCourseItem = ({item}) => (
    <TouchableOpacity style={styles.courseItem}  onPress={() => navigation.navigate("Coursedetail")}>
      <Text style={styles.courseText}>{item.stream}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: 15, marginHorizontal: 15}}>
      {/* Header Row */}
      <View style={styles.headerContainer}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../Assests/Images/angleleft.png')} // Update path
            style={styles.backIcon}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image
            source={require('../Assests/Images/searchpic.png')} // Update path
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses..."
            placeholderTextColor="#888"
          />
        </View>
      </View>
{/* Computer Icon and Title */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../Assests/Images/computersettings.png')} // Update path
          style={styles.computerIcon}
        />
        <Text style={styles.titleText}>Engineering</Text>
      </View>

      {/* Courses List */}
      <FlatList
        data={coursesdetail}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    justifyContent: 'space-between',
  },
headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain',
  },
  backText: {
    fontSize: 16,
    color: '#333',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    paddingHorizontal: 15,
    height: 42,
  },
  searchIcon: {
    width: 17,
    height: 17,
    marginRight: '5%',
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16.5,
    color: '#333',
  },
   iconContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  computerIcon: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  courseItem: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 12,
    marginBottom: 18,
  },
  courseText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight:"500"
  },
});

export default Course;
