import React, { Component } from 'react';
import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {MainStack} from './src/Routes';

export default class App extends Component {
  
  render() {
    return (
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
      
    );
  }
}
