import React, { useEffect, useState, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  AsyncStorage,
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

//import api from './services/api';

import styles from '../styles/index';

export default function CadastroCli({ navigation }) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [UserType, setUserType] = useState('');

  async function handleSubmit(Username, Password, FirstName, SecondName, UserType) {
    const response = await api.post('/novo_usuario', {
      "Username": Username,
      "Password": Password,
      "FirstName": FirstName,
      "SecondName": SecondName,
      "UserType": UserType
    })
    console.log(response)
    Alert.alert('Usuário cadastrado com sucesso!');
    navigation.navigate('Login');

  }

  return (

    <KeyboardAvoidingView style={styles.backgroundcad}>

      <View>
        <Image source={require('../components/assets/cadastro.png')}
          style={styles.imgcad} />
        <TouchableOpacity>

          <Text style={styles.textcad}>Cadastro Cliente</Text>




          <TextInput
            style={styles.inputlogin}
            placeholder="Digite seu Nome"
            autoCorrect={false}
            value={Username}
            onChangeText={setUsername}
          />


          <TextInput
            style={styles.inputlogin}
            placeholder="password"
            autoCorrect={false}
            value={Password}
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.inputlogin}
            placeholder="FirstName"
            autoCorrect={false}
            value={FirstName}
            onChangeText={setFirstName}


          />

          <TextInput
            style={styles.inputlogin}
            placeholder="SecondName"
            autoCorrect={false}
            value={SecondName}
            onChangeText={setSecondName}
          />


          <TextInput
            style={styles.inputlogin}
            placeholder="UserType"
            autoCorrect={false}
            value={UserType}
            onChangeText={setUserType}
          />



          <TouchableOpacity onPress={handleSubmit} style={styles.btnSubmit}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>

        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );

}


