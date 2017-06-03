import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  contentContainer: {
    flex: 2
  },
  content: {
    fontSize: 18,
    justifyContent: 'flex-end'
  },
  imageRow: {
    paddingTop: '100%',
    margin: 5,
    alignItems: 'center',
    flex: 1,
    position: 'relative'
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
