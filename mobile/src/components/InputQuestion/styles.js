import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const imageSize = Dimensions.get('window');
const imagePadding = Dimensions.get('window');

export default StyleSheet.create({
    inputStyle: {
        color: colors.inputActiveColor,
        paddingHorizontal: 15,
        fontSize: 16,
        lineHeight:24,
        backgroundColor: colors.inputBackground,
        borderWidth: 1,
        borderColor: 'pink'
      },
      labelStyle: {
        paddingHorizontal: 5,
        fontSize: 16,
        color: colors.inputLabelColor,
        backgroundColor:colors.inputLabelBackground,
        paddingBottom: 5,
        textAlign: 'center',
        textAlignVertical: "center",
        borderTopLeftRadius: 5,

      },
      containerStyle: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.inputContainerBorder,
        borderRadius: 5
      }
});