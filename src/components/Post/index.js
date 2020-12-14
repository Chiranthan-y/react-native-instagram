import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const Post = ({post: {user}}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body />
      <Footer />
    </View>
  );
};

export default Post;
