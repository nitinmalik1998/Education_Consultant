import React from 'react';
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
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'pinar';
import Video from 'react-native-video';



const categories = [
  {id: '1', name: 'Medical Field', icon: 'hospital-o', color: '#7CE7FF'},
  {id: '2', name: 'IT Field', icon: 'laptop', color: '#7B68EE'},
  {id: '3', name: 'Civil Engineer', icon: 'building', color: '#D52DB7'},
  {id: '5', name: 'Medical Field', icon: 'hospital-o', color: '#43C6AC'},
  {id: '6', name: 'IT Field', icon: 'laptop', color: '#7B68EE'},
  {id: '7', name: 'Civil Engineer', icon: 'building', color: '#D52DB7'},
];

const categories1 = [
  {id: 1, name: 'Medical', image: require('../Assests/Images/medicalteam.png')},
  {id: 2, name: 'Nursing', image: require('../Assests/Images/nurse.png')},
  {
    id: 3,
    name: 'Engineering',
    image: require('../Assests/Images/cooperative.png'),
  },
  {id: 4, name: 'Para Medical', image: require('../Assests/Images/man.png')},
  {id: 5, name: 'Law', image: require('../Assests/Images/balance.png')},
  {id: 6, name: 'Pharmacy', image: require('../Assests/Images/drug.png')},
  {id: 7, name: 'IT', image: require('../Assests/Images/computersettings.png')},
  {id: 8, name: 'All', image: require('../Assests/Images/briefcase.png')},
];


const categories2=[
  {id:1,name:"USA",image: require('../Assests/Images/USA.png')},
   {id:2,name:"UK",image: require('../Assests/Images/UK.png')},
    {id:3,name:"Germany",image: require('../Assests/Images/germany.png')},
     {id:4,name:"Australia",image: require('../Assests/Images/australia.png')}
]


const {width, height} = Dimensions.get('window');

const images = [
  {
    uri: 'https://img.freepik.com/free-vector/lovely-raksha-bandhan-sale-banner-with-rakhi_1017-20269.jpg?t=st=1744168484~exp=1744172084~hmac=123dc5b939191a9890214af2c36f24c96dc0705140cec1c2a3c98ef27fe404bf&w=740',
  },
  {
    uri: 'https://img.freepik.com/free-vector/flat-twitter-header-template-indian-republic-day-holiday_23-2151077062.jpg?t=st=1744168388~exp=1744171988~hmac=0101ec15fce4ae4d8c2be6ff4d7c8754664323526819c34ca49324bb3762047f&w=740',
  },
  {
    uri: 'https://img.freepik.com/premium-vector/illustration-happy-janmashtami-lord-krishna-janmashtami-festival-india-with-hindi-calligra_1309416-35.jpg?w=740',
  },
];

const CategoryItem = ({item}) => (
  <TouchableOpacity style={[styles.categoryBox, {backgroundColor: item.color}]}>
    <FontAwesome name={item.icon} size={20} color="#fff" />
    <Text style={styles.categoryText}>{item.name}</Text>
  </TouchableOpacity>
);

const Home = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 80}}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <Text style={styles.rohantext}>Rohan Sharma</Text>
          </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 50}}>

          
          <TouchableOpacity style={{backgroundColor:"#dda0dd",borderRadius:10,padding:5}}>
          <MaterialIcons
            name="headset-mic"
            size={30}
            color="#4D2990"
            style={{alignSelf:"center"}}
          />
          <Text>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate("Notification")}}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={35}
            color="#4D2990"
          />
          </TouchableOpacity>
          <Image
            style={{height: 55, width: 55,borderRadius:30}}
            source={require('../Assests/Images/SplashLogo.png')}
          />
          {/* <TouchableOpacity
            style={styles.studyButton}
            onPress={() => navigation.navigate('StudyMaterial')}>
            <Image source={require('../Assests/Images/books.png')} />
            <Text style={styles.studyText}>Study Material</Text>
          </TouchableOpacity> */}
          
        </View>
      </View>

      {/* Search Bar */}
      {/* <View style={styles.searchContainer}>
        <FontAwesome
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View> */}

      {/* Banner */}
      <View
        style={{
          height: height * 0.25 
        }}>
        <Carousel
          autoplay
          loop
          showsControls={false}
          showsDots
          dotStyle={{backgroundColor: '#25A8C5'}}
          activeDotStyle={{backgroundColor: '#4D2990'}}>
          {images.map((img, index) => (
            <View key={index} style={styles.slide}>
              <Image source={img} style={styles.image} />
            </View>
          ))}
        </Carousel>
      </View>
      {/* our Speciality */}
      <View style={styles.facilitesContainer}>
        <Text style={[styles.sectionTitle, {alignSelf: 'center'}]}>
          Our Speciality
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Courses');
            }}>
            <Image source={require('../Assests/Images/Group1.png')} />
            <Text style={styles.facilites}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('College');
            }}>
            <Image source={require('../Assests/Images/Group2.png')} />
            <Text style={styles.facilites}>College</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Trends');
            }}>
            <Image source={require('../Assests/Images/Group3.png')} />
            <Text style={styles.facilites}>Trends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Offers');
            }}>
            <Image source={require('../Assests/Images/Group4.png')} />
            <Text style={styles.facilites}>Offers</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* categories */}

      <View>
        {/* <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CategoryItem item={item} />}
          contentContainerStyle={styles.categoryContainer}
        /> */}
      </View>

      {/* Categories 1 Section */}
      <View>
        <Text style={styles.sectionTitle}>Join Top Courses</Text>
       // In the FlatList for categories1
