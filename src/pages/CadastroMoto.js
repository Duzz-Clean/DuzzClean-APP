/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/

*/

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Animated,
  Keyboard,
  Alert
} from 'react-native';
import styles from '../styles/index';
export default function Home({ navigation }) {
  return (
    
    <KeyboardAvoidingView style={styles.backgroundcad}>

    <View>
      <Image source={require('../components/assets/cadastro.png')}
        style={styles.imgcad} />
<TouchableOpacity >
      
        <Text style={styles.textcad}>Cadastro motorista</Text>
        <TextInput
          style={styles.inputlogin}
          placeholder="Digite seu Nome"
          autoCorrect={false}
          onChangeText={() => { }}>
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="Informe seu Telefone"
          autoCorrect={false}
          onChangeText={() => { }}>
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="informe a placa do seu carro"
          autoCorrect={false}
          onChangeText={() => { }}>
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Escolha sua senha"
          autoCorrect={false}
          onChangeText={() => { }}>
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Sua cidade"
          autoCorrect={false}
          onChangeText={() => { }}>
        </TextInput>
        <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('Motorista')}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
          
      </TouchableOpacity>
    
      </View>
      </KeyboardAvoidingView>
    
  );
}

 