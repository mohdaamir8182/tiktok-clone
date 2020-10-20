import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Stack/Home';
import Splash from './screens/Stack/Splash';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
        headerMode="none"
        initialRouteName="Splash"
    >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

