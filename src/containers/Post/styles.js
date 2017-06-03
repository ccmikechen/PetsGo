import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1f1',
    padding: 15
  },
  header: {
    flexDirection: 'row',
  },
  userimage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  user:{
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
  },
  username: {
    fontSize: 16
  },
  userid:{
    fontSize: 14,
    color: '#9a9696'
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
  },
  cover: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f1f1'
  }
});
