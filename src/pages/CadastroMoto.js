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
  Image,FlatList
} from 'react-native';
import styles from '../styles/index';
export default function Home({ navigation }) {

  const data = [
    { 'myName': 'lindomar' },
    { 'myPassword': '12341234' },
    { 'myUserType': '2' },
  ];
  const [myName, setMyName] = useState('lindomar');
  const [myPassword, setMyPassword] = useState('12341234');
  const [MyUserType, setMyUserType] = useState('2');
  return (

    <KeyboardAvoidingView style={styles.backgroundcad}>

      <View>
        <Image source={require('../components/assets/cadastro.png')}
          style={styles.imgcad} />
        <TouchableOpacity >

          <Text style={styles.textcad}>Cadastro de usuarios</Text>
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite seu Nome"
            autoCorrect={false}
            value={myName}
            onChangeText={name => {
              setMyName(name);
            }}>
          </TextInput>
          <TextInput
            style={styles.inputlogin}
            placeholder="Digite sua Senha"
            autoCorrect={false}
            value={myPassword}
            onChangeText={password => {
              setMyPassword(password);
            }}></TextInput>          
          <TextInput 
            style={styles.inputlogin}
          
          placeholder="1 motorista / 2 cliente"
          autoCorrect={false}
          value={MyUserType}
          onChangeText={usertype => {
            setMyUserType(usertype);
          }}>            
          </TextInput>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </TouchableOpacity>       
      </View>
    </KeyboardAvoidingView >

  );
}
