//Graph screen part of StackNavigator method;
//
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Button, Container, ContainerSection, Input, LogoFacebook, StatusBarComponent } from '../components';

export default class Graph extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Graph',
    headerTitleStyle: {
      fontWeight: '400',
      paddingLeft: 75
    },
  }
  renderScreen(){
  }
  render() {
    return (
      null
    );
  }
}