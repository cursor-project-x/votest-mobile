import { StyleSheet, Dimensions } from 'react-native';
import { colors, shadows } from '../../config/styles';

const imageSize = Dimensions.get('window');
const imagePadding = Dimensions.get('window');

export default StyleSheet.create({
  containerStyle: {
    paddingTop: imagePadding.height/10,
    paddingBottom: imagePadding.height/9,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      letterSpacing: -1,
      color: colors.textLogo
  },
  imageStyle: {
      marginBottom: 30,
      width: imageSize.height/4,
      height: imageSize.height/4,
  }
})