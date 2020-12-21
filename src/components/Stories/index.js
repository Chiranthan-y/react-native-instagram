import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Story from './../Story';
import styles from './styles';
import StoriesData from './../../data/stories';

const Stories = () => {
  return (
    <FlatList
      data={StoriesData}
      keyExtractor={({user}) => user.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story story={item} />}
      style={styles.container}
    />
  );
};

export default Stories;
