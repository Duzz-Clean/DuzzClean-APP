import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Pagina1 from './src/pages/Pagina1';
import Pagina2 from './src/pages/Pagina2';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>

      <AppStack.Screen name="Login" component={Login}/>
      <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Motorista" component={Pagina1} />
        <AppStack.Screen name="Pagina2" component={Pagina2} />
        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
