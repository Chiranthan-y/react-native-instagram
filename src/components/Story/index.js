import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProfilePicture from './../ProfilePicture';
import styles from './styles';

const Story = ({story}) => {
  const {user, stories} = story;
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Story', {userId: user.id});
  };
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View>
          <ProfilePicture uri={user.imageUri} />
          <Text style={styles.text}>{user.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Story;
