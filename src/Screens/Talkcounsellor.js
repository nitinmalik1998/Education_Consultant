

import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const counsellor = [
  {
    id: '1',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://i.insider.com/60effbc861b8600019f1733e?width=1136&format=jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '2',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://i.insider.com/60effbc861b8600019f1733e?width=1136&format=jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '3',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://apicms.thestar.com.my/uploads/images/2019/10/24/346405.JPG',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
  {
    id: '4',
    name: 'Ansh Mehra',
    field: 'AI & Design',
    price: 'INR 1,200',
    image: 'https://apicms.thestar.com.my/uploads/images/2019/10/24/346405.JPG',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros feugiat vitae mattis lacinia auctor gravida. Eu mattis',
  },
];

const Talkcounsellor = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
     
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


      {/* Consultants List */}
      <FlatList
      showsVerticalScrollIndicator={false}
        data={counsellor}
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



            <Text style={styles.aboutText}>About Consular</Text>
            <Text style={styles.description}>{item.description}</Text>

            {/* Expertise Icons */}
            <Text style={styles.expertiseText}>Expertise</Text>
            <View style={styles.iconContainer}>
              <View style={styles.iconBox}>
                <FontAwesome name="trophy" size={22} color="#FFA500" />
                <Text style={styles.iconLabel}>Top Rating</Text>
              </View>
              <View style={styles.iconBox}>
                <MaterialIcons name="translate" size={22} color="#00AEEF" />
                <Text style={styles.iconLabel}>Hindi and English</Text>
              </View>
              <View style={styles.iconBox}>
                <Ionicons name="person-outline" size={22} color="#A020F0" />
                <Text style={styles.iconLabel}>Expertise in Design</Text>
              </View>
              <View style={styles.iconBox}>
                <MaterialIcons name="library-books" size={22} color="#00C853" />
                <Text style={styles.iconLabel}>With Support Material</Text>
              </View>
            </View>

            {/* Price & Button */}
            <View style={styles.footer}>
             <TouchableOpacity
                style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Schedule your Call</Text>
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
    marginBottom: 10,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  welcomeText: {fontSize: 12, color: '#777'},
  userName: {fontSize: 14, fontWeight: 'bold'},
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
    borderWidth: 1.5,
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
  cardHeader: { alignItems: 'center', marginBottom: 10},
  cardImage: {width: 80, height: 80, borderRadius: 40, marginRight: 10},
  cardTitle: {fontSize: 19, fontWeight: 'bold',marginTop:10},
  cardSubtitle: {fontSize: 14, color: '#777',alignSelf:"center"},
  expertiseText: {fontSize: 14, fontWeight: 'bold', marginBottom: 5,marginTop:10},
  iconContainer: {flexDirection: 'row', justifyContent: 'space-between',paddingVertical:5,},
  iconBox: {alignItems: 'center', width: '25%'},
  iconLabel: {fontSize: 11.2, textAlign: 'center', marginTop: 2, color: 'black',},
  aboutText: {fontSize: 14, fontWeight: 'bold', marginVertical: 5},
  description: {fontSize: 12.5, color: '#333'},
  footer: {alignItems: 'center',
    marginTop: 10,
  },
  
  bookButton: {
    backgroundColor: '#00bfff',
    paddingVertical: 10,
    paddingHorizontal:"31%",
    borderRadius: 8,
  },
  bookButtonText: {fontSize: 15, fontWeight: 'bold', color: '#fff'},
  

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
   


});

export default Talkcounsellor;
