import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Story from './../Story';
import styles from './styles';
const data = [
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd1',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd2',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd3',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd4',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd5',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd6',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd7',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd8',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd9',
  },
  {
    imageUri:
      'https://1.bp.blogspot.com/-MP6YDJ84Lzw/XSGQbzSnF_I/AAAAAAAAQ9M/6he6vEmXizAsDK8m_bPreCLGR3prlQ_ywCLcBGAs/s1600/Dv0l7BzX0AEM-GV.jpg',
    name: 'msd10',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story name={item.name} imageUri={item.imageUri} />
      )}
    />
  );
};

export default Stories;
