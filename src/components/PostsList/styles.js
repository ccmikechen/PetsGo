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
  lostType: {
    backgroundColor: '#78d273',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  eventType: {
    backgroundColor: '#7dd2e8',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  adoptType: {
    backgroundColor: '#7d8be8',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  careType: {
    backgroundColor: '#e87d87',
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
  user:{
    flexDirection: 'row',
    marginTop:9
  },
  userIcon:{
    marginTop:2
  },
  username: {
    marginLeft:3,
    fontSize: 14,
    color: '#adadad',
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
