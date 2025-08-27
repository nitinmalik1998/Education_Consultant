import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChooseUser = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        {/* Student Card */}
        <ImageBackground
          source={require('../Assests/Images/Student.png')}
          style={styles.card}
          imageStyle={{borderRadius: 16}}>
          <LinearGradient
            colors={['rgba(0,0,255,0)', '#3B82F6']}
            style={styles.gradient}
            start={{x: 0.2, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.textBox}>
              <Text style={styles.title}>Student</Text>
              <Text style={styles.subtitle}>
                Are you a student?{'\n'}Looking for better Career?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signin', {role: 'student'});
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* Consultant Card */}
        <ImageBackground
          source={require('../Assests/Images/Consultant.png')}
          style={styles.card}
          imageStyle={{borderRadius: 16}}>
          <LinearGradient
            colors={['rgba(0,0,255,0)', '#9333EA']}
            style={styles.gradient}
            start={{x: 0.2, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.textBox}>
              <Text style={styles.title}>Consultant</Text>
              <Text style={styles.subtitle}>
                Are you a consultant?{'\n'}Want to guide students?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Signin', {role: 'consultant'});
                }}
                style={[styles.button, {backgroundColor: '#9333EA'}]}>
                <Text style={styles.buttonText}>Work Together</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 16,
  },
  card: {
    height: 200,
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    borderRadius: 16,
  },
  textBox: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#f1f1f1',
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ChooseUser;
