import React from 'react';
import {Text} from 'react-native';

import Stories from '../../components/Stories';
import Post from '../../components/Post';

const post = {
  user: {
    imageUri:
      'https://cmsimages.tribuneindia.com/gallary_content/2020/8/2020_8$largeimg_1307977845.JPG',
    name: 'DHONI',
  },
};
const HomeScreen = () => {
  return (
    <>
      <Stories />
      <Post post={post} />
    </>
  );
};

export default HomeScreen;
