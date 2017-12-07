//CreateAnswers screen part of StackNavigator method;
//
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import {
  Button,
  Container,
  ContainerSection, 
  Logo, 
  InputCreateAnswer,
  StatusBarComponent } from '../../components';
import { firebaseApp } from '../../config/api';

  export default class CreateAnswers extends Component {
    constructor(props){
      super(props);
      //for ignoring yellow console => long time more then 60 * 1000
      //
      console.ignoredYellowBox = [
        'Setting a timer'
      ];
      this.itemRef = firebaseApp.database();
    }
    static navigationOptions = {
      headerTitle: 'Add answers',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400'
      },
    }
  
  
    renderScreen(){
      return(
        <Container>
          <StatusBarComponent/>
          <ContainerSection>
            <InputCreateAnswer/>
          </ContainerSection>
          <ContainerSection>
            <Button onPress={ () => alert("SSS")}>
              Tap
            </Button>
          </ContainerSection>
        </Container>
      )
    }
  
    render() {
      return (
        <ScrollView>
          { this.renderScreen() }
        </ScrollView>
      );
    }
  }