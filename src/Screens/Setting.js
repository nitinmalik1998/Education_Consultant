// import { View, Text } from 'react-native'
// import React from 'react'

// const Setting = () => {
//   return (
//     <View style={{flex:1,backgroundColor:'#fff'}}>
//       <Text>Setting</Text>
//     </View>
//   )
// }

// export default Setting

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Setting = () => {
  const navigation = useNavigation();

const basicinfo = [
  {Name:"Rohan",StudentID:"Da220",Course:"Medical",College:"AIIMS",Session:"NA",DateofBirth:"12 March 2000",Gender:"Male",Nationality:"Indian",FathersName:"Mohan",MothersName:"Rani",Aadharno:"00055 0050 0000"}
]

 const keyLabels = {
    Name: "Name :",
    StudentID: "Student ID : ",
    Course: "Course :",
    College: "College :",
    Session: "Session :",
    DateofBirth: "Date of Birth :",
    Gender: "Gender :",
    Nationality: "Nationality :",
    FathersName: "Father's Name :",
    MothersName: "Mother's Name :",
    Aadharno: "Aadhar No. :"
  };


 const EducationalQualification = {
    tenth: {year: "2010", percentage: "70%"},
    twelfth: {year: "2012", percentage: "70%"},
    graduation: {year: "2015", percentage: "70%"},
    postGraduation: {year: "2020", percentage: "70%"}
  };


 const Contact =[
  {MobileNo:"+91 7005055470",WhatsAppNo:"+91 7005055470",Email:"rohan@gmail.com",PermanentAddress:"P-22 Rohini Pocket 4, New Delhi",TemporaryAddress:"NA"}
 ]

 const keyLabelsContact = {
  MobileNo: "Mobile No. :",
  WhatsAppNo: "WhatsApp No. :",
  Email: "Email :",
  PermanentAddress: "Permanent Address :",
  TemporaryAddress: "Temporary Address :"
};

const Documentation =[
  {title1:"Upload Passport Size Photo",
    title2:"Upload Signature",
    title3:"Upload Aadhar Card",
    title4:"Upload 10th MarkSheet",
      title5:"Upload 12th MarkSheet",
        title6:"Upload Graduation Mark Sheet",
        title6:"Upload Post Graduation Mark Sheet",
        
  }
]

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Image  source={{ uri: 'https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/04/mixcollage-25-apr-2024-09-37-am-8442.jpg' }}  style={styles.pic}/>

       <FlatList
        data={basicinfo}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.infoContainer}>
            <View style={styles.header}>
              <Text style={styles.sectionTitle}>Basic Info</Text>
              <TouchableOpacity>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
            
            {Object.entries(item).map(([key, value]) => (
              <View key={key} style={styles.row}>
                <Text style={styles.label}>{keyLabels[key]}</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        )}
      />

<View style={styles.eduContainer}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Educational Qualification</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.eduText}>
          10th <Text style={styles.boldText}>{EducationalQualification.tenth.year}</Text> & <Text style={styles.boldText}>{EducationalQualification.tenth.percentage}</Text> of Marks
        </Text>
        
        <Text style={styles.eduText}>
          12th <Text style={styles.boldText}>{EducationalQualification.twelfth.year}</Text> & <Text style={styles.boldText}>{EducationalQualification.twelfth.percentage}</Text> of Marks
        </Text>
        
        <Text style={styles.eduText}>
          Graduation <Text style={styles.boldText}>{EducationalQualification.graduation.year}</Text> & <Text style={styles.boldText}>{EducationalQualification.graduation.percentage}</Text> of Marks
        </Text>
        
        <Text style={styles.eduText}>
          Post Graduation <Text style={styles.boldText}>{EducationalQualification.postGraduation.year}</Text> & <Text style={styles.boldText}>{EducationalQualification.postGraduation.percentage}</Text> of Marks
        </Text>
      </View>

{/* Contact Section */}
<FlatList
  data={Contact}
  scrollEnabled={false}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item}) => (
    <View style={styles.infoContainer}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      
      {Object.entries(item).map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.label}>{keyLabelsContact[key]}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  )}
/>

<FlatList
  data={Documentation}
  scrollEnabled={false}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item}) => (
    <View style={styles.infoContainer}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Documentation</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      
      {Object.values(item).map((title, index) => (
        <TouchableOpacity key={index} style={styles.docRow}>
         
          <Text style={styles.docText}>{title}</Text>
        </TouchableOpacity>
      ))}

      {/* Upload Documents Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Documents</Text>
      </TouchableOpacity>
    </View>
  )}
/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom:110
  },
  pic:{height:120,width:120,alignSelf:"center",marginTop:25,borderRadius:60},
  infoContainer: {
    backgroundColor: '#25A8C5',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    borderRadius:15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionTitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold'
  },
  editText: {
    color: 'blue',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
  marginVertical:"1.5%"
  },
  label: {
    color: 'white',
    flex: 1,
    fontSize: 16,
    fontWeight:"bold"
  },
  value: {
    color: 'white',
    flex: 1,
    fontSize: 15,
    fontWeight:"400"
  },
  eduContainer: {
  backgroundColor: '#25A8C5',
  borderRadius: 8,
  margin: 16,
  padding: 16,
  borderRadius: 15,
},
eduText: {
  color: 'white',
  fontSize: 16,
  marginVertical: 4,
},
boldText: {
  fontWeight: 'bold',
  fontSize: 16,
},
docRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 4,
},
docText: {
  color: 'white',
  fontWeight:"500",
  fontSize: 16,

},
uploadButton: {
  backgroundColor: 'white',
  borderRadius: 8,
  paddingVertical: 10,
  marginTop: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:20
},
uploadButtonText: {
  color: '#25A8C5',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default Setting;
