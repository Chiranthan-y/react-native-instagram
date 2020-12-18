import React from 'react';
import {FlatList, Text} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const post = [
  {
    id: '1',
    user: {
      imageUri:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/8/2020_8$largeimg_1307977845.JPG',
      name: 'DHONI',
    },
    imageUri:
      'https://img.etimg.com/thumb/msid-73300247,width-650,imgsize-701466,,resizemode-4,quality-100/untitled-2.jpg',
    caption: 'Caption for the posts',
    likesCount: 456,
    timeStamp: '4 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/8/2020_8$largeimg_1307977845.JPG',
      name: 'DHONI',
    },
    imageUri:
      'https://img.etimg.com/thumb/msid-73300247,width-650,imgsize-701466,,resizemode-4,quality-100/untitled-2.jpg',
    caption: 'Caption for the posts',
    likesCount: 456,
    timeStamp: '4 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/8/2020_8$largeimg_1307977845.JPG',
      name: 'DHONI',
    },
    imageUri:
      'https://img.etimg.com/thumb/msid-73300247,width-650,imgsize-701466,,resizemode-4,quality-100/untitled-2.jpg',
    caption: 'Caption for the posts',
    likesCount: 456,
    timeStamp: '4 minutes ago',
  },
  {
    id: '4',
    user: {
      imageUri:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/8/2020_8$largeimg_1307977845.JPG',
      name: 'DHONI',
    },
    imageUri:
      'https://img.etimg.com/thumb/msid-73300247,width-650,imgsize-701466,,resizemode-4,quality-100/untitled-2.jpg',
    caption: 'Caption for the posts',
    likesCount: 456,
    timeStamp: '4 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={post}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
      keyExtractor={({id}) => id}
    />
  );
};

export default Feed;
