import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../config/styles';

export default class StatusBarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            barColor: this.props.barColor
        }
    }
    static defaultProps = {
        barColor: colors.statusBarBackground,
    }
    
    render(){
        return(
            <StatusBar
              backgroundColor = {this.state.barColor}
              barStyle="light-content"
            //   translucent={ true }
              />
        )
    }
}

