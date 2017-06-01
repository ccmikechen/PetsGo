import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235, 235, 235)',
    padding: 10,
  },
  picker: {
    height: 10,
  },
  signup: {
    marginTop:10,
    backgroundColor: 'rgb(73, 151, 195)',
    borderColor:'rgb(73, 151, 195)'
  },
  cover: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5
  }
});
