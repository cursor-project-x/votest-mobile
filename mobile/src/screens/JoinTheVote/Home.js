//Home screen part of StackNavigator method;
//
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Button,
  Container,
  ContainerSection, 
  Input, 
  Logo, 
  StatusBarComponent } from '../../components';

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Create or Join',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: '400'
    },
  }

  renderScreen(){
    const navigator = this.props.navigation
    return(
      <Container>
        <StatusBarComponent/>
        <ContainerSection>
          <Logo/>
        </ContainerSection>
        <ContainerSection>
          <Button onPress={() => navigator.navigate('CreateQuestion')}>
            Create Vote 
          </Button>
        </ContainerSection>
        <ContainerSection>
          <Button onPress={() => navigator.navigate('EnterId')}>
            Join the Vote
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
