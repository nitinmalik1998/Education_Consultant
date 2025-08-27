import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home';
import Setting from '../Screens/Setting';
import Offer from '../Screens/Offer';
import Share from '../Screens/Share';
import Download from '../Screens/Download';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress, accessibilityState}) => {
  const focused = accessibilityState?.selected;

  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View
        style={[
          styles.customButtonInner,
          {backgroundColor: focused ? '#25A8C5' : '#B3CED4'},
        ]}>
        {React.cloneElement(children, {
          color: focused ? '#fff' : '#565656',
        })}
      </View>
      <Text style={[styles.label, {color: focused ? '#25A8C5' : '#565656'}]}>
        Home
      </Text>
    </TouchableOpacity>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarLabel: ({focused}) => (
          <Text style={[styles.label, {color: focused ? '#25A8C5' : '#565656'}]}>
            {route.name === 'Add' ? '' : route.name}
          </Text>
        ),
        tabBarIcon: ({focused, color}) => {
          let iconName = 'home'; // default fallback

          switch (route.name) {
            case 'Setting':
              iconName = focused ? 'cog' : 'cog';
              break;
            case 'Offer':
              iconName = focused ? 'brightness-percent' : 'brightness-percent';
              break;
            case 'Share':
              iconName = focused ? 'share-variant' : 'share-variant';
              break;
            case 'Download':
              iconName = focused ? 'download' : 'download';
              break;
          }

          return (
            route.name !== 'Home' && (
              <Icon name={iconName} size={24} color={color} />
            )
          );
        },

        tabBarActiveTintColor: '#25A8C5',
        tabBarInactiveTintColor: '#565656',
      })}>
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Offer" component={Offer} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => (
            <CustomTabButton {...props}>
              <Icon name="home" size={28} />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen name="Share" component={Share} />
      <Tab.Screen name="Download" component={Download} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonInner: {
    height: 60,
    width: 60,
    backgroundColor: '#B3CED4',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default BottomTabNavigation;
