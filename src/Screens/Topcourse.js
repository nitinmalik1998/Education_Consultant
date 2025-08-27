import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,StyleSheet,Text,FlatList,Dimensions,TouchableOpacity,Image,TextInput } from "react-native";


const categories1 = [
  {id: 1, name: 'Medical', image: require('../Assests/Images/medicalteam.png')},
  {id: 2, name: 'Nursing', image: require('../Assests/Images/nurse.png')},
  {id: 3,name: 'Engineering',image: require('../Assests/Images/cooperative.png'),},
  {id: 4, name: 'Para Medical', image: require('../Assests/Images/man.png')},
  {id: 5, name: 'Law', image: require('../Assests/Images/balance.png')},
  {id: 6, name: 'Pharmacy', image: require('../Assests/Images/drug.png')},
  {id: 7, name: 'IT', image: require('../Assests/Images/computersettings.png')},
  {id: 8, name: 'para Medical', image: require('../Assests/Images/briefcase.png')},
  {id: 9, name: 'Medical', image: require('../Assests/Images/medicalteam.png')},
  {id: 10, name: 'Nursing', image: require('../Assests/Images/nurse.png')},
  {id: 11,name: 'Engineering',image: require('../Assests/Images/cooperative.png'),},
  {id: 12, name: 'Para Medical', image: require('../Assests/Images/man.png')},
  {id: 13, name: 'Law', image: require('../Assests/Images/balance.png')},
  {id: 14, name: 'Pharmacy', image: require('../Assests/Images/drug.png')},
  {id: 15, name: 'IT', image: require('../Assests/Images/computersettings.png')},
  {id: 16, name: 'para Medical', image: require('../Assests/Images/briefcase.png')},
];


const {width, height} = Dimensions.get('window');

const Topcourse = () => {

const navigation = useNavigation()

    return(
    <View style={{marginTop:15,marginHorizontal:15}}>

{/* Header Row */}
      <View style={styles.headerContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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

<Text style={styles.jointext}>Join Top Courses</Text>
<FlatList
style={{marginTop:10,}}
  data={categories1}
  keyExtractor={item => item.id.toString()}
  numColumns={4}
  scrollEnabled={false}
  renderItem={({item}) => (
    <TouchableOpacity
      style={styles.categoryItemContainer}
      onPress={() => navigation.navigate("Course")}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.categoryListContainer}
/>
    </View>
)}

const styles = StyleSheet.create({
jointext:{alignSelf:"center",fontSize:17.5,fontWeight:"500"},
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
    marginRight: "5%",
    resizeMode: 'contain',
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16.5,
    color: '#333',
    
  },
  


})


export default Topcourse