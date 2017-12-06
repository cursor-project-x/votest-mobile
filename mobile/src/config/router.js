// This router for StackTawigation and include all screens 
//
import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import EnterId from '../screens/EnterId';
import Answer from '../screens/Answer';
import Graph from '../screens/Graph';

export const Tabs = StackNavigator({
    Home: { screen: Home },
    EnterId: { screen: EnterId },
    Answer: { screen: Answer },
    Graph: { screen: Graph }
})
