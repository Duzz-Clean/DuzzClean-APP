import React from 'react';
import {View, Text, Button,  Animated } from 'react-native';
import styles from '../styles/index';

export default function Home({navigation}) {
  return (

     <View>
      <Button title="Página 1" onPress={() => navigation.navigate('Pagina1')} />
      <Button title="Página 2" onPress={() => navigation.navigate('Pagina2')} />
    </View>
  );
}
