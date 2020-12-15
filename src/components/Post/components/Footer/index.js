import React, {useEffect, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const Footer = ({likesCount, caption, timeStamp}) => {
  const [isLike, setIsLike] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);

  const handleLikePress = () => {
    const counter = isLike ? -1 : 1;
    setLikesCounter(likesCounter + counter);
    setIsLike(!isLike);
  };

  useEffect(() => {
    setLikesCounter(likesCount);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={handleLikePress}>
            {isLike ? (
              <Icon name="heart" size={35} style={styles.icon} />
            ) : (
              <Icon name="heart-outline" size={35} style={styles.icon} />
            )}
          </TouchableWithoutFeedback>

          <Icon name="chatbubble-outline" size={35} style={styles.icon} />
          <Icon name="paper-plane-outline" size={35} style={styles.icon} />
        </View>
        <View styles={styles.right}>
          <Icon name="bookmark-outline" size={35} style={styles.icon} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.likes}>{likesCounter} likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.time}>{timeStamp}</Text>
      </View>
    </View>
  );
};

export default Footer;
