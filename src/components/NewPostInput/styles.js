import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 2
  },
  title: {
    padding: 3,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'lightgrey'
  },
  content: {
    padding: 3,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'lightgrey',
    flex: 1
  }
});
