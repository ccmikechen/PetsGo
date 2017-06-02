import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1f1',
    padding: 15
  },
  header: {
    flexDirection: 'row'
  },
  userimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  username: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
    fontSize: 16
  },
  title: {
    fontSize: 25,
    color: '#000000',
    marginTop: 10,
    fontWeight: 'bold'
  },
  typedatetime: {
    color: '#626161',
    marginTop: 10
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    color: '#626161',
    marginBottom: 25
  }
});
