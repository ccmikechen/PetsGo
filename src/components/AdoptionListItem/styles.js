import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  listItem: {
    flex: 1,
    height: 210,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 10,
  },
  address: {
    flex: 1,
    paddingTop: 10,
    fontSize: 16
  },
  sexIcon: {
    position: 'absolute',
    top: 0,
    left: 120,
    width: 40,
    height: 40
  }
});
