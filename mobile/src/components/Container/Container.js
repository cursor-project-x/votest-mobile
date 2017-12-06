import React, {Component} from 'react';
import {
  View
} from 'react-native';
import styles from './styles';

const Container = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export default Container;