import React from 'react';
import { TextInput, View, Text} from 'react-native';
import styles from './styles';

const InputQuestion = ({ label, value, onChangeText, placeholder, secureTextEntry,numberOfLines }) => {
    const { inputStyle, labelStyle, containerStyle} = styles;
    return(
      <View style={containerStyle}>
        <Text style={labelStyle}>{ label }</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          placeholderTextColor="#fff"
          multiline = {true} 
          numberOfLines = {numberOfLines}
        />
      </View>
    )
}
export default InputQuestion;