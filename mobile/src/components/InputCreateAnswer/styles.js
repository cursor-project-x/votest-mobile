import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
    inputStyle: {
        height: 40,
        color: colors.inputActiveColor,
        paddingHorizontal: 15,
        fontSize: 16,
        lineHeight:24,
        flex: 1,
        backgroundColor: colors.inputBackground,
      },
      buttonStyle: {
        width:40,
        height:40,
        backgroundColor: '#fff',
        borderRadius: 50,

      },
      containerStyle: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.inputContainerBorder,
        borderRadius: 20
      }
});