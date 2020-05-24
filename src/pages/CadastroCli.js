/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';
import styles from '../styles/index';
import axios from 'axios';
export default function Cadastro({ navigation }) {


  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  const [myfName, setMyfName] = useState('');
  const [mysName, setMysName] = useState('');
  const [myuserType, setMyuserType] = useState('1');

  
  

  async function cadastrar() {
    console.log(myEmail, myPassword, myPassword, myfName, mysName, myuserType)
    try {
      console.log('TO AQUI Ó BUCETA')
      const response = await axios.post('http://192.168.0.103/novo_usuario ', {      
        Username: myEmail,
        Password: myPassword,
        FirstName: myfName,
        SecondName: mysName,
        UserType: myuserType,
      })
      console.log('Fiz a request, carai')
      console.log(response.data)
      const status = response.data.status
      if (status < 400) {
        Alert.alert("Parabéns cadastro aceito", String([response.data.Username]))
        navigation.navigate(Login)
      } else {
        Alert.alert("alert", response.data.message.error)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    
      <View style={styles.background}>
        <Image source={require('../components/assets/cadastro.png')}
          style={styles.imgcad} />
          <Text style={styles.textcad}>Cadastro de usuarios</Text>
        <TouchableOpacity >

          
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite seu email (Ex- usuario@gmail.com)"
            autoCorrect={false}
            value={myEmail}
            onChangeText={Email => {
              setMyEmail(Email);
            }}>
          </TextInput>
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite sua senha (Ex- 123senhaFort£)" 
            secureTextEntry={true}
            autoCorrect={false}
            value={myPassword}
            onChangeText={password => {
              setMyPassword(password);
            }}></TextInput>

          <TextInput
            style={styles.inputlogin}
            placeholder="Digite primeiro nome (Ex- Paulo)"
            autoCorrect={false}
            value={myfName}
            onChangeText={fName => {
              setMyfName(fName);
            }}></TextInput>

          <TextInput
            style={styles.inputlogin}
            placeholder="Digite segundo nome (Ex- Silva)"
            autoCorrect={false}
            value={mysName}
            onChangeText={sName => {
              setMysName(sName);
            }}></TextInput>

          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => cadastrar()}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    
  );
}
