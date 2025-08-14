// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Dolar from './views/Dolar';
import mongagua from './views/mongagua';
import peruibe from './views/peruibe';
import praiagrande from './views/praiagrande';


const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Dolar:Dolar,
    mongagua:mongagua,
    peruibe:peruibe,
    praiagrande:praiagrande
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}