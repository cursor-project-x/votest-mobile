import React from 'react';
import { TextInput, View, Text, Image} from 'react-native';
import styles from './styles';

const Question = ({ children }) => {
  const { containerStyle, textStyle, imageStyle } = styles;
  return(
      <View style={ containerStyle }>
        <Image 
          resizeMode = "contain"
          source={ require('./images/vote.png') }
          style ={ imageStyle }>
        </Image>
         <Text style={ textStyle }>{ children }</Text>
      </View>
  )
}

export default Question;
