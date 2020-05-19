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
  TouchableOpacity,
  Image,
  Animated,
  Button,
  Keyboard,
  Alert

} from 'react-native';
import styles from '../styles/index';

export default function duzzclean({ navigation }) {


  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ x: 280, y: 179 }));


  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 20,
        useNativeDriver: true

      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true

      })

    ]).start();
  }, []);
  function keyboardDidShow() {


    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 125,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(logo.y, {
        toValue: 80,
        duration: 100,
        useNativeDriver: true
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
        <View style={styles.input}>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => Alert.alert("Verificar Limpeza!", "Verificando rating e ultimas 3 limpezas")}>
            <Text style={styles.buttonText}>Verificar Limpeza</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => Alert.alert("Avaliar com QR Code!", "Apresentando o seu feedbeck")}>
            <Text style={styles.buttonText}>Avaliar com QR Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => Alert.alert("Solicitar limpeza!", "Aguardando resposta do motorista")}>
            <Text style={styles.buttonText}>Solicitar limpeza</Text>
          </TouchableOpacity>
        </View>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}
