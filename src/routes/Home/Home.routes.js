import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import logo from './../../assets/image/Logo.png';

import HomeScreen from './../../screeens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <Icon name="camera-outline" size={35} />,
          headerLeftContainerStyle: {
            marginLeft: 15,
          },

          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 150}} />
          ),
          headerTitleAlign: 'center',

          headerRight: () => <Icon name="paper-plane-outline" size={35} />,
          headerRightContainerStyle: {
            marginRight: 15,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
