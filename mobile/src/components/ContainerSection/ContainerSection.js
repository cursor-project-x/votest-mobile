import React, {Component} from 'react';
import {
  View
} from 'react-native';
import styles from './styles';

const ContainerSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View> 
  );
};

export default ContainerSection;