<FlatList
  data={categories1}
  keyExtractor={item => item.id.toString()}
  numColumns={4}
  scrollEnabled={false}
  renderItem={({item}) => (
    <TouchableOpacity
      style={styles.categoryItemContainer}
      onPress={() => {
        // Add navigation for "All" category
        if (item.name === 'All') {
          navigation.navigate('Topcourse');
        } else {
           navigation.navigate('Course');
        }
      }}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.categoryListContainer}
/>
      </View>


      {/* Categories 2 Section */}
      <View style={{marginTop:10}}>
        <Text style={styles.sectionTitle}>Study Abroad</Text>
        <FlatList
          data={categories2}
          keyExtractor={item => item.id.toString()}
          numColumns={4}
          scrollEnabled={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.categoryItemContainer}
              onPress={() => console.log('Pressed', item.name)}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryName1}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.categoryListContainer}
        />
      </View>

      {/* <View style={{marginTop: 10}}>
        <Text style={[styles.sectionTitle, {alignSelf: 'center'}]}>
          How to use App
        </Text>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../Assests/Images/HomeBanner.png')}/>
          </View> */}
        

{/* Video Section */}
<View style={{marginTop: 20}}>
  <Text style={styles.sectionTitle}>How to use App</Text>
  <View style={styles.videoRow}>
    {/* First Video */}
    <View style={styles.videoContainer}>
      <Video
        source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
        style={styles.video}
         controls={true}
        paused={false}
        repeat={true}
        resizeMode="stretch"
        muted={false}
        playInBackground={true}
        playWhenInactive={true}
        
      />
    </View>

    
  </View>
</View>
      <View
        style={{
          backgroundColor: '#25A8C5',
          marginVertical: 25,
          padding: 16,
          borderRadius: 14,
        }}>
        <Text
          style={[
            styles.sectionTitle,
            {color: '#fff', fontWeight: 500, fontSize: 18},
          ]}>
          Admission Info
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('MyCourses');
            }}>
            <Image source={require('../Assests/Images/Course.png')} />
            <Text style={styles.admissionItem}>My Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('StudyMaterial');
            }}>
            <Image source={require('../Assests/Images/Notes.png')} />
            <Text style={styles.admissionItem}>Notes & Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Fees');
            }}>
            <Image source={require('../Assests/Images/Fees.png')} />
            <Text style={styles.admissionItem}>Fees</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Coordinator');
            }}>
            <Image source={require('../Assests/Images/Co-ordinator.png')} />
            <Text style={styles.admissionItem}>Co-Ordinator</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('MyCourses');
            }}>
            <Image source={require('../Assests/Images/Learn&Earn.png')} />
            <Text style={styles.admissionItem}>Learn & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Jobs');
            }}>
            <Image source={require('../Assests/Images/Jobs.png')} />
            <Text style={styles.admissionItem}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Scholarship');
            }}>
            <Image source={require('../Assests/Images/Scholarship.png')} />
            <Text style={styles.admissionItem}>Scholarship</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('SkillsDev');
            }}>
            <Image source={require('../Assests/Images/Skills.png')} />
            <Text style={styles.admissionItem}>Skills Dev</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', paddingHorizontal: 16,marginBottom:20},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfo: {},
  profilePic: {width: 40, height: 40, borderRadius: 25, marginRight: 10,alignSelf:"center"},
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

  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  image: {
    width: width - 32,
    height: height * 0.25,
    borderRadius: 12,
    resizeMode: 'contain',
  },

  // Banner as Background Image
  bannerTitle: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  bannerSubtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  bannerButton: {
    // backgroundColor: '#fff',
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    // borderRadius: 5,
    // marginTop: 10,
    alignItems: 'center',
  },
  bannerButtonText: {fontSize: 10, color: '#fff'},

  sectionTitle: {
    fontSize: 17.5,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#39423F',
    alignSelf:"center",
  },
  categoryContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  categoryBox: {
    alignItems: 'flex-start',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  categoryText: {color: '#fff', fontSize: 18, fontWeight: '600'},
  counselorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  counselorCard: {
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 15,
  },
  counselorImage: {width: 50, height: 50, borderRadius: 25},
  counselorName: {fontWeight: 'bold', marginTop: 5},
  counselorField: {fontSize: 12, color: '#777'},
  whatsappButton: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
  },
  facilites: {
    color: '#25A8C5',
    justifyContent: 'center',
  },
  facilitesContainer: {
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingTop: 5,
    paddingBottom: 24,
    marginVertical: 16,
    borderRadius: 14,
    borderColor: '#25A8C5',
  },
  admissionItem: {fontSize: 12, fontWeight: '600', color: '#fff'},

  categoryListContainer: {
    justifyContent: 'space-between',
  },
  categoryItemContainer: {
    width: (width - 32) / 4 - 16, // Subtracting padding
    alignItems: 'center',
    margin: 8,
    paddingVertical: 5,
  },
  categoryImage: {
    height: 53,
    width: 55,
    marginBottom: '7%',
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 13.3,
    textAlign: 'center',
    fontWeight: '500',
    color:"#555555"
  },
  categoryName1: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    
  },
  rohantext:{fontWeight:"500",marginTop:4},


  // Add these styles to your StyleSheet
videoRow: {

  gap:10,
  marginTop: 10,
},
videoContainer: {
  width: '100%',
  aspectRatio: 2,
  borderRadius: 15,
  overflow: 'hidden',
  backgroundColor: '#000',
},
video: {
  width: '100%',
  height: '100%',
},
});

export default Home;
