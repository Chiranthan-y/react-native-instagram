import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  icon: {
    margin: 5,
    color: 'grey',
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
    fontSize: 15,
  },
  caption: {
    margin: 3,
    fontSize: 15,
  },
  time: {
    margin: 3,
    fontSize: 12,
    color: 'grey',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
