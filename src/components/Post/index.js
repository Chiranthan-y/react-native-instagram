import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        timeStamp={post.timeStamp}
      />
    </View>
  );
};

export default Post;
