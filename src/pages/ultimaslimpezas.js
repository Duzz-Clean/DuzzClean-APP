  
/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Animated,
  Keyboard,FlatList
} from 'react-native';
import styles from '../styles/index';
export default function Home({ navigation }) {
  
  const data = [
    { 'name': 'Limpeza parcial dia 21/05' },
    { 'name': 'Limpeza completa 19/04' },
  ];


  const [name, setName] = useState(data);


  return (
    <View style={styles.container}>
      <Text>HelloWorld</Text>
        <FlatList
          data={name}
          renderItem={({ item }) => {
            console.log(item.name)
            return <Text>{item.name}</Text>
          }}
          />
      </View>
    
  );
}
