import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import styles from './styles';


export default class LogoFacebook extends Component {
  render(){
    return(
      <View style={ styles.containerStyle }>
        <Image 
          resizeMode = "contain"
          source={ require('./images/facebook.png') } 
          style={ styles.imageStyle }>
        </Image>
        <Text style={ styles.textStyle }>Find your code on Facebook</Text>
      </View>
    )
  }
}