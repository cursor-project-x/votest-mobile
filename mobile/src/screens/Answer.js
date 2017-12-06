//Answer screen part of StackNavigator method;
//
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { firebaseApp } from '../config/api';
import { Button, Container, ContainerSection, StatusBarComponent, Question } from '../components';

export default class Answer extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: 'Must be a question here',
    }
    //for ignoring yellow console => long time more then 60 * 1000
    //
    console.ignoredYellowBox = [ 'Setting a timer'];

    this.itemRef = firebaseApp.database();
  }
  static navigationOptions = {
    headerTitle: 'Answer',
    headerTitleStyle: {
      fontWeight: '400',
      paddingLeft: 70
    },
  }
  renderQuestion(){
    const navigator = this.props.navigation;

    this.itemRef.ref('Two').child('question').on('value', snap => {
      this.setState({ question: snap.val() })
   })
  }

  componentWillMount(){
    {this.renderQuestion()}
  }
  renderScreen(){
    const navigator = this.props.navigation
    return(
      <Container>
        <ContainerSection>
          <Question>
            {this.state.question}
          </Question>
        </ContainerSection>
        <StatusBarComponent/>
        <ContainerSection>
          <Button onPress={ () => alert('Empty tree')}>
            Agree Answer
          </Button>
          <Button onPress={ () => alert('Empty tree')}>
            Change Answer
          </Button>
        </ContainerSection>
        <ContainerSection>
          <Button onPress={ () => navigator.navigate('Graph')}>
            Show Graph
          </Button>
        </ContainerSection>
      </Container>
    )
  }
  
  render() {
    return (
      <View>
        { this.renderScreen() }
      </View>
    );
  }
}


