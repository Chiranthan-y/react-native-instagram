import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator.routes';
import StoryScreen from './../screeens/StoryScreen';

const RootRouter = createStackNavigator();

const Router = () => {
  return (
    <RootRouter.Navigator>
      <RootRouter.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <RootRouter.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootRouter.Navigator>
  );
};

export default Router;
