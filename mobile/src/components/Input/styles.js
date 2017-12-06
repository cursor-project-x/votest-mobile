import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const imageSize = Dimensions.get('window');
const imagePadding = Dimensions.get('window');

export default StyleSheet.create({
    inputStyle: {
        height: 40,
        color: colors.inputActiveColor,
        paddingHorizontal: 15,
        fontSize: 16,
        lineHeight:24,
        flex: 3,
        backgroundColor: colors.inputBackground,
      },
      labelStyle: {
        fontSize: 16,
        flex: 1,
        color: colors.inputLabelColor,
        backgroundColor:colors.inputLabelBackground,
        paddingBottom: 5,
        textAlign: 'center',
        textAlignVertical: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

      },
      containerStyle: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.inputContainerBorder,
        borderRadius: 5
      }
});