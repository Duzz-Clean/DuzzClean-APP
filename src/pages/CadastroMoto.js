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
  
  const [myName, setMyName] = useState('');
  const [myFone, setMyFone] = useState('');
  const [myEmail, setMyEmail] = useState('');
  const [myPlaca, setMyPlaca] = useState('');
  const [myCity, setMyCity] = useState('');
  const [myPassword, setMyPassword] = useState('');
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
           value={myName}
          onChangeText={Name => {
            setMyName(Name);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="Informe seu Telefone"
          autoCorrect={false}
           value={myFone}
          onChangeText={Fone => {
            setMyFone(Fone);
          }}                      
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="informe seu email"
          autoCorrect={false}
           value={myEmail}
          onChangeText={Email => {
            setMyEmail(Email);
          }}            
          
          ></TextInput>
        <TextInput
          style={styles.inputlogin}
          placeholder="informe a placa do seu carro"
          autoCorrect={false}
           value={myPlaca}
          onChangeText={Placa => {
            setMyPlaca(Placa);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Escolha sua senha"
          autoCorrect={false}
           value={myPassword}
          onChangeText={Password => {
            setMyPassword(Password);
          }}            
          
          >   
        </TextInput>
        <TextInput
          style={styles.inputlogin}
          secureTextEntry={true}
          placeholder="Sua cidade"
          autoCorrect={false}
           value={myCity}
          onChangeCity={City => {
            setMyCity(City);
          }}                      
          >   
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

 