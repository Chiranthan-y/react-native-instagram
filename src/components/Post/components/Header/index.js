import React from 'react';
import {Text, View} from 'react-native';

import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={50} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Icon name="more-vert" size={35} />
      </View>
    </View>
  );
};

export default Header;
