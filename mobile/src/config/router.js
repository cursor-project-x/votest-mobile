// This router for StackNavgation and include all screens 
//
import React, { Component } from 'react'; 
import { StackNavigator } from 'react-navigation';

import { 
  Home,
  EnterId,
  Answer,
  Graph
} from '../screens/JoinTheVote';

import {
  CreateQuestion,
  CreateAnswers
} from '../screens/CreateVote';

export const Tabs = StackNavigator({
  Home: { screen: Home },
  EnterId: { screen: EnterId },
  Answer: { screen: Answer },
  Graph: { screen: Graph },
  //
  CreateQuestion: { screen: CreateQuestion },
  CreateAnswers: { screen: CreateAnswers }
})
