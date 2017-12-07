//CreateQuestion screen part of StackNavigator method;
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
  InputQuestion, 
  Logo, 
  StatusBarComponent } from '../../components';
import { firebaseApp } from '../../config/api';

export default class CreateQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: 'Enter Question',
      question: '',
      code: 0,
    }
    //for ignoring yellow console => long time more then 60 * 1000
    //
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.itemRef = firebaseApp.database();
  }
  static navigationOptions = {
    headerTitle: 'CreateQuestion',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: '400'
    },
  }
// Generate special ID
//
randId(){
  let id = Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000;
  this.setState({ code: id })
}

componentWillMount(){
  this.randId()
}
//Sending code id and question data to the Firebase database if answer length more than 8
//
sendQuestion(){
  const navigator = this.props.navigation;
  if(this.state.question.length >8){
    this.itemRef.ref('Two').set({
      code: this.state.code,
      question: this.state.question
    })
    navigator.navigate('CreateAnswers')
  } else{
    alert('Not less then 8 letters')
  }
}

  renderScreen(){
    const { label, question } = this.state;
    return(
      <Container>
        <StatusBarComponent/>
        <ContainerSection>
          <InputQuestion
            placeholder={'...'}
            label={ label }
            value={ question }
            onChangeText={ question => this.setState({ question }) }
            numberOfLines = {2}
          />
        </ContainerSection>
        <ContainerSection>
          <Button onPress={ () => {this.sendQuestion()}}>
            Add question
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
