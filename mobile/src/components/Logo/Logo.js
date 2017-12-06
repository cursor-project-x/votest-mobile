import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import styles from './styles';


export default class Logo extends Component {
  render(){
    return(
      <View style={ styles.containerStyle }>
        <Image 
          resizeMode = "contain"
          source={ require('./images/logo.png') } 
          style={ styles.imageStyle }>
        </Image>
        <Text style={ styles.textStyle }>Votest, be like a Pavlik Morozov</Text>
      </View>
    )
  }
}
