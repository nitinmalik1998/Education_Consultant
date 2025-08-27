import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import BottomTabNavigation from './BottomTabNavigation';
import CounsellorInfo from '../Screens/CounsellorInfo';
import CounsellorBooking from '../Screens/CounsellorBooking';
import StudyMaterial from '../Screens/StudyMaterial';
import QuestionAsk from '../Screens/QuestionAsk';
import QuestionAsk2 from '../Screens/QuestionAsk2';
import OTP from '../Screens/OTP';
import Coordinator from '../Screens/Coordinator';
import MyCourses from '../Screens/MyCourses';
import SkillsDev from '../Screens/SkillsDev';
import Fees from '../Screens/Fees';
import Courses from '../Screens/Courses';
import College from '../Screens/College';
import ChooseUser from '../Screens/ChooseUser';
import Splash from '../Screens/Splash';
import Jobs from '../Screens/Jobs';
import Scholarship from '../Screens/Scholarship';
import Trends from '../Screens/Trends';
import Offer from '../Screens/Offer';
import SigninOtp from '../Screens/SigninOtp';
import Topcourse from '../Screens/Topcourse';
import Course from '../Screens/Course';
import Coursedetail from '../Screens/Coursedetail';
import Counsellor from '../Screens/Counsellor';
import Talkcounsellor from '../Screens/Talkcounsellor';
import Notification from '../Screens/Notification';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'fade'}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChooseUser"
          component={ChooseUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown: false,
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="CounsellorInfo"
          component={CounsellorInfo}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CounsellorBooking"
          component={CounsellorBooking}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="StudyMaterial"
          component={StudyMaterial}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="QuestionAsk"
          component={QuestionAsk}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="QuestionAsk2"
          component={QuestionAsk2}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TabNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SigninOtp"
          component={SigninOtp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Coordinator"
          component={Coordinator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyCourses"
          component={MyCourses}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SkillsDev"
          component={SkillsDev}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Fees"
          component={Fees}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="College"
          component={College}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Scholarship"
          component={Scholarship}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Trends"
          component={Trends}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Offers"
          component={Offer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Topcourse"
          component={Topcourse}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Coursedetail"
          component={Coursedetail}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Counsellor"
          component={Counsellor}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Talkcounsellor"
          component={Talkcounsellor}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
