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
  ScrollView,
} from 'react-native';
import Counsellor from './Counsellor';
import Talkcounsellor from './Talkcounsellor';

const {width, height} = Dimensions.get('window');

const coursesdetail = [
    {id:1,ProgramType:"B.Optom"},
    {id:2,Fees:"5 Lakhs"},
    {id:3,Keyfeatures:"NA"},
    {id:4,JobOpportunity:"Yes"},
    {id:5,EmploymentArea:"NA"},
    {id:6,AdmissionProcess:"Direct"},
    {id:7,Duration:"4 Years"},
    {id:8,Eligibility:"12th Pass"},
    {id:9,Syllabus:"NA"},
    {id:10,ExpectedSalary:"6 LPA"},
    {id:11,Syllabus:"NA"},
    {id:12,SkillCovered:"10"}
]

const titleMap = {
  ProgramType: 'Program Type',
  Fees: 'Fees',
  Keyfeatures: 'Key Features',
  JobOpportunity: 'Job Opportunity',
  EmploymentArea: 'Employment Area',
  AdmissionProcess: 'Admission Process',
  Duration: 'Duration',
  Eligibility: 'Eligibility',
  Syllabus: 'Syllabus',
  ExpectedSalary: 'Expected Salary',
  SkillCovered: 'Skill Covered',
};

const Coursedetail = () => {
  const navigation = useNavigation();


  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
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
        <View  style={styles.computerIconContainer}>
        <Image
          source={require('../Assests/Images/computersettings.png')} // Update path
          style={styles.computerIcon}
        />
         {/* Add Download Section */}
  <TouchableOpacity style={styles.downloadButton}>
  <View style={styles.downloadContainer}>
    <Image
      source={require('../Assests/Images/download.png')} // Add your download icon
      style={styles.downloadIcon}
    />
    <Text  style={styles.downloadText}>Download</Text>
     <Text  style={styles.downloadText}>Details</Text>
    </View>
    </TouchableOpacity>
    </View>
        <Text style={styles.titleText}>Engineering</Text>
         <Text style={styles.mainTitle}>Bachelor of Optometry (B.Optom)</Text>
         
 
 </View>

      {/* Program Details Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.subTitle}>About the Program</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>

      {/* Course Details FlatList */}
      <FlatList
        data={coursesdetail}
        renderItem={({item}) => {
          const key = Object.keys(item).find(k => k !== 'id');
          const title = titleMap[key] || key;
          const value = item[key];
          return (
            <View style={styles.detailItem}>
              <Text style={styles.detailTitle}>{title}</Text>
              <Text style={styles.detailValue}>{value}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
      />
      
      {/* Schedule Button */}
      <TouchableOpacity 
        style={styles.scheduleButton}
        onPress={() => {/* Add navigation logic here */}}
      >
        <Text style={styles.scheduleButtonText}>Schedule your Call</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.scheduleButton1}
        onPress={() => {navigation.navigate(Talkcounsellor)}}
      >
        <Text style={styles.scheduleButtonText1}>Talk to counsellor</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
    width: 145,
    height: 150,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  sectionContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'grey',
    padding: 20,
    marginBottom: 25,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 0,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    padding: 10,
    marginHorizontal: 5,
    maxWidth: (width - 40) / 2 - 10,
    paddingLeft:"5%"
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 14,
    color: '#666',
  },
 scheduleButton: {
    backgroundColor:'#00bfff' ,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
   scheduleButton1: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1.4,
    borderColor:"#00bfff"
  },
   scheduleButtonText1: {
    color: '#00bfff',
    fontSize: 18,
    fontWeight: '600',
  },
  downloadIcon:{height:35,width:35,alignSelf:"center"},
  downloadText:{fontWeight:"500",alignSelf:"center",fontSize:12},
  downloadButton: {
  position: 'absolute',
  zIndex: 1000,
  left:"53%",
  top:"4%"
}
  
});

export default Coursedetail;
