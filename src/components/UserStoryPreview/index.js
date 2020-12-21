import React from 'react';
import {Text, View, TextInput} from 'react-native';

import ProfilePicture from './../ProfilePicture';
import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
const UserStoryPreview = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <>
          <ProfilePicture uri={user.user.imageUri} size={50} />
        </>

        <Text style={styles.text}>{user.user.name}</Text>
      </View>
      <View style={styles.bottom}>
        <Icon name="camera-outline" size={35} color="white" />
        <TextInput
          style={styles.textInput}
          placeholder="send message"
          placeholderTextColor="white"
        />
        <Icon name="paper-plane-outline" size={35} color="white" />
      </View>
    </View>
  );
};

export default UserStoryPreview;
