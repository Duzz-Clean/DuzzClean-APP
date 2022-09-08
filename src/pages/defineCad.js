/** 
 @__author__ DiegoEmanuel/diegoabox@gmail.com/
*/

import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';
import styles from '../styles/index';

export default function defineCad({ navigation }) {




  return (
    
      <View style={styles.background}>
        
        <Image source={require('../components/assets/icon-motorista.png')}
          style={styles.imgdlogin} />
        <TouchableOpacity >

          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>
              navigation.navigate('CadastroMoto')}>
            <Text style={styles.buttonText}>ir para o cadastro motorista</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        
        <Image source={require('../components/assets/icon-passageiro.png')}
          style={styles.imgdlogin} />
        <TouchableOpacity >


          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() =>navigation.navigate('CadastroCli')}>            
            <Text style={styles.buttonText}>ir para o cadastro passageiro</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    
  );
}
