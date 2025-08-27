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
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Notifications = [
    {id:1,title:"Your Book are arrived",subtitle:"Check the attached PDF in file and read it",time:"2:00 pm",date:"15-05-2025"},
    {id:2,title:"New Offer!",subtitle:"New Offer get 20% discount use code: Top20",time:"2:00 pm",date:"15-05-2025"},
    {id:3,title:"Your Book are arrived",subtitle:"Check the attached PDF in file and read it",time:"2:00 pm",date:"15-05-2025"},
]

const Notification = () => {
  const navigation = useNavigation();

  const renderNotificationItem = ({item}) => (
    <View style={styles.notificationItem}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{item.subtitle}</Text>
      </View>
      <View style={styles.timeDateContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={{marginTop: 15, marginHorizontal: 15}}>
      {/* Header Row */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <Text style={styles.rohantext}>Rohan Sharma</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 50}}>
          <TouchableOpacity style={styles.supportButton}>
            <MaterialIcons
              name="headset-mic"
              size={30}
              color="#4D2990"
              style={{alignSelf: "center"}}
            />
            <Text>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="bell-outline"
              size={35}
              color="#4D2990"
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../Assests/Images/SplashLogo.png')}
          />
        </View>
      </View>

      <Text style={styles.Notification}>Notifications</Text>
      
      <FlatList
        data={Notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfo: {
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  rohantext: {
    fontWeight: "500",
    marginTop:5,
  },
  Notification: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#c1e1ec',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    width:"80%"
  },
  timeDateContainer: {
    alignItems: 'flex-end',
  },
  time: {
    color: 'green',
    fontSize: 14.5,
    fontWeight: '500',
  },
  date: {
    fontSize: 12.5,
    color: 'black',
    marginTop: 4,
    fontWeight:"500"
  },
  supportButton: {
    backgroundColor: "#dda0dd",
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
  logo: {
    height: 55,
    width: 55,
    borderRadius: 30,
  },
});

export default Notification;