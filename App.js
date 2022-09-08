/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const AppStack = createStackNavigator();
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Motorista from './src/pages/Motorista';
import Cliente from './src/pages/Cliente'
import CadastroMoto from './src/pages/CadastroMoto';
import CadastroCli from './src/pages/CadastroCli';
import ultimaslimpezas from './src/pages/ultimaslimpezas';
import defineCad from './src/pages/defineCad';
import Qrcode from './src/pages/Qrcode';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>        
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Motorista" component={Motorista} />
        <AppStack.Screen name="Cliente" component={Cliente} />
        <AppStack.Screen name="defineCad" component={defineCad} />
        <AppStack.Screen name="CadastroMoto" component={CadastroMoto} />
        <AppStack.Screen name="CadastroCli" component={CadastroCli} />
        <AppStack.Screen name="ultimaslimpezas" component={ultimaslimpezas} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Qrcode" component={Qrcode} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
