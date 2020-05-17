/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Motorista from './src/pages/Motorista';
import Cliente from './src/pages/Cliente'
import CadastroMoto from './src/pages/CadastroMoto';
import CadastroCli from './src/pages/CadastroCli';
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Motorista" component={Motorista} />
        <AppStack.Screen name="Cliente" component={Cliente} />
        <AppStack.Screen name="CadastroMoto" component={CadastroMoto} />
        <AppStack.Screen name="CadastroCli" component={CadastroCli} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
