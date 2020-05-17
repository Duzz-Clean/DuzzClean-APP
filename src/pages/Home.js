/** 
 @__author__ = DiegoEmanuel/diegoabox@gmail.com/https://github.com/DiegoEmanuel
*/

import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image,TouchableOpacity } from 'react-native';
import styles from '../styles/index';

export default function Home({ navigation }) {
  return (
    <View>
      <Image source={require('../components/assets/teamplate.png')}
        style={styles.imgteamplate} />

<TouchableOpacity
        style={styles.buttonhome}
        onPress={() =>
          navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Concordo, prosseguir</Text>
      </TouchableOpacity>
    </View>

  );
}


