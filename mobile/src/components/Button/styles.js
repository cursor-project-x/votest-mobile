import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: colors.buttonText,
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
      },
      buttonStyle: {
          flex: 1,
          alignSelf: 'stretch',
          backgroundColor: colors.buttonBackground,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: colors.buttonBorder,
          marginHorizontal: 5
      }
})
