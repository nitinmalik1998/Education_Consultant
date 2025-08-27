import { useNavigation } from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Scholarship = () => {
    const navigation = useNavigation()
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

      {/* Career Options */}
      <Text style={styles.sectionTitle}>Choose Career</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {['Medical Field', 'IT Field', 'Civil Engineer', 'IT Support'].map(
          (label, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.careerBtn,
                {backgroundColor: getColorByIndex(index)},
              ]}>
              <Text style={styles.careerText}>{label}</Text>
            </TouchableOpacity>
          ),
        )}
      </ScrollView>

      {/* University Cards */}
      {[1, 2].map(item => (
        <View key={item} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.universityName}>
              KGMU- King George’s Medical University
            </Text>
            <Image
              source={require('../Assests/Images/collegeIcon.png')} // Replace with actual logo
              style={styles.universityLogo}
            />
          </View>
          <Text style={styles.detailText}>
          <Icon name="map-marker-outline" size={12} color="#000" />
          Location | Govt |{' '}
            <Text style={styles.highlightText}>Top 25 in India</Text>
          </Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>
              Courses Offered{'\n'}
              <Text style={styles.boldText}>1 Course | ⭐ 4.5</Text>
            </Text>
            <Text style={styles.infoText}>
              Exam Accepted{'\n'}
              <Text style={styles.boldText}>Neet, UP NEET</Text>
            </Text>
            <Text style={styles.infoText}>
              Total Tuition Fee{'\n'}
              <Text style={styles.boldText}>₹ 1.9L</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.connectBtn}>
            <Text style={styles.connectText}>Connect To Consultant</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const getColorByIndex = index => {
  const colors = ['#25A8C5', '#807BE5', '#B244A5', '#5DBE4F'];
  return colors[index % colors.length];
};

export default Scholarship;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  careerBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  careerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#33B9DB',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  universityName: {
    color: '#007bc1',
    fontSize: 15,
    fontWeight: 'bold',
    width: '75%',
  },
  universityLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  detailText: {
    marginTop: 6,
    fontSize: 12,
    color: '#555',
  },
  highlightText: {
    color: '#07B1E1',
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  infoText: {
    fontSize: 12,
    color: '#000',
    width: '30%',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#222',
  },
  connectBtn: {
    backgroundColor: '#30B4D0',
    borderRadius: 20,
    marginTop: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  connectText: {
    color: '#fff',
    fontWeight: '600',
  },
});
