import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },

  right: {
    margin: 5,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
