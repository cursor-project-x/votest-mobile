import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const containerHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  textStyle: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    minHeight: 50,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: 1.2
  },
  imageStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  containerStyle: {
    flex: 1,
    marginTop: 20,
    height: containerHeight/2,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});