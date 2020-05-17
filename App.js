import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Pagina1 from './src/pages/Motorista';
import Pagina2 from './src/pages/Cliente';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
<AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Login" component={Login}/>
      
        <AppStack.Screen name="Motorista" component={Pagina1} />
        <AppStack.Screen name="Cliente" component={Pagina2} />
        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
