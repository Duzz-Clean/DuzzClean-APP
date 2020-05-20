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
export default function CadastroCli({ navigation }) {

  const data = [
    { 'name': 'lindomar' },
    { 'fone': '1234-1234' },
    { 'Email': 'lindomar@gmail.com' },
    { 'City': 'Uberlandia' },
    { 'Password': '123456' },
  ];
  const [myName, setMyName] = useState('lindomar');
  const [myFone, setMyFone] = useState('1234-1234');
  const [myEmail, setMyEmail] = useState('lindomar@gmail.com');
  const [myCity, setMyCity] = useState('Uberlandia');
  const [myPassword, setMyPassword] = useState('123456');
  

  return (
    
    <KeyboardAvoidingView style={styles.backgroundcad}>

    <View>
      <Image source={require('../components/assets/cadastro.png')}
        style={styles.imgcad} />
<TouchableOpacity >
      
        <Text style={styles.textcad}>Cadastro Cliente</Text>
        



        <TextInput
          style={styles.inputlogin}
          placeholder="Digite seu Nome"
          value={myName}
          autoCorrect={false}          
          onChangeText={Name => {
            setMyName(Name);
          }}
          >    

        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="Digite seu Telefone"
          autoCorrect={false}
          value={myFone}
          onChangeText={Fone => {
            setMyFone(Fone);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="email"
          autoCorrect={false}
          value={myEmail}
          onChangeText={Email => {
            setMyEmail(Email);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Sua cidade"
          autoCorrect={false}
          value={myCity}
          onChangeText={City => {
            setMyCity(City);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          autoCorrect={false}
          value={myPassword}
          onChangeText={Password => {
            setMyPassword(Password);
          }}                     
          >   
        </TextInput>
        <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
      </TouchableOpacity>
    
      </View>
      </KeyboardAvoidingView>    
  );
}