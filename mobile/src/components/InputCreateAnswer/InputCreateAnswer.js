import React from 'react';
import { TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const InputCreateAnswer = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, buttonStyle, containerStyle} = styles;
    return(
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={buttonStyle}/>
      </View>
    )
}
export default InputCreateAnswer;