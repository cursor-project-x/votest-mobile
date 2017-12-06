import { StyleSheet, Dimensions } from 'react-native';
import { colors, shadows } from '../../config/styles';

const containerHeight = Dimensions.get('window');
export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.containerBackground,
    position: 'relative',
    // Minus header and statusBar height
    //
    height: containerHeight.height-80,
  }
})