import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  textInput: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    paddingLeft: 20,
    width: 320,
    marginHorizontal: 5,
  },
});

export default styles;
