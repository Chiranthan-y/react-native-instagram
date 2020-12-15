import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
const Footer = ({likesCount, caption, timeStamp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.time}>{timeStamp}</Text>
    </View>
  );
};

export default Footer;
