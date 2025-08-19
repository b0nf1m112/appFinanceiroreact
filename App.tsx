// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Dolar from './views/Dolar';
import Euro from './views/Euro';
import Investimento from './views/Investimento';
import Financiamento from './views/Financiamento';

export type RootStackParamList = {
  Home: undefined;
  Dolar: undefined;
  Euro: undefined;
  Investimento: undefined;
  Financiamento: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dolar" component={Dolar} />
        <Stack.Screen name="Euro" component={Euro} />
        <Stack.Screen name="Investimento" component={Investimento} />
        <Stack.Screen name="Financiamento" component={Financiamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

