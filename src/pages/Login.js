/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';
import styles from '../styles/index';
import axios from 'axios';
export default function login({ navigation }) {


  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');

  async function logar() {
    console.log(myEmail, myPassword)
    try {
      console.log('TO AQUI Ó BUCETA')
      const response = await axios.post('http://192.168.0.104/autenticar_usuario', {
        Username: myEmail,
        Password: myPassword
      })
      console.log('Fiz a request, carai')
      console.log(response.data)
      const status = response.data.status
      if (status < 400) {
        if (status == 1) {
          navigation.navigate('Cliente')
        }
        if (status == 2) {
          navigation.navigate('Motorista')
        }
      } else {
        Alert.alert("alert", response.data.message.error)
      }
    }
    catch (response) {
      console.log(response)
    }
  }
  'https://jsonplaceholder.typicode.com/posts'
  return (
    <View style={styles.background}>
      <Image source={require('../components/assets/logo.png')}
        style={styles.imglogin} />
      <TouchableOpacity>
        <Text style={styles.textcad}>Faça seu login</Text>
        <TextInput
          style={styles.inputlogin}
          placeholder="Digite seu email"
          autoCorrect={false}
          value={myEmail}
          onChangeText={email => {
            setMyEmail(email);
          }}>
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="Digite sua Senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={myPassword}
          onChangeText={password => {
            setMyPassword(password);
          }}></TextInput>
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() =>
            navigation.navigate('Cliente')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.textcadastro} onPress={() =>
        navigation.navigate('defineCad')}>Ou cadastre-se</Text>

    </View>


  );
}
