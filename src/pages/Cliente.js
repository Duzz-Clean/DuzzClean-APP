/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useState , useEfect } from 'react';
import {
  Text,
  View,TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';
import styles from '../styles/index';
import axios from 'axios';
export default function login({ navigation }) {


  const [myLicenss, setMyLicenss] = useState('');

// tentando consumir dados de uma api
  // const Repositories = () => {
  //   const [repositories, setRepositories] = useState([]);
    
  //   useEffect(() => {
  //     async function loadRepositories() {
  //       const response = await axios.get('https://api.github.com/orgs/rocketseat/repos');
  
  //       setRepositories(response.data);
  //     }
  //     loadRepositories();
  //   }, []);

  async function novaLimpeza() {
    console.log(myEmail, myPassword)
    try {
      
      const response = await axios.post('http://192.168.0.103/nova_limpeza', {
        Username: myEmail,
        Password: myPassword
      })
      console.log('Fiz a request, carai')
      const status = response.data.status
      if (status < 400) {
        navigation.navigate('Motorista')
      } else {
        Alert.alert("alert", response.data.message.error)
      }
    }
    catch (err) {
      console.log(err)
    }
  };
  return (
    <View style={styles.background}>

        <Image source={require('../components/assets/logo.png')}
          style={styles.imglogin} />

      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => Alert.alert("Verificar Limpeza!", "Verificando rating e ultimas 3 limpezas")}>
        <Text style={styles.buttonText}>Verificar Limpeza</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => Alert.alert("Avaliar com QR Code!", "Apresentando o seu feedbeck")}>
        <Text style={styles.buttonText}>Avaliar com QR Code</Text>
      </TouchableOpacity>
      <TextInput
          style={styles.inputlogin}
          placeholder="Faça um busca com a placa (AOX-123)"
          autoCorrect={false}
          value={myLicenss}
          onChangeText={Licenss => {
            setMyLicenss(Licenss);
          }}>
        </TextInput>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => Alert.alert("Solicitar limpeza!", "Aguardando resposta do motorista")}>
        <Text style={styles.buttonText}>Solicitar limpeza</Text>
      </TouchableOpacity>

    </View>

  );
}

