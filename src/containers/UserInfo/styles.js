import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  contentContainer: {
    flex: 4
  },
  content: {
    fontSize: 18,
    justifyContent: 'flex-end'
  },
  imageUsernameRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    alignItems: 'center'
  },
  usernameContainer: {
    flex: 1,
    alignItems: 'center'
  },
  username: {
    fontSize: 25,
    color: '#42b6f4'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    alignItems: 'center'
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
});
