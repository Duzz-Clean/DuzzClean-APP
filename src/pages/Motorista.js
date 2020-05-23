/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, {  useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,Alert
} from 'react-native';
import styles from '../styles/index';
import axios from 'axios';
export default function login({ navigation }) {


  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  
  async function novaLimpeza(){
    console.log(myEmail , myPassword)
      try{       
        console.log('TO AQUI') 
        const response = await axios.post('http://192.168.0.103/nova_limpeza', {
          Username: myEmail,
          Password: myPassword          
        })
         console.log('Fiz a request, carai')        
        const status = response.data.status
        if (status < 400){
          navigation.navigate('Motorista')
        }else{
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
            onPress={() =>novaLimpeza()}>
            <Text style={styles.buttonText}>Nova limpeza</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('Motorista')}>
            <Text style={styles.buttonText}>Ver meu</Text>
          </TouchableOpacity>
      </View>  

  );
}
