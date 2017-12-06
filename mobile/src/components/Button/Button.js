import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles;
  return(
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
};

export default Button;
