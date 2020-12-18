import React from 'react';
import {} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DiscoveryScreen from './../screeens/DiscoveryScreen';
import AddPostScreen from './../screeens/AddPostScreen';
import NotificationScreen from './../screeens/NotificationScreen';
import ProfileScreen from './../screeens/ProfileScreen';

import HomeStackScreen from './Home/Home.routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <Icon name="home-outline" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Icon name="search-outline" size={size} color={color} />;
          }
          if (route.name === 'AddPost') {
            return <Icon name="add-circle-outline" size={size} color={color} />;
          }
          if (route.name === 'Notification') {
            return <Icon name="heart-outline" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Icon name="person-outline" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="AddPost" component={AddPostScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Router;
