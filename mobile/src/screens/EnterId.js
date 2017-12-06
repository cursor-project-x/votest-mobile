//EnterId screen part of StackNavigator method;
//
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { firebaseApp } from '../config/api';
import { Button, Container, ContainerSection, Input, LogoFacebook, StatusBarComponent } from '../components';

export default class EnterId extends Component {
  constructor(props){
    super(props);
    this.state = {
      code: '',
      label: 'False',
      accept: 'false'
    }
    //for ignoring yellow console => long time more then 60 * 1000
    //
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    this.itemRef = firebaseApp.database();
  }
  static navigationOptions = {
    headerTitle: 'Enter the code',
    headerTitleStyle: {
      fontWeight: '400',
      paddingLeft: 45
    },
  }
  // GET values ==> vote id from firebase and check entered code === code from db
  // question! {navigator.navigate('Answer')} do if true or this.state.accept onChange in
  //
  checkCode(){
    const navigator = this.props.navigation;
    this.itemRef.ref('Two').child('code').on('value', snap => {
      if(snap.val() == this.state.code){
        this.setState({ label: 'True', accept: 'true'})
        {navigator.navigate('Answer')}
      } else {
        this.setState({ label: 'False'})
      }
   })
  }
  
  renderScreen(){
    const { label, code } = this.state;
    return(
      <Container>
        <StatusBarComponent/>
        <ContainerSection>
          <LogoFacebook/>
        </ContainerSection>
        <ContainerSection>
        <Input
          placeholder='Enter: 333'
          label={ label }
          value={ code }
          onChangeText={ code => this.setState({ code } )}/>
        </ContainerSection>
        <ContainerSection>
          <Button onPress={ () => { this.checkCode() } }>
            Submit code
          </Button>
        </ContainerSection>
      </Container>
    )
  }

  render() {
    return (
      // ScrollWiew for scroll input up
      //
      <ScrollView>
        { this.renderScreen() }
      </ScrollView>
    );
  }
}