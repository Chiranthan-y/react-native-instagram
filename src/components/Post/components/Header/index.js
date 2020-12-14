import React from 'react';
import {Text, View} from 'react-native';

import ProfilePicture from '../../../ProfilePicture';
const Header = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text>{name}</Text>
    </View>
  );
};

export default Header;
