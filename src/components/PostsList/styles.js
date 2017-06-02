import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  listItem: {
    flex: 1,
    height: 100,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 0,
    marginBottom: 2,
    backgroundColor: 'white'
  },
  typeRow: {
    paddingTop: 5
  },
  typeContainer: {
    backgroundColor: '#e8827d',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  type: {
    color: 'white'
  },
  contentRow: {
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginTop: 10
  },
  textColumn: {
    marginLeft: 15,
    marginTop: -5
  },
  title: {
    fontSize: 20
  },
  content: {
    fontSize: 14,
    marginTop: -2,
    color: 'grey'
  },
  username: {
    fontSize: 14,
    color: 'lightgrey',
    marginTop: 5
  },
  arrowColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: 20,
    top: 0
  },
  arrow: {
    fontSize: 25
  }
});
