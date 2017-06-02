import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a2dbef'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  name: {
    marginTop: 3,
    fontSize: 20,
    color: 'white',
    alignItems: 'center'
  },
  username: {
    fontSize: 14,
    color: 'white'
  },
  textContainer: {
    alignItems: 'center'
  }
});
