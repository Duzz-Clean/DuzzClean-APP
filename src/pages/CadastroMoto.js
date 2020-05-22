/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, {  useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,Alert
} from 'react-native';
import styles from '../styles/index';
import axios from 'axios';
export default function Cadastro({ navigation }) {


  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  const [myfName, setMyfName] = useState('');
  const [mysName, setMysName] = useState('');
  const [myuserType, setMyuserType] = useState('');


  async function cadastrar() {
    console.log(myEmail, myPassword,myPassword,myfName,mysName,myuserType)
    try {
      console.log('TO AQUI Ó BUCETA')
      const response = await axios.post('http://192.168.0.103/novo_usuario ', {
        Username: myEmail,
        Password: myPassword,
        FirstName: myfName,
        SecondName: mysName,
        UserType: myuserType,
      })
      
      //http://192.168.0.107/novo_usuario
      console.log('Fiz a request, carai')
      console.log(response.data)
      const status = response.data.status
      if (status < 400) {
        Alert.alert("alert", "Logado")
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
    <KeyboardAvoidingView style={styles.backgroundcad}>
      <View>
        <Image source={require('../components/assets/cadastro.png')}
          style={styles.imgcad} />
        <TouchableOpacity >

          <Text style={styles.textcad}>Cadastro de usuarios</Text>
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite seu email"
            autoCorrect={false}
            value={myEmail}
            onChangeText={Email => {
              setMyEmail(Email);
            }}>


          </TextInput>
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite sua senha"
            autoCorrect={false}
            value={myPassword}
            onChangeText={password => {
              setMyPassword(password);
            }}></TextInput>

          <TextInput
            style={styles.inputlogin}
            placeholder="Digite primeiro nome"
            autoCorrect={false}
            value={myfName}
            onChangeText={fName => {
              setMyfName(fName);
            }}></TextInput>

          <TextInput
            style={styles.inputlogin}
            placeholder="Digite segundo nome"
            autoCorrect={false}
            value={mysName}
            onChangeText={sName => {
              setMysName(sName);
            }}></TextInput>

          <TextInput
            style={styles.inputlogin}
            placeholder="1 motorista / 2 cliente / 3 ADM"
            autoCorrect={false}
            value={myuserType}
            onChangeText={usertype => {
              setMyuserType(usertype);
            }}>
          </TextInput>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => cadastrar()}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView >
  );
}
