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
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/index';
export default function login() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 280, y: 179 }));
  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  const navigation = useNavigation();


  function navigateToMotorista() {
    navigation.navigate('Motorista');
  }
  function navigateToCadastroCli() {
    navigation.navigate('CadastroCli');
  }
  function navigateToCadastroMoto() {
    navigation.navigate('CadastroMoto');
  }
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 20,
        useNativeDriver: false

      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false

      })

    ]).start();
  }, []);
  function keyboardDidShow() {


    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 120,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 106,
        duration: 100,
        useNativeDriver: false
      })

    ]).start();
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 227,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 146,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>

        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../components/assets/logo.png')} />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>

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
          secureTextEntry={true}
          placeholder="Digite sua senha"
          autoCorrect={false}
          value={myPassword}
          onChangeText={password => {
            setMyPassword(password);
          }}

        >
        </TextInput>
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={navigateToMotorista}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}
          onPress={navigateToCadastroMoto}>
          <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
